import fetch from 'node-fetch'
import yts from 'yt-search'
import ffmpeg from 'fluent-ffmpeg'
import { Readable } from 'stream'

const SERVER_URL = 'http://hno.ofcyovani.com:5050'
const cache = new Map()

function convertToOgg(mp3Buffer) {
  return new Promise((resolve, reject) => {
    const input = new Readable()
    input.push(mp3Buffer)
    input.push(null)
    const chunks = []
    ffmpeg(input)
      .inputFormat('mp3')
      .audioCodec('libopus')
      .format('ogg')
      .on('error', (err) => reject(err))
      .pipe()
      .on('data', (chunk) => chunks.push(chunk))
      .on('end', () => resolve(Buffer.concat(chunks)))
  })
}

async function descargarMedia(url, type = 'audio') {
  const format = type === 'video' ? 'mp4' : 'mp3'
  const quality = type === 'video' ? '&quality=360p' : ''
  const endpoint = `${SERVER_URL}/download?url=${encodeURIComponent(url)}&format=${format}${quality}`
  
  const response = await fetch(endpoint, { timeout: 180000 })
  if (!response.ok) throw new Error(`Error: ${response.status}`)
  const buffer = Buffer.from(await response.arrayBuffer())
  return { buffer, sizeMB: buffer.length / 1024 / 1024 }
}

const handler = async (m, { conn, text, command, usedPrefix }) => {
  const user = global.db.data.users[m.sender]
  const cmd = command.toLowerCase()

  if (!m.isGroup) return m.reply('❌ Solo en grupos.')
  if (!user.registered) return m.reply(`❌ Regístrate con: ${usedPrefix}reg`)
  if (!text?.trim()) return m.reply(`❌ Uso: ${usedPrefix + command} <nombre o enlace>`)

  const isVideo = /video|mp4/i.test(cmd)
  const isDoc = /doc|documento|spotdl/i.test(cmd)
  const isPTT = /^audio$/i.test(cmd)
  const isSpotifyAction = /spotify|music|spotdl/i.test(cmd)

  // --- DETECCIÓN Y LIMPIEZA DE URL DE YOUTUBE ---
  if (/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)/.test(text)) {
    let url = text.trim()
    
    // Limpieza profunda de parámetros basura (?si=, &feature=, etc.)
    if (url.includes('youtu.be/')) {
        url = 'https://youtu.be/' + url.split('youtu.be/')[1].split('?')[0]
    } else if (url.includes('youtube.com/watch?v=')) {
        url = 'https://www.youtube.com/watch?v=' + url.split('v=')[1].split('&')[0]
    } else if (url.includes('youtube.com/shorts/')) {
        url = 'https://www.youtube.com/shorts/' + url.split('shorts/')[1].split('?')[0]
    }

    const label = isSpotifyAction ? 'ꜱᴘᴏᴛɪꜰʏ' : 'ʏᴏᴜᴛᴜʙᴇ'
    const msgEnviado = await conn.sendMessage(m.chat, { text: `⏳ ᴘʀᴏᴄᴇsᴀɴᴅᴏ ${label}...` }, { quoted: m })
    
    try {
      const resultado = await descargarMedia(url, isVideo ? 'video' : 'audio')

      if (isDoc) {
        await conn.sendMessage(m.chat, { 
          document: resultado.buffer, 
          mimetype: isVideo ? 'video/mp4' : 'audio/mpeg', 
          fileName: `HadesBot_${Date.now()}.${isVideo ? 'mp4' : 'mp3'}`,
          caption: `📄 **ᴅᴏᴄᴜᴍᴇɴᴛᴏ ʟɪsᴛᴏ**\n⚙️ **ᴀᴘɪ ᴘʀᴏᴘɪᴀ**`
        }, { quoted: m })
      } else if (isVideo) {
        await conn.sendMessage(m.chat, { 
          video: resultado.buffer, 
          mimetype: 'video/mp4', 
          caption: `🎬 **ʜᴀᴅᴇꜱ ʙᴏᴛ ᴍᴅ**\n⚙️ **ᴀᴘɪ ᴘʀᴏᴘɪᴀ**` 
        }, { quoted: m })
      } else if (isPTT) {
        await conn.sendPresenceUpdate('recording', m.chat)
        const oggBuffer = await convertToOgg(resultado.buffer)
        await conn.sendMessage(m.chat, { audio: oggBuffer, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m })
      } else {
        await conn.sendMessage(m.chat, { audio: resultado.buffer, mimetype: 'audio/mpeg', ptt: false, fileName: `Hades_Music.mp3` }, { quoted: m })
      }
      
      return conn.sendMessage(m.chat, { text: `✅ **ᴇɴᴠɪᴀᴅᴏ ᴄᴏɴ ᴇxɪᴛᴏ**\n📦 ${resultado.sizeMB.toFixed(1)} MB`, edit: msgEnviado.key })
    } catch (err) {
      return conn.sendMessage(m.chat, { text: `❌ **ᴇʀʀᴏʀ:** ${err.message}`, edit: msgEnviado.key })
    }
  }

  // --- BÚSQUEDA POR TEXTO (SPOTIFY / YOUTUBE) ---
  try {
    await conn.sendMessage(m.chat, { react: { text: '⚡', key: m.key }})
    
    if (isSpotifyAction && !text.includes('youtube.com')) {
      const res = await fetch(`${SERVER_URL}/search?q=${encodeURIComponent(text.trim())}`)
      const data = await res.json()
      if (!data?.status || !data.resultados?.length) return m.reply('❌ No se encontró nada en Spotify.')
      
      const top = data.resultados[0]
      const videoId = top.link.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)?.[1]
      const thumb = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null

      const infoSpot = `─── · · 🟢 **ꜱᴘᴏᴛɪꜰʏ** · · ───\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n\n» 🎵 ᴛíᴛᴜʟᴏ: *${top.titulo}*\n» 👤 ᴀʀᴛɪꜱᴛᴀ: *${top.artista || 'Desconocido'}*\n» ⏱️ ᴅᴜʀᴀᴄɪóɴ: *${top.duracion || '-'}*\n\n── · · ʜᴀᴅᴇs ʙᴏᴛ ᴍᴅ · · ──`

      const buttonsSpot = [
        { buttonId: `${usedPrefix}spotify ${top.link}`, buttonText: { displayText: '🎵 ꜱᴘᴏᴛɪꜰʏ ᴀᴜᴅɪᴏ' }, type: 1 },
        { buttonId: `${usedPrefix}spotdl ${top.link}`, buttonText: { displayText: '📄 ꜱᴘᴏᴛɪꜰʏ ᴅᴏᴄ' }, type: 1 }
      ]

      await conn.sendMessage(m.chat, { image: { url: thumb }, caption: infoSpot, footer: '「 ᴏғᴄ:ʏᴏᴠᴀɴɪ • ᴀᴘɪ ᴘʀᴏᴘɪᴀ 」', buttons: buttonsSpot, headerType: 4 }, { quoted: m })

    } else {
      let video = cache.get(text.toLowerCase())
      if (!video) {
        const search = await yts(text)
        video = search.videos[0]
        if (video) cache.set(text.toLowerCase(), video)
      }
      if (!video) return m.reply('❌ No se encontró nada en YouTube.')

      const infoYT = `⌬  **ʏᴏᴜᴛᴜʙᴇ ${command.toUpperCase()}** ⌬\n•─────────────•\n✨ **ᴛɪᴛᴜʟᴏ:** ${video.title}\n⏱️ **ᴅᴜʀᴀᴄɪᴏɴ:** ${video.timestamp}\n⚙️ **ᴀᴘɪ:** ᴘʀᴏᴘɪᴀ\n•─────────────•`

      const buttonsYT = [
        { buttonId: `${usedPrefix + command} ${video.url}`, buttonText: { displayText: `📥 ᴅᴇsᴄᴀʀɢᴀʀ` }, type: 1 },
        { buttonId: `${usedPrefix}playlist ${text}`, buttonText: { displayText: '📂 ᴍᴀ́s ʀᴇsᴜʟᴛᴀᴅᴏs' }, type: 1 }
      ]

      await conn.sendMessage(m.chat, { image: { url: video.thumbnail }, caption: infoYT, footer: '「 ᴏғᴄ:ʏᴏᴠᴀɴɪ • ᴀᴘɪ ᴘʀᴏᴘɪᴀ 」', buttons: buttonsYT, headerType: 4 }, { quoted: m })
    }
  } catch (e) {
    m.reply('❌ Error en la búsqueda.')
  }
}

handler.command = /^(play|play2|audio|video|yt|yt2|playdoc|audiodoc|videodoc|play2doc|music|spotify|spotdl|musicmp3|musicdoc)$/i
export default handler
