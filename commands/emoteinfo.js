const Discord = require("discord.js")
const moment = require("moment")
moment.locale("pt-BR")

module.exports.run = async (bot, message, args) => {
        let emoji = message.guild.emojis.find(emoji => emoji.name === `${args.join(" ")}`)
        
        const embed = new Discord.RichEmbed()
        .setAuthor(`Informações do emoji ${emoji.name}`)
        .setColor("#FF0000")
        .setThumbnail(emoji.url)
        .addField("Do servidor:", emoji.guild.name)
        .addField("Criado em:", moment(emoji.createdAt).format("LLLL"))
        .addField("ID:", emoji.id)
        message.channel.send(embed)
}
