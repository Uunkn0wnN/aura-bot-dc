let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    try {
        let pp = await(await fetch(image)).buffer
        let gc1 = '6281393227036-120363037529652885@g.us'
        let _gc1 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc1)
        let caption = `
*Join juga official Bot!*
Sekedar meramaikan, atau juga jika ada informasi mengenai bot.

*join*
https://discord.gg/UFTXkxRrWT

Harap patuhi rules dan peraturan ya! Terimakasih.
`.trim()
        await conn.reply(m.chat, caption, m, { contextInfo: {
            externalAdReply: {
              sourceUrl: 'https://rfiunknown.github.io/dist/',
              title: 'Official server',
              body: 'AuraBot',
              thumbnail: pp
            }
        }})
    } catch (e) {
        let res = await fetch('https://raw.githubusercontent.com/RFIunknown/AuraBot-server/main/files/src.json')
        let json = await res.json()
        let tulisan = `
Join juga official Bot!*

Sekedar meramaikan, atau juga jika ada informasi mengenai bot.

*join*

https://discord.gg/UFTXkxRrWT

Harap patuhi rules dan peraturan ya! Terimakasih.
`.trim()
    await conn.reply(m.chat, tulisan, m, { contextInfo: {
        externalAdReply: {
            sourceUrl: 'https://rfiunknown.github.io/dist/',
            title: 'Official server',
            body: 'AuraBot',
            thumbnail: pp
        }
    }})
    }
}
handler.help = ['serverofficial']
handler.tags = ['main']
handler.command = /^auragc|gr(u|ou)(p|b)official|gcofficial$/i
module.exports = handler
