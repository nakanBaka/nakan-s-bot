exports.run = (client,message,args)=>{
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermissions("KICK_MEMBERS")) return message.reply("você não tem permissão de usar esse comando!")
    if(message.mentions.users.size < 1) return message.reply("**Mencione alguem para expulsar!**")
                                                             
    if(!message.guild.member(usuario).kickable) return message.reply("**Eu não posso expulsar esta pessoa!**")
    if(razão.length < 1) return message.reply("**Coloque um motivo para expulsar o usuário!**")

    message.guild.member(usuario).kick()

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setTitle("**Usuário expulso do servidor!**")
   .addField("**Usuário:**",usuario.username)
   .addField("**Motivo:**", razão);

   message.channel.send(embed)
}
