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
      "embed": {
        "color": 55512,
        "thumbnail": {
          "url": message.guild.iconURL
        },
        "author": {
          "name": message.author.username,
          "icon_url": message.author.displayAvatarURL
        },
        "fields": [
          {
            "name": ":gem: **Seu Level atual é:**",
            "value": documento.level,
            "inline": true
          },
          {
            "name": "<a:rolao:477636855345578005> **Seu EXP atual é:**",
            "value": documento.xp + "/" + unbug,
            "inline": true
          }
        ]
      }
    });

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
            "embed": {
              "color": 55512,
              "thumbnail": {
                "url": message.guild.iconURL
              },
              "author": {
                "name": message.mentions.users.first().username,
                "icon_url": message.mentions.users.first().displayAvatarURL
              },
              "fields": [
                {
                  "name": ":gem: **O Level atual deste usuário é:**",
                  "value": documento.level,
                  "inline": true
                },
                {
                  "name": "<a:rolao:477636855345578005> **A EXP atual deste usuário é:**",
                  "value": documento.xp + "/" + unbug,
                  "inline": true
                }
              ]
            }
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
