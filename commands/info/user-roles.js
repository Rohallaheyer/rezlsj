const { Message, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name : 'user-roles',
    /**
     * @param { String[] args}
     * @param {Client} client
     * @param {Message} message
     */
    run : async(client, message) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!member) return message.reply('Please specify a member!');

        const memberRoles = member.roles.cache
        .filter((roles) => roles.id !== message.guild.id)
        .map((role) => role.toString());

        message.channel.send(
            new MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic : true}))
            .setDescription(`${member}'s roles => ${memberRoles}`)
            .setColor('RANDOM')
            .setImage('https://cdn.discordapp.com/attachments/803942006060613695/804971407472984064/image0.gif')
        )
    }
}