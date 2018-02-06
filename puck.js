const { Client, Util } = require('discord.js');
const { PREFIX, TOKEN, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const client = new Client({ disableEveryone: true });
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();
const Discord = require("discord.js");
const bot = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => {
  client.user.setGame('~+ayuda |´∀｀●)')
})

client.on('disconnect', () => console.log('Desconectado del Server, Reconectando...'));

client.on('reconnecting', () => console.log('Conectado!'));

//Modulos de Respuesta (Ping y Hola)
 client.on("message", (message) => {
  if (message.content.startsWith(PREFIX + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(PREFIX + "hola")) {
    message.channel.send("Hola que tal?");
  }
 });

//Log de Cambios
client.on("message", (message) => {
 if (message.content.startsWith(PREFIX + "log")) {
    const embed = new Discord.RichEmbed() 
    .setTitle("Registro de Cambios")
    .setAuthor(message.author.username, client.user.avatarURL)
    .setColor(0xff0000)
    .setDescription("LOG_PUCK_PRIVATE_GITHUB")
    .setThumbnail("https://image.flaticon.com/icons/png/512/561/561872.png" )
    .setTimestamp()
    .setURL("")
    .addField("-25/01/18:", "Actualizadas Dependencias del Motor", true)
    .addField("-02/02/18:", "Limpieza de texto residual al usar el comando de audio y Agregada SETGAME", true)
    message.channel.send({embed});
  }});

//Modulo Informacion del Desarrollador del Bot
 client.on("message", (message) => {
 if (message.content.startsWith(PREFIX + "desarrollador")) {
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
    .addField("Version Actual","v3.2",true)
    .addField("Servidor Madre","https://discord.gg/8pU24FM",true)
    message.channel.send({embed});
  }});

//Modulo de Documentacion para Usuarios Novatos
 client.on("message", (message) => {
 if (message.content.startsWith(PREFIX + "documentacion")) {
    const embed = new Discord.RichEmbed() 
    .setTitle("Documentacion de Ayuda de Puck")
    .setAuthor(message.author.username, client.user.avatarURL)
    .setColor(0x2EFE2E)
    .setDescription("Bienvenidos a Documentacion.", "Este es un espacio para la gente que requiere el conocimiento necesario para aprovechar el server al 100%. Para la administracion del servidor, hacemos usos de BOTS, automatas digitales que nos hacen la vida mas facil. Para hacer uso de estos bots y usarlos a nuestro beneficio, primero es necesario invocarles. Para ello, siempre se hace uso de un caracter especial", true)
    .setFooter("// Programado por El Comeback //", message.author.avatarURL)
    .setImage("https://archive-media-0.nyafuu.org/w/image/1426/78/1426782063069.png")
    .setThumbnail("http://www.solution4tech.com/img/support.png" )
    .setTimestamp()
    .setURL("https://discord.gg/8pU24FM")
    .addField("PREFIX", "Ecuacion de Comando: \n\`(PREFIX)\` + \`(NOMBRE DEL COMANDO)\`", true)
    .addBlankField(true)
    .addField("Comandos", "Cada BOT tiene determinados comandos los cuales son enlistados aqui: (Nota: Estos comandos solo son para enviar la lista de los comando preestablecidos en cada uno de los servidores)", true)
    .addBlankField(true)
    .addField("Puck:", " \`{~}\` \`ayuda\`",)
    .addBlankField(true)
    .addField("Pleb:", " \`{@Pleb}\` \`help\`",)
    .addBlankField(true)
    .addField("Spoti-Search:", " \`{@Spoti-Search}\` \`help\`",)
    .addBlankField(true)
    .addField(">_Fin de la Documentacion", "En caso de cualquier error o dificultad para ejecutar cualquiera de estos BOTS, favor de dirigirse con el Administrador o cualquier usuario con el Rol Soporte", true) 
    .addBlankField(true)
  message.channel.send({embed});
  }});
  

//Modulo Repetir
 client.on("message", (message) => {

 const content = message.content.split(' ').slice(1);
 const args = content.join(' ');

  if(message.content.startsWith(PREFIX + "repetir")){
  
  if(!args) return message.channel.send(`Escriba lo que desea que yo repita （￣＾￣）.`);
  message.channel.send(`${args}`);

  if(message.content.startsWith(PREFIX + "decir")){
  
 }}})

//Modulo Caracola Magica
 client.on("message", (message) => {

 const content = message.content.split(' ').slice(1);
 const args = content.join(' ');

 if(message.content.startsWith(PREFIX + "caracolamagica")){

  var rpts = ["Sí (｀▽´) ", "No (｀ε´) ", "¿Por qué? (*´∀｀）", "No lo creo ┐(ﾟ～ﾟ)┌ ", "Tal vez ( ͡° ͜ʖ ͡°) ", "No sé ┐(´∀｀)┌ ", "Lo dudo ◉︵◉ ", " ¡Claro! o(｀^´*) "," Sí b(￣▽￣*) "," No ⋋_⋌ "," Por supuesto! (｀∇´ゞ "," Por supuesto que no (｀ε´)"];
  if (!args) return message.reply("Escribe una pregunta a responder (꒪⌓꒪).");
  message.channel.send(message.member.user+' mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');

 }})

//Modulo Expulsar
 client.on("message", (message) => {
 if(message.content.startsWith(PREFIX + "expulsar" )){

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
 if(message.content.startsWith(PREFIX + "avatar")){

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
 if(message.content.startsWith(PREFIX + "desterrar" )){
    
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
 if(message.content.startsWith(PREFIX + "servidor")){

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
 if(message.content.startsWith(PREFIX + "usuario")){
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
 if(message.content.startsWith(PREFIX + "ayuda")){

    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados v(￣∇￣).') .then(m => {
        m.delete(10000);

 });
    message.author.send('**Comandos de Puck// Seccion General**\n```\n'+
                        '-> '+PREFIX+'ping                :: Comprueba la latencia del bot y de tus mensajes.\n'+
                        '-> '+PREFIX+'avatar <@usuario>   :: Muestra el avatar de un usuario.\n'+
                        '-> '+PREFIX+'repetir             :: Hace que el bot diga un mensaje.\n'+
                        '-> '+PREFIX+'usuario <@usuario>  :: Muestra información sobre un usuario mencionado.\n'+
                        '-> '+PREFIX+'servidor            :: Muestra información de un servidor determinado.\n'+
                        '-> '+PREFIX+'caracolamagica      :: El bot respondera a tus preguntas.\n'+
                        '-> '+PREFIX+'desterrar <@usuario>:: Banear a un usuario del servidor incluye razon.\n'+
                        '-> '+PREFIX+'expulsar <@usuario> :: Patear a un usuario del servidor incluye razon.\n'+
                        '-> '+PREFIX+'hola                :: Retorna un saludo como mensaje.\n```\n\n'+
                        
			'**Comandos de Puck// Seccion de Reproduccion**\n```\n'+
                        '-> '+PREFIX+'reproducir <URL Youtube o Nombre> :: Reproduce el multimedia seleccionado.\n'+
                        '-> '+PREFIX+'pausa                             :: Pausa la reproduccion del multimedia.\n'+
                        '-> '+PREFIX+'saltar                            :: Salta la reproduccion en curso y continua la siguiente.\n'+
		        '-> '+PREFIX+'detener                           :: Detiene la reproduccion del multimedia en curso.\n'+
                        '-> '+PREFIX+'volumen <1-10>                    :: Ajusta el volumen de la reproduccion.\n'+
                        '-> '+PREFIX+'estatus                           :: Envia un informe corto sobre el multimedia en curso.\n'+
                        '-> '+PREFIX+'listado                           :: Muestra el listado de multimedias creado por el usuario.\n'+
			'-> '+PREFIX+'continuar                         :: Continua la reproduccion de un multimedia en pausa.\n```\n\n'+
                        
			'**Puck - Ether.net v.2.0 // Invitame a tu Server :**\nhttps://discordapp.com/oauth2/authorize?client_id=380938693147361290&permissions=8&scope=bot');
	         }})

//Modulo Musica
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

	serverQueue.textChannel.send(`'''🎶 Start playing: **${song.title}**'''`);
}

//Autenticacion del Bot via Config.json
client.login(process.env.BOT_TOKEN); 
