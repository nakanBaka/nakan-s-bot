const Discord = require('discord.js');
const client = new Discord.Client({
    autoReconnect: true
});
const config = require('./config.json');
const fs = require('fs');
var database = require("./database.js")
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube(process.env.YOUTUBE_API);
const queue = new Map();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:

  try {
	let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
    message.react("✅")
    
  
  console.log(`[${message.author.tag}] Usou o  Comando: "${command}" em: [${message.guild.name}]`);
	} catch (err) {
   console.error(err);
   message.reply(`*Ocorreu um erro ao executar o comando:* **${err}**`)
  }
});
   
client.on("message", message => {
  if(message.content == '<@484534602644455456>'){
var embedz = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.displayAvatarURL)
.setColor(message.guild.member(message.author.id).displayHexColor)
.setDescription(`**Olá! Se quiser minha ajuda escreva ${config.prefix}help.**`)
.setTimestamp()
.setFooter(`Pedido por ${message.author.username}`)
message.channel.send({embed : embedz})
}})



var xpCol = new Set()
let xpRDM = Math.round(Math.random() * 21)

client.on("message", message => {
    if (message.author.bot) return;
    if (xpCol.has(message.author.id)) return;
    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {
            var unbug = 900 * documento.level + 1
            if (documento.xp > unbug) {
                documento.xp += xpRDM
                documento.level += 1
                 let LvlUpEmbed = new Discord.RichEmbed()
          .setColor("#3fe5f4")    
          .setAuthor(`Parabéns ${message.author.username}! Você subiu para o level ${documento.level}`)
          .setTimestamp()
		 message.channel.send(LvlUpEmbed);
                documento.save()
                xpCol.add(message.author.id)
                setTimeout(function() {
                    xpCol.delete(message.author.id)
                }, 30 * 1000)
            } else {
                if (message.guild.members.get(message.author.id).roles.get("462692320463290378")) {
                    documento.xp += xpRDM * 2
                    documento.save()
                    xpCol.add(message.author.id)
                    setTimeout(function() {
                        xpCol.delete(message.author.id)
                    }, 30 * 1000)
                } else {
                    documento.xp += xpRDM
                    documento.save()
                    xpCol.add(message.author.id)
                    setTimeout(function() {
                        xpCol.delete(message.author.id)
                    }, 30 * 1000)
                }
            }
        } else {
            var pessoa = new database.Users({
                _id: message.author.id,
                level: 0,
                xp: 0,
                coins: 0,
                msglevel: 0,
                rep: 0
            })

            pessoa.save()
        }
    });
});



    client.on('message', message => {
        if (message.channel.type == "dm") return;
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        const swearWords = ["https://discord.gg/"]; // These are the words that wll be filtered. If you would like to add more, simple add ,"word" inbetween the [ and ] and then it'll filter that word as well
        if (swearWords.some(word => message.content.toLowerCase().includes(word))) {
            message.delete();
            message.channel.send(`**Hey ${message.author}! Você não possui permissão para mandar convites!**`).then(m => m.delete(3000));
            embed = new Discord.RichEmbed() // The log feature will log embeds, instead of simple messages. This improves the look of the word filter and makes it easier to code.
            embed.setAuthor(name=`${message.author.tag}`, icon=message.author.avatarURL) // The author label will show the user who actually used the word. It will show their FULL tag and their profile picture.
            embed.setDescription(`**O usuário ${message.author.username}, Tentou enviar um convite no servidor ${message.guild.name}, no canal ${message.channel.name}**`+ message.channel) // This will tell you which channel the word was used in.
            embed.setColor(0xff0000) // This is just a random colour. If you'd like to change it, simple change the "ff0000" to a different code. Make sure "0x" stays before the number.
            embed.addField(name="**Mensagem:**", value=message.content) // This will tell you the entire message, so you can spot out the word which was used.
            embed.setFooter(name=`**ID: ${message.author.id}**`) // This will give you the UserID of the user who used a filtered word in the embed's footer.
            embed.setTimestamp() // This will tell you what time the word was used at.
    
            guild = client.guilds.get("380871687702446080")
            channel = guild.channels.find("id", "471804233352478730") // This will find the channel which it will send the log embed into.
            channel.send(embed)
        }
    })

   
    client.on("message", (message) => {
    if(message.channel.type === "dm") {
        let embed = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle("Mensagem direta para mim.")
        .addField(`Por:`,`<@${message.author.id}>`)
        .setColor("RANDOM")
        .setThumbnail(message.author.displayAvatarURL)
        .addField(`Mensagem: `,message.content)
        .setFooter(`DM em meu mensagens... Não pera | DM Logs`)
       
        client.users.get("341372896922435595").send(embed)
      }
    });
client.login(process.env.token);


