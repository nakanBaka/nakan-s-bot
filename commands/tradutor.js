exports.run = (client, message, args)  => {
    const translate = require('google-translate-api');
    let reason = args.slice(1).join(' ');
      if (reason.length < 1) return message.reply('**Diga a língua e oque eu devo traduzir!**');
    translate(`${message.content.replace(`c!tradutor ${args[0]} `,"")}`, {to: `${args[0]}`}).then(res => {
        message.channel.sendMessage({
            "embed": {
              "description": "ㅤ",
              "color": 55512
              },
              "author": {
                "name": message.author.username,
                "icon_url": message.author.displayAvatarURL
              },
              "fields": [
                {
                  "name": ":confused: Mensagem:",
                  "value": "```\n" + message.content.replace(`${args[0]} `,"") + "```",
                  "inline": true
                },
                {
                  "name": ":sunglasses: Tradução:",
                  "value": "```\n" + res.text + "```",
                  "inline": true
                }
              ]
            })
          });
    }).catch(err => {
        console.error(err);
        message.reply("**Acho que o idima não existe.**")
    });
    }
