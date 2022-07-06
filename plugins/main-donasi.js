const qrku = "http://telegra.ph/file/4728cfbd53c6cbc990413.png"

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
