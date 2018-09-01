const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

      let reminderTime = args[0];
      if(!reminderTime) return message.channel.send("**Diga quando devo lhe avisar, exemplo: `B!lembrete 15min tomar café**");

      let reminder = args.slice(1).join(" ");

      let remindEmbed = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setAuthor(`**${message.author.username}**`, message.author.displayAvatarURL)
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
