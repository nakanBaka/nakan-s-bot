const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR")
const ms = require('ms');
const c = ("**")
module.exports.run = async (bot, message, args) => {
      if (message.mentions.users.first()) {
        let alo = message.mentions.users.first() || message.author
      userapelido = message.guild.member(message.mentions.users.first()).nickname
    user = message.mentions.users.first().username;
    userfoto = message.mentions.users.first().displayAvatarURL;
  userstatus = message.mentions.users.first().presence.status;
  usertag = message.mentions.users.first().tag;
  usercolorole = message.guild.member(message.mentions.users.first()).displayHexColor;
  usercriado = alo.createdAt;
  userid = message.mentions.users.first().id;
  name = message.mentions.users.first().username
  game2 = message.mentions.users.first().presence.game;
  userentrou = message.guild.member(alo).joinedAt;
  usercargo = message.guild.member(message.mentions.users.first().id).roles;
  userbot = message.mentions.users.first().bot;
    numerozinho = message.mentions.users.first().discriminator
  
  } else {
    let alo = message.mentions.users.first() || message.author
    user = message.author.username;
    userfoto = message.author.displayAvatarURL;
    userstatus = message.author.presence.status;
  usertag = message.author.tag;
  usercolorole = message.guild.member(message.author.id).highestRole.displayHexColor;
  usercriado = alo.createdAt;
  userid = message.author.id;
  name = message.author.username
  game2 = message.author.presence.game;
  userentrou = message.guild.member(alo).joinedAt;
  usercargo = message.guild.member(message.author.id).roles;
  userapelido = message.guild.member(message.author.id).nickname
  userbot = message.author.bot;
  numerozinho = message.author.discriminator
  }
    const cargus = usercargo.map(u => u.name).join(", ")
	  function stats() {
    var status = userstatus
    if  (status == "online") {
    return "Disponivel"
  } else if (status == "offline") {
    return ("Offline")
    } else if  (status == "dnd") {
    return ("Não perturbe")
    } else if (status == "idle") {
    return ("Ausente")
    }
  }
  let uEmbed = new Discord.RichEmbed()
  .setAuthor('Informações do usuário ' + message.author.username, message.author.avatarURL)
  .setColor("#00ff00")
  .setThumbnail(userfoto)
  .addField("🗒__Nome__",`${c}` + user + `${c}`, true)
  .addField("🔖__Discriminador__",`${c}` + numerozinho + `${c}`, true)
  .addField("🖥__ID__",`${c}` + userid + `${c}`, true)
  .addField("📊__Status__",`${c}` + stats() + `${c}`)
  .addField("🗄__Cargos__", `${c}` + `${cargus}` + `${c}`, true)
  .addField("🕹__Jogando__",`${c}` + `${game2 ? `${game2.name}` : "Não Está Jogando Nada!"}` + `${c}`)
  .addField("💡__Conta criada em :__",`${c}` + `${moment.utc(usercriado).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.author.createdAt, {long: true})})` + `${c}`)
  .addField("💎__Entrou em :__",`${c}` + `${moment.utc(userentrou).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.member.joinedAt, {long: true})})` + `${c}`); 


  message.channel.send(uEmbed);
}

module.exports.help = {
  name: "fake"
}
