const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {
    const ahkEmbed = new Discord.RichEmbed()
        .setTitle(`Escolha uma pizza.`)
        .setColor(`RANDOM`)
        .setDescription('Nós temos`pepperoni`, `queijo`, e... `abacaxi`');
    message.channel.send({
        embed: ahkEmbed
    })



    const msgs = await message.channel.awaitMessages(msg => {
        if (msg.content.startsWith("pepperoni")) {
            const ahkkEmbed = new Discord.RichEmbed()
                .setTitle(`Aqui esta sua pizza de pepperoni! Deguste:D`)
                .setColor(`RANDOM`)
                .setFooter("...")
                .setImage(`http://www.pngmart.com/files/1/Pepperoni-Pizza.png`)
            message.channel.send({
                embed: ahkkEmbed
            })
            return;
        } else if (msg.content.startsWith("queijo")) {
            const ahkkkEmbed = new Discord.RichEmbed()
                .setTitle(`Ok, lá vem sua pizza de queijo! *-*`)
                .setColor(`RANDOM`)
                .setFooter(`Amo pizza de queijo... ~nakan`)
                .setImage(`http://www.pngmart.com/files/1/Cheese-Pizza.png`)
            message.channel.send({
                embed: ahkkkEmbed
            })

        } else if (msg.content.startsWith("abacaxi")) {
            async function pineapple() {
                message.channel.send('sério?')
                const mesgs = await msg.channel.awaitMessages(messg => {
                    if (messg.content.startsWith("sim")) {
                        const ahkkkkEmbed = new Discord.RichEmbed()
                            .setTitle(`ok... Ta aqui '-'`)
                            .setColor(`RANDOM`)
                            .setFooter(`Pizza de abacaxi é ruim`)
                            .setImage(`https://www.cicis.com/media/1140/pizza_adven_hampineapple.png`)
                        message.channel.send({
                            embed: ahkkkkEmbed
                        })
                        return;
                    } else {
                        if (messg.content.startsWith("não")) {
                            message.channel.send('Ainda bem!')
                            return;
                        }
                    }

                }, {
                    time: 50000
                })
            }
            pineapple()
        }
    }, {
        time: 500000
    })
}

exports.pizza = {}

exports.help = {
    name: 'peetza'

}
