import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
if (!text) throw '*[βππππβ] πΈπ½πΆππ΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ ππππ°ππΈπΎ π³π΄ ππ½ ππππ°ππΈπΎ π³π΄ ππΈπΊππΎπΊ*'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
conn.sendFile(m.chat, res, 'error.jpg', `*[ β ] π°πππΈ π΄πππ° π»π° π΅πΎππΎ π³π΄ πΏπ΄ππ΅πΈπ» π³π΄ ${text}*`, m, false)}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|pptiktok)$/i
handler.limit = 4
export default handler
