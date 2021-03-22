const { WebhookClient, MessageEmbed } = require('discord.js')

module.exports = {
    name : 'webhook',
    run : async(client, message, args) => {
        const wc = new WebhookClient('808579515487354880', 'MWZyqmAoOFvAfQk-uP9X7PxltogsCTyJrlnSaMVsFX8Rq4tyhpyZkzA96m87pf7nn1Pf') //id webhook
        const embed = new MessageEmbed()
            .setTitle("this is an embed").setColor('BLACK').setTimestamp().setDescription(args.join(" "))
    wc.send({
        username : message.author.tag,
        avatarURL : message.author.displayAvatarURL({ dynamic : true }),
        embeds : [embed]
    })
    }
}
