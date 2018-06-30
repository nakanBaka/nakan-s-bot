``;const Discord = require('discord.js');
const quiz = [
  { q: "qual é a cor do céu?", a: ["num tem", "invisivel"] },
  { q: "nomeie uma marca de bebida.", a: ["pepsi", "coke", "rc", "7up", "sprite", "mountain dew"] },
  { q: "nomeie uma linguagem de programação.", a: ["actionscript", "coffeescript", "c", "c++", "basic", "python", "perl", "javascript", "dotnet", "lua", "crystal", "go", "d", "php", "ruby", "rust", "dart", "java", "javascript"] },
  { q: "quem e o garotão?", a: ["é você", "eu"] },
  { q: "quem me criou?", a: ["Nakan"] },
  { q: "eu fui feito com o que?", a: ["javascript","js"] },
  { q: "nome do sétimo planeta do sistema solar.", a: ["urano"] },
  { q: "nome da ilha mais grande do mundo.", a: ["greenland",] },
  { q: "qual é o maior rio do mundo?", a: ["amazonia", "rio da amazonia"] },
  { q: "nome do maior oceano do mundo.", a: ["pacifico", "oceano pacifico"] },
  { q: "nome de uma das cores primarias.", a: ["azul", "vermelho", "amarelo"] },
  { q: "quantas cores o arco-íris possui?", a: ["7", "sete"] },
  { q: "O que você chama de um período de tempo de mil anos?", a: ["milenio"] },
  { q: "quantas casas tem no tabuleiro de xadrez?", a: ["64", "sesenta e quatro"] },
  { q: "quantos graus tem um circulo?", a: ["360", "360 graus", "trezentos e sessenta graus"] },
  { q: "O sistema decimal de Dewey é usado para categorizar?", a: ["livros"] },
  { q: "Quantos pontos tem uma bússola?", a: ["32", "trinta e dois"] },
  { q: "Quantas cordas um violino tem?", a: ["4", "quatro"] },
  { q: "quantas sinfonias bethoveen fez?", a: ["9", "nove"] },
  { q: "quem descobriu o brasil?", a: ["pedro alvares cabral"] },
  { q: "qual a lingua mais basica qua microsoft fez?", a: ["visual basic"] },
  { q: "que lingua é a mais complicada?", a: ["codigo binario"] },
  { q: "a abreviatura OS significa?", a: ["sistema operacional", "operating system"] }
];
const options = {
  max: 1,
  time: 30050,
  errors: ["1"],
};

module.exports.run = async (bot, message, args) => {
  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`${winnerMessage.author.tag} Venceu!!`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Resposta correta: \`${winnerMessage.content}\``)
                                 .setFooter(`Pergunta: ${item.q}`)
                                 .setColor("RANDOM")
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('ninguém respondeu a tempo!')
                                 .setTitle(`Resposta correta(s): \`${item.a}\``)
                                 .setFooter(`pergunta: ${item.q}`)
                                })
  }
{}}
