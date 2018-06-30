const {RichEmbed} = require("discord.js");
exports.run = async (client, message, args, level) => {
if (message.author.id == "341372896922435595") {
var nameResult = args.join(' ');
if (!nameResult) nameResult = null;
client.user.setActivity(nameResult, {type: "STREAMING"});
let embed = new RichEmbed()
.setAuthor(`${message.author.tag}`, `${message.author.avatarURL}`)
.setDescription(`${nameResult} mudei minha presença. (Para streaming)`)
message.channel.send(embed)
} else {
  let embed2 = new RichEmbed()
  .setTitle("Só o meu bebedor de café, Nakan S2.")
  message.channel.send(embed2)
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "setWatching",
  category: "Owner",
  description: "Sets new bot game in watching form",
  usage: "setWatching"
};
