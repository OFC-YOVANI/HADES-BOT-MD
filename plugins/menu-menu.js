import { generateWAMessageFromContent, proto } from '@whiskeysockets/baileys'
import moment from 'moment-timezone'
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let wm = global.wm
let vs = global.vs
const handler = async (m, { conn, usedPrefix, command, args }) => {
const text = args.join(' ') || ''
let fkontak = { 
"key": { 
"participants":"0@s.whatsapp.net", 
"remoteJid": "status@broadcast", 
"fromMe": false, 
"id": "Menu-Hades" 
}, 
"message": { 
"contactMessage": { 
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:🧿 Menú Hades-Bot\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
}
}, 
"participant": "0@s.whatsapp.net" 
};

if (command === 'menu' || command === 'menu') {

const buttonParamsJson = {
title: "📜 ᴍᴇɴᴜ́ ᴄᴏᴍᴘʟᴇᴛᴏ ʜᴀᴅᴇs",
sections: [
{
title: "🤴𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄𝐋 𝐂𝐑𝐄𝐀𝐃𝐎𝐑🤴",
rows: [
{ header: "📌 ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ʏ ᴄʀᴇᴀᴅᴏʀ ⚜️", title: "sɪ ᴅᴇsᴇᴀs ᴄᴏᴍᴜɴɪᴄᴀʀᴛᴇ", description: "ᴄᴏɴ ᴍɪ ᴄʀᴇᴀᴅᴏʀ ᴀϙᴜɪ́ ᴛᴇ ᴅᴇᴊᴀʀᴇ́ sᴜ ɴᴜ́ᴍᴇʀᴏ", id: usedPrefix + "creador" },
{ header: "✨ ᴄᴏʟᴀʙᴏʀᴀᴅᴏʀᴇs ᴅᴇʟ ʙᴏᴛ 🪪", title: "ᴄᴏʟᴀʙᴏʀᴀᴅᴏʀᴇs ᴅᴇʟ ʙᴏᴛ", description: "ϙᴜᴇ ʜᴀɴ ᴀᴘᴏʀᴛᴀᴅᴏ ᴇɴ ᴇʟ ɢʀᴀɴ ᴄʀᴇᴄɪᴍɪᴇɴᴛᴏ ᴅᴇ ʜᴀᴅᴇs ʙᴏᴛ ᴍᴅ", id: usedPrefix + "colaboradoresgvffd" }
]
},
{
title: "📌 ɪɴғᴏʀᴍᴀᴄɪᴏɴ ʙᴀsɪᴄᴀ ᴅᴇʟ ʙᴏᴛ 🤖",
rows: [
{ header: "💬 ϙᴜᴇ ᴇs ᴜɴ ʙᴏᴛ ❔", title: "ᴀᴘʀᴇɴᴅᴇ sᴏʙʀᴇ", description: "ᴇʟ ғᴜɴᴄɪᴏɴᴀᴍɪᴇɴᴛᴏ ᴅᴇʟ ʙᴏᴛ", id: usedPrefix + "queesunbot" },
{ header: "🤖 ɪɴꜱᴛᴀʟᴀᴄɪóɴ: ʜᴀᴅᴇꜱ ʙᴏᴛ ᴍᴅ", title: "ʜᴇʏ! 👋🏻 ᴇɴ ᴇꜱᴛᴀ ꜱᴇᴄᴄɪóɴ ᴘᴜᴇᴅᴇꜱ ɪɴꜱᴛᴀʟᴀʀ",    
description: "ᴇʟ ʙᴏᴛ ᴇɴ ᴛᴇʀᴍᴜx", id: usedPrefix + "instalarbot" },
{ header: "⚖️ ᴛᴇ́ʀᴍɪɴᴏs ʏ ᴄᴏɴᴅɪᴄɪᴏɴᴇs ✍️", title: "ᴄᴏɴᴏᴄᴇ ʟᴀs ʀᴇɢʟᴀs", description: "ʏ ᴘᴏʟɪ́ᴛɪᴄᴀs", id: usedPrefix + "terminoos" },
{ header: "✅ ᴇsᴛᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ 🤖", title: "ᴍᴜᴇsᴛʀᴀ ʟᴀ ᴀᴄᴛɪᴠɪᴅᴀᴅ", description: "ʏ ᴇʟ ᴛɪᴇᴍᴘᴏ ᴅᴇ ғᴜɴᴄɪᴏɴᴀᴍɪᴇɴᴛᴏ ᴅᴇʟ ʙᴏᴛ.", id: usedPrefix + "estado" },
{ header: "🧿 ɢɪᴛ ᴅᴇʟ ʙᴏᴛ 🧿", title: "ʀᴇᴘᴏsɪᴛᴏʀɪᴏ", description: "ʀᴇᴘᴏsɪᴛᴏʀɪᴏ ᴘʀᴏʏᴇᴄᴛᴏ ᴅᴇʟ ʙᴏᴛ ʜᴀᴅᴇs ʙᴏᴛ ᴍᴅ", id: usedPrefix + "script" },
{ header: "🚀 ᴠᴇʟᴏᴄɪᴅᴀᴅ ᴅᴇʟ ʙᴏᴛ 🤖", title: "ᴍɪᴅᴇ ʟᴀ ᴠᴇʟᴏᴄɪᴅᴀᴅ", description: "ʏ ʟᴀ ᴄᴀᴘᴀᴄɪᴅᴀᴅ ᴅᴇʟ ʙᴏᴛ", id: usedPrefix + "speedtest" },
{ header: "📌 ɢʀᴜᴘᴏs ᴅᴇʟ ʙᴏᴛ 🤖", title: "ɢʀᴜᴘᴏs ᴅᴇʟ ʙᴏᴛ", description: "ᴀ ᴅᴏɴᴅᴇ ʟᴏ ᴘᴜᴇᴅᴇs ᴜsᴀʀ", id: usedPrefix + "grupos" } 
]
},
{
title: "📄 ᴘᴀ́ɢɪɴᴀ ᴡᴇʙ ʜᴏsᴛɪɴɢ 📊",
rows: [
{ header: "📌 ʜᴏsᴛɪɴɢ ʙᴏxᴍɪɴᴇ 🌐", title: "sᴇʀᴠɪᴅᴏʀᴇs ᴘᴀʀᴀ ʙᴏᴛ",    
description: "ʏ ᴍɪɴᴇᴄʀᴀғᴛ ʏ ᴘᴀ́ɢɪɴᴀs ʏ ᴍᴜᴄʜᴏ ᴍᴀ́s", id: usedPrefix + "boxmine" }
]
},
{ 
title: "🧿ᴍᴇɴᴜs ᴅᴇ ʟɪsᴛᴀs📝",
rows: [
{ header: "📥 ᴍᴜʟᴛɪᴅᴏᴡɴʟᴏᴀᴅʜᴜʙ 🔥", title: "ᴛᴜ ᴄᴇɴᴛʀᴏ ɪɴᴛᴇɢʀᴀʟ ᴘᴀʀᴀ ᴅᴇsᴄᴀʀɢᴀs", description: "ᴅᴇ ʏᴏᴜᴛᴜʙᴇ, sᴘᴏᴛɪғʏ ʏ ᴛᴏᴅᴀs ʟᴀs ʀᴇᴅᴇs sᴏᴄɪᴀʟᴇs. ᴀᴄᴄᴇsᴏ sɪᴍᴘʟᴇ ʏ ʀᴀ́ᴘɪᴅᴏ ᴀ ᴛᴜ ᴄᴏɴᴛᴇɴɪᴅᴏ ғᴀᴠᴏʀɪᴛᴏ.", id: usedPrefix + "descargas" },
{ header: "🛡️ ɢᴜᴀʀᴅɪᴀɴ ɢʀᴏᴜᴘ ⚙️", title: "ᴘʀᴏᴛᴇɢᴇ ʏ ᴀᴅᴍɪɴɪsᴛʀᴀ ᴛᴜ ɢʀᴜᴘᴏ.", description: "ᴀᴄᴛɪᴠᴀ ᴏ ᴅᴇsᴀᴄᴛɪᴠᴀ ᴏᴘᴄɪᴏɴᴇs ᴄʟᴀᴠᴇ ғᴀ́ᴄɪʟᴍᴇɴᴛᴇ", id: usedPrefix + "enable" },
{ header: "🎙️ sᴏᴜɴᴅᴘʟᴀʏ 🎭", title: "ᴀᴍᴘʟɪᴀ ᴠᴀʀɪᴇᴅᴀᴅ ᴅᴇ ᴀᴜᴅɪᴏs.", description: "ᴇxᴘʟᴏʀᴀ ʀɪsᴀs, sᴀʟᴜᴅᴏs, ɴᴏᴛᴀs ᴅᴇ ᴠᴏᴢ ʏ ᴍᴜᴄʜᴏs ᴍᴀ́s. ᴘᴇʀsᴏɴᴀʟɪᴢᴀ ᴛᴜ ᴇxᴘᴇʀɪᴇɴᴄɪᴀ.", id: usedPrefix + "menudios" },
{ header: "☘️ ᴇsᴛᴜᴅɪᴏ ᴄʀᴇᴀᴛɪᴠᴏ 🪄", title: "ᴅᴀ ᴠɪᴅᴀ ᴀ ᴛᴜs ɪᴅᴇᴀs ᴄᴏɴ sᴛɪᴄᴋᴇʀs,", description: "ᴇғᴇᴄᴛᴏs ᴇ ɪᴍᴀ́ɢᴇɴᴇs ᴘᴇʀsᴏɴᴀʟɪᴢᴀᴅᴀs. ᴇxᴘʟᴏʀᴀ ᴜɴ ᴍᴜɴᴅᴏ ᴅᴇ ᴏᴘᴄɪᴏɴᴇs ᴘᴀʀᴀ ᴘᴏᴛᴇɴᴄɪᴀʀ ᴛᴜ ᴄʀᴇᴀᴛɪᴠɪᴅᴀᴅ.", id: usedPrefix + "stickersmenu" },
{ header: "⛩️ sᴇᴄʀᴇᴛᴏ sʜᴏɴᴇɴ 🐾", title: "ᴀɴɪᴍᴇ ʏ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴇxᴄʟᴜsɪᴠᴏ", description: "ᴘᴀʀᴀ ᴘᴜ́ʙʟɪᴄᴏ ᴀᴅᴜʟᴛᴏ, ᴄᴏɴ ɪᴍᴀ́ɢᴇɴᴇs ᴅᴇ ɪᴍᴘᴀᴄᴛᴏ ʏ ᴍᴇᴍᴇs.", id: usedPrefix + "animesxd" },
{ header: "⚙️ ɢᴇsᴛᴏʀ ᴅᴇ ɢʀᴜᴘᴏ 👥", title: "ᴏᴘᴛɪᴍɪᴢᴀ ʏ ᴀᴅᴍɪɴɪsᴛʀᴀ ᴛᴜ ɢʀᴜᴘᴏ", description: "ᴄᴏɴ ᴛᴏᴅᴀs ʟᴀs ʜᴇʀʀᴀᴍɪᴇɴᴛᴀs ᴅᴇ ɢᴇsᴛɪᴏ́ɴ ϙᴜᴇ ɴᴇᴄᴇsɪᴛᴀs.", id: usedPrefix + "menutools" },
{ header: "🗝️ ᴄᴏᴍᴀɴᴅᴏs ᴇxᴄʟᴜsɪᴠᴏs 🔐", title: "ᴘᴀʀᴀ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ᴏ ɪɴsᴛᴀʟᴀᴅᴏʀ ᴅᴇʟ ʙᴏᴛ.", description: "ᴀᴄᴄᴇsᴏ ʀᴇsᴛʀɪɴɢɪᴅᴏ.", id: usedPrefix + "menuowner" },
{ header: "💎 ᴄᴇɴᴛʀᴀʟ ᴅᴇ ɢʀᴜᴘᴏ 🕵️", title: "ᴀᴅᴍɪɴɪsᴛʀᴀᴄɪᴏ́ɴ ᴇxᴄʟᴜsɪᴠᴀ", description: "ɢᴇsᴛɪᴏɴᴀ ᴍɪᴇᴍʙʀᴏs, ᴍᴏᴅᴇʀᴀ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴇʟ ᴀᴄᴄᴇsᴏ ᴀʟ ɢʀᴜᴘᴏ.", id: usedPrefix + "administradoresgrupo" }
]
},
{
title: "💰 ᴇᴄᴏɴᴏᴍɪᴀ & ᴊᴜᴇɢᴏs 🎮",
rows: [
{ header: "🎮 ᴊᴜᴇɢᴏs & ʀᴘɢ 🧿", title: "ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ᴊᴜᴇɢᴏs", description: "ʟᴏᴠᴇ, ᴄᴀsɪɴᴏ, sʟᴏᴛ, ɴɪᴠᴇʟᴇs ʏ ᴍᴀ́s", id: usedPrefix + "rpg" },
{ header: "💰 ᴇᴄᴏɴᴏᴍɪᴀ & ᴛʀᴀɴsғᴇʀ 💎", title: "ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ᴇᴄᴏɴᴏᴍɪᴀ", description: "ᴍɪɴᴀʀ, ᴅɪᴀᴍᴀɴᴛᴇs, ᴛʀᴀɴsғᴇʀ ʏ ᴍᴀ́s", id: usedPrefix + "economia" }
]
},
{
title: "🪀 sᴜʙ ʙᴏᴛs ᴀᴄᴛɪᴠᴏs 🤖",
rows: [
{ header: "⌛ sᴇʀʙᴏᴛ ϙʀ 🤖", title: "ᴄʟɪᴄᴋ ᴘᴀʀᴀ ᴘᴇᴅɪʀ ϙʀ", description: "ʏ ᴄᴏɴᴠᴇʀᴛɪʀᴛᴇ ᴇɴ ʙᴏᴛ ᴛᴇᴍᴘᴏʀᴀʟ", id: usedPrefix + "serbot" },
{ header: "📍 sᴇʀʙᴏᴛ ᴄᴏᴅᴇ 🤖", title: "ᴄʟɪᴄᴋ ᴘᴀʀᴀ ᴘᴇᴅɪʀ ᴄᴏ́ᴅɪɢᴏ", description: "ᴅᴇ ᴏᴄʜᴏ ᴅɪ́ɢɪᴛᴏs ʏ ᴄᴏɴᴠᴇʀᴛɪʀᴛᴇ ᴇɴ ʙᴏᴛ ᴛᴇᴍᴘᴏʀᴀʟ", id: usedPrefix + "serbot code" }
]
}
]
}
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length  
let name = await conn.getName(m.sender)
const interactiveMsg = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
interactiveMessage: {
header: { 
title: "", 
subtitle: "✨ Interactúa con los botones ✨", 
hasMediaAttachment: false 
},
body: { 
text: `◢◤━━━━━━━━━━━━━━━━◥◣
⚡︎ ʜᴀᴅᴇs - ʙᴏᴛ - ᴍᴅ ⚡︎
๖ۣۜۜ͜͡𝙷𝙾𝙻𝙰✨ ${name}

◈ ꜱᴛᴀᴛᴜꜱ ◈
〉⌚ ᴜᴘᴛɪᴍᴇ: ${uptime}
〉👥 ᴜsᴜᴀʀɪᴏs: ${rtotalreg}
◈ ɪɴᴛᴇʀғᴀᴢ ◈
〉📚 sᴇʟᴇᴄᴄɪᴏɴᴀ ᴛᴜ ᴏᴘᴄɪóɴ
〉🎉 ɢʀᴀᴄɪᴀs ᴘᴏʀ ᴛᴜ ᴘʀᴇғᴇʀᴇɴᴄɪᴀ
◥◣━━━━━━━━━━━━━━━━◢◤ׂ`
},
footer: { 
text: "" 
},
nativeFlowMessage: {
buttons: [
{ name: "single_select", buttonParamsJson: JSON.stringify(buttonParamsJson) }
]
}
}
}), { quoted: fkontak })
await conn.relayMessage(m.chat, interactiveMsg.message, { messageId: interactiveMsg.key.id })
}
}

handler.command = /^(menu)$/i
handler.help = ['menu', 'menu2']
handler.tags = ['menu', 'bot']
handler.exp = 0
handler.register = false

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}