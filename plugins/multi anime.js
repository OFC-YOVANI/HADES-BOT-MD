import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false

    let accionNom = ''
    let apiEndpoint = ''
    
    if (command === 'besar' || command === 'kiss') {
        accionNom = 'ʙᴇsᴀʀ'; apiEndpoint = 'besar'
    } else if (command === 'abrazar' || command === 'hug') {
        accionNom = 'ᴀʙʀᴀᴢᴀʀ'; apiEndpoint = 'abrazar'
    } else if (command === 'golpea' || command === 'kick') {
        accionNom = 'ɢᴏʟᴘᴇᴀʀ'; apiEndpoint = 'lepega'
    } else if (command === 'asesino' || command === 'matar' || command === 'kill') {
        accionNom = 'ᴀsᴇsɪɴᴀʀ'; apiEndpoint = 'Asesinos' // Carpeta exacta de tu API
    }

    if (!who) return conn.reply(m.chat, `*¿A quién quieres ${accionNom.toLowerCase()}?* Etiqueta a alguien o responde a su mensaje.`, m)
    
    // Petición a tu API en Pterodactyl
    let apiRes = await fetch(`http://hno.ofcyovani.com:5055/api/video/${apiEndpoint}`)
    let json = await apiRes.json()
    let vid = json.url || "https://raw.githubusercontent.com/OFC-YOVANI/Api-anime/main/Animegit/besar1.mp4"

    let name = conn.getName(m.sender)
    let name2 = conn.getName(who)
    let bufferThumb = await (await fetch('https://raw.githubusercontent.com/OFC-YOVANI/Api-anime/main/img/estado.jpg')).buffer()

    // --- LISTAS DE FRASES ---
    let frasesBesos = [
        `*@${m.sender.split('@')[0]}* ʟᴇ ᴅɪᴏ ᴜɴ ʙᴇsᴏ ʀᴏᴍáɴᴛɪᴄᴏ ᴀ *@${who.split('@')[0]}* 💋`,
        `*@${who.split('@')[0]}* ʀᴇᴄɪʙɪó ᴜɴ ʙᴇsᴏ ᴛɪᴇʀɴᴏ ᴅᴇ *@${m.sender.split('@')[0]}* 😊`,
        `¡Wᴏᴡ! *@${m.sender.split('@')[0]}* ʏ *@${who.split('@')[0]}* sᴇ ᴅɪᴇʀᴏɴ ᴜɴ ʙᴇsᴏ ᴀᴘᴀsɪᴏɴᴀᴅᴏ 🔥`,
        `*@${who.split('@')[0]}* sᴇ sᴏɴʀᴏᴊó ᴘᴏʀ ᴇʟ ʙᴇsᴏ ᴅᴇ *@${m.sender.split('@')[0]}* 😳`,
        `Uɴ ʙᴇsɪᴛᴏ ᴅᴇ ʙᴜᴇɴᴀs ɴᴏᴄʜᴇs ᴅᴇ *@${m.sender.split('@')[0]}* ᴘᴀʀᴀ *@${who.split('@')[0]}* 🌙`,
        `*@${m.sender.split('@')[0]}* ɴᴏ ᴘᴜᴅᴏ ᴇᴠɪᴛᴀʀ ʙᴇsᴀʀ ᴀ *@${who.split('@')[0]}* ✨`,
        `*@${who.split('@')[0]}* ᴀᴄᴇᴘᴛó ᴇʟ ʙᴇsᴏ ᴅᴇ *@${m.sender.split('@')[0]}* ᴄᴏɴ ᴍᴜᴄʜᴏ ɢᴜsᴛᴏ 💖`,
        `¡Aʟᴇʀᴛᴀ ᴅᴇ ᴀᴍᴏʀ! *@${m.sender.split('@')[0]}* ʙᴇsó ᴀ *@${who.split('@')[0]}* ᴀɴᴛᴇ ᴛᴏᴅᴏs 📢`,
        `*@${m.sender.split('@')[0]}* ʟᴇ ᴅᴇᴊó ᴜɴᴀ ᴍᴀʀᴄᴀ ᴅᴇ ʙᴇsᴏ ᴀ *@${who.split('@')[0]}* 💄`,
        `*@${who.split('@')[0]}* sᴇ sɪᴇɴᴛᴇ ᴍᴜʏ ᴇsᴘᴇᴄɪᴀʟ ᴘᴏʀ ᴇʟ ʙᴇsᴏ ᴅᴇ *@${m.sender.split('@')[0]}* 👑`
    ]

    let frasesAbrazos = [
        `*@${m.sender.split('@')[0]}* ʟᴇ ᴅɪᴏ ᴜɴ ᴄáʟɪᴅᴏ ᴀʙʀᴀᴢᴏ ᴀ *@${who.split('@')[0]}* 🫂`,
        `*@${who.split('@')[0]}* sᴇ sɪᴇɴᴛᴇ sᴇɢᴜʀᴏ(ᴀ) ᴇɴ ʟᴏs ʙʀᴀᴢᴏs ᴅᴇ *@${m.sender.split('@')[0]}* ✨`,
        `*@${m.sender.split('@')[0]}* ᴀʙʀᴀᴢó ᴍᴜʏ ғᴜᴇʀᴛᴇ ᴀ *@${who.split('@')[0]}* 💖`,
        `¡Qᴜé ᴛɪᴇʀɴᴏs! *@${m.sender.split('@')[0]}* ʏ *@${who.split('@')[0]}* sᴇ ᴅᴀɴ ᴜɴ ᴀʙʀᴀᴢᴏ ɪɴғɪɴɪᴛᴏ ☁️`,
        `*@${m.sender.split('@')[0]}* ɴᴏ ǫᴜɪᴇʀᴇ sᴏʟᴛᴀʀ ᴀ *@${who.split('@')[0]}* ᴇɴ ᴇsᴛᴇ ᴀʙʀᴀᴢᴏ 🤗`,
        `Uɴ ᴀʙʀᴀᴢᴏ ʟʟᴇɴᴏ ᴅᴇ ᴄᴀʀɪñᴏ ᴅᴇ *@${m.sender.split('@')[0]}* ᴘᴀʀᴀ *@${who.split('@')[0]}* 🌹`,
        `*@${who.split('@')[0]}* ʀᴇᴄɪʙɪó ᴇʟ ᴍᴇᴊᴏʀ ᴀʙʀᴀᴢᴏ ᴅᴇ ᴘᴀʀᴛᴇ ᴅᴇ *@${m.sender.split('@')[0]}* 🥇`,
        `*@${m.sender.split('@')[0]}* ᴠɪɴᴏ ᴄᴏʀʀɪᴇɴᴅᴏ ʏ ᴀʙʀᴀᴢó ᴀ *@${who.split('@')[0]}* 🏃‍♂️‍➡️🫂`,
        `ᴇsᴛᴇ ᴀʙʀᴀᴢᴏ ᴅᴇ *@${m.sender.split('@')[0]}* ᴀ *@${who.split('@')[0]}* ʟᴏ ᴄᴜʀᴀ ᴛᴏᴅᴏ 🩹`,
        `*@${who.split('@')[0]}* ᴇsᴛá sɪᴇɴᴅᴏ ᴀᴘᴀᴄʜᴜʀʀᴀᴅᴏ(ᴀ) ᴘᴏʀ *@${m.sender.split('@')[0]}* 💕`
    ]

    let frasesGolpes = [
        `*@${m.sender.split('@')[0]}* ʟᴇ ᴅɪᴏ ᴜɴ ɢᴏʟᴘᴇ ᴀ *@${who.split('@')[0]}* ¡ᴇsᴏ ᴅᴇʙɪó ᴅᴏʟᴇʀ! 👊`,
        `¡ᴛᴏᴍᴀ ᴇsᴛᴏ! *@${m.sender.split('@')[0]}* ʟᴇ ᴘᴇɢó ᴜɴᴀ ʙᴜᴇɴᴀ sᴀᴄᴜᴅɪᴅᴀ ᴀ *@${who.split('@')[0]}* 💢`,
        `*@${m.sender.split('@')[0]}* ᴇsᴛá sᴀᴄᴀɴᴅᴏ su ғᴜʀɪᴀ ᴄᴏɴᴛʀᴀ *@${who.split('@')[0]}* 🔥`,
        `¡ᴘᴜᴍ! *@${m.sender.split('@')[0]}* ɴᴏ ᴛᴜᴠᴏ ᴘɪᴇᴅᴀᴅ ʏ ɢᴏʟᴘᴇó ᴀ *@${who.split('@')[0]}* 🥊`,
        `*@${who.split('@')[0]}* ʀᴇᴄɪʙɪó ᴜɴ ɢᴏʟᴘᴇ ᴄʀíᴛɪᴄᴏ ᴅᴇ *@${m.sender.split('@')[0]}* 😵`,
        `*@${m.sender.split('@')[0]}* ʟᴇ ᴅᴇᴊó ᴜɴ ᴏᴊᴏ ᴍᴏʀᴀᴅᴏ ᴀ *@${who.split('@')[0]}* 🤕`,
        `¡ᴢᴀs! *@${m.sender.split('@')[0]}* ᴀᴘᴀʟᴇó ᴀ *@${who.split('@')[0]}* sɪɴ sᴇɴᴛɪᴍɪᴇɴᴛᴏs 🛠️`,
        `*@${who.split('@')[0]}* sᴇ ǫᴜᴇᴅó sɪɴ ᴘᴀʟᴀʙʀᴀs ᴛʀᴀs ᴇʟ ɢᴏʟᴘᴇ ᴅᴇ *@${m.sender.split('@')[0]}* ⚡`,
        `*@${m.sender.split('@')[0]}* ʟᴇ ᴘᴜsᴏ ᴜɴ Correctivo ᴀ *@${who.split('@')[0]}* 💥`,
        `¡Aʟᴇᴊᴀᴛᴇ! *@${m.sender.split('@')[0]}* ᴍᴀɴᴅó ᴀ ᴠᴏʟᴀʀ ᴀ *@${who.split('@')[0]}* ᴅᴇ ᴜɴ ɢᴏʟᴘᴇ 🌪️`
    ]

    let frasesAsesinos = [
        `*@${m.sender.split('@')[0]}* ʜᴀ ᴀsᴇsɪɴᴀᴅᴏ ᴀ sᴀɴɢʀᴇ ғʀíᴀ ᴀ *@${who.split('@')[0]}* 💀🩸`,
        `¡Fᴀᴛᴀʟɪᴛʏ! *@${m.sender.split('@')[0]}* ᴀᴄᴀʙó ᴄᴏɴ ʟᴀ ᴠɪᴅᴀ ᴅᴇ *@${who.split('@')[0]}* ⚰️`,
        `*@${who.split('@')[0]}* ғᴜᴇ ᴇᴊᴇᴄᴜᴛᴀᴅᴏ(ᴀ) ᴘᴏʀ ʟᴀs ᴍᴀɴᴏs ᴅᴇ *@${m.sender.split('@')[0]}* ⚔️`,
        `*@${m.sender.split('@')[0]}* ɴᴏ ᴛᴜᴠᴏ ᴘɪᴇᴅᴀᴅ ʏ ᴍᴀᴛó ᴀ *@${who.split('@')[0]}* 🩸💀`,
        `¡ᴜɴ ᴄʀɪᴍᴇɴ ᴛᴇʀʀɪʙʟᴇ! *@${who.split('@')[0]}* ʜᴀ sɪᴅᴏ ᴀsᴇsɪɴᴀᴅᴏ(ᴀ) ᴘᴏʀ *@${m.sender.split('@')[0]}* 🚓`,
        `*@${m.sender.split('@')[0]}* ʟᴇ ᴅɪᴏ ᴇʟ ɢᴏʟᴘᴇ ᴅᴇ ɢʀᴀᴄɪᴀ ʏ ᴍᴀᴛó ᴀ *@${who.split('@')[0]}* 🎯`,
        `*@${who.split('@')[0]}* ʏᴀ ᴇsᴛá ᴇɴ ᴇʟ ɪɴғɪᴇʀɴᴏ ɢʀᴀᴄɪᴀs ᴀ *@${m.sender.split('@')[0]}* 🔥💀`,
        `*@${m.sender.split('@')[0]}* ʜᴀ ᴅᴇᴊᴀᴅᴏ ᴇʟ ᴄᴜᴇʀᴘᴏ ᴅᴇ *@${who.split('@')[0]}* sɪɴ ᴠɪᴅᴀ 🥀`,
        `¡ᴜɴᴀ ᴍᴀsᴀᴄʀᴇ! *@${m.sender.split('@')[0]}* ᴀᴄᴀʙó ᴄᴏɴ *@${who.split('@')[0]}* sɪɴ ᴅᴇᴊᴀʀ ʀᴀsᴛʀᴏ 👣💀`,
        `*@${m.sender.split('@')[0]}* sᴇ ᴄᴏɴᴠɪʀᴛɪó ᴇɴ ᴇʟ sɪᴄᴀʀɪᴏ ʏ ᴀsᴇsɪɴó ᴀ *@${who.split('@')[0]}* 🌑`
    ]

    let lista = []
    if (apiEndpoint === 'besar') lista = frasesBesos
    else if (apiEndpoint === 'abrazar') lista = frasesAbrazos
    else if (apiEndpoint === 'lepega') lista = frasesGolpes
    else lista = frasesAsesinos

    let texto = lista[Math.floor(Math.random() * lista.length)]

    await conn.sendMessage(m.chat, { 
        video: { url: vid }, 
        caption: texto,
        gifPlayback: true,
        mentions: [m.sender, who],
        contextInfo: {
            externalAdReply: {
                title: 'ʜᴀᴅᴇs - ʙᴏᴛ - ᴍᴅ ✅',
                body: `${name} ➔ ${accionNom.toLowerCase()} a ➔ ${name2}`,
                sourceUrl: 'https://github.com/OFC-YOVANI/HADES-BOT-MD.git',
                thumbnail: bufferThumb, 
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: false
            }
        }
    }, { quoted: m })
}

handler.help = ['besar', 'abrazar', 'golpea', 'asesino']
handler.tags = ['rp']
handler.command = ['besar', 'kiss', 'abrazar', 'hug', 'golpea', 'kick', 'asesino', 'matar', 'kill']
handler.group = true

export default handler
