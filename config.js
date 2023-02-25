import fs from 'fs'
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['5351524614', '༦᭄𝔇𝓪𝒗𝑖𝔡ꪶ𝆈͢ᶜʰᴵᴬᴺ᳸⋆͙̈𝄊᭄', true],
  ['687999614', '🌺⃟⿻̅𝐷̶𐤠𝑉̅𝘪𝐷̶✮̱⿻⃟̅𝐶̶𝐻̱𝘪𝐴̅𝑵', true],
  ['420702012764', '←̵᪹͟͞―͓⃛⟮𝑵𝒐̅𝒓⃯𝒊𝒆⟅⋆᪶᳒ᴮᵒᵗ᭄⃨', true],
  ['4237919127', '🌺⃟⿻̅𝐷̶𐤠𝑉̅𝘪𝐷̶✮̱⿻⃟̅𝐶̶𝐻̱𝘪𝐴̅𝑵', true],
  ['420702012715', 'K', true],
]
global.suittag =['5351524614']
global.mods = []
global.prems = ['5351524614'], 
global.prems = ['420702012764'],
global.APIs = { 

  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz'
},
 
global.APIKeys = { 
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}

global.packname = '⿻᳔⃗͢⛦⃟𝑵᳒𝒐᳔⃗𝒓̲𝒊᳔𝒆⃨⛥᪳͢⿻⃟᳔᳒𝑩̱𝒐̶⃗𝒕✘'
global.author = '༦᭄𝔇𝓪𝒗𝑖𝔡ꪶ𝆈͢ᶜʰᴵᴬᴺ᳸⋆͙̈𝄊᭄'
global.vs = '1.10.90'
global.version = vs
global.gt = '⿻᳔⃗͢⛦⃟𝑵᳒𝒐᳔⃗𝒓̲𝒊᳔𝒆⃨⛥᪳͢⿻⃟᳔᳒𝑩̱𝒐̶⃗𝒕✘'
global.hadesbot = gt
global.yt = 'https://youtu.be/aPu9wQi-z8U'
global.youtube = yt
global.ig = 'https://www.instagram'
global.hadesig = ig
global.md = 'https://github.com/OFC-YOVANI/HADES-BOT-MD.git'
global.botxdf = md
global.nn = 'https://chat.whatsapp.com/CG5ZPcJ22fL7QjNRzjguD0'
global.nngrupo = nn
global.nnn = 'https://chat.whatsapp.com/DDm7HC6e5MF9qcdLqB22RQ'
global.nnngrupo = nnn
global.paypal = 'https://pay'
global.donar = paypal
global.rg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*'
global.resultado = rg
global.ag = '*⚠️ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ⚠️*'
global.advertencia = ag
global.iig = '*📌ɪɴғᴏʀᴍᴀᴄɪᴏɴ*✨'
global.informacion = iig
global.fg = '*❌ʟᴏ sᴇɴᴛɪᴍᴏs sᴇ ʜᴀ ɢᴇɴᴇʀᴀᴅᴏ ᴜɴ ᴇʀʀᴏʀ ᴠᴜᴇʟᴠᴇ ɪɴᴛᴇɴᴛᴀʀ❌*'
global.fallo = fg
global.mg = '*❗ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ʟᴏ ʜᴀ ᴜsᴀᴅᴏ ɪɴᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ*'
global.mal = mg
global.eeg = '*📩ˢᵁ ᴿᴱᴾᴼᴿᵀᴱ ᴴᴬ ˢᴵᴰᴼ ᴱᴺⱽᴵᴬᴰᴼ📩*'
global.envio = eeg
global.eg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*'
global.exito = eg

global.wm = '༦᭄𝔇𝓪𝒗𝑖𝔡ꪶ𝆈͢ᶜʰᴵᴬᴺ᳸⋆͙̈𝄊᭄\n⿻᳔⃗͢⛦⃟𝑵᳒𝒐᳔⃗𝒓̲𝒊᳔𝒆⃨⛥᪳͢⿻⃟᳔᳒𝑩̱𝒐̶⃗𝒕✘'
global.igfg = '⿻᳔⃗͢⛦⃟𝑵᳒𝒐᳔⃗𝒓̲𝒊᳔𝒆⃨⛥᪳͢⿻⃟᳔᳒𝑩̱𝒐̶⃗𝒕✘'
global.wait = '⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱'

global.imagen1 = fs.readFileSync('./src/Menu2.jpg')
global.imagen4 = fs.readFileSync('./src/Menuxx.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Me.jpg')

global.mods = [] 

global.multiplier = 65

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
