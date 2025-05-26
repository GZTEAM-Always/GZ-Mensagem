require('../settings/config');

let handler = async (m, { gzteam, text, reaction, reply, prefix, command, fetchJson }) => {
    if (!text) return reply(`\n*ex:* ${prefix + command} haii\n`)
    let a = await fetchJson(`https://www.laurine.site/api/cai/bocchi?query=${text}`)
    let b = a.data
    gzteam.sendMessage(m.chat, { 
        text: b,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "¿? laurine",
                newsletterJid: `120363369349376182@newsletter`
            },
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: true,
                title: `© Bocchi Hitori - Artificial intelligence`,
                body: `c-ai bocchi histori`,
                mediaType: 1,
                thumbnailUrl: `https://img12.pixhost.to/images/816/574630313_fc9f2773.jpg`,
                thumbnail: ``,
                sourceUrl: `https://www.laurine.site`
            }
        }
    }, { quoted: m });
}

handler.help = ['bocchi ai'];
handler.tags = ['Artificial intelligence'];
handler.command = ["bocci", "bocchi"];

module.exports = handler;
