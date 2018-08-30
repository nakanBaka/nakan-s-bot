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
  if(message.content == '<@484534602644455456>'){
var embedz = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL)
.setColor(message.guild.member(message.author.id).displayHexColor)
.setDescription(`**Olá! Perdido? Bem, digite ${config.prefix}help para saber sobre mim!**`)
.setTimestamp()
.setFooter('Charlie')
message.channel.send({embed : embedz})
}})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
