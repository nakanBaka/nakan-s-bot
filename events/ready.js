const Discord = require("discord.js");
exports.run = (client,  bot) => {
  const config = require('./config.json');
//  client.user.setGame(config.prefix + "help")
  console.log(`Em funcionamento!!!! total de ${client.channels.size} Canais, em ${client.guilds.size} servers, um total de ${client.users.size} usuarios.`);
    client.on('guildMemberAdd', member =>{
	const embed = new Discord.RichEmbed()
  .setThumbnail(member.user.displayAvatarURL)
	.setAuthor( "Bem vindo! " + member.user.username)
	.setColor('BD10E0')
	.addField("nós pedimos para que você leia as regras ", "para não cometer nenhuma infração")
	.addField("Onde posso divulgar meus trabalhos?", "procure por canais com nome desenhos" )
.addField("Preciso de ajuda? ", "contate algum moderador presente!" );
  member.guild.channels.get('462368547012870145').send({embed});
	
  })
 client.on('message', (message) =>{


});
         }
