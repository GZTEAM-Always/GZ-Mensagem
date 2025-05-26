

let handler = async (m, { gzteam, text, reply }) => {
    const quoted = m.quoted ? m.quoted : null;

    if (!quoted && text) {
        gzteam.sendStatusMention(
            { text: text },
            [m.chat]
        );
        return;
    }

    if (quoted && quoted.mtype === "conversation") {
        gzteam.sendStatusMention(
            { text: quoted.text || '' },
            [m.chat]
        );
        return;
    }

    if (quoted.mtype === "audioMessage") {
        let audioData = await quoted.download();
        gzteam.sendStatusMention(
            { audio: audioData, mimetype: 'audio/mp4', ptt: true },
            [m.chat]
        );
    }

    if (quoted.mtype === "imageMessage") {
        let imageData = await quoted.download();
        gzteam.sendStatusMention(
            { image: imageData, caption: text || '' },
            [m.chat]
        );
    }

    if (quoted.mtype === "videoMessage") {
        let videoData = await quoted.download();
        gzteam.sendStatusMention(
            { video: videoData, caption: text || '' },
            [m.chat]
        );
    }
};

handler.help = ['upsw'];
handler.tags = ['owner'];
handler.command = ['upsw'];
handler.owner = true;

module.exports = handler;
