import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/ja.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/lkch77g.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍
*=> El desconocimiento de lo que aqui se menciona no exime al propietario del Bot, Sub Bot o usuario del bot de la sanciones que se puedan derivar❗*

*⚠️ Términos de privacidad*

_1.- La información que reciba el Bot NO se comparte con ningún tercero ni con nadie_
_2.- Las imágenes/videos/sticker/audios/etc no son compartidos con nadie_
_3.- Su numero de teléfono no es compartido con absolutamente nadie_
_4.- Datos de tarjetas, ubicaciones, direcciones, etc son eliminados inmediatamente y no se comparten con absolutamente nadie_
_5.- Todas las conversaciones son eliminadas cada determinado tiempo y no se hace backup (no se guarda) de ningún tipo de información/conversación_

*⚠️ Términos de uso*

_1.- No nos hacemos responsables de un mal uso que se le pueda dar al Bot_
_2.- No nos hacemos responsables de la ignorancia y/o desconocimiento del tema_
_3.- El Bot no esta activo las 24 horas al menos de que el propietario decida lo contrario_
_4.- La "empresa" no se hace responsable del uso de un Sub Bot o Bot no oficial, ya que son personas (terceros) y no tenemos control sobre ell@s_
_5.- No nos hacemos responsables de los números que se puedan ir a soporte por el uso del Bot, es aconsejable siempre usar números virtuales para usos de Bots_
_6.- Los audios/notas de voz/imágenes/videos o cualquier otro archivo multimedia que sean de propiedad de ༴⃟🌹๋ོ࣭𝐇𝐚𝐝𝐞𝐬𝐛𝐨𝐭  ༴⃟🌹ᰰ son únicamente y exclusivamente de este Bot, si se detecta a otro Bot con alguno o algunos de los archivos multimedia antes mencionado se tomarán cartas en el asunto._

*➤ Mensaje del numero del Bot?*

_- Si en algún momento recibe un mensaje del numero del Bot y no es un comando posiblemente sea de el propietario del Bot o el propietario del numero, este es un persona real por lo que se le pide que no le falte el respeto_

*⁉️ Te quedaron dudas?*

_- Si todavía tienes alguna duda o reclamo de lo mencionado aqui o referente al Bot, contáctame a mi numero personal al cual estaré respondiendo lo antes posible para brindarte una solución y/o hacerme responsable de alguna reclamación_ 
> wa.me/5212411719888


→ *Solo contactar por temas serios, para preguntas del Bot mas generales contáctame al privado con el comando del comando #owner (al numero wa.me/+522412377467)*`.trim()
let buttons = [
{ buttonId: '/menu', buttonText: { displayText: '𝐌𝐄𝐍𝐔' }, type: 1 },
{ buttonId: '/estado', buttonText: { displayText: '𝐄𝐒𝐓𝐀𝐃𝐎' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍',
body: null,
thumbnail: img,
sourceUrl: `https://youtu.be/HoxZuQokeMM`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'ja.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(términos|condiciones)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
