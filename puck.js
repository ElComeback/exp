const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const YouTube = require('simple-youtube-api');
const {GOOGLE_API_KEY } = require('./config');


const client = new Client({ disableEveryone: true });

const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

//NOTA IMPORTANTE, PARA INICIAR LA ELABORACION DE CADA MODULO, RECUERDA USAR EL EVENTO CLIENT.ON READY

//Estado del Bot
 client.on("ready", () => {
   console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
   client.user.setGame(prefix+'ayuda |´∀｀●) ');
 });

//Definicion de la variable Prefijo via Config.json
var prefix = [~];

//Modulos de Respuesta (Ping y Hola)
 client.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send("Hola que tal?");
  }
 });
//Modulo Informacion del Desarrollador del Bot
 client.on("message", (message) => {
 if (message.content.startsWith(prefix + "desarrollador" )){
    const embed = new Discord.RichEmbed() 
    .setTitle("Documentacion de Ayuda de Puck")
    .setAuthor(message.author.username, client.user.avatarURL)
    .setColor(0x9900FF)
    .setDescription("La informacion presente debajo de este texto solo está disponible en español")
    .setFooter("// Programado por El Comeback //", message.author.avatarURL)
    .setImage(client.user.avatarURL)
    .setThumbnail("https://icon-icons.com/icons2/571/PNG/512/warning-weather-interface-outlined-symbol_icon-icons.com_54630.png" )
    .setTimestamp()
    .setURL("http://craterdev.com/documentacion-mybot")
    .addField("Acerca de Puck","Puck es un personaje originario del Manga/Anime 'Berserk', en el cual es un elfo que acompaña al heroe Guts, durante su duro trayecto, siempre denotando una actitud carismatica y bromista, ideal de todo buen compañero de batalla, ahora, le hemos logrado adaptar como un bot para satisfacer tus necesidades en el servidor")
    .addField("Lenguaje de Programacion", "JavaScript", true)
    .addField("Region", "Mexico", true)
    .addField("Sexo del Bot","Masculino", true)
    .addField("Servidor Madre","[*Ether.net*](https://discord.gg/Djja5t3)",true)
    message.channel.send({embed});
  }});

//Modulo Repetir
 client.on("message", (message) => {

 const content = message.content.split(' ').slice(1);
 const args = content.join(' ');

  if(message.content.startsWith(prefix + 'repetir')){
  
  if(!args) return message.channel.send(`Escriba lo que desea que yo repita （￣＾￣）.`);
  message.channel.send(`${args}`);

  if(message.content.startsWith(prefix + 'decir')){
  
 }}})

//Modulo Caracola Magica
 client.on("message", (message) => {

 const content = message.content.split(' ').slice(1);
 const args = content.join(' ');

 if(message.content.startsWith(prefix + "caracolamagica")){

  var rpts = ["Sí (｀▽´) ", "No (｀ε´) ", "¿Por qué? (*´∀｀）", "No lo creo ┐(ﾟ～ﾟ)┌ ", "Tal vez ( ͡° ͜ʖ ͡°) ", "No sé ┐(´∀｀)┌ ", "Lo dudo ◉︵◉ ", " ¡Claro! o(｀^´*) "," Sí b(￣▽￣*) "," No ⋋_⋌ "," Por supuesto! (｀∇´ゞ "," Por supuesto que no (｀ε´)"];
  if (!args) return message.reply("Escribe una pregunta a responder (꒪⌓꒪).");
  message.channel.send(message.member.user+' mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');

 }})

//Modulo Expulsar
 client.on("message", (message) => {
 if(message.content.startsWith(prefix + 'expulsar' )){

    let user = message.mentions.users.first();
    let razon = args.split(' ').slice(1).join(' ');
    
    if (message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien ( ・・)つ-●●●.').catch(console.error);
    if (!razon) return message.channel.send('Escriba la razón de la expulsion （´ヘ｀；）, `-expulsar @username [razón]`');
    if (!message.guild.member(user).kickable) return message.reply('No puedo expulsar al usuario seleccionado (ﾉ｀□´)ﾉ⌒┻━┻.');
     
    message.guild.member(user).kick(razon);
    message.channel.send(`(∩｀-´)⊃━☆ﾟ.*･｡ﾟ **${user.username}**, fue expulsado del servidor, razón: ${razon}.`);

  }})

//Modulo Avatar
 client.on("message", (message) => {
 if(message.content.startsWith(prefix + 'avatar')){

      let img = message.mentions.users.first()
      if (!img) {

          const embed = new Discord.RichEmbed()
          .setImage(`${message.author.avatarURL}`)
          .setColor(0x66b3ff)
          .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
          message.channel.send({ embed });

      } else if (img.avatarURL === null) {

          message.channel.sendMessage("Nuestro amigo ("+ img.username +") no tiene avatar! ԅ(¯﹃¯ԅ)");

      } else {

          const embed = new Discord.RichEmbed()
          .setImage(`${img.avatarURL}`)
          .setColor(0x66b3ff)
          .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
          message.channel.send({ embed });

      };

        }})

//Modulo Destierro

 client.on("message", (message) => {
 if(message.content.startsWith(prefix + 'desterrar' )){
    
        let user = message.mentions.users.first();
        let razon = args.split(' ').slice(1).join(' ');
    
        if (message.mentions.users.size < 1) return message.reply('Debe mencionar al usuario a desterrar Ψ(｀▽´)Ψ .').catch(console.error);
        if(!razon) return message.channel.send('Escribe una razon antes de desterrar al usuario ψ`ー´)ﾉ, `-desterrar @username [razón]`');
        if (!message.guild.member(user).bannable) return message.reply('No puedo desterrar al usuario mencionado. (⋟﹏⋞)');
        
    
        message.guild.member(user).ban(razon);
        message.channel.send(`(∩｀-´)⊃━炎炎炎炎炎 **${user.username}**, fue desterrado del servidor, razón: ${razon}.`);
    
  }})

//Modulo Informacion del Servidor
 client.on("message", (message) => {
 if(message.content.startsWith(prefix + 'servidor')){

    var server = message.guild;
  
    const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor(0x00FF00)
    
   message.channel.send({ embed });

  }})

//Modulo Informacion de Usuario
 client.on("message", (message) => {
 if(message.content.startsWith(prefix + 'usuario')){
    let userm = message.mentions.users.first()
    if(!userm){
      var user = message.author;
      
        const embed = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
        .addField('ID', user.id, true)
        .addField('Estado', user.presence.status, true)
        .addField('Apodo', message.member.nickname, true)
        .addField('Cuenta Creada', user.createdAt.toDateString(), true)
        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
        .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
        .setColor(0x00FFFF)
        
       message.channel.send({ embed });
    }else{
      const embed = new Discord.RichEmbed()
      .setThumbnail(userm.avatarURL)
      .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
      .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
      .addField('ID', userm.id, true)
      .addField('Estado', userm.presence.status, true)
      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
      .setColor(0x00FFFF)
      
     message.channel.send({ embed });
    }
    
  }})

//Modulo Ayuda
 client.on("message", (message) => {
 if(message.content.startsWith(prefix + 'ayuda')){

    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados v(￣∇￣).') .then(m => {
        m.delete(10000);

 });
    message.author.send('**Comandos de Puck**\n```\n'+
                        '-> '+prefix+'ping             :: Comprueba la latencia del bot y de tus mensajes.\n'+
                        '-> '+prefix+'avatar <@user>   :: Muestra el avatar de un usuario.\n'+
                        '-> '+prefix+'repetir          :: Hace que el bot diga un mensaje.\n'+
                        '-> '+prefix+'usuario <@user>  :: Muestra información sobre un usuario mencionado.\n'+
                        '-> '+prefix+'servidor         :: Muestra información de un servidor determinado.\n'+
                        '-> '+prefix+'caracolamagica   :: El bot respondera a tus preguntas.\n'+
                        '-> '+prefix+'desterrar <@user>:: Banear a un usuario del servidor incluye razon.\n'+
                        '-> '+prefix+'expulsar <@user> :: Patear a un usuario del servidor incluye razon.\n'+
                        '-> '+prefix+'hola             :: Retorna un saludo como mensaje.\n```\n\n'+
                        '**Puck - Ether.net // Servidor Madre :**\nhttps://discord.gg/Djja5t3');
    
  }})

//Modulo de Bienvenida
 client.on("guildMemberAdd", (member) => {
   console.log(`${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('123456789112455845'); 
   canal.send(`${member.user}, disfruta tu estancia (´∀｀)♡`);
   
 });
//Modulo Purgar
 client.on("message", (message) => {

  let cont = message.content.slice(prefix.length).split(" "); 
  let args = cont.slice(1); 

    if (message.content.startsWith(prefix + 'purgar')) { 
        
        async function purge() {
            message.delete(); 

            
            if (!message.member.roles.find("name", "admin")) { 
                message.channel.send('Necesitas el rol de \`admin\` para usar este comando （￣へ￣）.'); 
                return; 
            }

            
            if (isNaN(args[0])) {
                
                message.channel.send('Porfavor, escribe la cantidad de mensajes que deseas eliminar de forma numerica (￣▽￣)V. \n Uso: ' + prefix + 'purgar <cantidad>'); 
                
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); 
            console.log(fetched.size + ' mensajes encontrados, borrando...'); 

            
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); 

        }

        
        purge();
        }});

//******DEPURACION DE ERRORES*******//

//Modulo Musica
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const client = new Client({ disableEveryone: true });

const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(PREFIX.length)

	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Song selection:**__

${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}

Please provide a value to select one of the search results ranging from 1-10.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No or invalid value entered, cancelling video selection.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('🆘 I could not obtain any search results.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === `volume`) {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`I set the volume to: **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
	} else if (command === `queue`) {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`
__**Song queue:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Now playing:** ${serverQueue.songs[0].title}
		`);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ Paused the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	} else if (command === `resume`) {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Resumed the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}

//Autenticacion del Bot via Config.json
client.login(process.env.BOT_TOKEN); 