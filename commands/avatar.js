
const Discord = require("discord.js");
exports.run = (client,message,args)=>{
let member = message.mentions.users.first() || message.author;
    
    // Form Embed
  let rank = member.displayAvatarurl
    const embed = new Discord.RichEmbed()
    
        .setColor(0xffffff) // This will set the embed sidebar color
        .setTitle(member.username, "aqui está se avatar!") // This will set the embed title
       .setImage(member.displayAvatarURL)// This will set the embed image
    .setFooter("Para de tomar café nakan!")
        
    // Send Message
    message.channel.send(embed)
    
}


    module.exports.help = {
      name: "avatar"
    }
