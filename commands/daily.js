var database = require("../../database.js")
var dayCol = new Set()
let dayRDM = Math.round(Math.random() * 2500)

exports.run = (client, message, args) => {

    if (dayCol.has(message.author.id)) return message.reply("**Você já pegou daily hoje!**");

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {

            documento.coins += dayRDM
            documento.save()
           let embed = new Discord.RichEmbed()
          .setColor("#3fe5f4")    
          .setAuthor(`${message.author.username}`, message.author.iconURL)
          .setThumbnail(message.author.dislayAvatarURL)  
          .addField(`**Daily**`, `**Você coletou: ${dayRDM} coins!**`)
          .setTimestamp()
          message.channel.send(embed);
            dayCol.add(message.author.id)
            setTimeout(function() {
                dayCol.delete(message.author.id)
            }, 6 * 1000 * 60 *60)

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
