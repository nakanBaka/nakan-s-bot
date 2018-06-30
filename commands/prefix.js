if (!message.member.hasPermission('ADMINISTRATOR') return message.channel.send('sem permissão!')
	.then(msg => msg.delete({
		timeout: 10000
	}));
if (!args.join(' ')) return message.channel.send('Diga a prefixo que deseja!')
	.then(msg => msg.delete({
		timeout: 10000
	}));

db.set(`prefix_${message.guild.id}`, args.join(' '))
	.then(i => {
		message.channel.send(`Mudei a prefixo deste servidor para: ${i}`);
	})
