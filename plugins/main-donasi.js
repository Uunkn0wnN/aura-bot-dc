const qrku = "https://telegra.ph/file/db0bee6282701eec02083.png"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • three [089512330535]
│ • three  [6289630985223]
╰────
╭─「 *NOTE* 」
│ All payment 
│ Kemudian ingfokan ke 
│ wa.me/628983755600
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
