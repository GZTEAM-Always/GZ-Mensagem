
/*
CREATED BY ELANGGANZZ REAL
*/

const fs = require('fs')

global.owner = "62895385610519"
global.access = "62"
global.linkch = "https://whatsapp.com/channel/0029VaiAjbS0AgWF7IS9tE0c"

global.status = true
global.welcome = true

global.mess = {
    owner: "no, this is for owners only",
    group: "this is for groups only",
    private: "this is specifically for private chat"
}

global.packname = '¿? 𝘖𝘞𝘈𝘙𝘐 𝘟 𝘝𝘐𝘓𝘓𝘙𝘈𝘎𝘌𝘕'
global.author = 'Bot-GZAlways'
global.pairing = "VILLMODS"

global.KEY = "GET APIKEY elevenlabs.io"
global.IDVOICE = "GET ON elevenlabs.io"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
