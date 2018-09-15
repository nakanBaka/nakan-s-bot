const Discord = require('discord.js');
var database = require("../database.js")

exports.run = (client, message, args) => {

    let user = message.mentions.users.first();
    let razaod = args.slice(1).join(' ');

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {

        if (documento) {

            if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para emprestar dinheiro!**");
            if (message.mentions.users.first().id == message.author.id) return message.reply("**Você não pode emprestar para você mesmo!**");
            if (!razaod.length < 1) {
                if (parseInt(args[1]) > 0) {
                if (args[1] < documento.coins) {

                    database.Users.findOne({
                        "_id": message.mentions.users.first().id
                    }, function(errou, docs) {

                        if (docs) {

                            docs.coins += parseInt(args[1])
                            docs.save();
                            documento.coins -= parseInt(args[1])
                            documento.save();
                            let embed = new Discord.RichEmbed()
          .setColor("#3fe5f4")    
          .setAuthor(`${message.author.username}`, message.author.iconURL)
          .addField(`**Emprestado:**`, docs.coins + " **Para** " + user)
          .setTimestamp()
          message.channel.send(embed);

                        } else {

                            var pessoa = new database.Users({
                                _id: message.mentions.users.first().id,
                                level: 0,
                                xp: 0,
                                coins: 0
                            })

                            pessoa.save()

                        }

                    })

                } else {
                    message.reply("**Você não tem esse dinheiro todo!**")
                }
            } else {
                message.reply("**Não pode ser 0 ou menor!**");
            }
            } else {
                message.reply("**Diga quanto vai emprestar!**");
            }

        } else {


            var pessoa = new database.Users({
                _id: message.author.id,
                level: 0,
                xp: 0,
                coins: 0
            })
            pessoa.save()
        }
    })

}
