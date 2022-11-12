let handler = async (m, { conn, isOwner }) => {
let vip = global.db.data.users[m.sender].premium
let prem = Object.entries(global.db.data.users).filter(user => user[1].premium)
let caption = `╭─────°.♡.°‧─────
│⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍ 
│🌀ᴜsᴜᴀʀɪᴏs ᴘʀᴇᴍɪᴜᴍ
│🍁Total : ${prem.length} Usuarios* ${prem ? '\n' + prem.map(([jid], i) => `
│🌱${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Usuarios' : conn.getName(jid)}
│⛄${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
╰─────°.♡.°‧─────`
await conn.sendButton(m.chat, caption, `🌀ᴘʀᴇᴍɪᴜᴍ⇢${vip ? '✅' : '❌'}\n${wm}`, null, [ 
[`${vip ? '✦ᴅɪsғʀᴜᴛᴀʀ ᴘʀᴇᴍɪᴜᴍ✦': '✦ᴄᴏᴍᴘʀᴀʀ ᴘᴀsᴇ ᴘʀᴇᴍɪᴜᴍ✦'}`, `${vip ? '/allmenu': '.pase premium'}`]], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listapremium)$/i

export default handler
