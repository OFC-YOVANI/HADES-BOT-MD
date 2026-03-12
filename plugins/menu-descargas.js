import fetch from 'node-fetch'
import { performance } from 'perf_hooks'
const handler = async (m, { conn, usedPrefix }) => {
const uptimeMs = process.uptime() * 1000
const uptime = clockString(uptimeMs)
const totalreg = Object.values(global.db.data.users).filter(v => v.registered).length
const totalusers = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const { restrict, antiCall, antiprivado, modejadibot } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}
let name = await conn.getName(m.sender)
const ping = (performance.now() - performance.now()).toFixed(7)
const text = `◈ 〔⚡︎ ʜᴀᴅᴇs - ʙᴏᴛ - ᴍᴅ ⚡︎〕 ◈
「 👤 」Hola ${name} cómo estás?
「 ⚡ 」 ᴘʀᴇғɪxᴏ: #
╭───  📥  ᴅᴇsᴄᴀʀɢᴀs  ───╮
┝ #play ❯ nombre para audio
┝ #play2 ❯ nombre para video 
┝ #Spotify ❯ nombre
┝ #apk ❯ nombre
┝ #playstore ❯ nombre
┝ #pelisplus ❯ nombre
╰──────────────────╯
╭───  🔍  ʙᴜ́sǫᴜᴇᴅᴀs  ───╮
┝ #Google ❯ texto
┝ #ytsearch ❯ texto
┝ #Wikipedia ❯ texto
┝ #animeinfo ❯ nombre
┝ #githubsearch ❯ user
┝ #lirik ❯ canción
┝ #stickerssearch ❯ tema
┝ #stickerssearch2 ❯ tema
╰──────────────────╯
╭── 🌐  ʀᴇᴅᴇs sᴏᴄɪᴀʟᴇs ──╮
┝ #Facebook ❯ enlace
┝ #Instagram ❯ enlace
┝ #tiktok ❯ enlace
┝ #Twitter ❯ enlace
╰──────────────────╯
ʜᴀᴅᴇs - ʙᴏᴛ - ᴍᴅ • ᴠ3.5
◈ ━━━━━━━━━━━━━━━━ ◈`.trim()
const imageUrl = 'https://raw.githubusercontent.com/OFC-YOVANI/Api-anime/main/img/menudescargas.jpg'
const res = await fetch(imageUrl)
const buffer = Buffer.from(await res.arrayBuffer())
await conn.sendMessage(m.chat, {
image: buffer,
caption: text,
footer: '「 ᴄʀᴇᴀᴅᴏʀ: ᴏғᴄ:ʏᴏᴠᴀɴɪ 」',
buttons: [
{ buttonId: '/menu', buttonText: { displayText: '🔙 ᴍᴇɴᴜ́ ᴘʀɪɴᴄɪᴘᴀʟ' }, type: 1 }
],
headerType: 4
}, { quoted: m })

}
handler.command = /^(descargas)$/i
handler.register = true
export default handler

function clockString(ms){
const h = Math.floor(ms/3600000)
const m = Math.floor(ms/60000)%60
const s = Math.floor(ms/1000)%60
return [h,m,s].map(v=>v.toString().padStart(2,0)).join(':')
}