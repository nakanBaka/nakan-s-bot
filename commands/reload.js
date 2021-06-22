exports.run = async (client, message, args) => {
    if (message.author.id === '427898378123214858') {
        if (!args[0]) return message.channel.send("**Digite o nome do comando que quer recarregar.**");
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        message.channel.send(`**O comando ${args[0]} foi recarregado.**`);
    } else return message.channel.send("**Você não pode usar esse comando.**");
}
