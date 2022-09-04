import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('quit', ctx => {
  ctx.telegram.leaveChat(ctx.message.chat.id);
  ctx.leaveChat();
});

bot.on('text', ctx => {
  ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);
  ctx.reply(`Hello ${ctx.state.role}`);
});

bot.on('callback_query', ctx => {
  ctx.telegram.answerCbQuery(ctx.callbackQuery.id);
  ctx.answerCbQuery();
});

bot.on('inline_query', ctx => {
  const result = [];
  ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);
  ctx.answerInlineQuery(result);
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
