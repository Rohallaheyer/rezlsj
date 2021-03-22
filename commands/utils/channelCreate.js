const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'create',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply('Yo do not have permission');

    const channelNameQuery = args.join(" ");
    if(!channelNameQuery) return message.reply('Please specify a channel name!');

    message.guild.channels.create(channelNameQuery).then((ch) => {
        message.channel.send(`Clik ${ch} to acess the newly created channel!`)
    });
  },
};  