import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `*[βππππβ] *π΄ππΈπππ΄ππ° π° ππ½ ππππ°ππΈπΎ π²πΎπ½ π΄π» @πππ*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `*[βππππβ] πΈπ½πΆππ΄ππ° π»π° π²π°π½ππΈπ³π°π³ π³π΄ π³πΈπ°πΌπ°π½ππ΄π πππ΄ π³π΄ππ΄π° π°π½Μπ°π³πΈπ*`
if (isNaN(txt)) throw `*[βππππβ] ππΈπΌπ±πΎπ»πΎ π½πΎ π°π³πΌπΈππΈπ³πΎ, ππΎπ»πΎ π½ππΌπ΄ππΎπ!*`
let hadescoins = parseInt(txt)
let money = hadescoins
let pjk = Math.ceil(hadescoins * pajak)
money += pjk
if (money < 1) throw `*[βππππβ] π΄π» π½ππΌπ΄ππΎ πΌπΈπ½πΈπΌπΎ π³π΄ π³πΈπ°πΌπ°π½ππ΄π πΏπ°ππ° π°π½Μπ°π³πΈπ π΄π π·*`
let users = global.db.data.users
users[who].money += hadescoins

conn.sendHydrated(m.chat, `β­βββββΒ°.β‘.Β°β§βββββ\nββ«·α­Κα΄α΄α΄s-Κα΄α΄-α΄α΄οΉβ \nβπΚα΄α΄α΄s-α΄α΄ΙͺΙ΄s]β¬£\nβ*PARA | FOR:*\nβ${text}*\nβ*SE LE AΓADIΓ\nβπ${hadescoins} Κα΄α΄α΄s-α΄α΄ΙͺΙ΄s*\nβ°βββββΒ°.β‘.Β°β§βββββ`, wm, null, md, 'πΆπππππ', null, null, [
['ππππ', '.menu'],
['πππππποΈ', '/estado']], m)
}
handler.help = ['addgb <@user>']
handler.tags = ['hadescoins']
handler.command = ['aΓ±adirhadescoins', 'aΓ±adirhades', 'aΓ±adircoins', 'darhadescoins', 'darhades', 'darcoins'] 
handler.group = true
handler.botAdmin = true
handler.rowner = true
export default handler
