const Discord = require('discord.js');
const client = new Discord.Client();


exports.run = async (client, message, args, tools) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== '357555941215961099') return message.channels.send('Foi mals, sem permissão de criar enquetes!').then(msg => msg.delete({timeout: 10000}));
  if (!args.join(' ')) return message.channel.send('Como usar: enquete <pergunta>').then(msg => msg.delete({timeout: 10000}));
  
  const embed = new Discord.RichEmbed()
    .setTitle(args.join(' '))
    .setFooter('Reaja para votar!')
    .setColor('#7289DA')
    const pollTitle = await message.channel.send({ embed });
    await pollTitle.react(`👍`);
    await pollTitle.react(`👎`);
  
    const filter = (reaction) => reaction.emoji.name === '👍';
    const collector = pollTitle.createReactionCollector(filter, { time: 15000 });
      collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector.on('end', collected => console.log(`Coletados ${collected.size} itens`));
  
    const filter1 = (reaction) => reaction.emoji.name === '👎';
    const collector1 = pollTitle.createReactionCollector(filter1, { time: 15000 });
      collector1.on('collect', r => console.log(`Collected ${r.emoji.name}`));
      collector1.on('end', collected => console.log(`Coletados ${collected.size} itens`));
};
