const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .setFooter(`Pedido por ${message.author.username}`)
   .addField("ID", message.guild.id, true)
   .addField("Nome", message.guild.name, true)
   .addField(`Servidor criado em`, `${moment.utc(message.guild.createdAt).format("LL")}`, true`)
   .addField("Dono", message.guild.owner.user.tag, true)
   .addField("Região", message.guild.region, true)
   .addField("Canais", message.guild.channels.size, true)
   .addField("Membros", message.guild.memberCount, true)
   .addField("Humanos", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("cargos", message.guild.roles.size, true);
   message.channel.send(serverembed);

}
