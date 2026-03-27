import { generateWAMessageFromContent, proto } from '@whiskeysockets/baileys'
import yts from 'yt-search'
import fetch from 'node-fetch'
import ffmpeg from 'fluent-ffmpeg'
import { Readable } from 'stream'

const SERVER_URL = 'http://hno.ofcyovani.com:5050'

async function descargarYEnviar(m, conn, url, title, type = 'audio', isDoc = false, isPTT = true) {
  const msgEspera = await conn.sendMessage(m.chat, { text: `🚀 ᴘʀᴏᴄᴇsᴀɴᴅᴏ ${isDoc ? '📄 ᴅᴏᴄ' : type === 'video' ? '🎬 ᴠɪᴅᴇᴏ' : '🎙️ ᴀᴜᴅɪᴏ'}...\n📦 *${title}*` }, { quoted: m })
  
  try {
    const format = type === 'video' ? 'mp4' : 'mp3'
    const endpoint = `${SERVER_URL}/download?url=${encodeURIComponent(url)}&format=${format}`
    const response = await fetch(endpoint, { timeout: 180000 })
    if (!response.ok) throw new Error('Servidor Offline')
    const buffer = Buffer.from(await response.arrayBuffer())

    if (isDoc) {
      await conn.sendMessage(m.chat, { 
        document: buffer, 
        mimetype: type === 'video' ? 'video/mp4' : 'audio/mpeg', 
        fileName: `${title}.${format}`,
        caption: `📄 **ᴀᴜᴅɪᴏ ᴅᴏᴄᴜᴍᴇɴᴛᴏ**\n⚙️ **ᴀᴘɪ ᴘʀᴏᴘɪᴀ**`
      }, { quoted: m })
    } else if (type === 'video') {
      await conn.sendMessage(m.chat, { 
        video: buffer, 
        caption: `🎬 **ᴠɪᴅᴇᴏ ʟɪsᴛᴏ**\n⚙️ **ᴀᴘɪ ᴘʀᴏᴘɪᴀ**` 
      }, { quoted: m })
    } else if (isPTT) {
      const input = new Readable(); input.push(buffer); input.push(null)
      const chunks = []
      const ogg = await new Promise((resolve, reject) => {
        ffmpeg(input).inputFormat('mp3').audioCodec('libopus').format('ogg')
          .on('error', reject)
          .pipe().on('data', c => chunks.push(c)).on('end', () => resolve(Buffer.concat(chunks)))
      })
      await conn.sendPresenceUpdate('recording', m.chat)
      await conn.sendMessage(m.chat, { audio: ogg, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m })
    } else {
      await conn.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mpeg', ptt: false }, { quoted: m })
    }

    const exitoTxt = `✅ **ᴇɴᴠɪᴀᴅᴏ ᴄᴏɴ ᴇxɪᴛᴏ**\n━━━━━━━━━━━━━━━━━━\n🎧 ${title}\n⚙️ **ᴀᴘɪ ᴘʀᴏᴘɪᴀ**\n👤 **ᴏғᴄ:ʏᴏᴠᴀɴɪ**`
    await conn.sendMessage(m.chat, { text: exitoTxt, edit: msgEspera.key })

  } catch (e) {
    await conn.sendMessage(m.chat, { text: `❌ **ᴇʀʀᴏʀ:** ${e.message}`, edit: msgEspera.key })
  }
}

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const user = global.db.data.users[m.sender]
  if (!m.isGroup) return m.reply('❌ Solo en grupos.')
  if (!user.registered) return m.reply(`❌ Regístrate con: *${usedPrefix}reg*`)
  if (!text) return m.reply(`❌ Uso: ${usedPrefix + command} <nombre>`)
  
  await conn.sendMessage(m.chat, { react: { text: '⚡', key: m.key }})
  const search = await yts(text)
  const videos = search.videos.slice(0, 10)
  if (!videos.length) return m.reply('❌ Sin resultados.')

  global.db.data.chats[m.chat].lastPlaylist = videos

  let txt = `◢◤━━━━━━━━━━━━━━━━◥◣\n  🎵  *ʜᴀᴅᴇs ᴘʟᴀʏʟɪsᴛ (ɪᴏs)* 🎵\n\n`
  videos.forEach((v, i) => {
    txt += `  *${i + 1}.* ${v.title}\n`
    txt += `  ╰─ ⏱️ ${v.timestamp} | 👁️ ${v.views.toLocaleString()}\n\n`
  })
  txt += `⚙️ **ᴀᴘɪ ᴘʀᴏᴘɪᴀ** | ᴏғᴄ:ʏᴏᴠᴀɴɪ\n◢◤━━━━━━━━━━━━━━━━◥◣`


  const makeRows = (suffix, label, icon) => videos.map((v, i) => ({
    header: `｢${i + 1}｣ ${v.title.slice(0, 30)}...`,
    title: `${icon} ${label}`,
    description: `⏱️ ᴅᴜʀᴀᴄɪᴏɴ: ${v.timestamp} | 📊 ᴠɪsᴛᴀs: ${v.views.toLocaleString()}`,
    id: `.${i + 1}${suffix}` 
  }))

  const buttonParamsJson = JSON.stringify({
    title: '✨ ᴄᴀᴛᴀʟᴏɢᴏ ᴅᴇ ᴅᴇsᴄᴀʀɢᴀ ✨',
    sections: [
      { title: '🎙️ ᴀᴜᴅɪᴏ sʏsᴛᴇᴍ (ᴘᴛᴛ)', rows: makeRows('', 'ᴏʙᴛᴇɴᴇʀ ɴᴏᴛᴀ ᴅᴇ vᴏᴢ', '⚡') },
      { title: '🎵 ᴍᴜsɪᴄ ʟɪʙʀᴀʀʏ (ᴍᴘ3)', rows: makeRows('m', 'ᴅᴇsᴄᴀʀɢᴀʀ ᴍᴜsɪᴄᴀ ᴍᴘ3', '🎧') },
      { title: '🎬 ᴠɪᴅᴇᴏ ǫᴜᴀʟɪᴛʏ (ᴍᴘ4)', rows: makeRows('v', 'ᴅᴇsᴄᴀʀɢᴀʀ ᴠɪᴅᴇᴏ ʜᴅ', '🎥') },
      { title: '📄 ғɪʟᴇ sᴇʀᴠᴇʀ (ᴅᴏᴄ)', rows: makeRows('d', 'ᴇɴᴠɪᴀʀ ᴄᴏᴍᴏ ᴅᴏᴄᴜᴍᴇɴᴛᴏ', '📁') }
    ]
  })

  const interactiveMsg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: { text: txt },
          footer: { text: '「 ʜᴀᴅᴇs ʙᴏᴛ ᴍᴅ • ᴀᴘɪ ᴘʀᴏᴘɪᴀ 」' },
          nativeFlowMessage: { 
            buttons: [
              { name: 'single_select', buttonParamsJson },
              { name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: '🔄 vᴏʟvᴇʀ ᴀʟ ᴍᴇɴᴜ', id: `${usedPrefix}menu` }) }
            ] 
          }
        }
      }
    }
  }, { quoted: m })

  await conn.relayMessage(m.chat, interactiveMsg.message, { messageId: interactiveMsg.key.id })
}

handler.before = async function (m, { conn }) {
  const user = global.db.data.users[m.sender]
  if (!m.isGroup || !user?.registered || !m.text) return
  const playlist = global.db.data.chats[m.chat]?.lastPlaylist
  if (!playlist) return

  const match = m.text.match(/^[\/\.\*](\d+)([mvd]?)$/i)
  if (!match) return

  const index = parseInt(match[1]) - 1
  const subType = match[2].toLowerCase()
  const video = playlist[index]
  if (!video) return

  let type = subType === 'v' ? 'video' : 'audio'
  let isDoc = subType === 'd'
  let isPTT = subType === '' 

  await descargarYEnviar(m, conn, video.url, video.title, type, isDoc, isPTT)
  return true 
}

handler.command = /^(playlist|plist)$/i
export default handler
