var database = require("../database.js")

exports.run = (client, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');

    
          if (!message.member.hasPermission(["MANAGE_GUILD"])) return message.reply("**Você não tem permissão para definir meu welcome!**")

   database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!razaou.length < 1) {

                if (message.content.startsWith("c!welcome set")) {
                    if (!razaod.length < 1) {

                        documento.welcomechannel = message.channel.id
                        documento.welcomemsg = message.content.replace("c!welcome set ", "");
                        documento.welcome = true
                        documento.save();
                        message.reply("**Welcome setado com sucesso!**");

                    } else {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**Bem-vindo**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```c!welcome set <mensagem de boas-vindas>.```",
                                "color": 55512
                            }
                        });
                    }
                }

                if (message.content.startsWith("c!welcome delete")) {
                    if (!documento.welcome) {
                        message.reply("**Não há um welcome definido neste servidor!**");
                    } else {
                        documento.welcome = false
                        documento.welcomechannel = "Nenhum"
                        documento.welcomemsg = "Nenhuma"
                        documento.save()
                        message.reply("**Welcome removido com sucesso!**");
                    }
                }

                if (message.content.startsWith("c!welcome info")) {
                    if (!documento.welcome) {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**❄ WELCOME ❄**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```{member} menciona o usuário\n{guild} fala o nome do servidor\n{name} fala o nome do usuário```",
                                "color": 55512
                            }
                        });
                    } else {
                        message.channel.sendMessage({
                            "embed": {
                                "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ**Bem-vindo**ㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Mensagem de boas vindas:** " + documento.welcomemsg + "\n**Canal de boas vindas:** <#" + documento.welcomechannel + ">\nㅤ\n**Como usar:**\n```{user} menciona o usuário\n{server} fala o nome do servidor\n{tag} fala o nome do usuário```",
                                "color": 55512
                            }
                        });
                    }

                }
            } else {

                message.channel.sendMessage({
                    "embed": {
                        "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**Ajuda**ㅤㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```c!welcome define\c!welcome delete\c!welcome info```",
                        "color": 55512
                    }
                });

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
                byebyemsg: "Nenhuma",
                autorole: false,
                autoroleid: "Nenhum"
            })
            servidor.save()

        }

    })

}
