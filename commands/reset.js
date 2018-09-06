exports.run = (client, message, args) => {
if (message.author.id === "341372896922435595") {
  message.channel.send(":gear: **Reiniciando...**")
  
  client.destroy()
  client.login(process.env.TOKEN)
message.channel.send(":gear: **Reiniciado com sucesso!**")
} else {
	
message.channel.send("**Só o meu dono pode me reiniciar!**")
  
  }
  }
});
