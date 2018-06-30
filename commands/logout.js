exports.run = async (client, message, args, tools) => {
  
    if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== '357555941215961099') return message.channels.send('Nao tem permissao para me reiniciar!').then(msg => msg.delete({timeout: 10000}));
    resetBot(message.channel);
            function resetBot(channel) {
                message.react('✅')
                    .then(message => client.destroy())}}
                    client.users.get("341372896922435595").send("Eae nakan, alguem com cargo alto me desligou, só para avisar S2")
