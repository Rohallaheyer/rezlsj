const { Client, MessageEmbed, version } = require("discord.js");
const message = require("./server");
module.exports ={
    name : 'server',
    aliases: ['serverinfo', 'server-info', 'server_info'],
    run : async(client, message) => {
        message.channel.send(
            new MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Server Informantion')
            .setThumbnail(message.guild.iconURL())
            .addField('Server Name', message.guild.name, true)
            .addField('Server Owner', message.guild.owner, true)
            .addField('Members', message.guild.memberCount, true)
            .addField('Region', message.guild.region, true)
            .addField('AFK Timeout', message.guild.afkTimeout / 60, true)
            .setImage('https://cdn.discordapp.com/attachments/803942006060613695/804971407472984064/image0.gif')
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        );
    },
};