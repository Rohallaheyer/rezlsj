const {Collection, Client, Discord, Guild} = require('discord.js')
const fs = require('fs')
const { MessageEmbed } = require('discord.js')
const client = new Client({
    disableEveryone: true
})
const mongoose = require('mongoose');
const { stringify } = require('querystring');

mongoose.connect('mongodb+srv://recon:09022863963@youtubetutorials.66enp.mongodb.net/Data', {
    useUnifiedTopology : true,
    useNewUrlParser: true,
}).then(console.log('Connected to mongo db!'))
const config = require('./config.json')
const blacklist = require('./models/blacklist')
const { db } = require('./models/blacklist');
const { url } = require('inspector');
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
	function randomStatus() {
   let targetguild0 = client.guilds.cache.get("726033850240598038")
   let status = ["NetBee Manager", `${targetguild0.memberCount} Members`, "'₢ãvalιer Pâradôx#6061", `!help | ping: ${client.ws.ping}ms`, {"url":"https://www.twitch.tv/cavalier_paradox","name":"N E T B E E", type: "STREAMING"}]
   let rstatus = Math.floor(Math.random() * status.length);
   client.user.setActivity(status[rstatus], {type: "LISTENING"});
  }; setInterval(randomStatus, 3000)
    console.log(`${client.user.username} ✅`)
})
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})
client.on('message', async message => {
	// Voice only works in guilds, if the message does not come from a guild,
	// we ignore it
	if (!message.guild) return;
  
	if (message.content === `${prefix}join`) {
	  // Only try to join the sender's voice channel if they are in one themselves
	  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
    message.reply('Joined voice channel!');
	  } else {
		message.reply('You need to join a voice channel first!');
	  }
	}
})
client.on("message", message => {

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;

    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

    if (message.content === `${prefix}vc`) {
    const vc_alive = new MessageEmbed()
	   .setColor('RANDOM')
	   .setThumbnail(message.guild.iconURL())
	   .setTitle('Alive Voice')
       .addFields(
        { name: 'Count Of Users In Voice :', value: `${count}` },
       )
       .setTimestamp()
       .setFooter(`Requested by ${message.author.username}`);
       message.channel.send(vc_alive);
    }
})
client.on('message', async message =>{
    const chid = "788093558774562876"
    const ch = client.channels.cache.get(chid)
    const connection = await ch.join();
    connection.voice.setSelfMute(false);
    connection.voice.setSelfDeaf(true)
  });
client.login(token)
