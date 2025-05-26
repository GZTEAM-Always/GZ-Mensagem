

require('../settings/config');
const { ytmp3 } = require('../start/lib/function/ytmp3')
const yts = require('yt-search');

let handler = async (m, { gzteam, text, reply, quoted, reaction, prefix, command }) => {
    if (!text) return reply(`\n*ex:* ${prefix + command} impossible\n`)
    await reaction(m.chat, '⚡')
    let search = await yts(text)
    let telaso = search.all[0].url;
    let mbut = await ytmp3(telaso)
    let ahh = mbut.urlmp4
    
    gzteam.sendMessage(m.chat, {
        audio: { url: ahh },
        mimetype: "audio/mpeg", 
        ptt: true
    }, { quoted: m })
}

handler.help = ['downloader music']
handler.tags = ['downloader']
handler.command = ["play"]

module.exports = handler
