const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:
 
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
 
});
client.on("message", message => {
  if(message.content == '<@430150354911494166>'){
var embedz = new Discord.RichEmbed()
.setAuthor('Eu amo panquecas!', message.author.displayAvatarURL)
.setColor(message.guild.member(message.author.id).displayHexColor)
.setDescription('OI! Está perdido/a? Digite B!help para saber mais!')
.setTimestamp()
.setFooter('NEKO')
message.channel.send({embed : embedz})
}})

    client.on('guildMemberAdd', member =>{
	const embed = new Discord.RichEmbed()
  .setThumbnail(member.user.displayAvatarURL)
	.setAuthor( "Bem vindo! " + member.user.username)
	.setColor('BD10E0')
	.addField("nós pedimos para que você leia as regras ", "para não cometer nenhuma infração")
	.addField("Onde posso divulgar meus trabalhos?", "#desenhos-do-pessoal" )
.addField("Preciso de ajuda? ", "contate algum moderador presente!" );
  member.guild.channels.get('462368547012870145').send({embed});
  client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "membros");
    member.addRole(role).catch(console.error);
});
 client.on('message', (message) =>{
});
         }
	   if(message.content == 'café'){
	      var nameResult = args.join(' ');
if (!nameResult) nameResult = null;
client.user.setActivity(nameResult, {type: "STREAMING"});
let embed = new RichEmbed()
.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
.setDescription(`droga! Você descobriu, parabéns. Mudei minha presença para: ${nameResult}`)
message.channel.send(embed)
} else {

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
