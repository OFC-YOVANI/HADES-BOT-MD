const IMAGE_URL = 'https://raw.githubusercontent.com/OFC-YOVANI/Api-anime/main/img/menudescargas.jpg'

const handler = async (m, { conn, usedPrefix }) => {
  if (usedPrefix === 'a' || usedPrefix === 'A') return

  const text = `
*─── · · 🔗 ᴜꜱᴏ ᴅᴇʟ ʙᴏᴛ · · ───*

*¡ʜᴏʟᴀ ᴜꜱᴜᴀʀɪᴏ! 👋🏻* > ꜱɪ ᴅᴇꜱᴇᴀꜱ ᴜꜱᴀʀ ʏ ᴅɪꜱꜰʀᴜᴛᴀʀ ᴅᴇ ʟᴀꜱ ꜰᴜɴᴄɪᴏɴᴇꜱ ᴅᴇ *ʜᴀᴅᴇꜱ ʙᴏᴛ ᴍᴅ*, ¡úɴᴇᴛᴇ ᴀ ɴᴜᴇꜱᴛʀᴏ ɢʀᴜᴘᴏ ᴏꜰɪᴄɪᴀʟ ᴅᴇ ᴘʀᴜᴇʙᴀꜱ!

⚡ **¿ᴘᴏʀ Qᴜé ᴜɴɪʀꜱᴇ?**
* ◈ ᴜꜱᴀ ᴛᴏᴅᴏꜱ ʟᴏꜱ ᴄᴏᴍᴀɴᴅᴏꜱ ʟɪʙʀᴇᴍᴇɴᴛᴇ.
* ◈ ᴅᴇꜱᴄᴀʀɢᴀ ᴍúꜱɪᴄᴀ, ᴠíᴅᴇᴏꜱ ʏ ᴍáꜱ.
* ◈ ᴅɪᴠɪéʀᴛᴇᴛᴇ ᴄᴏɴ ʟᴀ ᴄᴏᴍᴜɴɪᴅᴀᴅ.

*➤ ᴇɴʟᴀᴄᴇ ᴅᴇ ᴜꜱᴏ (ᴀᴄᴛɪᴠᴏ):*
*🌐* https://chat.whatsapp.com/K9poLgqyztyKCJ5k5NaNJz?mode=gi_t

*「 ᴏғᴄ:ʏᴏᴠᴀɴɪ • ʜᴀᴅᴇꜱ ʙᴏᴛ ᴍᴅ 」*
*─── · · ⚡ ᴀᴘɪ ᴘʀᴏᴘɪᴀ ⚡ · · ───*`.trim()

  try {
   
    await conn.sendMessage(m.chat, {
      image: { url: IMAGE_URL },
      caption: text
    }, { quoted: m })
   
    await conn.sendMessage(m.chat, { react: { text: '🔗', key: m.key }})

  } catch (err) {
    
    await conn.sendMessage(m.chat, { text: text }, { quoted: m })
  }
}

handler.command = /^(grupos|groups|linkgp|comunidad)$/i
handler.register = true

export default handler
