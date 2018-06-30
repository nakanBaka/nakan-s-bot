exports.run = (client,message,args)=>{
    var sugest = args.slice(0).join(" ")
    if(!sugest) return message.reply("escreva sua sugestão")
        client.guilds.get("380871687702446080").channels.get("462100713120464926").send("----------------------S2 Sugestão S2------------------------\n"+ sugest + "\n sugestão enviada por <@" + message.author.id + "> ou " + message.author.tag + "\n---------------------fim--------------------")
    message.channel.send("sua sugestão foi enviada")
}
