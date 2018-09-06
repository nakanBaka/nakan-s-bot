const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
var message = new Discord.Client();
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
   message.reply(`** Não o achei o comando ${config.prefix}${command}!**`);
  };   
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
let xpRDM = Math.round(Math.random() * 45)

client.on("message", message => {
    if (message.author.bot) return;
    if (xpCol.has(message.author.id)) return;
    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {
        if (documento) {
            var unbug = 350 * documento.level + 1
            if (documento.xp > unbug) {
                documento.xp += xpRDM
                documento.level += 1
                message.reply(`**:gem: Parabéns ${message.author.username}! Você agora é nível ${documento.level}!**`);
                documento.xp = 0
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
                conquistas: 0,
                mensagens: 0,
                msglevel: 0,
                invitetru: false,
                invitecode: "Nenhum",
                invitou: 0,
                warn: 0,
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

    client.on('guildMemberAdd', member => {   
        if(member.guild.id === "380871687702446080"){
          const members = member.guild.memberCount;
          const channel = member.guild.channels.find('name', 'welcome');
          if (!channel) return;
    
        let Role = member.guild.roles.find(`name`, "bots");
        if(member.user.bot){
            member.addRole(Role.id)
        }else{
          let role = member.guild.roles.find(`name`, "membros");
            member.addRole(role.id)
        };
     
          let Embed = new Discord.RichEmbed()
          .setFooter(`Usuário entrou | agora temos ${member.guild.memberCount} Membros`)
          .setColor("#cde246")    
          .setAuthor(`**O usuário ${member.displayName} entrou no servidor ${member.guild.name}**`, member.user.displayAvatarURL)
          .setTimestamp()
          channel.send(Embed);
      }else{return; }
        });
    

        client.on('guildMemberRemove', member => {
            if(member.guild.id === "380871687702446080"){
              const channel = member.guild.channels.find(`name`, 'welcome');
              if(!channel) return; 
            
              let Embed = new Discord.RichEmbed()
              .setColor("#e26346")
              .setAuthor(`**O usuário ${member.displayName}, saiu do servidor ${member.guild.name}.**`, member.user.displayAvatarURL)
              .setTimestamp()
              .setFooter(`Usuário saiu | estamos com ${member.guild.memberCount} Membros agora...`)
              channel.send(Embed);
            }else{return; }
            });

            
    var servers = {};
    var prefix = 'p.';
    client.on("message", async message => {
        var args = message.content.substring(prefix.length).split(" ");
        if (!message.content.startsWith(prefix)) return;
      var searchString = args.slice(1).join(' ');
        var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
        var serverQueue = queue.get(message.guild.id);
        switch (args[0].toLowerCase()) {
          case "mplay":
        var voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) return message.channel.send('Entre em um canal de áudio antes!');
            var permissions = voiceChannel.permissionsFor(message.client.user);
            if (!permissions.has('CONNECT')) {
                return message.channel.send('Eu acho que não tenho permissão para entrar neste canal!');
            }
            if (!permissions.has('SPEAK')) {
                return message.channel.send('Eu acho que não tenho permissão de falar neste canal!');
            }
          if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                var playlist = await youtube.getPlaylist(url);
                var videos = await playlist.getVideos();
                for (const video of Object.values(videos)) {
                    var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                    await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
                }
                return message.channel.send(`Playlist: **${playlist.title}** adicionada!`);
            } else {
                try {
                    var video = await youtube.getVideo(url);
                } catch (error) {
                    try {
                        var videos = await youtube.searchVideos(searchString, 10);
                        var index = 0;
                        message.channel.send(`
    __**Seleção de sons:**__
    ${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
    Escolha o som desejado, escreva o número do som de 1-10.
                        `);
                        // eslint-disable-next-line max-depth
                        try {
                            var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
                                maxMatches: 1,
                                time: 10000,
                                errors: ['time']
                            });
                        } catch (err) {
                            console.error(err);
                            return message.channel.send('Sem valor, ou valor invalido, cancelando seleção.');
                        }
                        var videoIndex = parseInt(response.first().content);
                        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    } catch (err) {
                        console.error(err);
                        return message.channel.send('Não achei nenhum resultado...');
                    }
                }
                return handleVideo(video, message, voiceChannel);
            }
            break;
          case "mskip":
            if (!message.member.voiceChannel) return message.channel.send('Você não está no canal!');
            if (!serverQueue) return message.channel.send('Não há nada tocando, então eu pulei para você.');
            serverQueue.connection.dispatcher.end('Música pulada!');
            return undefined;
            break;
          case "mstop":
            if (!message.member.voiceChannel) return message.channel.send('Você não está no canal!');
            if (!serverQueue) return message.channel.send('Não há nada tocando, então irei parar para você.');
            serverQueue.songs = [];
            serverQueue.connection.dispatcher.end('Música parada!');
            return undefined;
    break;
          case "mvolume":
            if (!message.member.voiceChannel) return message.channel.send('Você não está no canal!');
            if (!serverQueue) return message.channel.send('Não há nada tocando...');
            if (!args[1]) return message.channel.send(`O volume atual é: **${serverQueue.volume}**`);
            serverQueue.volume = args[1];
            serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
            return message.channel.send(`Mudei meu volume para: **${args[1]}**`);
    break;
          case "mnp":
            if (!serverQueue) return message.channel.send('Não há nada tocando...');
            return message.channel.send(`Tocando agora: **${serverQueue.songs[0].title}**`);
    break;
          case "mqueue":
            if (!serverQueue) return message.channel.send('Não há nada tocando.');
            return message.channel.send(`
    __**Queue atual:**__
    ${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
    **Tocando agora:** ${serverQueue.songs[0].title}
            `);
    break;
          case "mpause":
            if (serverQueue && serverQueue.playing) {
                serverQueue.playing = false;
                serverQueue.connection.dispatcher.pause();
                return message.channel.send('Pausei a música!');
            }
            return message.channel.send('Não há nada tocando.');
    break;
          case "mresume":
            if (serverQueue && !serverQueue.playing) {
                serverQueue.playing = true;
                serverQueue.connection.dispatcher.resume();
                return message.channel.send('Continuando a música!');
            }
            return message.channel.send('Não há nada tocando.');
        
    
        return undefined;
    break;
    }
    async function handleVideo(video, message, voiceChannel, playlist = false) {
        var serverQueue = queue.get(message.guild.id);
        console.log(video);
        var song = {
            id: video.id,
            title: video.title,
            url: `https://www.youtube.com/watch?v=${video.id}`
        };
        if (!serverQueue) {
            var queueConstruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };
            queue.set(message.guild.id, queueConstruct);
    
            queueConstruct.songs.push(song);
    
            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(message.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.error(`Não consegui entrar no canal: ${error}`);
                queue.delete(message.guild.id);
                return message.channel.send(`Não consegui entrar no canal: ${error}`);
            }
        } else {
            serverQueue.songs.push(song);
            console.log(serverQueue.songs);
            if (playlist) return undefined;
            else return message.channel.send(`**${song.title}** foi adicionado/a a queue!`);
        }
        return undefined;
    }
      function play(guild, song) {
        var serverQueue = queue.get(guild.id);
    
        if (!song) {
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
        }
        console.log(serverQueue.songs);
    
        const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
            .on('end', reason => {
          message.channel.send('``A queue acabou.``');
                if (reason === 'Hmm... Parece que a conexão está ruim...') console.log('A música acabou...');
                else console.log(reason);
                serverQueue.songs.shift();
                play(guild, serverQueue.songs[0]);
            })
            .on('error', error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    
        serverQueue.textChannel.send(`Começou a tocar: **${song.title}**`);
    }
    });
    
    
   
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
client.login(process.env.BOT_TOKEN);
