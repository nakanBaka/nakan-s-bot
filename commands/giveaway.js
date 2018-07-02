onst { RichEmbed } = require('discord.js');
const oneLine = require('common-tags').oneLine;
const Discord = require('discord.js')
const commando = require('discord.js-commando');
//const { draw, shhhuffle } = require('/app/Weeb/Utils.js')
const ms = require("ms");

 function shuffle(arr) {
        for (let i = arr.length; i; i--) {
            const j = Math.floor(Math.random() * i);
            [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
        }
        return arr;
    }

   function draw(list) {
        const shuffled = shuffle(list);
        return shuffled[Math.floor(Math.random() * shuffled.length)];
    }

module.exports = class UrbanDictionaryCommand extends commando.Command {
constructor(client) {
    super(client, {
        name: 'giveaway',
        aliases: ['criargiveaway', 'giveawaycriar'],
        group: 'util',
        memberName: 'Giveaway',
        description: 'Cria um giveaway ou sorteio.',
        examples: ["B!giveaway \"oque sortear\" 10h"],
        args: [
          {
            key: 'channel',
            prompt: 'Que canal você quer criar um sorteio?',
            type: 'Channel'
          },
            {
                key: 'pergunta',
                prompt: 'Qual é o premio do sorteio?',
                type: 'string',
            },
           {
                key: 'copunt',
                prompt: 'Quantos vencedores pode ter?',
                type: 'integer'
            },
            {
                key: 'time',
                prompt: 'Quanto tempo dura o sorteio?',
                type: 'string',
            },
        ]
    });
}

   async run(msg, { copunt, channel, question, time }) {
     let embed = new Discord.RichEmbed()
     .setTitle(question)
     .setDescription('Reaja com 🎉 para participar!!\nAcaba em '+time+' desde agora.')
     .setColor('RANDOM')
     .setTimestamp();
     channel.send(embed).then(message => {
         message.react('🎉').then( r => { 
           setTimeout(function(){
            if(message.reactions.get('🎉').count <= 2) {
              let embed2 = new Discord.RichEmbed()
     .setTitle(question)
     .setDescription('Acabou o sorteio, niguem votou...')
     .setColor('RANDOM')
     .setTimestamp();
              message.edit(embed2);
            } else {
              var winners = [];
               const users = message.reactions.get("🎉").users;
            const list = users.array().filter(u => u.id !== msg.author.id);
             // let winner = list[Math.floor(Math.random() * list.length)];
                 for (let i = 0; i < copunt; i++) {
                  const x = draw(list);

                if (!winners.includes(x)) winners.push(x);
            }

               let embed3 = new Discord.RichEmbed()
              .setTitle(question)
              .setDescription(`Vencedor/a: ${winners.filter(u => u !== undefined && u !== null).map(u => u.toString()).join(", ")}`)
              .setFooter('Acabou o sorteio!')
              .setColor('RANDOM')
              //.setFooter(`${copunt} Winner(s)`)
              .setTimestamp();
              message.edit(embed3)
            }
        }, ms(time));
         })
     })
   }
}
