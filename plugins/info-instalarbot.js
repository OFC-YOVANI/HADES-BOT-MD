let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `┌━═┅═━––––––––
│▢⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍
├━═┅═━––––––––
│▢𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙱𝙾𝚃」
╰━═┅═━––––––––

┌━═┅═━––––––––
│▢𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝚕 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁
├━═┅═━––––––––
│▢http://wa.me/5212411719888
╰━═┅═━––––––––

┌━═┅═━––––––––
│▢𝚃𝚞𝚝𝚘𝚛𝚒𝚊𝚕:
├━═┅═━––––––––
│▢https://youtu.be/HoxZuQokeMM
╰━═┅═━––––––––

┌━═┅═━––––––––
│▢𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇
├━═┅═━––––––––
│▢pkg update && pkg upgrade
│▢pkg install git -y
│▢pkg install nodejs -y
│▢pkg install ffmpeg -y
│▢pkg install imagemagick -y
│▢termux-setup-storage
│▢git clone https://github.com/OFC-YOVANI/HADES-BOT-MD.git
│▢cd HADES-BOT-MD
│▢npm install
│▢npm update
│▢npm start
╰━═┅═━––––––––

┌━═┅═━––––––––
│▢𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽
├━═┅═━––––––––
│▢Si el termux se cierra para volver activar escribe:
│▢cd HADES-BOT-MD
│▢npm start 
├━═┅═━––––––––
│▢Para obtener nuevamente el 
│▢codigo QR, escribe en el termux:
│▢cd HADES-BOT-MD
│▢rm -rf session.data.json
│▢npm start 
├━═┅═━––––––––
│▢Cada vez que realices una modificacion en el
│▢repositorio del Bot (tu GitHub), puedes usar 
│▢el comando #actualizar para que se actualicen los datos
├━═┅═━––––––––
│▢Aconsejable maximo 30 grupos, despues 
│▢de esa cantidad el Bot empieza a ir 
│▢excesivamente lento (depende del
│▢WhatsApp igual)
╰━═┅═━––––––––`
let buttonMessage= {
'document': { url: `https://youtu.be/4eA5nDxPjOA` },
'mimetype': `application/${document}`,
'fileName': `🍀𝐓𝐇𝐄-𝐇𝐀𝐃𝐄𝐒-𝐁𝐎𝐓-𝐌𝐃✨`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/OFC-YOVANI/HADES-BOT-MD.git',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '🧿𝙼𝙴𝙽𝚄🧿'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '🏓𝙳𝙾𝙽𝙰𝚁🏓'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['instalarbot','script']
export default handler
 
