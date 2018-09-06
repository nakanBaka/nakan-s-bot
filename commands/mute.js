const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first()
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Desculpe mas você não possui permissão.");
    if(message.mentions.users.size < 1) return message.reply("Você não mencionou ninguém!")
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Não achei o usuario.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Este usuario tem o mesmo cargo que você, ou um cargo maior que você.");
    let muterole = message.guild.roles.find(`name`, "Charlie-Mute");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Charlie-Mute",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.reply("Você não especificou o tempo!");

    await (tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> foi mutado por ${ms(ms(mutetime))}`);
console.log(`${message.author.username} MUTOU brutalmente ${user.username}`)
    setTimeout(function() {
        tomute.removeRole(muterole.id);
        console.log(`<@${tomute.id}> já foi desmutado!`);
    }, ms(mutetime));

}

exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "mute",
    description: 'Proíbe o usuario de falar e reagir por um determinado tempo.',
    usage: 'mutar [segundos, minutos, horas...]'
}
