const IMAGE_URL = 'https://raw.githubusercontent.com/OFC-YOVANI/Api-anime/main/img/menudescargas.jpg'

const handler = async (m, { conn, usedPrefix }) => {
  if (usedPrefix === 'a' || usedPrefix === 'A') return

  const text = `
*─── · · ⚡ ɪɴꜱᴛᴀʟᴀᴄɪóɴ ʜᴀᴅᴇꜱ ʙᴏᴛ · · ───*

*¡ʜᴏʟᴀ ᴜꜱᴜᴀʀɪᴏ! 👋🏻* > ᴀQᴜí ᴛɪᴇɴᴇꜱ ʟᴀ ɢᴜíᴀ ᴄᴏᴍᴘʟᴇᴛᴀ ᴘᴀʀᴀ ɪɴꜱᴛᴀʟᴀʀ ᴇʟ ʙᴏᴛ ᴇɴ ᴛᴜ ʜᴏꜱᴛ ᴏ ᴇɴ ᴛᴇʀᴍᴜx.

*📦 ʙᴏxᴍɪɴᴇ ʜᴏꜱᴛ (ʀᴇᴄᴏᴍᴇɴᴅᴀᴅᴏ)*
* ◈ ᴛᴜᴛᴏʀɪᴀʟ:* https://youtu.be/JF7E4Dh898c
* ◈ ᴘáɢɪɴᴀ:* https://boxmineworld.com
* ◈ ᴘᴀɴᴇʟ:* https://panel.boxmineworld.com
* ◈ ꜱᴏᴘᴏʀᴛᴇ:* https://discord.gg/84qsr4v

*📱 ɪɴꜱᴛᴀʟᴀᴄɪóɴ ᴇɴ ᴛᴇʀᴍᴜx*
* ◈ ᴠíᴅᴇᴏ ɢᴜíᴀ:* https://youtu.be/AtI8nyBWrZk
* ◈ ᴀᴘᴋ ᴛᴇʀᴍᴜx:* https://bit.ly/termux-apk
* ◈ ᴀʏᴜᴅᴀ:* wa.me/5212412377467

*💻 ᴄᴏᴍᴀɴᴅᴏꜱ ᴘᴀʀᴀ ᴛᴇʀᴍᴜx*
> _ᴄᴏᴘɪᴀ ʏ ᴘᴇɢᴀ ᴜɴᴏ ᴘᴏʀ ᴜɴᴏ_

\`\`\`pkg update && pkg upgrade -y
pkg install nodejs git python make clang pkg-config -y
git clone https://github.com/OFC-YOVANI/HADES-BOT-MD.git
cd HADES-BOT-MD 
pkg install yarn
yarn
npm install
npm start\`\`\`

*🔄 ᴍᴀɴᴛᴇɴɪᴍɪᴇɴᴛᴏ ʏ ʀᴇᴄᴏɴᴇxɪóɴ*

*⚙️ ʀᴇᴀᴄᴛɪᴠᴀʀ (ꜱɪ ꜱᴇ ᴀᴘᴀɢó):*
> ꜱɪ ᴇʟ ʙᴏᴛ ꜱᴇ ᴅᴇᴛɪᴇɴᴇ, ꜱᴏʟᴏ ᴇꜱᴄʀɪʙᴇ:
\`cd HADES-BOT-MD && npm start\`

*🔑 ᴘᴇᴅɪʀ ᴄóᴅɪɢᴏ ᴅᴇ ɴᴜᴇᴠᴏ:*
> ꜱɪ ᴅᴇꜱᴇᴀꜱ ᴠɪɴᴄᴜʟᴀʀ ᴏᴛʀᴏ ɴúᴍᴇʀᴏ ᴏ ᴘᴇᴅɪʀ ᴇʟ ᴄóᴅɪɢᴏ ɴᴜᴇᴠᴀᴍᴇɴᴛᴇ, ᴘʀɪᴍᴇʀᴏ ᴅᴇʙᴇꜱ ʙᴏʀʀᴀʀ ʟᴀ ꜱᴇꜱɪóɴ ᴀɴᴛᴇʀɪᴏʀ:
1. \`rm -rf Session-activa\`
2. \`npm start\`
_ᴀʟ ɪɴɪᴄɪᴀʀ, ᴇʟ ʙᴏᴛ ᴛᴇ ᴅᴀʀá ᴜɴ ɴᴜᴇᴠᴏ ᴄóᴅɪɢᴏ._

*「 ᴏғᴄ:ʏᴏᴠᴀɴɪ • ʜᴀᴅᴇꜱ ʙᴏᴛ ᴍᴅ 」*
*─── · · 🚀 ᴀᴘɪ ᴘʀᴏᴘɪᴀ 🚀 · · ───*`.trim()

  try {
    await conn.sendMessage(m.chat, {
      image: { url: IMAGE_URL },
      caption: text
    }, { quoted: m })
    
    await conn.sendMessage(m.chat, { react: { text: '⚙️', key: m.key }})

  } catch (err) {
    await conn.sendMessage(m.chat, { text: text }, { quoted: m })
  }
}

handler.command = /^(instalarbot|installbot|instalar)$/i
handler.register = true

export default handler
