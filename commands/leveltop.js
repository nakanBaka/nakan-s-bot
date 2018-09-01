var database = require("../database.js");
exports.run = (client, message, args) => {
    database.Users.findOne({
        "_id": message.author.id
    }, function(erromano, documano) {
        database.Users.find({}, function(erro, documento) {
            if (documento) {
                var position = documento.map(function(docu) {
                    return {
                        id: docu._id,
                        level: docu.level,
                        xp: docu.xp
                    }
                });
                position = position.sort(function(a, b) {
                    return b.level - a.level
                    return b.xp - a.xp
                });
                position = position.filter(function(a) {
                    return client.users.get(a.id)
                })
                var toplevel = "\n" + position.slice(0, 10).map((a, posicao) => "**" + (posicao + 1) + "** " +

                    client.users.get(a.id).username + " - **Level:** " + a.level + ", **Exp:** " + a.xp + "/" + (350 * a.level + 1)).join("\n") + "";
                message.channel.sendMessage({
                    let rank  = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor('Top 10 - level', toplevel)
      .setFooter(Sua pontuação atual: " + documano.level + ", Exp: " + documano.xp + "/" + (350 * documano.level + 1))
             message.channel.send(rank);  
               })
            }
        });
    })
}
