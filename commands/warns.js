const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sem permissão.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Não achei ninguem com esse nome.");
  let warnlevel = warns[wUser.id].warns;

  let embed = new Discord.RichEmbed()
  .setTitle("Warns")
  .addField("Usuario", wUser.user.tag)
  .addField("Moderador", message.author.tag)
  .addField("Número de warns", `${warnlevel}`)
  .setColor("#f4b342")
  message.channel.send(embed);

}

module.exports.help = {
  name: "warnlvl"
}
