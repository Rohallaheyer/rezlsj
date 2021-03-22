const { Client, MessageEmbed, version, User } = require("discord.js");
const message = require("./user");

module.exports ={
    name : 'user',
    aliases: ['userinfo', 'user-info', 'user_info'],
    run : async(client, message) => {
        const member = message.mentions.members.first() || message.member;
        message.channel.send(
            new MessageEmbed()
            .setColor("RANDOM")
            .setTitle('User Informantion')
            .addField('User tag',  member.user.tag)
            .addField('Nickname', member.nickname || 'None', true)
            .addField('Joined Server', new Date(member.joinedTimestamp).toLocaleDateString(), true)
            .addField('Joined Discord', new Date(member.user.createdTimestamp).toLocaleDateString(), true)
            .addField('Current Server', message.guild.name, true)
            .addField('Role Count', member.roles.cache.size - 1, true)
            .addField('ID', member.user.id, true)
            .setTimestamp()
            .setThumbnail(member.user.displayAvatarURL({ dynamic : true }))
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setImage('https://cdn.discordapp.com/attachments/803942006060613695/804971407472984064/image0.gif')
        )
    }
}