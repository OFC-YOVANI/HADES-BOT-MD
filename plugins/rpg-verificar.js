import { createHash } from 'crypto';

const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;

const handler = async function(m, { conn, text, usedPrefix, command }) {
  const user = global.db.data.users[m.sender];

  if (user.registered === true) {
    const ahora = new Date() * 1;
   
    const tiempoTranscurrido = ahora - user.regTime; 
    const horasActivo = Math.floor(tiempoTranscurrido / (1000 * 60 * 60));
    const minutosActivo = Math.floor((tiempoTranscurrido / (1000 * 60)) % 60);

    if (!user.hitosReclamados) user.hitosReclamados = [];
    let premio = { exp: 0, money: 0, limit: 0, titulo: '' };
    let idHito = 0;

    // Lógica de escala de horas
    if (horasActivo >= 3 && !user.hitosReclamados.includes(3)) {
      idHito = 3;
      premio = { exp: 5000, money: 5000, limit: 10, titulo: '🥉 ʙᴏɴᴏ: 3 ʜᴏʀᴀꜱ ᴀᴄᴛɪᴠᴏ' };
    } else if (horasActivo >= 10 && !user.hitosReclamados.includes(10)) {
      idHito = 10;
      premio = { exp: 10000, money: 10000, limit: 20, titulo: '🥈 ʙᴏɴᴏ: 10 ʜᴏʀᴀꜱ ᴀᴄᴛɪᴠᴏ' };
    } else if (horasActivo >= 15 && !user.hitosReclamados.includes(15)) {
      idHito = 15;
      premio = { exp: 15000, money: 15000, limit: 30, titulo: '🥇 ʙᴏɴᴏ: 15 ʜᴏʀᴀꜱ ᴀᴄᴛɪᴠᴏ' };
    } else if (horasActivo >= 20 && !user.hitosReclamados.includes(20)) {
      idHito = 20;
      premio = { exp: 20000, money: 20000, limit: 40, titulo: '🏆 ʙᴏɴᴏ: 20 ʜᴏʀᴀꜱ ᴀᴄᴛɪᴠᴏ' };
    } else if (horasActivo >= 30) {
      const cicloHades = Math.floor((horasActivo - 30) / 10);
      const ultimoCiclo = user.ultimoCicloHades || 0;
      if (cicloHades > ultimoCiclo) {
        user.ultimoCicloHades = cicloHades;
        idHito = 999;
        premio = { exp: 30000, money: 30000, limit: 50, titulo: '👑 ʙᴏɴᴏ ᴘᴇʀᴍᴀɴᴇɴᴛᴇ (+10ʜ)' };
      }
    }

    if (idHito === 0) {
      return m.reply(`⌬  **ꜱᴛᴀᴛᴜꜱ ᴅᴇ ᴀᴄᴛɪᴠɪᴅᴀᴅ** ⌬\n\n⏳ ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ: **${horasActivo}ʜ ${minutosActivo}ᴍ**\n\n💡 *Aún no tienes nuevas recompensas. Tu tiempo cuenta desde que te registraste.*`);
    }

    user.exp += premio.exp;
    user.money += premio.money;
    user.limit += premio.limit;
    if (idHito !== 999) user.hitosReclamados.push(idHito);

    const msgReward = `⌬  **ʜᴀᴅᴇꜱ ʙᴏᴛ ᴍᴅ** ⌬\n\n✨ **¡ꜰᴇʟɪᴄɪᴅᴀᴅᴇꜱ!**\n${premio.titulo}\n\n💰 **ᴍᴏɴᴇʏ:** +${premio.money.toLocaleString()}\n✨ **ᴇxᴘ:** +${premio.exp.toLocaleString()}\n💎 **ᴅɪᴀᴍᴀɴᴛᴇꜱ:** +${premio.limit}`;
    return conn.sendMessage(m.chat, { text: msgReward }, { quoted: m });
  }

  // --- ESCENARIO B: USUARIO NO REGISTRADO (SOLO PUEDE REGISTRARSE) ---
  const example = `📑 *ꜰᴏʀᴍᴀᴛᴏ ᴅᴇ ʀᴇɢɪꜱᴛʀᴏ ɪɴᴄᴏʀʀᴇᴄᴛᴏ*\n\n💡 ᴜꜱᴀ: \`${usedPrefix + command} nombre.edad\`\n✨ ᴇᴊ: \`${usedPrefix + command} Yovani.21\`\n\n⚠️ *Nota: Tu tiempo activo para premios empezará a contar después de este registro.*`;
  
  if (!Reg.test(text)) return m.reply(example);

  let [, nombre, , edadRaw] = text.match(Reg);
  const edad = parseInt(edadRaw);

  if (!nombre || !nombre.trim()) return m.reply('❌ No puedes dejar tu nombre vacío.');
  if (isNaN(edad) || edad < 15 || edad > 50) return m.reply('❌ La edad debe estar entre 15 y 50 años.');

  const pp = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/241f050c4bcc0117300c9.jpg');

  // REGISTRO INICIAL
  user.name = nombre.trim();
  user.age = edad;
  user.regTime = +new Date(); 
  user.registered = true;
  user.hitosReclamados = []; 
  user.ultimoCicloHades = 0;

  const codigo = createHash('md5').update(m.sender).digest('hex');
  const info = `
⌬  **ʜᴀᴅᴇꜱ ʙᴏᴛ ᴍᴅ** ⌬
  *ꜱʏꜱᴛᴇᴍ ᴠᴇʀɪꜰɪᴄᴀᴛɪᴏɴ*

•─────────────•

👤 **ᴜꜱᴜᴀʀɪᴏ:** ${nombre.trim()}
🎂 **ᴇᴅᴀᴅ:** ${edad} ᴀñᴏꜱ
⏳ **ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:** 0ʜ 0ᴍ
🆔 **ɪᴅ:** \`${codigo.slice(0, 15)}\`

💰 **ᴍᴏɴᴇʏ:** +10,000
✨ **ᴇxᴘ:** +10,000
💎 **ᴅɪᴀᴍᴀɴᴛᴇꜱ:** +50 

•─────────────•

🎁 **ʀᴇᴄᴏᴍᴘᴇɴꜱᴀ ᴇxᴛʀᴀ**
ᴅᴀ ᴄʟɪᴄ ᴇɴ **"ᴀʙʀɪʀ ᴄᴏꜰʀᴇ"** ᴘᴀʀᴀ ᴛᴜꜱ ᴘʀᴇᴍɪᴏꜱ.`;

  const footer = '「 ᴏғᴄ:ʏᴏᴠᴀɴɪ • 2026 」';
  const buttons = [
    { buttonId: `${usedPrefix}menu`, buttonText: { displayText: '📋 ᴍᴇɴᴜ ᴘʀɪɴᴄɪᴘᴀʟ' }, type: 1 },
    { buttonId: `${usedPrefix}coffre`, buttonText: { displayText: '📦 ᴀʙʀɪʀ ᴄᴏꜰʀᴇ' }, type: 1 }
  ];

  try {
    await conn.sendMessage(m.chat, { image: { url: pp }, caption: info, footer, buttons, headerType: 4 }, { quoted: m });
  } catch {
    await conn.sendMessage(m.chat, { text: info + `\n\n📢 Escribe .menu o .coffre` }, { quoted: m });
  }


  user.money += 10000;
  user.exp += 10000;
  user.limit += 50;
  await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
};

handler.help = ['reg', 'recompensa'];
handler.tags = ['xp'];
handler.command = /^(reg|recompensa|claim|verificar)$/i;

export default handler;
