const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: 'un-antivc',
  aliases: ['unantivc'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
     const target = message.mentions.members.first();
     if(!target) return message.reply('Please specify a target!');

     const role = message.guild.roles.cache.find((role) => role.name.toLocaleLowerCase() === 'antivc');
     if(!role) return message.reply("The role doesnt exist!");

     if(!target.roles.cache.has(role.id)) return message.reply(`${target} is not antivced`);

     target.roles.remove(role.id)
     message.channel.send(`${target} has been antivced`);
  }
}
