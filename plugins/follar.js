import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    
    let accionNom = (command === 'violar') ? 'ᴠɪᴏʟᴀʀ' : (command === 'penetrar') ? 'ᴘᴇɴᴇᴛʀᴀʀ' : 'ғᴏʟʟᴀʀ'

    if (!who) return conn.reply(m.chat, `*¿A quién quieres ${accionNom.toLowerCase()}?* Etiqueta a alguien o responde a su mensaje. 😈`, m)
    
    let apiRes = await fetch(`http://hno.ofcyovani.com:5055/api/video/folla`)
    let json = await apiRes.json()
    let vid = json.url || "https://raw.githubusercontent.com/OFC-YOVANI/Api-anime/main/Animegit/besar1.mp4"

    let name = conn.getName(m.sender)
    let name2 = conn.getName(who)
    let bufferThumb = await (await fetch('https://raw.githubusercontent.com/OFC-YOVANI/Api-anime/main/img/estado.jpg')).buffer()

    let frases = [
        `*@${m.sender.split('@')[0]}* ʜᴀ ᴠɪᴏʟᴀᴅᴏ sᴀʟᴠᴀᴊᴇᴍᴇɴᴛᴇ ᴀ *@${who.split('@')[0]}* 🔞`,
        `¡ᴅɪᴏs! *@${m.sender.split('@')[0]}* ᴘᴇɴᴇᴛʀó sɪɴ ᴘɪᴇᴅᴀᴅ ᴀ *@${who.split('@')[0]}* 💦`,
        `*@${who.split('@')[0]}* ᴀᴄᴀʙᴀ ᴅᴇ sᴇʀ ᴠɪᴏʟᴀᴅᴏ(ᴀ) ᴘᴏʀ *@${m.sender.split('@')[0]}* 😈`,
        `*@${m.sender.split('@')[0]}* ᴇsᴛá ᴘᴇɴᴇᴛʀᴀɴᴅᴏ ᴍᴜʏ ᴅᴜʀᴏ ᴀ *@${who.split('@')[0]}* 🔥`,
        `¡ᴀʟᴇʀᴛᴀ! *@${who.split('@')[0]}* ғᴜᴇ ᴠɪᴏʟᴀᴅᴏ(ᴀ) ᴇɴ ᴘúʙʟɪᴄᴏ ᴘᴏʀ *@${m.sender.split('@')[0]}* 📢🔞`,
        `*@${m.sender.split('@')[0]}* ɴᴏ ᴛᴜᴠᴏ ᴄᴏᴍᴘᴀsɪóɴ ʏ ᴘᴇɴᴇᴛʀó ᴀ *@${who.split('@')[0]}* 🥵`,
        `*@${who.split('@')[0]}* ǫᴜᴇᴅó ᴅᴇsᴛrozado(ᴀ) ᴅᴇsᴘᴜés ᴅᴇ sᴇʀ ᴠɪᴏʟᴀᴅᴏ(ᴀ) ᴘᴏʀ *@${m.sender.split('@')[0]}* 💥`,
        `*@${m.sender.split('@')[0]}* ᴇsᴛá ɢᴏᴢᴀɴᴅᴏ ᴍɪᴇɴᴛʀᴀs ᴘᴇɴᴇᴛʀᴀ ᴀ *@${who.split('@')[0]}* 🤫🔞`,
        `¡ᴜɴᴀ ᴠɪᴏʟᴀᴄɪóɴ ᴛᴏᴛᴀʟ! *@${m.sender.split('@')[0]}* ᴅᴏᴍɪɴó ᴀ *@${who.split('@')[0]}* 😈💦`,
        `*@${m.sender.split('@')[0]}* ʜᴀ ᴅᴇᴊᴀᴅᴏ ᴍᴀʀᴄᴀ ᴛʀᴀs ᴘᴇɴᴇᴛʀᴀʀ ᴀ *@${who.split('@')[0]}* 🔞🔥`
    ]
    
    let texto = frases[Math.floor(Math.random() * frases.length)]

    await conn.sendMessage(m.chat, { 
        video: { url: vid }, 
        caption: texto,
        gifPlayback: true,
        mentions: [m.sender, who],
        contextInfo: {
            externalAdReply: {
                title: 'ʜᴀᴅᴇs - ʙᴏᴛ - ᴍᴅ ✅',
                body: `${name} ➔ ${command} a ➔ ${name2} 🔞`,
                sourceUrl: 'https://github.com/OFC-YOVANI/HADES-BOT-MD.git',
                thumbnail: bufferThumb, 
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: false
            }
        }
    }, { quoted: m })
}

handler.help = ['folla', 'violar', 'penetrar']
handler.tags = ['rp']
handler.command = ['folla', 'follar', 'violar', 'penetrar']
handler.group = true

export default handler
