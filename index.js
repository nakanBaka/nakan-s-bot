const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on("message", message => {
  if(message.content == '<@430150354911494166>'){
var embedz = new Discord.RichEmbed()
.setAuthor('O-oi eu sou o Neko', message.author.displayAvatarURL)
.setColor(message.guild.member(message.author.id).displayHexColor)
.setDescription('Minha prefixo é B! para saber de mais digite B!help')
.setTimestamp()
.setFooter('NEKO')
message.channel.send({embed : embedz})
}})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
