const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: 'avatar',
  aliases: ['icon', 'pfp'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
      const member = message.mentions.members.first() || message.member;

      message.channel.send(
        new MessageEmbed()
          .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL({ dynamic : true}))
          .setTitle('Avatar Link', member.user.displayAvatarURL({ dynamic : true}))
          .setImage(member.user.displayAvatarURL({ dynamic : true, size : 512}))
          .setColor("RANDOM")
          .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        );
    },
};