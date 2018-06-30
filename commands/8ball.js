const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {
if(!args[0]) {
  const errEmbed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setAuthor('ERROR')
  .setTitle(':exclamation: Usage: **ks!8ball (question)**');
  message.channel.send({embed: errEmbed})
  return;
}
var sayings = ["claro",
										"é decididamente assim",
										"sem sombra de duvidas",
										"Sim, definitivamente",
										"você pode contar com isso",
										"como eu vejo, sim",
										"provavelmente",
										"parece bem",
										"sim",
										"sinais apontam que sim",
										"ERROR 404 NAKAN NOT FOUND",
										"pergunte denovo mais tarde",
										"melhor não te contar agora",
										"não posso prever agora",
										"Concentre-se e pergunte mais tarde",
										"não conte com isso",
										"minha resposta é não",
										"meus sentidos falam que não",
										"eu não sei",
										"muito duvidoso"];

			var result = Math.floor((Math.random() * sayings.length) + 0);
      const ballEmb = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor('8ball', 'https://findicons.com/files/icons/1700/2d/512/8_ball.png')
      .addField(args, sayings[result]);
			message.channel.send({embed: ballEmb})
}
