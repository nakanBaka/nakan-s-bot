exports.run = (client,message,args)=>{
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermissions("KICK_MEMBERS")) return message.reply("você não tem permissão de usar esse comando!")
    if(message.mentions.users.size < 1) return message.reply("mencione alguem para kickar!")
    if(!message.guild.member(usuario).kickable) return message.reply("eu não posso kickar essa pessoa!")
    if(razão.length < 1) return message.reply("coloque um motivo para kickar ele")

    message.guild.member(usuario).kick()

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setTitle("usario expulso do servidor! :o")
   .addField("usuario:",usuario.username)
   .addField("razão:", razão);

   message.channel.send(embed)
}
