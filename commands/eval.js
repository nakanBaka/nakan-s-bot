const Discord = module.require("discord.js")

module.exports.run = async (client, message, args) => {
    if(message.author.id !== '341372896922435595') return;
    function clean(text) {
      if (typeof(text) === "string")
        return text.replace(/'/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }
  
  console.log(`\n${message.author.username}#${message.author.discriminator} Used .Eval Command On ${message.guild.name}`)
    let argresult = args.join(' ');
    if (message.author.id !==  'Membros') {
           // Check if user have Permissions to use the command
          message.channel.send('Oh! Que pena... Você não tem permisão'); // Send Message to the channel if they dont have permissions
          return; // Returns the code so the rest doesn't run
        }
        if (!argresult) {
          return message.channel.send("Por favor mande o código!");
        }
  
        try {
  
          var evaled = eval(argresult);
  
          if (typeof evaled !== "string")
         evaled = require("util").inspect(evaled);
         if (evaled.includes(client.token)) {
            console.log(`\n${message.author.username}#${message.author.discriminator} Tente pegar a Token do bot em ${message.guild.name} (ServerID: ${message.guild.id}).\n`)
            return message.channel.send("", {
             embed: {
                color: 0xFF5733,
                title: ':exclamation::exclamation: Não :exclamation::exclamation:',
                description: `Sem token para você!`
             }
            });
          }
  
          let embed = new Discord.MessageEmbed()
          .addField(`${client.user.username} - JavaScript Eval foi um Successo:`, `** **`)
          .addField(":inbox_tray: **código**", "```" + args.join(" ") + "```")
          .addField(":outbox_tray: **resultado**", "```" + clean(evaled) + "```")
          .setColor(0xFF5733)
          .setFooter(message.createdAt, message.author.avatarURL)
          message.channel.send({embed})
  
        } catch (err){
  
          message.channel.send(new Discord.MessageEmbed()
          .addField(`${client.user.username} - JavaScript Eval Error:`, "Não, não, não! Ocorreu um problema!")
          .addField(":no_entry: ERRO", "```" + clean(err) + "```")
          .setColor(0xFF5733)
          .setFooter(message.createdAt, message.author.avatarURL))
          
              .catch( error => message.channel.send(`**Erro:** ${error.message}`))
        }

}

    
