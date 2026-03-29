import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

const handler = async (m, { conn, usedPrefix }) => {
  let name = await conn.getName(m.sender)

  // 1. RUTA DEL ARCHIVO LOCAL (Donde el Código Maestro guarda la imagen)
  const localImgPath = path.join(process.cwd(), 'lib/img/menuowner.jpg')
  const defaultImgUrl = 'https://raw.githubusercontent.com/OFC-YOVANI/Api-anime/main/img/owner.jpg'

  // 2. LÓGICA DE PRIORIDAD: CARPETA LOCAL > GITHUB
  let fotoFinal
  if (fs.existsSync(localImgPath)) {
    // Si ya usaste #setmenu menuowner, lee el archivo del disco
    fotoFinal = fs.readFileSync(localImgPath)
  } else {
    // Si no hay archivo local, descarga la de respaldo
    const res = await fetch(defaultImgUrl)
    fotoFinal = Buffer.from(await res.arrayBuffer())
  }

  const text = `◈ 〔⚡︎ ʜᴀᴅᴇs - ʙᴏᴛ - ᴍᴅ ⚡︎〕 ◈
「 👤 」Hola ${name}
「 👑 」Menú exclusivo de Owner

╭───  🔄  sɪsᴛᴇᴍᴀ  ───╮
┝ #actualizar ❯ Actualiza el bot
┝ #restart ❯ Reinicia el bot
┝ #setmenu ❯ cambia la imagen de los menús
┝ #cleartmp ❯ Limpia archivos temporales
┝ #resetprefix ❯ Restablece el prefijo
┝ #setprefix ❯ Cambia el prefijo
╰──────────────────╯

╭───  👥  ᴜsᴜᴀʀɪᴏs  ───╮
┝ #addowner ❯ Agrega un owner
┝ #banuser ❯ Banea un usuario
┝ #unbanuser ❯ Desbanea un usuario
┝ #banlist ❯ Lista de baneados
┝ #block ❯ Bloquea un usuario
┝ #blocklist ❯ Lista de bloqueados
┝ #limitado ❯ Restringe límites
┝ #deletedatauser ❯ Elimina datos de usuario
╰──────────────────╯

╭───  💬  ɢʀᴜᴘᴏs  ───╮
┝ #banchat ❯ Banea un grupo
┝ #unbanchat ❯ Desbanea un grupo
┝ #autoadmin ❯ Auto admin en grupos
┝ #groups ❯ Lista todos los grupos
┝ #join ❯ Entra a un grupo por enlace
┝ #salirdelgrupo ❯ Sale de un grupo
╰──────────────────╯

╭───  🛠️  ᴄᴏᴍᴀɴᴅᴏs  ───╮
┝ #addcmd ❯ Agrega comando personalizado
┝ #listcmd ❯ Lista comandos personalizados
┝ #ds ❯ Desactiva un comando
┝ #dsowner ❯ Desactiva solo para owners
╰──────────────────╯

╭───  🖼️  ɪᴍᴀɢᴇɴᴇs  ───╮
┝ #saveimage ❯ Guarda una imagen
┝ #viewimage ❯ Ver imagen guardada
╰──────────────────╯

╭ 💎 ɢᴇsᴛɪᴏ́ɴ ᴅᴇ ᴀᴄᴛɪᴠᴏs ─╮
┝ #añadirxp ❯ cantidad @tag
┝ #añadirdiamantes ❯ @tag cantidad
┝ #añadirhadescoins ❯ @tag cantidad
┝ #añadirtokens ❯ @tag cantidad
┝ #addprem ❯ @tag días
╰──────────────────╯

╭───  📋  ʀᴇᴘᴏʀᴛᴇs  ───╮
┝ #reportes ❯ Ver reportes de usuarios
╰──────────────────╯
ʜᴀᴅᴇs - ʙᴏᴛ - ᴍᴅ • ᴠ${global.vs}
◈ ━━━━━━━━━━━━━━━━ ◈`.trim()

  try {
    await conn.sendMessage(m.chat, {
      image: fotoFinal,
      caption: text,
      footer: '「 ᴄʀᴇᴀᴅᴏʀ: ᴏғᴄ:ʏᴏᴠᴀɴɪ 」',
      buttons: [
        { buttonId: `#menu`, buttonText: { displayText: '🔙 ᴍᴇɴᴜ́ ᴘʀɪɴᴄɪᴘᴀʟ' }, type: 1 }
      ],
      headerType: 4
    }, { quoted: m })
  } catch (e) {
    console.error('Error en menú owner:', e)
    await conn.reply(m.chat, text, m)
  }
}

handler.command = /^(menuowner|omenu|ownermenu)$/i
handler.rowner = true

export default handler
