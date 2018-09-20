var database = require("../database.js")

exports.run = (client, message, args) => {

    let prefix = args.slice(0).join(' ');

    if (!message.member.hasPermission(["MANAGE_GUILD"])) return message.reply("**Você não tem permissão para mudar minha prefixo!**");

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!prefix.length < 1) {

                if (message.content.startsWith("a!welcome set")) {
                    if (!razaod.length < 1) {

                        
                        documento.prefix = message.content.replace("a!welcome set ", "");
                        documento.save();
                        message.reply(`**Agora minha prefixo é **${documento.prefix}**!**`);
