let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['🧿ʜᴀs ᴄᴏɴsᴇɢᴜɪᴅᴏ ᴇxᴘᴇʀɪᴇɴᴄɪᴀ ᴇɴ ᴍɪɴᴀʀ','🧿ᴇxᴘᴇʀɪᴇɴᴄɪᴀ ᴀᴅǫᴜɪʀɪᴅᴀ ᴘᴏʀ ᴛᴜ ᴛʀᴀʙᴀᴊᴏ','ʜᴀs ᴏʙᴛᴇɴɪᴅᴏ ᴜɴᴀ ɢʀᴀɴ ɪɴᴄʀᴇᴍᴇɴᴛᴏ ᴅᴇᴇxᴘᴇʀɪᴇɴᴄɪᴀ🧿'])}`
let pp = 'src/minar.mp4'

let xp = Math.floor(Math.random() * 2000)
global.db.data.users[m.sender].exp = xp * 1  
let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `🧿ʏᴀ ʜᴀs ᴍɪɴᴀᴅᴀ ᴇxᴘᴇʀɪᴇɴᴄɪᴀ ᴛɪᴇɴᴇs ǫᴜᴇ ᴇsᴘᴇʀᴀʀ${msToTime(time - new Date())}ᴘᴀʀᴀ ᴠᴏʟᴠᴇʀ ᴏʙᴛᴇɴᴇʀ ᴇxᴘᴇʀɪᴇɴᴄɪᴀ🧿`  

conn.sendHydrated(m.chat, `*${minar} ${xp} 𝐗𝐏`, wm, pp, 'https://github.com/OFC-YOVANI/HADES-BOT-MD.git', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['💎ᴅɪᴀᴍᴀɴᴛᴇs️', `.minar`]
], m,)
global.db.data.users[m.sender].lastmiming = new Date * 1  
  
}
handler.help = ['minar']
handler.tags = ['xp']
handler.command = ['minar2', 'mimin2', 'mine', 'minarxp', 'minarexp', 'minarexperiencia'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

