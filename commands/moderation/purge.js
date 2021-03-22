const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name : "purge",
    /**
     * @param {Client} client
     * @param {Message} message 
     * @param {Strang[]} args
     */
    run : async (client, message, args) => {
        const member = message.mentions.members.first();
        const messages = message.channel.messages.fetch();

        if(member) {
            const userMessages = (await messages).filter((m) => m.author.id === member.id);
            await message.channel.bulkDelete(userMessages);
            message.channel.send(`${member} message has been cleared.`);
        } else {
            if(!args[0]) 
            return message.channel.send(
              "Please specify a number of messages to delete ranging from 1 - 99"
            );
          if(isNaN(args[0])) return message.channel.send('Numbers are only allowed');
          if(parseInt(args[0]) > 99) 
            return message.channel.send(
              "The max amount of messages that I can delete is 99"
            );
          await message.channel
              .bulkDelete(parseInt(args[0]) + 1)
              .catch(err => console.log(err));
          message.channel.send('Deleted ' + args[0]  + " messages.");
        }
    },
};