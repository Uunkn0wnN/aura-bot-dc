let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to folder /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'apikeylu',
  'https://melcanz.com': 'apikeylu',
  'https://api.lolhuman.xyz': '5a655a891f72e062792893b2',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'cTnFZZjKxcyFJhs0UoO4czJaaJI',
  'https://pencarikode.xyz': 'apikeylu',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'apikeylu',
  'https://api.adiofficial.xyz': 'apikey lu'
}

//============= Wait and Eror ================//
global.wait = '「 ⏱️ 」Harap tunggu...'
global.eror = '「❗」Server ERROR!'

//========Url Template Buttons=========//
global.dtu = 'Discord'
global.urlnya = "https://discord.gg/UFTXkxRrWT"

//============= callButtons =============//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+62 898-3755-600'

//============= Watermark Bot and Sticker =============//
global.wm = 'github.com/Uunkn0wnN'
global.author = 'github.com/Uunkn0wnN'
global.packname ='github.com/Uunkn0wnN'
global.namabot = 'github.com/Uunkn0wnN'

//============= Games ================//
global.benar = '_*Benar✅*_'
global.salah = '_*Salah❌*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

//============= Thumb And Image ================//
global.pp = 'https://media.discordapp.net/attachments/892311236887334931/939886004993675294/sgsgh.png'
global.image = 'https://media.discordapp.net/attachments/892311236887334931/939886004993675294/sgsgh.png'
global.thumbfoto = 'https://media.discordapp.net/attachments/892311236887334931/939886004993675294/sgsgh.png'

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
