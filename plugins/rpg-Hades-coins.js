let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['⚔️ǫᴜᴇ ᴘʀᴏ ʜᴀs ᴍɪɴᴀᴅᴏ','✨ ɢᴇɴɪᴀʟ!! ᴏʙᴛɪᴇɴᴇs','ᴡᴏᴡ!! ᴇʀᴇs ᴜɴ(ᴀ) ɢʀᴀɴ ᴍɪɴᴇʀᴏ(ᴀ) 🍁 ᴏʙᴛɪᴇɴᴇs','ғᴇʟɪᴄɪᴅᴀᴅᴇs!! ᴀʜᴏʀᴀ ᴛɪᴇɴᴇs','⛏️ᴏʙᴛɪᴇɴᴇs'])}`
let pp = 'src/minar.mp4'

let hades= Math.floor(Math.random() * 1000)
global.db.data.users[m.sender].money += hades * 1  
let time = global.db.data.users[m.sender].lastcoins + 600000
if (new Date - global.db.data.users[m.sender].lastcoins < 600000) throw `✴️ʏᴀ ʜᴀs ᴍɪʀᴀᴅᴏ ⚔️ʜᴀᴅᴇs-ᴄᴏɪɴs ᴇsᴘᴇʀᴀ ᴘᴀʀᴀ ᴠᴏʟᴠᴇʀ ᴀ ᴍɪɴᴀʀ${msToTime(time - new Date())} ᴘᴀʀᴀ ᴠᴏʟᴠᴇʀ ᴀ ᴍɪɴᴀʀ⚔️`  

conn.sendHydrated(m.chat, `*${minar} ${hades} ʜᴀᴅᴇs-ᴄᴏɪɴs`, wm, pp, 'https://github.com/OFC-YOVANI/HADES-BOT-MD.git', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['🧿ᴇxᴘᴇʀɪᴇɴᴄɪᴀ🧿', `.minar2`]
], m,)
global.db.data.users[m.sender].lastcoins = new Date * 1  

}
handler.help = ['minar3']
handler.tags = ['hadea']
handler.command = ['minar3', 'miming3', 'mine3', 'minarhadescoins', 'minarcoins', 'minarhades'] 
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
