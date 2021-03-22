const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'delete',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply('Yo do not have permission');

    const channnelTarget = message.mentions.channels.first() || message.channel;

    channnelTarget.delete().then((ch) => {
        message.author.send(`Channel has been deleted!`);
    });
  },
};  