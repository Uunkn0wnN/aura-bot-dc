let handler = async (m, { conn }) => {
     conn.reply(m.chat, `source in : https://discord.gg/UFTXkxRrWT`, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


