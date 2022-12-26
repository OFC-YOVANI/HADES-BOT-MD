import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
wm = global.wm
vs = global.vs
let { exp, limit, level, money, role } = global.db.data.users[m.sender]
let { min, xp, hades, max } = xpRange(level, global.multiplier)
const sections = [  
{
title: `𝙻𝙸𝚂𝚃𝙰 𝙳𝙴𝙻 𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂`,
rows: [
  {title: "│🧬️│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂1", description: "ᴀᴛᴀǫᴜᴇ ᴍᴀsɪᴠᴏ ᴅᴇ 5 ʙɪɴᴀʀɪᴏs", rowId: `${usedPrefix}virtex1`},
  {title: "│👹️│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂2", description: "ᴀᴛᴀǫᴜᴇ ᴍᴀsɪᴠᴏ ᴅᴇ 10 ʙɪɴᴀʀɪᴏs", rowId: `${usedPrefix}virtex2`},
  {title: "│🤡️│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂3", description: "ᴀᴛᴀǫᴜᴇ ᴍᴀsɪᴠᴏ ᴅᴇ 15 ʙɪɴᴀʀɪᴏs", rowId: `${usedPrefix}virtex3`},
  {title: "│😈️│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂4", description: "ᴀᴛᴀǫᴜᴇ ᴍᴀsɪᴠᴏ ᴅᴇ 20 ʙɪɴᴀʀɪᴏs", rowId: `${usedPrefix}virtex4`},
  {title: "│💉│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂5", description: "ᴀᴛᴀǫᴜᴇ ᴍᴀsɪᴠᴏ ᴅᴇ 25 ʙɪɴᴀʀɪᴏs", rowId: `${usedPrefix}virtex5`}, 
  {title: "│🧬│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂6", description: "ᴀᴛᴀǫᴜᴇ ᴍᴀsɪᴠᴏ ᴅᴇ 30 ʙɪɴᴀʀɪᴏs", rowId: `${usedPrefix}virtex6`},
  {title: "│👹│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂7", description: "ᴀᴛᴀǫᴜᴇ ᴍᴀsɪᴠᴏ ᴅᴇ 35 ʙɪɴᴀʀɪᴏs", rowId: `${usedPrefix}virtex7`},
  {title: "│🤡️│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂8", description: "ᴀᴛᴀǫᴜᴇ ᴍᴀsɪᴠᴏ ᴅᴇ 40 ʙɪɴᴀʀɪᴏs", rowId: `${usedPrefix}virtex8`},
  {title: "│😈│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂9", description: "ᴀᴛᴀǫᴜᴇ ᴍᴀsɪᴠᴏ ᴅᴇ 45 ʙɪɴᴀʀɪᴏs", rowId: `${usedPrefix}virtex9`},
  {title: "│💉│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂10", description: "ᴀᴛᴀǫᴜᴇ ᴍᴀsɪᴠᴏ ᴅᴇ 50 ʙɪɴᴀʀɪᴏs", rowId: `${usedPrefix}virtex10`}, 
]}, ] 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length  
let name = '@' + m.sender.split("@s.whatsapp.net")[0]
const listMessage = {
text: `╭─────°.♡.°‧─────
│⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍
│${ucapan()} 
│๖ۣۜۜ͜͡𝙷𝙾𝙻𝙰✨${name}💖 
│☘️ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀʟ ᴍᴇɴᴜ
│📌ʀᴀɴɢᴏ➟${role}
│👹𝙻𝙸𝚂𝚃𝙰 𝙳𝙴𝙻 𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂
│⌚ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ➟${uptime}
╰─────°.♡.°‧─────ׂ`, mentions: [m.sender],
footer: `${wm}`,
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢", 
sections }

await conn.sendMessage(m.chat, listMessage, { quoted: fkontak })
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(binarios|virus|Binarios|trabas\?)$/i
handler.exp = 20
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')
  let res = "🌉ʙᴜᴇɴᴀs ᴍᴀᴅʀᴜɢᴀᴅᴀs|ɢᴏᴏᴅ ᴇᴀʀʟʏ ᴍᴏʀɴɪɴɢ🌠"
  if (time >= 4) {
    res = "🌇ʙᴜᴇɴᴏs ᴅíᴀs|ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ⛅"
  }
  if (time >= 11) {
    res = "🏙️ʙᴜᴇɴᴀs ᴛᴀʀᴅᴇs|ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ🌤️"
  }
  if (time >= 15) {
    res = "🌆ʙᴜᴇɴᴀs ᴛᴀʀᴅᴇs|ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ🌥️"
  }
  if (time >= 17) {
    res = "🌃ʙᴜᴇɴᴀs ɴᴏᴄʜᴇs|ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ💫"
  }
  return res
}
