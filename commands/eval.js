const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let embed = new Discord.RichEmbed()
  .setTitle("Ops...")
  .setDescription("Desculpe, o comando `eval` só pode ser executado pelo desenvolvedor.")
  .setColor("#cdf785");
  if(message.author.id !== '341372896922435595') return message.channel.send(embed);
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}try {
      const code = args.join(" ");
      let evaled = eval(code);
      let rawEvaled = evaled;
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

  let embed = new Discord.RichEmbed()
      .setTitle(`Ping ${Math.round(bot.ping)}ms`)
      .addField(":inbox_tray: código", `\`\`\`js\n${code}\n\`\`\``)
      .addField(":outbox_tray: resultado", `\`\`\`js\n${clean(evaled).replace(bot.token, "Ermm...")}\n\`\`\``)
      .addField('Type', `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() + (typeof rawEvaled).substr(1)}\n\`\`\``)
      .setColor('GREEN');
      message.channel.send({embed});
    } catch (err) {
      
      message.channel.send(`\`ERRO\` \`\`\`js\n${clean(err)}\n\`\`\``);
    }
}

module.exports.help = {
  name: "eval"
}
