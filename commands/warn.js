const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  message.delete();

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("<:MarioFP:389447987165659146> **| Sem permissão.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(wUser === message.author) return message.channel.send("Você tem demencia? Porque diabos vai dar warn em si mesmo?!")
  if(!wUser) return message.reply("Não achei este usuario.");
  let reason = args.join(" ").slice(22);
if(!reason) return message.channel.send("Providencie uma razão!")
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor("#fc6400")
  .addField("Usuario", `${wUser.user.tag}`)
  .addField("Moderador", `${message.author.tag}`)
  .addField("Numero total de warns da pessoa", warns[wUser.id].warns)
  .addField("Razão", `${reason ? reason : "None."}`);

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.channel.send("<:MarioFP:389447987165659146> **| Não achei o canal 'logs'**");
  warnchannel.send(warnEmbed);
  message.channel.send("**|...**")

  
}

module.exports.help = {
  name: "warn"
}
