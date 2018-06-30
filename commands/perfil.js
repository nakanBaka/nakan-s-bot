var Discord = require('discord.js')
const moment = require("moment");
exports.run = (client,message,args)=>{
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
      let bot;
  if (member.user.bot === true) {
    bot = "Sim";
  } else {
    bot = "Não";
  }
      let serverembed = new Discord.RichEmbed()
    .setColor(randomColor)
    .setThumbnail(member.user.displayAvatarURL)
    .setAuthor(`${member.user.tag} (${member.id})`, member.user.avatarURL)
    .addField("Nome do usuario:", `${member.user !== null ? `${member.user}` : "Nome não encontrado."}`, true)
    .addField("Bot?", `${bot}`, true)
    .addField("Jogando:", `${member.user.presence.game ? `${member.user.presence.game.name}` : "nada."}`, true)
    .addField("Seus cargos:", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Sem cargos!"}`, true)
   // .addField("Entrou no server:", `${moment.utc(member.joinedAt).format("Y-m-d H:m:s")}`, true)
  //  .addField("Criou sua conta:", `${moment.utc(member.user.createdAt), true);
       .setTimestamp()
    message.channel.send(serverembed).catch(err => console.log(err));
}
