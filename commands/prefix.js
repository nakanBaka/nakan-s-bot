var database = require("../../database.js")

exports.run = (client, message, args) => {
 if (!message.member.hasPermission(["MANAGE_GUILD"])) return message.reply("**Você não tem permissão para mudar minha prefixo!**");
 
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {
        if (!args[0])return message.reply("**Diga para que prefixo devo mudar!**")
        
       } else {
        documento.prefix = message.content.replace(args[0]);
        documento.save();
        message.reply(`Mudei minha prefixo para: **${documento.prefix}**`);
          }
          
            } else {

            var servidor = new database.Guilds({
                _id: message.guild.id,
                prefix: "c!",
                welcome: false,
                welcomechannel: "Nenhum",
                welcomemsg: "Nenhuma",
                byebye: false,
                byebyechannel: "Nenhum",
                byebyemsg: "Nenhuma"
            })
            servidor.save()
       
