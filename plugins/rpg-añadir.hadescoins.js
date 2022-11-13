import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `*[❗𝐈𝐍𝐅𝐎❗] *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙰 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙲𝙾𝙽 𝙴𝙻 @𝚝𝚊𝚐*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙳𝙴 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙽̃𝙰𝙳𝙸𝚁*`
if (isNaN(txt)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙸𝙼𝙱𝙾𝙻𝙾 𝙽𝙾 𝙰𝙳𝙼𝙸𝚃𝙸𝙳𝙾, 𝚂𝙾𝙻𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂!*`
let hadescoins = parseInt(txt)
let money = hadescoins
let pjk = Math.ceil(hadescoins * pajak)
money += pjk
if (money < 1) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙼𝙸𝙽𝙸𝙼𝙾 𝙳𝙴 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 𝙿𝙰𝚁𝙰 𝙰𝙽̃𝙰𝙳𝙸𝚁 𝙴𝚂 𝟷*`
let users = global.db.data.users
users[who].money += hadescoins

conn.sendHydrated(m.chat, `╭─────°.♡.°‧─────\n│⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍ \n│🌀ʜᴀᴅᴇs-ᴄᴏɪɴs]⬣\n│*PARA | FOR:*\n│${text}*\n│*SE LE AÑADIÓ\n│🌀${hadescoins} ʜᴀᴅᴇs-ᴄᴏɪɴs*\n╰─────°.♡.°‧─────`, wm, null, md, '𝙶𝚒𝚝𝚑𝚞𝚋', null, null, [
['𝐌𝐄𝐍𝐔', '.menu'],
['𝐄𝐒𝐓𝐀𝐃𝐎️', '/estado']], m)
}
handler.help = ['addgb <@user>']
handler.tags = ['hadescoins']
handler.command = ['añadirhadescoins', 'añadirhades', 'añadircoins', 'darhadescoins', 'darhades', 'darcoins'] 
handler.group = true
handler.botAdmin = true
handler.rowner = true
export default handler
