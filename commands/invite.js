const Discord = require('discord.js');

exports.run = (client, message, args) => {

var embedz = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.displayAvatarURL)
.setColor(message.guild.member(message.author.id).displayHexColor)
.setDescription(`**Olá! Vejo que quer me adicionar ao seu servidor! É claro que pode, clique [aqui](https://discord.com/api/oauth2/authorize?client_id=856914967491248178&permissions=0&scope=bot) para me adicionar com permissão de administrador.**`)
.setTimestamp()
.setFooter(`${message.author.username}`)
message.channel.send({embed : embedz})
}
