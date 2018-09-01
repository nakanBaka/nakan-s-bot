const Discord = require("discord.js");
const ms = require("ms");
const config = require('./config.json');

module.exports.run = async (bot, message, args) => {

      let reminder = args.slice(1).join(" ");
      let reminderTime = args[0];
      if(!reminderTime) return message.channel.send(`**Diga quando devo lhe avisar, exemplo: ${config.prefix}lembrete 15m tomar café**`);
      if(!reminder) return message.channel.send("**Diga porque devo lhe avisar!**");
      

      let remindEmbed = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
      .addField("**Motivo:**", `\`\`\`${reminder}\`\`\``)
      .addField("**Tempo:**", `\`\`\`${reminderTime}\`\`\``)
      .setTimestamp();

      message.channel.send(remindEmbed);


      setTimeout(function(){
        let remindEmbed = new Discord.RichEmbed()
        .setColor('#ffffff')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("**Lembrete:**", `\`\`\`${reminder}\`\`\``)
        .setTimestamp()

        message.author.send(remindEmbed);
      }, ms(reminderTime));


    }

    module.exports.help = {
      name: "remind"
    }
