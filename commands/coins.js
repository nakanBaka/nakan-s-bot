const Discord = require('discord.js');
var database = require("../database.js")

exports.run = (client, message, args) => {

    let user = message.mentions.users.first();

    if (message.mentions.users.size < 1) {

        database.Users.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            if (documento) {

                let embed = new Discord.RichEmbed()
          .setColor("#3fe5f4")    
          .setAuthor(`${message.author.username}`, message.author.iconURL)
          .setThumbnail(message.author.dislayAvatarURL)  
          .addField(`**Suas moedas atuais são:**`, documento.coins)
          .setTimestamp()
          message.channel.send(embed);

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

    } else {

        database.Users.findOne({
            "_id": message.mentions.users.first().id
        }, function(erro, documento) {

            if (documento) {

                let embed = new Discord.RichEmbed()
          .setColor("#3fe5f4")    
          .setAuthor(`${message.author.username}`, message.author.iconURL)
          .setThumbnail(message.author.dislayAvatarURL)  
          .addField(`**As moedas do usuário são:**`, documento.coins)
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
    }
}
