var database = require("../database.js")

exports.run = (client, message, args) => {

  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) {

  database.Users.findOne({
    "_id": message.author.id
}, function(erro, documento) {

  if (documento) {

    var unbug = 350 * documento.level + 1

    message.reply({
           let LvlEmbed = new Discord.RichEmbed()
          .setColor("#3fe5f4")    
          .setAuthor(`Seu level é:`, documento.level)
          .addField(`Seu xp atual é:`, documento.xp + "/" + unbug)
          .setTimestamp()
		 message.channel.send(LvlEmbed);
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

        var unbug = 350 * documento.level + 1

          message.reply({
            let LvlpEmbed = new Discord.RichEmbed()
          .setColor("#3fe5f4")    
          .setAuthor(`O level atual do usuário é:`, documento.level)
          .addField(`O xp atual do usuário é:`, documento.xp + "/" + unbug)
          .setTimestamp()
		 message.channel.send(LvlpEmbed);
               
              
          });

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
