const { Client, Message, MessageEmbed } = require("discord.js");
const { inspect } = require('util')
module.exports = {
  name: 'eval',
  aliases: ['icon', 'pfp'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
      if(message.author.id !== '712773598523424769') return;

      const code = args.join(" ");
      if(!code) return message.reply('Please provide some code to evaluate');

      try {
          const result = await eval(code);
          let output = result;
          if(typeof result !== 'string') {
              output = inspect(result)
          }

          message.channel.send(output, { code: 'js'})
      } catch (error) {
        message.channel.send('Evaluated content is too long to display');
      }
  } 
}