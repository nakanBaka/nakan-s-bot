const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {


if(!message.member.hasPermission("ADMINISTRATOR")) return;
const sayMessage = args.join(" ");
message.delete()
if(!sayMessage)return message.reply("**Diga algo para anunciar**");
const embed = new Discord.RichEmbed()

.setTitle('📢 **Anuncio!** 📢')
.setDescription(sayMessage)
.setFooter(`Enviado por: ${message.author.username}`)
.setTimestamp(new Date())
.setColor('RANDOM')
.setThumbnail(message.guild.iconURL);


message.channel.send(embed);

}
