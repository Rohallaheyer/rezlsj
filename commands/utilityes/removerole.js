
module.exports = {
    name : 'removerole',
    run : async(client, message, args) => {
        //
        /**
         * @param {Message} message
         */
        //
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have permission.')
        const target = message.mentions.members.first()
        if(!target) return message.channel.send('No member specified')
        const role = message.mentions.roles.first()
        if(!role) return message.channel.send('No role specified')
        await target.roles.remove(role)
        message.channel.send(`${target.user.username} roles has been removed`)
    }
}