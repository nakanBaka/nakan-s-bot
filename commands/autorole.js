var database = require("../database.js")

exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let razaot = args.slice(2).join(' ');
    let razaoq = args.slice(3).join(' ');
    let user = message.mentions.roles.first();

     if (!message.member.hasPermission(["MANAGE_ROLES"])) return message.reply("**Você não tem permissão para definir um autorole!**")
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!razaou.length < 1) {

                if (message.content.startsWith("c!autorole set")) {

                    if (message.mentions.roles.size < 1) return message.reply("**Mencione o cargo que deseja definir ao autorole!**");
                    if(message.mentions.roles.first().position >= message.guild.members.get(client.user.id).highestRole.position){
                        message.reply("**Eu não tenho permissão de adicionar este cargo ao autorole.**");
                    } else {
                    documento.autoroleid = message.mentions.roles.first().id
                    documento.autorole = true
                    documento.save();

                    message.reply("**Autorole definido!**");
                    }
                }

                if (message.content.startsWith("c!autorole delete")) {
                        if (!documento.autorole) {
                            message.reply("**Não há um autorole definido neste servidor!**");
                        } else {
                            documento.autoroleid = "Nenhum"
                            documento.autorole = false
                            documento.save()
                            message.reply("**Autorole removido com sucesso!**");
                    }
                }

                if (message.content.startsWith("c!autorole info")) {

                    if (!documento.autorole) {
                        let aembed = new Discord.RichEmbed()
                     .setColor("#3fe5f4")    
                     .setDescription("**Cargo setado:** <@&" + documento.autoroleid + ">\nㅤ\n**Como usar:**\n\nc!autorole set <Cargo>\c!autorole delete")
                     .setThumbnail(message.author.dislayAvatarURL)  
                     .setTimestamp()
                      message.channel.send(aembed);
                    } else {
                     let bembed = new Discord.RichEmbed()
                     .setColor("#3fe5f4")    
                     .setDescription("Como usar autorole: c!autorole set <cargo>, c!autorole delete, c!autorole info"`)
                     .setThumbnail(message.author.dislayAvatarURL)  
                     .setTimestamp()
                      message.channel.send(bembed);   
                    }

                }

            } else {
                 let embed = new Discord.RichEmbed()
          .setColor("#3fe5f4")    
          .setDescription("**Como usar autorole: c!autorole set <cargo>, c!autorole delete, c!autorole info**")
          .setThumbnail(message.author.dislayAvatarURL)  
          .setTimestamp()
          message.channel.send(embed);
            }

        } else {

            var servidor = new database.Guilds({
                _id: message.guild.id,
                prefix: "c!",
                autorole: false,
                autoroleid: "Nenhum",
                welcome: false,
                welcomechannel: "Nenhum",
                welcomemsg: "Nenhuma",
                byebye: false,
                byebyechannel: "Nenhum",
                byebyemsg: "Nenhuma",
            })
            servidor.save()
        }

    })

}
