var database = require("../database.js")

exports.run = (client, message, args) => {

    let prefix = args.slice(0).join(' ');

    if (!message.member.hasPermission(["MANAGE_GUILD"])) return message.reply("**Você não tem permissão para mudar minha prefixo!**");

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!prefix.length < 1)return message.reply("**Diga para que prefixo devo mudar!**");

                        
                        documento.prefix = message.content.replace(args[1]);
                        documento.save();
                        message.reply(`**Agora minha prefixo é **${documento.prefix}**!**`);
 } else {

            var servidor = new database.Guilds({
                _id: message.guild.id,
               prefix: "c!"
            })
            servidor.save()

        }

    })

}
