const schema = require('../../models/custom-commands');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "cc-list",
    run: async(client, message, args) => {
        const data  = await schema.find({ Guild: message.guild.id });
        if(!!data === false) return message.channel.send('There is no custom commands!');
        message.channel.send(
            new MessageEmbed()
                .setColor('BLACK')
                .setDescription(
                    data.map((cmd, i) => 
                        `${i + 1}: ${cmd.Command}`
                    ).join('\n')
                )
        )
    }
}