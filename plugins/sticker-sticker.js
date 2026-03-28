import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

const handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  try {
    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || q.mediaType || ''

    if (/webp|image|video/g.test(mime)) {
      const data = await q.download?.()
      if (!data) throw '*[❗] Error al descargar el archivo.*'

      // Intentamos generar el sticker directamente
      stiker = await sticker(data, false, global.packname, global.author)

      // Si falla el método directo, usamos el link (Catbox/Telegraph)
      if (!stiker) {
        let out
        if (/webp/.test(mime)) out = await webp2png(data)
        else if (/video/.test(mime)) out = await uploadFile(data)
        else out = await uploadImage(data)
        
        if (out) stiker = await sticker(false, out, global.packname, global.author)
      }
    } else if (args[0] && isUrl(args[0])) {
      stiker = await sticker(false, args[0], global.packname, global.author)
    }

    if (stiker) {
      // USAMOS EL MÉTODO MÁS ESTABLE DE BAILEYS
      await conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
    } else {
      throw 'La conversión a sticker falló. Revisa lib/sticker.js'
    }

  } catch (e) {
    console.error(e)
    m.reply(`*[❗] Ocurrió un error:* ${e.message || e}`)
  }
}

handler.help = ['s']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
handler.group = true

export default handler

const isUrl = (text) => text.match(/https?:\/\/\S+\.(jpe?g|png|gif|webp)/gi)
