import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
wm = global.wm
vs = global.vs
let { exp, limit, level, money, role } = global.db.data.users[m.sender]
let { min, xp, hades, max } = xpRange(level, global.multiplier)
const sections = [  
{
title: `𝙻𝙸𝚂𝚃𝙰 𝙳𝙴𝙻 𝙼𝙴𝙽𝚄`,
rows: [  
     {title: "│🤴│ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ʙᴏᴛ", description: "ɴᴜᴍᴇʀᴏs ᴏғɪᴄɪᴀʟᴇs ᴅᴇ ʏᴏᴠᴀɴɪ", rowId: `${usedPrefix}owner`},
     {title: "│⛄│ᴄʀᴇᴀᴅᴏʀ ᴅᴇʟ ʙᴏᴛ2", description: "ɴᴜᴍᴇʀᴏs ᴏғɪᴄɪᴀʟᴇs ᴅᴇ ʏᴏᴠᴀɴɪ", rowId: `${usedPrefix}yovani`},
     ]},{  
     title: hades3 + '🌸𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒 𝐕𝐀𝐑𝐈𝐀𝐃𝐀𝐒🌺' + hades4,
     rows: [
     {title: "│🧬│ᴄᴏʀᴏɴᴀ ᴠɪʀᴜs", description: "ᴍᴇxɪᴄᴏ", rowId: `${usedPrefix}covid19`},
     {title: "│💌│ᴰᴼᴺᴬᶜᴵᴼᴺ", description: "ᴬᵖᵃʸᵒ ᵖᵃʳᵃ ᴴᵃᵈᵉˢ⁻ᴮᵒᵗ", rowId: `${usedPrefix}donar`},
     {title: "│⚔️│ᴍɪɴᴀʀ ʜᴀᴅᴇs-ᴄᴏɪɴs", description: "ᴘᴏɴᴛᴇ ᴀ ᴍɪɴᴀʀ ᴘᴀʀᴀ ɢᴀɴᴀʀ ʜᴀᴅᴇs-ᴄᴏɪɴs", rowId: `${usedPrefix}minar3`},
     {title: "│💎│ᴍɪɴᴀʀ ᴅɪᴀᴍᴀɴᴛᴇs", description: "ᴘᴏɴᴛᴇ ᴀ ᴍɪɴᴀʀ ᴘᴀʀᴀ ɢᴀɴᴀʀ ᴅɪᴀᴍᴀɴᴛᴇs", rowId: `${usedPrefix}minar`},
     {title: "│💵│ᴄᴏᴍᴘʀᴀʀ", description: "ᴘᴜᴇᴅᴇs ᴄᴏᴍᴘʀᴀʀ ᴘʀᴇᴍɪᴜᴍ", rowId: `${usedPrefix}comprar`},
     {title: "│🌀│ʀᴇᴄᴏᴍᴘᴇɴsᴀ", description: "ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴅɪᴀʀɪᴀ ᴄᴏғғᴇʀ", rowId: `${usedPrefix}coffer`},
     {title: "│🍁│ʟɪsᴛᴘʀᴇᴍ", description: "ʟɪsᴛᴘʀᴇᴍ ʟɪsᴛᴀ ᴅᴇ ᴜsᴜᴀʀɪᴏs", rowId: `${usedPrefix}.listprem`},
     {title: "│📑│ʟɪsᴛᴀᴘʀᴇᴍɪᴜᴍ", description: "ʟɪsᴛᴀᴘʀᴇᴍɪᴜᴍ ʟɪsᴛᴀ ᴅᴇ ᴜsᴜᴀʀɪᴏs", rowId: `${usedPrefix}listapremium`},
     {title: "│⬆️│ᴘᴀsᴇ ᴘʀᴇᴍɪᴜᴍ", description: "ᴍᴇɴᴜ ᴅᴇ ᴄᴏᴍᴘʀᴀs", rowId: `${usedPrefix}pase premium`},
     {title: "│🏹│ᴄᴀᴢᴀ", description: "ᴄᴀᴢᴀᴅᴏʀ ᴄᴀᴢᴀ", rowId: `${usedPrefix}caza`},
     {title: "│🌀│ᴍɪɴᴀʀ ᴇxᴘᴇʀɪᴇɴᴄɪᴀ", description: "ᴘᴏɴᴛᴇ ᴀ ᴍɪɴᴀʀ ᴘᴀʀᴀ ɢᴀɴᴀʀ ᴇxᴘᴇʀɪᴇɴᴄɪᴀ", rowId: `${usedPrefix}minar2`},
     {title: "│🤖│ᴇsᴛᴀᴅᴏ ᴅᴇʟ ʙᴏᴛ", description: "ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ ᴅᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}Estado`},
     {title: "│📑│sᴇ ʜᴀ ᴜɴɪᴅᴏ ᴀ", description: "ʟɪsᴛᴀ ᴅᴏɴᴅᴇ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}grouplist`},
     {title: "│👹│ʟɪsᴛᴀ ᴅᴇ ʙɪɴᴀʀɪᴏs", description: "sᴇʟᴇᴄᴄɪᴏɴᴀ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴇɴᴠɪᴀʀ", rowId: `${usedPrefix}virus`},
     {title: "│🏓│ɢʀᴜᴘᴏs ᴏғɪᴄɪᴀʟᴇs", description: "ᴇɴʟᴀᴄᴇs ᴅᴇ ʟᴏs ɢʀᴜᴘᴏs ᴅᴇ ʜᴀᴅᴇs", rowId: `${usedPrefix}grupos`},
     {title: "│⏱️│ʜᴏʀᴀʀɪᴏ", description: "ʜᴏʀᴀʀɪᴏ ᴅᴇ ᴍᴇxɪᴄᴏ", rowId: `${usedPrefix}horario`},
     {title: "│🧿│ᴘᴀɢɪɴᴀs ᴅᴇ ɢɪᴛ", description: "ɢɪᴛ ᴏғɪᴄɪᴀʟ ᴅᴇ ʜᴀᴅᴇs ʏ ᴍɪᴋᴜ", rowId: `${usedPrefix}sc`},
     {title: "│📱│ɪɴғᴏ ᴍᴏᴠɪʟ", description: "ᴠᴇʀsɪᴏɴ ᴅᴇ ᴛᴇʟéғᴏɴᴏ", rowId: `${usedPrefix}speedtest`},
     {title: "│💎│ᴀʜᴏʀʀᴏs ᴅᴇ ᴅɪᴀᴍᴀɴᴛᴇs", description: "ᴛᴏᴛᴀʟ ᴅᴇ ᴅɪᴀᴍᴀɴᴛᴇs", rowId: `${usedPrefix}diamantes`},
     {title: "│🎉│ʀᴇᴄᴏᴍᴘᴇɴsᴀ ᴅɪᴀʀɪᴀ", description: "ᴜɴ ᴘᴇǫᴜᴇÑᴏ ʀᴇɢᴀʟᴏ ᴅᴇʟ ʙᴏᴛ", rowId: `${usedPrefix}claim`},
     {title: "│📑│ᴛᴀʙʟᴀ ᴅᴇ ᴄᴀʟɪғɪᴄᴀᴄɪᴏɴᴇs", description: "ᴍɪʀᴀ ᴛᴜ ʀᴇsᴜʟᴛᴀᴅᴏ", rowId: `${usedPrefix}leaderboard`},
     {title: "│📈│ᴛᴜ ɴɪᴠᴇʟ", description: "ʀᴇᴠɪsᴀ ᴇʟ ɴɪᴠᴇʟ ǫᴜᴇ ᴛɪᴇɴᴇs", rowId: `${usedPrefix}nivel`},
     {title: "│⛏️│ᴘᴏɴᴛᴇ ᴀ ᴍɪɴᴀʀ", description: "ᴀʟ ᴍɪɴᴀʀ ɢᴀɴᴀʀᴀs ᴜɴ ᴘʀᴇᴍɪᴏ", rowId: `${usedPrefix}minar`},
     {title: "│⚖️│ᴛᴜ ɴᴜᴍᴇʀᴏ ᴅᴇ sᴇʀɪᴇ", description: "sᴏʟᴏ ᴛᴇ ᴍᴀɴᴅᴀ sɪ ᴇsᴛᴀs ʀᴇɢɪsᴛʀᴀᴅᴏ", rowId: `${usedPrefix}myns`},
     {title: "│👩‍🏫│ᴠᴇʀɪғɪᴄᴀ ᴛᴜ ᴘᴇʀғɪʟ", description: "ᴛᴇ ᴍᴏsᴛʀᴀʀᴀ ᴛᴜ ғᴏʀᴍᴀᴄɪᴏɴ", rowId: `${usedPrefix}perfil`},
     {title: "│💻│ʀᴇɢɪsᴛʀᴀʀsᴇ", description: "ᴛᴇ ɴᴇᴄᴇsɪᴛᴏ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs", rowId: `${usedPrefix}Reg`},
     ]},{
     title: hades5 + '🍁𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐏𝐀𝐑𝐀 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐘 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑🍁' + hades6, 
     rows: [
     {title: "│🍀│ᴀᴄᴛɪᴠᴀʀ ᴡᴇʟᴄᴏᴍᴇ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}welcome`},
     {title: "│🍀│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴡᴇʟᴄᴏᴍᴇ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable welcome`},
     {title: "│🌐│ᴀᴄᴛɪᴠᴀʀ ᴘᴜʙʟɪᴄ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable public`},
     {title: "│🌐│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴘᴜʙʟɪᴄ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable public`},
     {title: "│☔│ᴀᴄᴛɪᴠᴀʀ ᴍᴏᴅᴏʜᴏʀɴʏ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable modohorny`},
     {title: "│☔│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴍᴏᴅᴏʜᴏʀɴʏ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable modohorny`},
     {title: "│🪀│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪʟɪɴᴋ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable antilink`},
     {title: "│🪀│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪʟɪɴᴋ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable antilink`},
     {title: "│🪀│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪʟɪɴᴋ2", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable antilink2`},
     {title: "│🪀│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪʟɪɴᴋ2", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable antilink2`},
     {title: "│📢│ᴀᴄᴛɪᴠᴀʀ ᴅᴇᴛᴇᴄᴛ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable detect`},
     {title: "│📢│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴅᴇᴛᴇᴄᴛ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable detect`},
     {title: "│📵│ᴀᴄᴛɪᴠᴀʀ ʀᴇsᴛʀɪᴄᴛ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable restrict`},
     {title: "│📵│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ʀᴇsᴛʀɪᴄᴛ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable restrict`},
     {title: "│💬│ᴀᴄᴛɪᴠᴀʀ ᴘᴄᴏɴʟʏ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable pconly`},
     {title: "│💬│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴘᴄᴏɴʟʏ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable pconly`},
     {title: "│🏢│ᴀᴄᴛɪᴠᴀʀ ɢᴄᴏɴʟʏ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable gconly`},
     {title: "│🏢│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ɢᴄᴏɴʟʏ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable gconly`},
     {title: "│✔️│ᴀᴄᴛɪᴠᴀʀ ᴀᴜᴛᴏʀᴇᴀᴅ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable autoread`},
     {title: "│❌│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀᴜᴛᴏʀᴇᴀᴅ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable autoread`},
     {title: "│🎧│ᴀᴄᴛɪᴠᴀʀ ᴀᴜᴅɪᴏs", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable audios`},
     {title: "│📵│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀᴜᴅɪᴏs", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable audios`},
     {title: "│✴️│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable antiviewonce`},
     {title: "│✴️│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable antiviewonce`},
     {title: "│🔖│ᴀᴄᴛɪᴠᴀʀ ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable autosticker`},
     {title: "│🔖│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable autosticker`},
     {title: "│📱│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴄᴀʟʟ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable anticall`},
     {title: "│📵│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴄᴀʟʟ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable anticall`},
     {title: "│🤡│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴛʀᴀʙᴀ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable antitraba`},
     {title: "│👹│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴛʀᴀʙᴀ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable antitraba`},
     {title: "│💢│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴀʀᴀʙᴇs", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable antiarabes`},
     {title: "│💢│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴀʀᴀʙᴇs", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable antiarabes`},
     {title: "│🤪│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴛᴏxɪᴄ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable antitoxic`},
     {title: "│🤪│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴛᴏxɪᴄ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable antitoxic`},
     {title: "│📵│ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}enable antiprivado`},
     {title: "│📵│ᴅᴇsᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ", description: "sᴏʟᴏ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴏ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴀᴅᴍɪɴ ᴏ ᴇʟ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ", rowId: `${usedPrefix}disable antiprivado`},
     {title: "│🗝️️│ᴜɴʙᴀɴᴄʜᴀᴛ", description: "ᴅᴇsʙᴀɴᴇᴀʀ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}unbanchat`},
     {title: "│🔑│ʙᴀɴᴄʜᴀᴛ", description: "ʙᴀɴᴇᴀʀ ɢʀᴜᴘᴏ", rowId: `${usedPrefix}banchat`},
     ]},{
     title: hades7 + '🌀𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒 𝐕𝐀𝐑𝐈𝐀𝐃𝐀𝐒🌀' + hades8, 
     rows: [
     {title: "│📊│ᴇɴᴄᴜᴇsᴛᴀ", description: "ᴄʀᴇᴀ ᴜɴᴀ ᴇɴᴄᴜᴇsᴛᴀ", rowId: `${usedPrefix}encuesta`},
     {title: "│📼│ǫᴜᴇᴍᴜsɪᴄᴀ", description: "ᴇᴛɪǫᴜᴇᴛᴀ ᴜɴ ᴀᴜᴅɪᴏ ᴏ ᴠɪᴅᴇᴏ ᴘᴀʀᴀ ᴇɴᴠɪᴀʀ ᴛᴜ ʀᴇsᴜʟᴛᴀᴅᴏ", rowId: `${usedPrefix}quemusica`},
     {title: "│📇│ᴄᴜᴇɴᴛᴀsᴏғɪᴄɪᴀʟᴇs", description: "ᴄᴜᴇɴᴛᴀs ᴏғɪᴄɪᴀʟᴇs", rowId: `${usedPrefix}cuentasoficiales`},    
     {title: "│📟│ᴄʀᴇᴀᴛᴜɴᴜᴍᴇʀᴏ", description: "ᴄʀᴇᴀʀ ɴúᴍᴇʀᴏs ᴠɪʀᴛᴜᴀʟᴇs", rowId: `${usedPrefix}creatunumero`},    
     {title: "│💾│ʀᴇᴄʟᴜᴛᴀᴍɪᴇɴᴛᴏ", description: "ʀᴇᴄʟᴜᴛᴀᴍɪᴇɴᴛᴏ", rowId: `${usedPrefix}reclutamiento`},
     {title: "│⬆️│ᴛéʀᴍɪɴᴏs ʏ ᴄᴏɴᴅɪᴄɪᴏɴᴇs", description: "ᴛᴇ ɪɴғᴏʀᴍᴀ ʟᴏs ᴛéʀᴍɪɴᴏs ᴘᴀʀᴀ ʟᴏs sᴜᴅ ʙᴏᴛs ᴅᴇ ʜᴀᴅᴇs", rowId: `${usedPrefix}términos`},
     {title: "│⛄│ǫᴜé ᴇs ᴜɴ ʙᴏᴛ ", description: "ᴛᴇ ɪɴғᴏʀᴍᴀʀá ᴘᴀʀᴀ ǫᴜé sɪʀᴠᴇ ʏ ᴅᴇ ǫᴜé ғᴏʀᴍᴀ ʟᴏ ᴘᴜᴇᴅᴇs ᴜsᴀʀ", rowId: `${usedPrefix}queesunbot`},
     {title: "│📝│ɪɴsᴛᴀʟᴀʀʙᴏᴛ", description: "ɪɴsᴛᴀʟᴀᴄɪóɴ ᴅᴇʟ ʙᴏᴛ ɪɴsᴛᴀʟᴀʀʙᴏᴛ", rowId: `${usedPrefix}instalarbot`},
     {title: "│🎧│ᴍᴇɴᴜ ᴀᴜᴅɪᴏs", description: "ᴍᴜᴇsᴛʀᴀ ʟᴀ ʟɪsᴛᴀ ᴅᴇ ᴀᴜᴅɪᴏs", rowId: `${usedPrefix}menu2`},
     ]},{
     title: hades9 + '🏞️𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐀𝐍𝐈𝐌𝐄⛄' + hades10, 
     rows: [
     {title: "│🎋│ʜᴀᴅᴇs", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ʜᴀᴅᴇs", rowId: `${usedPrefix}hades`},
     {title: "│⛄│ᴀɴɴᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴀɴɴᴀ", rowId: `${usedPrefix}anna`},
     {title: "│🎑│ᴀsᴜɴᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴀsᴜɴᴀ", rowId: `${usedPrefix}asuna`},
     {title: "│🎋│ᴀʏᴜᴢᴀᴡᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴀʏᴜᴢᴀᴡᴀ", rowId: `${usedPrefix}ayuzawa`},
     {title: "│⛄│ᴀᴋɪʏᴀᴍᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴀᴋɪʏᴀᴍᴀ", rowId: `${usedPrefix}akiyama`},
     {title: "│🎍│ʙᴏʀᴜᴛᴏ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ʙᴏʀᴜᴛᴏ", rowId: `${usedPrefix}boruto`},
     {title: "│🎑│ᴄʜɪʜᴏ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴄʜɪʜᴏ", rowId: `${usedPrefix}chiho`},
     {title: "│🎋│ᴄʜɪᴛᴏɢᴇ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴄʜɪᴛᴏɢᴇ", rowId: `${usedPrefix}chitoge`},
     {title: "│⛄│ᴅᴇɪᴅᴀʀᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴅᴇɪᴅᴀʀᴀ", rowId: `${usedPrefix}deidara`},
     {title: "│🎍│ᴇʀᴢᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴇʀᴢᴀ", rowId: `${usedPrefix}erza`},
     {title: "│🎑│ᴇʟᴀɪɴᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴇʟᴀɪɴᴀ", rowId: `${usedPrefix}elaina`},
     {title: "│🎋│ᴇʙᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴇʙᴀ", rowId: `${usedPrefix}eba`},
     {title: "│⛄│ᴇᴍɪʟɪᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴇᴍɪʟɪᴀ", rowId: `${usedPrefix}emilia`},
     {title: "│🎍│ʜᴇsᴛɪᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ʜᴇsᴛɪᴀ", rowId: `${usedPrefix}hestia`},
     {title: "│🎑│ʜɪɴᴀᴛᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ʜɪɴᴀᴛᴀ", rowId: `${usedPrefix}hinata`},
     {title: "│🎋│ɪɴᴏʀɪ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ɪɴᴏʀɪ", rowId: `${usedPrefix}inori`},
     {title: "│⛄│ɪsᴜᴢᴜ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ɪsᴜᴢᴜ", rowId: `${usedPrefix}isuzu`},
     {title: "│🎍│ɪᴛᴀᴄʜɪ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ɪᴛᴀᴄʜɪ", rowId: `${usedPrefix}itachi`},
     {title: "│🎑│ɪᴛᴏʀɪ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ɪᴛᴏʀɪ", rowId: `${usedPrefix}itori`},
     {title: "│🎋│ᴋᴀɢᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴋᴀɢᴀ", rowId: `${usedPrefix}kaga`},
     {title: "│⛄│ᴋᴀɢᴜʀᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴋᴀɢᴜʀᴀ", rowId: `${usedPrefix}kagura`},
     {title: "│🎍│ᴋᴀᴏʀɪ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴋᴀᴏʀɪ", rowId: `${usedPrefix}kaori`},
     {title: "│🎑│ᴋᴇɴᴇᴋɪ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴋᴇɴᴇᴋɪ", rowId: `${usedPrefix}keneki`},
     {title: "│🎋│ᴋᴏᴛᴏʀɪ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴋᴏᴛᴏʀɪ", rowId: `${usedPrefix}kotori`},
     {title: "│⛄│ᴋᴜʀᴜᴍɪ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴋᴜʀᴜᴍɪ", rowId: `${usedPrefix}kurumi`},
     {title: "│🎍│ᴍᴀᴅᴀʀᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴍᴀᴅᴀʀᴀ", rowId: `${usedPrefix}madara`},
     {title: "│🎑│ᴍɪᴋᴀsᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴍɪᴋᴀsᴀ", rowId: `${usedPrefix}mikasa`},
     {title: "│🎋│ᴍɪᴋᴜ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴍɪᴋᴜ", rowId: `${usedPrefix}miku`},
     {title: "│⛄│ᴍɪɴᴀᴛᴏ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴍɪɴᴀᴛᴏ", rowId: `${usedPrefix}minato`},
     {title: "│🎍│ɴᴀʀᴜᴛᴏ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ɴᴀʀᴜᴛᴏ", rowId: `${usedPrefix}naruto`},
     {title: "│🎑│ɴᴇᴢᴜᴋᴏ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ɴᴇᴢᴜᴋᴏ", rowId: `${usedPrefix}nezuko`},
     {title: "│🎋│sᴀɢɪʀɪ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ sᴀɢɪʀɪ", rowId: `${usedPrefix}sagiri`},
     {title: "│⛄│sᴀsᴜᴋᴇ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ sᴀsᴜᴋᴇ", rowId: `${usedPrefix}sasuke`},
     {title: "│🎍│sᴀᴋᴜʀᴀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ sᴀᴋᴜʀᴀ", rowId: `${usedPrefix}sakura`},
     {title: "│🎑│ᴄᴏsᴘʟᴀʏ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴄᴏsᴘʟᴀʏ", rowId: `${usedPrefix}cosplay`},
     {title: "│🎋│ʙʟᴀᴄᴋᴘɪɴᴋ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ʙʟᴀᴄᴋᴘɪɴᴋ", rowId: `${usedPrefix}blackpink`},
     {title: "│⛄│ɴᴀᴠɪᴅᴀᴅ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ɴᴀᴠɪᴅᴀᴅ", rowId: `${usedPrefix}navidad`},
     {title: "│🎍│ɴᴇᴋᴏ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ɴᴇᴋᴏ", rowId: `${usedPrefix}neko`},
     {title: "│🎑│ɪᴛᴢʏ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ɪᴛᴢʏ", rowId: `${usedPrefix}itzy`},
     {title: "│🎋│ʟᴏʟɪ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ʟᴏʟɪ", rowId: `${usedPrefix}loli`},
     {title: "│⛄️│ʟᴏʟɪᴠɪᴅ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ʟᴏʟɪᴠɪᴅ", rowId: `${usedPrefix}lolivid`},
     {title: "│🎍│ᴡᴀɪғᴜ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ᴡᴀɪғᴜ", rowId: `${usedPrefix}waifu`},
     {title: "│🎑│ʜᴀᴄᴋᴇʀ", description: "ɪᴍᴀɢᴇɴᴇs ᴅᴇ ᴀɴɪᴍᴇ ᴅᴇ ʜᴀᴄᴋᴇʀ", rowId: `${usedPrefix}hacker`},
     ]},{
     title: hades11 + '🎧𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀📽' + hades12, 
     rows: [
     {title: "│🗂️│ᴅᴏᴡɴʟᴏᴅᴇʀ ғᴀᴄᴇʙᴏᴏᴋ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ʟɪɴᴋs ғᴀᴄᴇʙᴏᴏᴋ", rowId: `${usedPrefix}facebook`},   {title: "│🗃️│ᴅᴏᴡɴʟᴏᴅᴇʀ ɢᴅʀɪᴠᴇ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ʟɪɴᴋs ɢᴅʀɪᴠᴇ", rowId: `${usedPrefix}gdrive`},
     {title: "│📁│ ᴅᴏᴡɴʟᴏᴅᴇʀ ɢɪᴛᴄʟᴏɴᴇ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ʟɪɴᴋs ɢɪᴛᴄʟᴏɴᴇ", rowId: `${usedPrefix}gitclone`},
     {title: "│🗂️│ ᴅᴏᴡɴʟᴏᴅᴇʀ ɪɴsᴛᴀɢʀᴀᴍ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ʟɪɴᴋs ɪɴsᴛᴀɢʀᴀᴍ", rowId: `${usedPrefix}Instagram`},
     {title: "│🗃️│ᴅᴏᴡɴʟᴏᴅᴇʀ ᴛɪᴋᴛᴏᴋ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ʟɪɴᴋs ᴛɪᴋᴛᴏᴋ", rowId: `${usedPrefix}tiktok`},
     {title: "│📁│ ᴅᴏᴡɴʟᴏᴅᴇʀ ɪɢsᴛᴀʟᴋ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ᴛÍᴛᴜʟᴏ ɪɢsᴛᴀʟᴋ", rowId: `${usedPrefix}igstalk`},
     {title: "│🗂️│ᴅᴏᴡɴʟᴏᴅᴇʀ ᴡᴀʟʟᴘᴀᴘᴇʀ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ᴛÍᴛᴜʟᴏ ᴡᴀʟʟᴘᴀᴘᴇʀ", rowId: `${usedPrefix}Wallpaper`},
     {title: "│🗃️│ᴅᴏᴡɴʟᴏᴅᴇʀ sᴛɪᴄᴋᴇʀᴘᴀᴄᴋ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ sᴛɪᴄᴋᴇʀᴘᴀᴄᴋ", rowId: `${usedPrefix}stickerpack`},
     {title: "│📁│ᴅᴏᴡɴʟᴏᴅᴇʀ ᴘʟᴀʏ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ᴛÍᴛᴜʟᴏ ᴘʟᴀʏ", rowId: `${usedPrefix}play`},
     {title: "│🗂️│ᴅᴏᴡɴʟᴏᴅᴇʀ ᴘʟᴀʏ3", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ᴛÍᴛᴜʟᴏ ᴘʟᴀʏ3", rowId: `${usedPrefix}play3`},
     {title: "│🗃️│ᴅᴏᴡɴʟᴏᴅᴇʀ ᴘʟᴀʏ.1", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ᴛÍᴛᴜʟᴏ ᴘʟᴀʏ.1", rowId: `${usedPrefix}play.1`},
     {title: "│📁│ᴅᴏᴡɴʟᴏᴅᴇʀ ᴘʟᴀʏ.2", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ᴛÍᴛᴜʟᴏ ᴘʟᴀʏ.2", rowId: `${usedPrefix}play.2`},
     {title: "│🗃️│ᴅᴏᴡɴʟᴏᴅᴇʀ ɪɢʜɪsᴛᴏʀɪᴀ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ᴛÍᴛᴜʟᴏ ɪɢʜɪsᴛᴏʀɪᴀ", rowId: `${usedPrefix}historias`},
     {title: "│🗂️│ᴅᴏᴡɴʟᴏᴅᴇʀ ɪᴍᴀɢᴇ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ᴛÍᴛᴜʟᴏ ɪᴍᴀɢᴇ", rowId: `${usedPrefix}imagen`},
     {title: "│📁│ᴅᴏᴡɴʟᴏᴅᴇʀ ᴍᴇᴅɪᴀғɪʀᴇ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ʟɪɴᴋs ᴍᴇᴅɪᴀғɪʀᴇ", rowId: `${usedPrefix}mediafire`},
     {title: "│🗃️│ᴅᴏᴡɴʟᴏᴅᴇʀ ᴘɪɴᴛᴇʀᴇsᴛ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ᴛÍᴛᴜʟᴏ ᴛÍᴛᴜʟᴏ ᴘɪɴᴛᴇʀᴇsᴛ", rowId: `${usedPrefix}pinterest`},
     {title: "│🗂️│ᴅᴏᴡɴʟᴏᴅᴇʀ ᴛɪᴋᴛᴏᴋғᴏᴛᴏ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ʟɪɴᴋs ᴛɪᴋᴛᴏᴋғᴏᴛᴏ", rowId: `${usedPrefix}tiktokfoto`},
     {title: "│📁│ᴅᴏᴡɴʟᴏᴅᴇʀ sᴏᴜɴᴅᴄʟᴏᴜᴅ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ᴛÍᴛᴜʟᴏ sᴏᴜɴᴅᴄʟᴏᴜᴅ", rowId: `${usedPrefix}cover`},
     {title: "│🗃️│ᴅᴏᴡɴʟᴏᴅᴇʀ ʀɪɴɢᴛᴏɴᴇ", description: "ᴅᴇsᴄᴀʀɢᴀs ᴄᴏɴ ᴛÍᴛᴜʟᴏ ʀɪɴɢᴛᴏɴᴇ", rowId: `${usedPrefix}ringtone`},
     ]},{
     title: hades13 + '🎑𝐑𝐄𝐓𝐎𝐒 𝐘 𝐉𝐔𝐄𝐆𝐎𝐒🎑' + hades14, 
     rows: [
     {title: "│🔮│ғʀᴀsᴇs", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ғʀᴀsᴇs", rowId: `${usedPrefix}frases`},
     {title: "│🔮│ғʀᴀsᴇᴛᴇsᴛ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ғʀᴀsᴇᴛᴇsᴛ", rowId: `${usedPrefix}frasetest`},
     {title: "│🔮│ɢᴀʏ2", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ɢᴀʏ2", rowId: `${usedPrefix}gay2`},
     {title: "│🔮│ʟᴇsʙɪᴀɴᴀ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ʟᴇsʙɪᴀɴᴀ", rowId: `${usedPrefix}lesbiana`},
     {title: "│🔮│ᴘᴀᴊᴇʀᴏ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴘᴀᴊᴇʀᴏ", rowId: `${usedPrefix}pajero`},
     {title: "│🔮│ᴘᴀᴊᴇʀᴀ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴘᴀᴊᴇʀᴀ", rowId: `${usedPrefix}pajera`},
     {title: "│🔮│ᴘᴜᴛᴏ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴘᴜᴛᴏ", rowId: `${usedPrefix}puto`},
     {title: "│🔮│ᴘᴜᴛᴀ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴘᴜᴛᴀ", rowId: `${usedPrefix}puta`},
     {title: "│🔮│ᴍᴀɴᴄᴏ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴍᴀɴᴄᴏ", rowId: `${usedPrefix}manco`},
     {title: "│🔮│ᴍᴀɴᴄᴀ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴍᴀɴᴄᴀ", rowId: `${usedPrefix}manca`},
     {title: "│🔮│ʀᴀᴛᴀ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ʀᴀᴛᴀ", rowId: `${usedPrefix}rata`},
     {title: "│🔮│ᴘʀᴏsᴛɪᴛᴜᴛᴀ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴘʀᴏsᴛɪᴛᴜᴛᴀ", rowId: `${usedPrefix}prostituta`},
     {title: "│🔮│ᴘʀᴏsᴛɪᴛᴜᴛᴏ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴘʀᴏsᴛɪᴛᴜᴛᴏ", rowId: `${usedPrefix}prostituto`},
     {title: "│🔮│ᴅᴏxxᴇᴏ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴅᴏxxᴇᴏ", rowId: `${usedPrefix}Doxxeo`},
     {title: "│🔮│ғᴏʀᴍᴀʀᴘᴀʀᴇᴊᴀ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ғᴏʀᴍᴀʀᴘᴀʀᴇᴊᴀ", rowId: `${usedPrefix}formarpareja`},
     {title: "│🔮│ɢᴀʏ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ɢᴀʏ", rowId: `${usedPrefix}gay`},
     {title: "│🔮│ʟᴏᴠᴇ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ʟᴏᴠᴇ", rowId: `${usedPrefix}love`},
     {title: "│🔮│ᴘʀᴇɢᴜɴᴛᴀ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴘʀᴇɢᴜɴᴛᴀ", rowId: `${usedPrefix}pregunta`},
     {title: "│🔮│ʀᴇᴛᴏ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ʀᴇᴛᴏ", rowId: `${usedPrefix}reto`},
     {title: "│🔮│ᴛᴏᴘ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴛᴏᴘ", rowId: `${usedPrefix}top`},
     {title: "│🔮│ᴛᴏᴘᴏᴛᴀᴋᴜs", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴛᴏᴘᴏᴛᴀᴋᴜs", rowId: `${usedPrefix}topotakus`},
     {title: "│🔮│ᴛᴏᴘɢᴀʏs", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴛᴏᴘɢᴀʏs", rowId: `${usedPrefix}`},
     {title: "│🔮│ᴠᴇʀᴅᴀᴅ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ᴠᴇʀᴅᴀᴅ", rowId: `${usedPrefix}Verdad`},
     {title: "│🔮│ғᴏʟʟᴀʀ", description: "ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴅɪᴠᴇʀᴛɪʀsᴇ ᴛᴇxᴛᴏ ғᴏʟʟᴀʀ", rowId: `${usedPrefix}Follar`},
     ]},{
     title: hades15 + '☔𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 +18🔞' + hades16, 
     rows: [
     {title: "│☔│ɴsғᴡʟᴏʟɪ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ɴsғᴡʟᴏʟɪ", rowId: `${usedPrefix}nsfwloli`},
     {title: "│😈│ɴsғᴡғᴏᴏᴛ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ɴsғᴡғᴏᴏᴛ", rowId: `${usedPrefix}nsfwfoot`},
     {title: "│🔥│ɴsғᴡᴀss", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ɴsғᴡᴀss", rowId: `${usedPrefix}nsfwass`},
     {title: "│☔│ɴsғᴡʙᴅsᴍ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ɴsғᴡʙᴅsᴍ", rowId: `${usedPrefix}nsfwbdsm`},
     {title: "│😈│ɴsғᴡᴄᴜᴍ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ɴsғᴡᴄᴜᴍ", rowId: `${usedPrefix}nsfwcum`},
     {title: "│🔥│ɴsғᴡᴇʀᴏ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ɴsғᴡᴇʀᴏ", rowId: `${usedPrefix}nsfwero`},
     {title: "│☔│ɴsғᴡғᴇᴍᴅᴏᴍ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ɴsғᴡғᴇᴍᴅᴏᴍ", rowId: `${usedPrefix}nsfwfemdom`},
     {title: "│😈│ɴsғᴡғᴏᴏᴛ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ɴsғᴡғᴏᴏᴛ", rowId: `${usedPrefix}nsfwfoot`},
     {title: "│🔥│ɴsғᴡɢʟss", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ɴsғᴡɢʟss", rowId: `${usedPrefix}nsfwglss`},
     {title: "│☔│ɴsғᴡᴏʀɢʏ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ɴsғᴡᴏʀɢʏ", rowId: `${usedPrefix}nsfworgy`},
     {title: "│😈│ʏᴜʀɪ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ʏᴜʀɪ", rowId: `${usedPrefix}yuri`},
     {title: "│🔥│ʏᴜʀɪ2", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ʏᴜʀɪ2", rowId: `${usedPrefix}yuri2`},
     {title: "│☔│ʏᴀᴏɪ", description: "ʏᴀᴏɪ", rowId: `${usedPrefix}yaoi`},
     {title: "│😈│ʏᴀᴏɪ2", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ʏᴀᴏɪ2", rowId: `${usedPrefix}yaoi2`},
     {title: "│🔥│ᴘᴀɴᴛɪᴇs", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ᴘᴀɴᴛɪᴇs", rowId: `${usedPrefix}panties`},
     {title: "│☔│ᴛᴇᴛᴀs", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ᴛᴇᴛᴀs", rowId: `${usedPrefix}tetas`},
     {title: "│😈│ʙᴏᴏᴛʏ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ʙᴏᴏᴛʏ", rowId: `${usedPrefix}booty`},
     {title: "│🔥│ᴇᴄᴄʜɪ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ᴇᴄᴄʜɪ", rowId: `${usedPrefix}ecchi`},
     {title: "│☔│ғᴜʀʀᴏ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ғᴜʀʀᴏ", rowId: `${usedPrefix}furro`},
     {title: "│😈│ʜᴇɴᴛᴀɪ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ʜᴇɴᴛᴀɪ", rowId: `${usedPrefix}hentai`},
     {title: "│🔥│ᴛʀᴀᴘɪᴛᴏ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ᴛʀᴀᴘɪᴛᴏ", rowId: `${usedPrefix}trapito`},
     {title: "│☔│ɪᴍᴀɢᴇɴʟᴇsʙɪᴀɴs", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ɪᴍᴀɢᴇɴʟᴇsʙɪᴀɴs", rowId: `${usedPrefix}imagenlesbians`},
     {title: "│😈│ᴘᴇɴᴇ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ᴘᴇɴᴇ", rowId: `${usedPrefix}pene`},
     {title: "│🔥│ᴘᴏʀɴᴏ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ᴘᴏʀɴᴏ", rowId: `${usedPrefix}porno`},
     {title: "│☔│ʀᴀɴᴅᴏᴍxxx", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ʀᴀɴᴅᴏᴍxxx", rowId: `${usedPrefix}randomxxx`},
     {title: "│😈│ᴘᴇᴄʜᴏs", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ᴘᴇᴄʜᴏs", rowId: `${usedPrefix}pechos`},
     {title: "│🔥│xᴠɪᴅᴇᴏsᴅʟ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ xᴠɪᴅᴇᴏsᴅʟ", rowId: `${usedPrefix}xvideosdl`}, 
     {title: "│☔│ᴘᴏʀʜᴜʙsᴇᴀʀᴄʜ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ᴘᴏʀʜᴜʙsᴇᴀʀᴄʜ", rowId: `${usedPrefix}porhubsearch`},
     {title: "│😈│xɴxxᴅʟ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ xɴxxᴅʟ", rowId: `${usedPrefix}xnxxdl`}, 
     {title: "│🔥│ᴠíᴅᴇᴏxxx", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ᴠíᴅᴇᴏxxx", rowId: `${usedPrefix}vídeoxxx`}, 
     {title: "│☔│ᴛɪᴋᴛᴏᴋxxx", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ᴛɪᴋᴛᴏᴋxxx", rowId: `${usedPrefix}tiktokxxx`},
     {title: "│😈│ᴘᴀᴄᴋ", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ᴘᴀᴄᴋ", rowId: `${usedPrefix}pack`},
     {title: "│🔥│ᴘᴀᴄᴋ2", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ᴘᴀᴄᴋ2", rowId: `${usedPrefix}pack2`},
     {title: "│☔│ᴘᴀᴄᴋ3", description: "ᴄᴏᴍᴀɴᴅᴏs +18 ᴅᴇ ᴘᴀᴄᴋ3", rowId: `${usedPrefix}pack3`},
     ]},{
     title: hades17 + '🍃𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐏𝐀𝐑𝐀 𝐃𝐈𝐒𝐓𝐎𝐑𝐒𝐈𝐎𝐍𝐀𝐑 𝐋𝐀 𝐕𝐎𝐙🍃' + hades18, 
     rows: [
     {title: "│🎤│ᴛᴛs", description: "ᴛᴛs", rowId: `${usedPrefix}tts`},
     {title: "│🎤│ᴛᴏᴠɪᴅᴇᴏ", description: "ᴛᴏᴠɪᴅᴇᴏ", rowId: `${usedPrefix}tovideo`}, 
     {title: "│🎤│ᴘᴛᴛ", description: "ʀᴇsᴘᴏɴᴅᴇ ᴀ ᴜɴ sᴛɪᴄᴋᴇʀ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀʟᴏ ᴇɴ ᴠɪᴅᴇᴏ ᴘᴛᴛ", rowId: `${usedPrefix}ptt`},  
     {title: "│🎤│ᴍᴘ3", description: "ᴠɪᴅᴇᴏ ᴏ ᴀᴜᴅɪᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀʟᴏ ᴇɴ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ ᴍᴘ3", rowId: `${usedPrefix}mp3`},          
     {title: "│🎤│ᴛᴏɪᴍɢ", description: "ᴠɪᴅᴇᴏ ᴏ ᴀᴜᴅɪᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀʟᴏ ᴇɴ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ ᴛᴏɪᴍɢ", rowId: `${usedPrefix}toimg`},
     {title: "│🎤│ᴛᴏɢɪғᴀᴜᴅ", description: "sᴇʟᴇᴄᴄɪᴏɴᴀ ᴇʟ sᴛɪᴄᴋᴇʀ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀʟᴀ ᴇɴ ɪᴍᴀɢᴇɴ ᴛᴏɢɪғᴀᴜᴅ", rowId: `${usedPrefix}togifaud`}, 
     {title: "│🎤│ʙᴀss", description: "  ᴇsᴄʀɪʙᴇ ᴇʟ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ʟᴀ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ ʙᴀss", rowId: `${usedPrefix}bass`}, 
     {title: "│🎤│ʙʟᴏᴡɴ", description: "  ᴇsᴄʀɪʙᴇ ᴇʟ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ʟᴀ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ ʙʟᴏᴡɴ", rowId: `${usedPrefix}blown`},  
     {title: "│🎤│ᴅᴇᴇᴘ", description: "  ᴇsᴄʀɪʙᴇ ᴇʟ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ʟᴀ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ ᴅᴇᴇᴘ", rowId: `${usedPrefix}deep`},
     {title: "│🎤│ᴇᴀʀʀᴀᴘᴇ", description: "  ᴇsᴄʀɪʙᴇ ᴇʟ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ʟᴀ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ ᴇᴀʀʀᴀᴘᴇ", rowId: `${usedPrefix}earrape`},
     {title: "│🎤│ғᴀs?ᴛ", description: "  ᴇsᴄʀɪʙᴇ ᴇʟ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ʟᴀ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ ғᴀs?ᴛ", rowId: `${usedPrefix}fas?t`}, 
     {title: "│🎤│ɴɪɢʜᴛᴄᴏʀᴇ", description: "  ᴇsᴄʀɪʙᴇ ᴇʟ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ʟᴀ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ ɴɪɢʜᴛᴄᴏʀᴇ", rowId: `${usedPrefix}nightcore`},  
     {title: "│🎤│ʀᴇᴠᴇʀsᴇ", description: "  ᴇsᴄʀɪʙᴇ ᴇʟ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ʟᴀ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ ʀᴇᴠᴇʀsᴇ", rowId: `${usedPrefix}reverse`},     
     {title: "│🎤│ʀᴏʙᴏᴛ", description: "  ᴇsᴄʀɪʙᴇ ᴇʟ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ʟᴀ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ ʀᴏʙᴏᴛ", rowId: `${usedPrefix}robot`},
     {title: "│🎤│sʟᴏᴡ", description: "  ᴇsᴄʀɪʙᴇ ᴇʟ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ʟᴀ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ sʟᴏᴡ", rowId: `${usedPrefix}slow`}, 
     {title: "│🎤│sᴍᴏᴏᴛʜ", description: "  ᴇsᴄʀɪʙᴇ ᴇʟ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ʟᴀ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ sᴍᴏᴏᴛʜ", rowId: `${usedPrefix}smooth`}, 
     {title: "│🎤│ᴛᴜᴘᴀɪ", description: "  ᴇsᴄʀɪʙᴇ ᴇʟ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ʟᴀ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ ᴛᴜᴘᴀɪ", rowId: `${usedPrefix}tupai`},  
     {title: "│🎤│sǫᴜɪʀʀᴇʟ", description: "  ᴇsᴄʀɪʙᴇ ᴇʟ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ʟᴀ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ sǫᴜɪʀʀᴇʟ", rowId: `${usedPrefix}squirrel`},
     {title: "│🎤│ᴄʜɪᴘᴍᴜɴᴋ", description: "  ᴇsᴄʀɪʙᴇ ᴇʟ ᴛᴇxᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛɪʀ ʟᴀ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ ᴄʜɪᴘᴍᴜɴᴋ", rowId: `${usedPrefix}chipmunk`},
     ]},{
     title: hades19 + '💎𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐏𝐀𝐑𝐀 𝐋𝐀 𝐀𝐃𝐌𝐈𝐍𝐈 𝐎 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎💎' + hades20, 
     rows: [
     {title: "│🔓│ᴀʙʀɪʀ ɢʀᴏᴜᴘ", description: "ᴇsᴛá ᴄᴏɴғɪɢᴜʀᴀᴄɪóɴ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴀ ᴘᴏʀ ᴜɴ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴏ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ᴅᴇʟ ʙᴏᴛ ᴀʙʀɪʀ ɢʀᴏᴜᴘ", rowId: `${usedPrefix}group abrir`}, 
     {title: "│🔒│ᴄᴇʀʀᴀʀ ɢʀᴏᴜᴘ", description: "ᴇsᴛá ᴄᴏɴғɪɢᴜʀᴀᴄɪóɴ ᴘᴜᴇᴅᴇ sᴇʀ ᴜsᴀᴅᴀ ᴘᴏʀ ᴜɴ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴏ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ ᴅᴇʟ ʙᴏᴛ ᴄᴇʀʀᴀʀ ɢʀᴏᴜᴘ", rowId: `${usedPrefix}group cerrar`},  
     {title: "│🕰️│ɢʀᴏᴜᴘᴛɪᴍᴇ", description: "ᴛɪᴇᴍᴘᴏ ᴅᴇ ᴄᴏɴғɪɢᴜʀᴀᴄɪóɴ ɢʀᴏᴜᴘᴛɪᴍᴇ", rowId: `${usedPrefix}grouptime`},          
     {title: "│📜│ᴀᴅᴍɪɴs", description: "ɪɴᴠᴏᴄᴀʀ ᴀʟ ᴀᴅᴍɪɴ ᴀᴅᴍɪɴs", rowId: `${usedPrefix}admins`},
     {title: "│🔆│ᴅᴇsᴛʀᴀʙᴀ", description: "ᴅᴇsᴛʀᴀʙᴀ ᴛᴜ ᴛᴇʟéғᴏɴᴏ ᴅᴇsᴛʀᴀʙᴀ", rowId: `${usedPrefix}destraba`}, 
     {title: "│👻│ғᴀɴᴛᴀsᴍᴀs", description: "ʟɪsᴛᴀ ᴅᴇ ғᴀɴᴛᴀsᴍᴀs", rowId: `${usedPrefix}fantasmas`}, 
     {title: "│✳️│ɴᴏᴛɪғɪᴄᴀʀ", description: "ᴇᴛɪǫᴜᴇᴛᴀ ᴀʟɢᴏ ᴘᴀʀᴀ ǫᴜᴇ éʟ ʙᴏᴛ ʟᴏ ʀᴇᴇɴᴠɪé ɴᴏᴛɪғɪᴄᴀʀ", rowId: `${usedPrefix}notificar`},
     {title: "│❇️│ɪɴғᴏɢʀᴜᴘᴏ", description: "ɪɴғᴏʀᴍᴀᴄɪóɴ ᴅᴇʟ ɢʀᴜᴘᴏ ɪɴғᴏɢʀᴜᴘᴏ", rowId: `${usedPrefix}infogrupo`},
     {title: "│📵│sᴀᴄᴀʀ", description: "ᴇᴛɪǫᴜᴇᴛᴀ ᴀ ʟᴀ ᴘᴇʀsᴏɴᴀ ᴘᴀʀᴀ sᴀᴄᴀʀ", rowId: `${usedPrefix}sacar`}, 
     {title: "│🪀│ʟɪɴᴋ", description: " ᴘᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ʟɪɴᴋ ᴘᴀʀᴀ ǫᴜᴇ ᴛᴇ ᴍᴀɴᴅᴇ ᴇɴ ᴇɴʟᴀᴄᴇ ᴅᴇʟ ɢʀᴜᴘᴏ ʟɪɴᴋ", rowId: `${usedPrefix}link`},  
     {title: "│🌐│ʟɪsᴛᴡᴀʀɴ", description: "ᴜsᴜᴀʀɪᴏs  ᴀᴛʀᴇᴠɪᴅᴏs ʟɪsᴛᴡᴀʀɴ", rowId: `${usedPrefix}listwarn`},   
     {title: "│💎│ᴅᴀʀᴀᴅᴍɪɴ", description: "ᴜsᴏ ᴘʀɪᴠᴀᴅᴏ ᴅᴀʀᴀᴅᴍɪɴ", rowId: `${usedPrefix}daradmin`},
     {title: "│🙌│sᴇᴛʙʏᴇ", description: "ᴘᴜᴇᴅᴇs ᴄᴏɴғɪɢᴜʀᴀʀ ʟᴀ ᴅᴇsᴘᴇᴅɪᴅᴀ sᴇᴛʙʏᴇ", rowId: `${usedPrefix}setbye`}, 
     {title: "│❇️│sᴇᴛᴅᴇsᴋ", description: "sᴛɪᴄᴋᴇʀs sᴇᴛᴅᴇsᴋ", rowId: `${usedPrefix}setdesk`}, 
     {title: "│✍️│sᴇᴛɴᴀᴍᴇ", description: "ɪɴɢʀᴇsᴀ ɴᴏᴍʙʀᴇ ǫᴜé ᴅᴇsᴇᴀs sᴇᴀ ᴜɴ ɴᴜᴇᴠᴏ ɴᴏᴍʙʀᴇ ᴅᴇʟ ɢʀᴜᴘᴏ sᴇᴛɴᴀᴍᴇ", rowId: `${usedPrefix}setname`},  
     {title: "│🌉│sᴇᴛᴘᴘ", description: "sᴇʟᴇᴄᴄɪᴏɴᴀ ᴜɴᴀ ɪᴍᴀɢᴇɴ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴘᴀʀᴀ ᴄᴀᴍʙɪᴀʀ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ sᴇᴛᴘᴘ", rowId: `${usedPrefix}setpp`},
     {title: "│✍️│sᴇᴛᴡᴇʟᴄᴏᴍᴇ", description: "ᴘᴜᴇᴅᴇs ᴄᴏɴғɪɢᴜʀᴀʀ ʟᴀ ʙɪᴇɴᴠᴇɴɪᴅᴀ sᴇᴛᴡᴇʟᴄᴏᴍᴇ", rowId: `${usedPrefix}setwelcome`}, 
     {title: "│📣│ᴛᴀɢᴀʟʟ", description: "ɪɴᴠᴏᴄᴀ ᴀ ᴛᴏᴅᴏs ᴛᴀɢᴀʟʟ", rowId: `${usedPrefix}tagall`},  
     {title: "│👥│ᴜɴᴡᴀʀɴ", description: "ᴇᴛɪǫᴜᴇᴛᴀ ᴀ ᴜɴᴀ ᴘᴇʀsᴏɴᴀ ᴜɴᴡᴀʀɴ", rowId: `${usedPrefix}unwarn`},
     {title: "│👥│ᴀᴅᴠᴇʀᴛɪʀ", description: "ᴇᴛɪǫᴜᴇᴛᴀ ᴀ ᴜɴᴀ ᴘᴇʀsᴏɴᴀ ᴀᴅᴠᴇʀᴛɪʀ", rowId: `${usedPrefix}advertir`},
     {title: "│🎲│ᴅᴀᴅᴏ", description: "ᴛᴇ ᴇɴᴠɪᴀʀᴀ sᴛɪᴄᴋᴇʀs ᴅᴇ ᴅᴀᴅᴏ", rowId: `${usedPrefix}dado`}, 
     ]},{
     title: hades21 + '🥰𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 𝐄𝐌𝐎𝐉𝐈𝐒 𝐘 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒😉' + hades22, 
     rows: [
     {title: "│🙃│ᴇᴍᴏᴊɪᴍɪx", description: "ᴄᴏɴᴠɪᴇʀᴛᴇ ᴇᴍᴏᴊɪs ᴇɴ sᴛɪᴄᴋᴇʀs  ᴇᴍᴏᴊɪᴍɪx", rowId: `${usedPrefix}emojimix`}, 
     {title: "│😘│ʙᴇsᴏ", description: "ᴇᴛɪǫᴜᴇᴛᴀ ᴀ ʟᴀ ᴘᴇʀsᴏɴᴀ ǫᴜᴇ ǫᴜɪᴇʀᴇs ʙᴇsᴀʀ", rowId: `${usedPrefix}beso`},  
     {title: "│😒│ᴘᴀᴛ", description: "ᴄᴀʀɪñᴏsᴀ ᴍᴀʟᴅɪᴛᴏ ʏ ᴍɪsᴍᴏ ᴘᴀᴛ", rowId: `${usedPrefix}pat`},
     {title: "│🤯│sᴇᴍᴏᴊɪ", description: "ᴠᴀʀɪᴀs ғᴏʀᴍᴀs ᴅᴇ sᴛɪᴄᴋᴇʀs sᴇᴍᴏᴊɪ", rowId: `${usedPrefix}semoji`}, 
     {title: "│🌞│sʟᴀᴘ", description: "sᴛɪᴄᴋᴇʀs sʟᴀᴘ", rowId: `${usedPrefix}slap`},   {title: "│👾│sᴛɪᴄᴋᴇʀ", description: "ɪᴍᴀɢᴇɴ sᴛɪᴄᴋᴇʀ", rowId: `${usedPrefix}s`},    {title: "│👾│sᴛɪᴄᴋᴇʀғɪʟᴛᴇʀ", description: "ᴇғᴇᴄᴛᴏ ʏ ʀᴇsᴘᴏɴᴅᴇ ᴀ ᴜɴᴀ ɪᴍᴀɢᴇɴ sᴛɪᴄᴋᴇʀғɪʟᴛᴇʀ", rowId: `${usedPrefix}stickerfilter`},
     {title: "│🧩│sᴛɪᴄᴋᴍᴀᴋᴇʀ", description: "sᴛɪᴄᴋᴇʀ sᴛɪᴄᴋᴍᴀᴋᴇʀ", rowId: `${usedPrefix}stickmaker`}, 
     {title: "│🧩│ᴛᴛᴘ", description: "ᴘᴏɴᴇʟᴇ sᴛɪᴄᴋᴇʀ ʏ ᴀɢʀᴇɢᴀ ᴜɴ ᴘᴀǫᴜᴇᴛᴇ ᴅᴇ ᴜɴ ɴᴏᴍʙʀᴇ ᴛᴛᴘ", rowId: `${usedPrefix}ttp`}, 
     {title: "│🧩│ᴀᴛᴛᴘ", description: "ᴘᴏɴᴇʟᴇ sᴛɪᴄᴋᴇʀ ʏ ᴀɢʀᴇɢᴀ ᴜɴ ᴘᴀǫᴜᴇᴛᴇ ᴅᴇ ᴜɴ ɴᴏᴍʙʀᴇ ᴀᴛᴛᴘ", rowId: `${usedPrefix}attp`},  
     {title: "│👾│ᴛᴀᴋᴇ", description: "ᴘᴏɴᴇʟᴇ sᴛɪᴄᴋᴇʀ ʏ ᴀɢʀᴇɢᴀ ᴜɴ ᴘᴀǫᴜᴇᴛᴇ ᴅᴇ ᴜɴ ɴᴏᴍʙʀᴇ ᴛᴀᴋᴇ", rowId: `${usedPrefix}take`},
     {title: "│👾│ғᴇᴛᴄʜ", description: "ᴘᴏɴᴇʟᴇ sᴛɪᴄᴋᴇʀ ʏ ᴀɢʀᴇɢᴀ ᴜɴ ᴘᴀǫᴜᴇᴛᴇ ᴅᴇ ᴜɴ ɴᴏᴍʙʀᴇ ғᴇᴛᴄʜ", rowId: `${usedPrefix}fetch`}, 
     ]},{
     title: hades23 + '🌆𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀🧳' + hades24, 
     rows: [
     {title: "│🔍│ᴀᴘᴋɢᴏᴏɢʟᴇ", description: "ʙúsᴄᴀʟᴀ ᴅᴇ ɢᴏᴏɢʟᴇ ᴅᴇ ᴀᴘᴋɢᴏᴏɢʟᴇ", rowId: `${usedPrefix}apkgoogle`},  
     {title: "│🔍│ɢᴏᴏɢʟᴇғ", description: "ʙúsᴄᴀʟᴀ ᴅᴇ ɢᴏᴏɢʟᴇ ᴅᴇ ɢᴏᴏɢʟᴇғ", rowId: `${usedPrefix}googlef`},     
     {title: "│🔍│ʟɪʀɪᴋ", description: "ʙúsᴄᴀʟᴀ ᴅᴇ ɢᴏᴏɢʟᴇ ᴅᴇ ʟɪʀɪᴋ", rowId: `${usedPrefix}lirik`},
     {title: "│🔍│ᴘʟᴀʏsᴛᴏʀᴇ", description: "ʙúsᴄᴀʟᴀ ᴅᴇ ɢᴏᴏɢʟᴇ ᴅᴇ ᴘʟᴀʏsᴛᴏʀᴇ", rowId: `${usedPrefix}playstore`}, 
     {title: "│🔍│sᴛɪᴄᴋᴇʀsᴇᴀʀᴄʜ", description: "ʙúsᴄᴀʟᴀ ᴅᴇ ɢᴏᴏɢʟᴇ ᴅᴇ sᴛɪᴄᴋᴇʀsᴇᴀʀᴄʜ", rowId: `${usedPrefix}stickersearch`}, 
     {title: "│🔍│sᴛɪᴄᴋᴇʀsᴇᴀʀᴄʜ2", description: "ʙúsᴄᴀʟᴀ ᴅᴇ ɢᴏᴏɢʟᴇ ᴅᴇ sᴛɪᴄᴋᴇʀsᴇᴀʀᴄʜ2", rowId: `${usedPrefix}stickersearch2`},   
     {title: "│🔍│ᴡɪᴋɪ", description: "ʙúsᴄᴀʟᴀ ᴅᴇ ɢᴏᴏɢʟᴇ ᴅᴇ ᴡɪᴋɪ", rowId: `${usedPrefix}wiki`},  
     {title: "│🔍│ʏᴛs", description: "ʙúsᴄᴀʟᴀ ᴅᴇ ɢᴏᴏɢʟᴇ ᴅᴇ ʏᴛs", rowId: `${usedPrefix}yts`},
     ]},{
     title: hades25 + '🌃𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐋𝐎𝐆𝐑𝐎𝐒🏕️' + hades26, 
     rows: [
     {title: "│☘️│ʙʟᴜʀ", description: "ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs ᴅᴇ ᴍᴀᴋᴇʀ ʙʟᴜʀ", rowId: `${usedPrefix}blur`}, 
     {title: "│☘️│ʜᴏʀɴʏ", description: "ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs ᴅᴇ ᴍᴀᴋᴇʀ ʜᴏʀɴʏ", rowId: `${usedPrefix}horny`},  
     {title: "│☘️│ɪᴛssᴏsᴛᴜᴘɪᴅ", description: "ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs ᴅᴇ ᴍᴀᴋᴇʀ ɪᴛssᴏsᴛᴜᴘɪᴅ", rowId: `${usedPrefix}itssostupid`},          
     {title: "│☘️│ʟᴏɢᴏs", description: "ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs ᴅᴇ ᴍᴀᴋᴇʀ ʟᴏɢᴏs", rowId: `${usedPrefix}logos`},
     {title: "│☘️│ᴘɪxᴇʟ", description: "ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs ᴅᴇ ᴍᴀᴋᴇʀ ᴘɪxᴇʟ", rowId: `${usedPrefix}pixel`}, 
     {title: "│☘️│sɪᴍᴘᴄᴀʀᴅ", description: "ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs ᴅᴇ ᴍᴀᴋᴇʀ sɪᴍᴘᴄᴀʀᴅ", rowId: `${usedPrefix}simpcard`}, 
     {title: "│☘️│ʏᴛᴄᴏᴍᴍᴇɴᴛ", description: "ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs ᴅᴇ ᴍᴀᴋᴇʀ ʏᴛᴄᴏᴍᴍᴇɴᴛ", rowId: `${usedPrefix}ytcomment`},  
     {title: "│☘️│ʟᴏɢᴏᴄᴏʀᴀᴢᴏɴ", description: "ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs ᴅᴇ ᴍᴀᴋᴇʀ ʟᴏɢᴏᴄᴏʀᴀᴢᴏɴ", rowId: `${usedPrefix}logocorazon`},
     {title: "│☘️│ʟᴏʟɪᴄᴇ", description: "ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs ᴅᴇ ᴍᴀᴋᴇʀ ʟᴏʟɪᴄᴇ", rowId: `${usedPrefix}lolice`},
]}, ] 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length  
let name = '@' + m.sender.split("@s.whatsapp.net")[0]
const listMessage = {
text: `╭─────°.♡.°‧─────
│⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍
│${ucapan()} 
│๖ۣۜۜ͜͡𝙷𝙾𝙻𝙰✨${name}💖 
│☘️ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀʟ ᴍᴇɴᴜ
│⌚ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ➟${uptime}
│📊ᴜsᴜᴀʀɪᴏs➟${rtotalreg}
│✴️ᴛᴜs ᴇsᴛᴀᴅÍsᴛɪᴄᴀs
│🔸ɴɪᴠᴇʟ➟${level}
│🧿ᴇxᴘᴇʀɪᴇɴᴄɪᴀ➟${exp} 
│💎ᴅɪᴀᴍᴀɴᴛᴇs➟${limit}
│📌ʀᴀɴɢᴏ➟${role}
│⚔️ʜᴀᴅᴇs-ᴄᴏɪɴs➟${money}
│📈ᴠᴇʀsɪᴏɴ ᴅᴇʟ ʙᴏᴛ
│📔3.5
│📚sᴇʟᴇᴄᴄɪᴏɴᴀ ʟᴏ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴜsᴀʀ
│🎉ᴅɪsғʀᴜᴛᴀ ᴅᴇʟ ʙᴏᴛ
╰─────°.♡.°‧─────ׂ`, mentions: [m.sender],
footer: `${wm}`,
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢", 
sections }

await conn.sendMessage(m.chat, listMessage, { quoted: fkontak })
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 20
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')
  let res = "🌉ʙᴜᴇɴᴀs ᴍᴀᴅʀᴜɢᴀᴅᴀs|ɢᴏᴏᴅ ᴇᴀʀʟʏ ᴍᴏʀɴɪɴɢ🌠"
  if (time >= 4) {
    res = "🌇ʙᴜᴇɴᴏs ᴅíᴀs|ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ⛅"
  }
  if (time >= 11) {
    res = "🏙️ʙᴜᴇɴᴀs ᴛᴀʀᴅᴇs|ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ🌤️"
  }
  if (time >= 15) {
    res = "🌆ʙᴜᴇɴᴀs ᴛᴀʀᴅᴇs|ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ🌥️"
  }
  if (time >= 17) {
    res = "🌃ʙᴜᴇɴᴀs ɴᴏᴄʜᴇs|ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ💫"
  }
  return res
}
