const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name : 'report',
    /**
     * @param {Client} client
     * @param {Message} message 
     * @param {Strang[]} args
     */
    run : async (client, message, args) => {
        const owner = client.users.cache.get('712773598523424769');

        const query = args.join(" ");
        if(!query) return message.reply('Please specify a query');

        const reportEmbed = new MessageEmbed()
           .setTitle('New BUG!')
           .addField('Author', message.author.toString(), true)
           .addField('Guild', message.guild.name, true)
           .addField('Report', query)
           .setThumbnail(message.author.displayAvatarURL({ dynamic : true}))
           .setFooter('AECILYS')
           .setTimestamp();
        owner.send(reportEmbed);
    }
}