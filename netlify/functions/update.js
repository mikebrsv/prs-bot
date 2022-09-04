// const axios = require('axios').default;

// exports.handler = async event => {
//   console.log('Received an update from Telegram!', event.body);

//   await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
//     chat_id: JSON.parse(event.body).message.chat.id,
//     text: 'Got your message!',
//   });

//   return { statusCode: 200 };
// };
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));