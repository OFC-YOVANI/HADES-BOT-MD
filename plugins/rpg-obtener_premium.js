let handler = async (m, { conn, text, usedPrefix, command, args }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
	
let template = (args[0] || '').toLowerCase() 
if (/comprar|prem1/i.test(command)) {
var tiempoPremium = 5 * text 
var tiempoDecretado = 5 * 1 
const hades = 15
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ${rpgshop.emoticon('joincount')}🌀ᴀʟǫᴜɪʟᴀʀ ᴘʀᴇᴍɪᴜᴍ ᴄᴏᴍᴘʀé${rpgshopp.emoticon('joincount')}🍁ᴇɴ ʟᴀ ᴛɪᴇɴᴅᴀ ᴜsᴀ ᴘᴀʀᴀ${usedPrefix}ʙᴜʏ ᴏ ᴘᴜᴇᴅᴇs ᴠᴇɴᴅᴇʀ ᴘᴀʀᴀ ᴛᴇɴᴇʀ ʀᴇᴄᴜʀsᴏs ᴇɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ${usedPrefix}sᴇʟʟ`, fkontak, m)
user.joincount -= hades * text

var tiempo = 300000 * text
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];

await conn.sendButton(m.chat,`╭─────°.♡.°‧─────
│⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍     
│📑ɴᴏᴍʙʀᴇ»${hades * text} ${rpgshopp.emoticon('kyubi')}*
│💰ᴘᴀɢᴏ»${user.limit + hades} ${rpgshopp.emoticon('kyubi')}*
│📜ᴛɪᴇɴᴅᴀ»${user.limit} ${rpgshopp.emoticon('kyubi')}*
│⏳ʟᴇ ǫᴜᴇᴅᴀ ᴛɪᴇᴍᴘᴏ»${tiempoPremium} min
│⌚ᴛɪᴍᴇʀ»${user.premiumTime - now} seg
╰─────°.♡.°‧─────`, `🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌀ᴜsᴜᴀʀɪᴏs⛄`, `${usedPrefix}listprem`],
[`🌀ᴛɪᴇᴍᴘᴏ⛄`, `${usedPrefix + command} 1`],
[`🍁ᴍᴇɴᴜ✴`, `${usedPrefix}menu`]], fkontak, m)}

if (/prem2/i.test(command)) {
var tiempoPremium = 15 * text 
var tiempoDecretado = 15 * 1 
const hades = 35
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ${rpgshop.emoticon('joincount')}🌀ᴀʟǫᴜɪʟᴀʀ ᴘʀᴇᴍɪᴜᴍ ᴄᴏᴍᴘʀé${rpgshopp.emoticon('joincount')}🍁ᴇɴ ʟᴀ ᴛɪᴇɴᴅᴀ ᴜsᴀ ᴘᴀʀᴀ${usedPrefix}ʙᴜʏ ᴏ ᴘᴜᴇᴅᴇs ᴠᴇɴᴅᴇʀ ᴘᴀʀᴀ ᴛᴇɴᴇʀ ʀᴇᴄᴜʀsᴏs ᴇɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ${usedPrefix}sᴇʟʟ`, fkontak, m)
user.joincount -= hades * text
    
var tiempo = 900000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];

await conn.sendButton(m.chat,`╭─────°.♡.°‧─────
│⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍     
│📑ɴᴏᴍʙʀᴇ»${hades * text} ${rpgshopp.emoticon('kyubi')}*
│💰ᴘᴀɢᴏ»${user.limit + hades} ${rpgshopp.emoticon('kyubi')}*
│📜ᴛɪᴇɴᴅᴀ»${user.limit} ${rpgshopp.emoticon('kyubi')}*
│⏳ʟᴇ ǫᴜᴇᴅᴀ ᴛɪᴇᴍᴘᴏ»${tiempoPremium} min
│⌚ᴛɪᴍᴇʀ»${user.premiumTime - now} seg
╰─────°.♡.°‧─────`, `🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌀ᴜsᴜᴀʀɪᴏs⛄`, `${usedPrefix}listprem`],
[`🌀ᴛɪᴇᴍᴘᴏ⛄`, `${usedPrefix + command} 1`],
[`🍁ᴍᴇɴᴜ✴`, `${usedPrefix}menu`]], fkontak, m)}

if (/prem3/i.test(command)) {
var tiempoPremium = 30 * text 
var tiempoDecretado = 30 * 1 
const hades = 25
let user = global.db.data.users[m.sender]

if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ${rpgshop.emoticon('joincount')}🌀ᴀʟǫᴜɪʟᴀʀ ᴘʀᴇᴍɪᴜᴍ ᴄᴏᴍᴘʀé${rpgshopp.emoticon('joincount')}🍁ᴇɴ ʟᴀ ᴛɪᴇɴᴅᴀ ᴜsᴀ ᴘᴀʀᴀ${usedPrefix}ʙᴜʏ ᴏ ᴘᴜᴇᴅᴇs ᴠᴇɴᴅᴇʀ ᴘᴀʀᴀ ᴛᴇɴᴇʀ ʀᴇᴄᴜʀsᴏs ᴇɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ${usedPrefix}sᴇʟʟ`, fkontak, m)
user.joincount -= hades * text

var tiempo = 1800000 * text
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];

await conn.sendButton(m.chat,`╭─────°.♡.°‧─────
│⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍     
│📑ɴᴏᴍʙʀᴇ»${hades * text} ${rpgshopp.emoticon('kyubi')}*
│💰ᴘᴀɢᴏ»${user.limit + hades} ${rpgshopp.emoticon('kyubi')}*
│📜ᴛɪᴇɴᴅᴀ»${user.limit} ${rpgshopp.emoticon('kyubi')}*
│⏳ʟᴇ ǫᴜᴇᴅᴀ ᴛɪᴇᴍᴘᴏ»${tiempoPremium} min
│⌚ᴛɪᴍᴇʀ»${user.premiumTime - now} seg
╰─────°.♡.°‧─────`, `🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌀ᴜsᴜᴀʀɪᴏs⛄`, `${usedPrefix}listprem`],
[`🌀ᴛɪᴇᴍᴘᴏ⛄`, `${usedPrefix + command} 1`],
[`🍁ᴍᴇɴᴜ✴`, `${usedPrefix}menu`]], fkontak, m)}	

if (/prem4/i.test(command)) {
var tiempoPremium = 1 * text 
var tiempoDecretado = 1 * 1  
const hades = 50
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ${rpgshop.emoticon('joincount')}🌀ᴀʟǫᴜɪʟᴀʀ ᴘʀᴇᴍɪᴜᴍ ᴄᴏᴍᴘʀé${rpgshopp.emoticon('joincount')}🍁ᴇɴ ʟᴀ ᴛɪᴇɴᴅᴀ ᴜsᴀ ᴘᴀʀᴀ${usedPrefix}ʙᴜʏ ᴏ ᴘᴜᴇᴅᴇs ᴠᴇɴᴅᴇʀ ᴘᴀʀᴀ ᴛᴇɴᴇʀ ʀᴇᴄᴜʀsᴏs ᴇɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ${usedPrefix}sᴇʟʟ`, fkontak, m)
user.joincount -= hades * text

var tiempo = 3600000 * text  
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];

await conn.sendButton(m.chat,`╭─────°.♡.°‧─────
│⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍     
│📑ɴᴏᴍʙʀᴇ»${hades * text} ${rpgshopp.emoticon('kyubi')}*
│💰ᴘᴀɢᴏ»${user.limit + hades} ${rpgshopp.emoticon('kyubi')}*
│📜ᴛɪᴇɴᴅᴀ»${user.limit} ${rpgshopp.emoticon('kyubi')}*
│⏳ʟᴇ ǫᴜᴇᴅᴀ ᴛɪᴇᴍᴘᴏ»${tiempoPremium} min
│⌚ᴛɪᴍᴇʀ»${user.premiumTime - now} seg
╰─────°.♡.°‧─────`, `🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌀ᴜsᴜᴀʀɪᴏs⛄`, `${usedPrefix}listprem`],
[`🌀ᴛɪᴇᴍᴘᴏ⛄`, `${usedPrefix + command} 1`],
[`🍁ᴍᴇɴᴜ✴`, `${usedPrefix}menu`]], fkontak, m)}

if (/prem5/i.test(command)) {
var tiempoPremium = 3 * text 
var tiempoDecretado = 3 * 1 
const hades = 40
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ${rpgshop.emoticon('joincount')}🌀ᴀʟǫᴜɪʟᴀʀ ᴘʀᴇᴍɪᴜᴍ ᴄᴏᴍᴘʀé${rpgshopp.emoticon('joincount')}🍁ᴇɴ ʟᴀ ᴛɪᴇɴᴅᴀ ᴜsᴀ ᴘᴀʀᴀ${usedPrefix}ʙᴜʏ ᴏ ᴘᴜᴇᴅᴇs ᴠᴇɴᴅᴇʀ ᴘᴀʀᴀ ᴛᴇɴᴇʀ ʀᴇᴄᴜʀsᴏs ᴇɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ${usedPrefix}sᴇʟʟ`, fkontak, m)
user.joincount -= hades * text
    
var tiempo = 10800000 * text
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];


await conn.sendButton(m.chat,`╭─────°.♡.°‧─────
│⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍     
│📑ɴᴏᴍʙʀᴇ»${hades * text} ${rpgshopp.emoticon('kyubi')}*
│💰ᴘᴀɢᴏ»${user.limit + hades} ${rpgshopp.emoticon('kyubi')}*
│📜ᴛɪᴇɴᴅᴀ»${user.limit} ${rpgshopp.emoticon('kyubi')}*
│⏳ʟᴇ ǫᴜᴇᴅᴀ ᴛɪᴇᴍᴘᴏ»${tiempoPremium} min
│⌚ᴛɪᴍᴇʀ»${user.premiumTime - now} seg
╰─────°.♡.°‧─────`, `🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌀ᴜsᴜᴀʀɪᴏs⛄`, `${usedPrefix}listprem`],
[`🌀ᴛɪᴇᴍᴘᴏ⛄`, `${usedPrefix + command} 1`],
[`🍁ᴍᴇɴᴜ✴`, `${usedPrefix}menu`]], fkontak, m)}
	
if (/prem6/i.test(command)) {
var tiempoPremium = 7 * text 
var tiempoDecretado = 7 * 1  
const hades = 70
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ${rpgshop.emoticon('joincount')}🌀ᴀʟǫᴜɪʟᴀʀ ᴘʀᴇᴍɪᴜᴍ ᴄᴏᴍᴘʀé${rpgshopp.emoticon('joincount')}🍁ᴇɴ ʟᴀ ᴛɪᴇɴᴅᴀ ᴜsᴀ ᴘᴀʀᴀ${usedPrefix}ʙᴜʏ ᴏ ᴘᴜᴇᴅᴇs ᴠᴇɴᴅᴇʀ ᴘᴀʀᴀ ᴛᴇɴᴇʀ ʀᴇᴄᴜʀsᴏs ᴇɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ${usedPrefix}sᴇʟʟ`, fkontak, m)
user.joincount -= hades * text
    
var tiempo = 25200000 * text
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];

await conn.sendButton(m.chat,`╭─────°.♡.°‧─────
│⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍     
│📑ɴᴏᴍʙʀᴇ»${hades * text} ${rpgshopp.emoticon('kyubi')}*
│💰ᴘᴀɢᴏ»${user.limit + hades} ${rpgshopp.emoticon('kyubi')}*
│📜ᴛɪᴇɴᴅᴀ»${user.limit} ${rpgshopp.emoticon('kyubi')}*
│⏳ʟᴇ ǫᴜᴇᴅᴀ ᴛɪᴇᴍᴘᴏ»${tiempoPremium} min
│⌚ᴛɪᴍᴇʀ»${user.premiumTime - now} seg
╰─────°.♡.°‧─────`, `🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌀ᴜsᴜᴀʀɪᴏs⛄`, `${usedPrefix}listprem`],
[`🌀ᴛɪᴇᴍᴘᴏ⛄`, `${usedPrefix + command} 1`],
[`🍁ᴍᴇɴᴜ✴`, `${usedPrefix}menu`]], fkontak, m)}

if (/prem7/i.test(command)) {
var tiempoPremium = 24 * text 
var tiempoDecretado = 24 * 1 
const hades = 65
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ${rpgshop.emoticon('joincount')}🌀ᴀʟǫᴜɪʟᴀʀ ᴘʀᴇᴍɪᴜᴍ ᴄᴏᴍᴘʀé${rpgshopp.emoticon('joincount')}🍁ᴇɴ ʟᴀ ᴛɪᴇɴᴅᴀ ᴜsᴀ ᴘᴀʀᴀ${usedPrefix}ʙᴜʏ ᴏ ᴘᴜᴇᴅᴇs ᴠᴇɴᴅᴇʀ ᴘᴀʀᴀ ᴛᴇɴᴇʀ ʀᴇᴄᴜʀsᴏs ᴇɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ${usedPrefix}sᴇʟʟ`, fkontak, m)
user.joincount -= hades * text

var tiempo = 86400000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];

await conn.sendButton(m.chat,`╭─────°.♡.°‧─────
│⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍     
│📑ɴᴏᴍʙʀᴇ»${hades * text} ${rpgshopp.emoticon('kyubi')}*
│💰ᴘᴀɢᴏ»${user.limit + hades} ${rpgshopp.emoticon('kyubi')}*
│📜ᴛɪᴇɴᴅᴀ»${user.limit} ${rpgshopp.emoticon('kyubi')}*
│⏳ʟᴇ ǫᴜᴇᴅᴀ ᴛɪᴇᴍᴘᴏ»${tiempoPremium} min
│⌚ᴛɪᴍᴇʀ»${user.premiumTime - now} seg
╰─────°.♡.°‧─────`, `🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌀ᴜsᴜᴀʀɪᴏs⛄`, `${usedPrefix}listprem`],
[`🌀ᴛɪᴇᴍᴘᴏ⛄`, `${usedPrefix + command} 1`],
[`🍁ᴍᴇɴᴜ✴`, `${usedPrefix}menu`]], fkontak, m)}

if (/prem8/i.test(command)) {
var tiempoPremium = 3 * text 
var tiempoDecretado = 3 * 1 
const hades = 80
let user = global.db.data.users[m.sender]
    
if (!text) return conn.reply(m.chat, `${mg}ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ǫᴜᴇ ǫᴜɪᴇʀᴇs ᴄᴏᴍᴘʀᴀʀ🌀️ 1 = ${tiempoDecretado} HORA(S)*\n*✤ ${hades} ${rpgshop.emoticon('joincount')}*\n\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (isNaN(text)) return conn.reply(m.chat, `${mg}sᴏʟᴏ sᴇ ᴀᴄᴇᴘᴛᴀɴ ɴúᴍᴇʀᴏs🍁\n*EJEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < hades) return conn.reply(m.chat, `${ag}ɴᴏ ᴛɪᴇɴᴇ ✴️sᴜғɪᴄɪᴇɴᴛᴇ${rpgshop.emoticon('joincount')}🌀ᴀʟǫᴜɪʟᴀʀ ᴘʀᴇᴍɪᴜᴍ ᴄᴏᴍᴘʀé${rpgshopp.emoticon('joincount')}🍁ᴇɴ ʟᴀ ᴛɪᴇɴᴅᴀ ᴜsᴀ ᴘᴀʀᴀ${usedPrefix}ʙᴜʏ ᴏ ᴘᴜᴇᴅᴇs ᴠᴇɴᴅᴇʀ ᴘᴀʀᴀ ᴛᴇɴᴇʀ ʀᴇᴄᴜʀsᴏs ᴇɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ${usedPrefix}sᴇʟʟ`, fkontak, m)
user.joincount -= hades * text
    
var tiempo = 259200000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://i.imgur.com/aOU8mzP.jpg', 
'https://i.imgur.com/HE1dWt6.png',
'https://i.imgur.com/jRA9pwD.jpeg'];

await conn.sendButton(m.chat,`╭─────°.♡.°‧─────
│⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍     
│📑ɴᴏᴍʙʀᴇ»${hades * text} ${rpgshopp.emoticon('kyubi')}*
│💰ᴘᴀɢᴏ»${user.limit + hades} ${rpgshopp.emoticon('kyubi')}*
│📜ᴛɪᴇɴᴅᴀ»${user.limit} ${rpgshopp.emoticon('kyubi')}*
│⏳ʟᴇ ǫᴜᴇᴅᴀ ᴛɪᴇᴍᴘᴏ»${tiempoPremium} min
│⌚ᴛɪᴍᴇʀ»${user.premiumTime - now} seg
╰─────°.♡.°‧─────`, `🌀ᴀʜᴏʀᴀ ᴛɪᴇɴᴇ ᴘʀᴇᴍɪᴜᴍ ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ ᴠᴀ ᴛᴇɴᴇʀ ʟíᴍɪᴛᴇs${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌀ᴜsᴜᴀʀɪᴏs⛄`, `${usedPrefix}listprem`],
[`🌀ᴛɪᴇᴍᴘᴏ⛄`, `${usedPrefix + command} 1`],
[`🍁ᴍᴇɴᴜ✴`, `${usedPrefix}menu`]], fkontak, m)}

if (command) {
switch (template) {		
case 'premium':
case 'vip':
case 'prem':
case 'pass':
case 'pase':
const sections = [{
title: comienzo + '🌀ᴘʀᴇᴍɪᴜᴍ🍁' + fin,
rows: [
{title: "💎ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓵ᴘᴀss»⓵", rowId: `${usedPrefix}prem1 1`, description: `✪»ᴘᴀsᴇ»ʙásɪᴄᴏ»ᴘᴀss»✪15 ${rpgshop.emoticon('limit')} ➟ 5 min ᴘʀᴇᴍɪᴜᴍ\n`},
{title: "🌀ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓶ᴘᴀss»⓶", rowId: `${usedPrefix}prem2 1`, description: `✪»ᴘᴀsᴇ»ᴛᴏʀʀᴇ ᴅᴇ ᴇɴᴄᴜᴇɴᴛʀᴏ»ᴘᴀss»✪35${rpgshop.emoticon('kyubi')} ➟ 15 min ᴘʀᴇᴍɪᴜᴍ\n`},
{title: "💚ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓷ᴘᴀss»⓷", rowId: `${usedPrefix}prem3 1`, description: `✪»ᴘᴀsᴇ»ᴠᴇʀᴅᴜᴢᴄᴏ»ᴘᴀss»✪25${rpgshop.emoticon('emerald')} ➟ 30 min ᴘʀᴇᴍɪᴜᴍ\n`},
{title: "🗑ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓸ᴘᴀss»⓸", rowId: `${usedPrefix}prem4 1`, description: `✪»ᴘᴀsᴇ»ʀᴇsɪᴅᴜᴏs ᴄᴀᴢᴀ»ᴘᴀss»✪50${rpgshop.emoticon('trash')} ➟ 1 h ᴘʀᴇᴍɪᴜᴍ\n`},
{title: "♦ᴘʀᴇᴍɪᴜᴍ️»ᴄʟᴀsᴇ»⓹ᴘᴀss»⓹", rowId: `${usedPrefix}prem5 1`, description: `✪»ᴘᴀsᴇ»ʙʀɪʟʟᴀɴᴛᴇ»ᴘᴀss»✪40${rpgshop.emoticon('berlian')} ➟ 3 h ᴘʀᴇᴍɪᴜᴍ\n`},
{title: "🪙ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓺ᴘᴀss»⓺", rowId: `${usedPrefix}prem6 1`, description: `✪»ᴘᴀsᴇ»ᴀᴍᴏ ᴅᴇʟ ᴄʀɪᴘᴛᴏ»ᴘᴀss»✪70${rpgshop.emoticon('joincount')} ➟ 7 h ᴘʀᴇᴍɪᴜᴍ\n`},
{title: "💎+ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓻ᴘᴀss»⓻", rowId: `${usedPrefix}prem7 1`, description: `✪»ᴘᴀsᴇ»ɢᴀᴍᴀ ᴘʟᴜs»ᴘᴀss»✪65${rpgshop.emoticon('diamond')} ➟ 24 h ᴘʀᴇᴍɪᴜᴍ\n`},
{title: "👑ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓼ᴘᴀss» ⓼", rowId: `${usedPrefix}prem8 1`, description: `✪»ᴘᴀsᴇ»ᴛɪᴇᴍᴘᴏ ᴅᴇ ᴏʀᴏ»ᴘᴀss»✪80${rpgshop.emoticon('gold')} ➟ 3 d ᴘʀᴇᴍɪᴜᴍ\n`}
]},{  
title: comienzo + '🌀ᴘʀᴇᴍɪᴜᴍ🌀' + fin,
rows: [
{title: "⛄ᴜsᴜᴀʀɪᴏs ᴘʀᴇᴍɪᴜᴍ", rowId: usedPrefix + 'listprem'},
{title: "🌱ᴛᴏᴘ ᴍᴜɴᴅɪᴀʟ", rowId: usedPrefix + 'top'},
{title: "🍁ᴍᴇɴᴜ✴", rowId: usedPrefix + 'menu'}
	
]}]

const listMessage = {
  text: `💰ᴄᴏᴍᴘʀᴀ ᴛᴜ ᴛɪᴇᴍᴘᴏ ᴘᴀʀᴀ sᴇʀ ᴜɴ ᴜsᴜᴀʀɪᴏ🌀`,
  footer: global.wm, 
  title: `${htki}🌀ᴘʀᴇᴍɪᴜᴍ${htka}`,
  buttonText: `✴️ᴘʀᴇᴍɪᴜᴍ⛄`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
break	
		
}}}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(comprar|prem1|prem2|prem3|prem4|prem5|prem6|prem7|prem8|premium|vip|prem|pass|pase)$/i

export default handler
