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
  client.user.setPresence({ game: { name: '~+ayuda |´∀｀●)', url: 'https://www.twitch.tv/erick6201', type: 3 } })
});
                                                                                               /*type=0 = Jugando  
                                                                                                 type=1 = Transmitiendo 
                                                                                                  type=2 = Escuchando 
                                                                                                   type=3 = Viendo﻿*/
client.on('disconnect', () => console.log('Desconectado del Server, Reconectando...'));

client.on('reconnecting', () => console.log('Conectado!'));

//Modulos de Respuesta (Ping y Hola)
 client.on("message", (message) => {
  if (message.content.startsWith(PREFIX + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(PREFIX + "hola")) {
    message.channel.send("Chinga tu madre, nah, no es cierto, Hola! (￣▽￣)V ");
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
    .addField("16/02/18:", "Ajustados valores de SETPRESENCE a Transmitiendo", true)
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
    .setFooter("// Programado por $hutd0wπ //", message.author.avatarURL)
    .setImage(client.user.avatarURL)
    .setThumbnail("https://icon-icons.com/icons2/571/PNG/512/warning-weather-interface-outlined-symbol_icon-icons.com_54630.png" )
    .setTimestamp()
    .setURL("http://craterdev.com/documentacion-mybot")
    .addField("Acerca de Puck","Puck es un personaje originario del Manga/Anime 'Berserk', en el cual es un elfo que acompaña al heroe Guts, durante su duro trayecto, siempre denotando una actitud carismatica y bromista, ideal de todo buen compañero de batalla//Bot de Uso Privado para el Servidor Ethernetv2.0")
    .addField("Lenguaje de Programacion", "JavaScript", true)
    .addField("Region", "Mexico", true)
    .addField("Sexo del Bot","Masculino", true)
    .addField("Version Actual","v3.2",true)
    .addField("Servidor Madre","https://discord.gg/8PqtWmz",true)
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
    .addField(">_Fin de la Documentacion", "En caso de cualquier error o dificultad para ejecutar cualquiera de estos BOTS, favor de dirigirse con el `Administrador` o cualquier usuario con el Rol `Moderador`", true) 
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
  
 }}});

//Modulo Caracola Magica
 client.on("message", (message) => {

 const content = message.content.split(' ').slice(1);
 const args = content.join(' ');

 if(message.content.startsWith(PREFIX + "caracolamagica")){

  var rpts = ["Sí (｀▽´) ", "No (｀ε´) ", "¿Por qué? (*´∀｀）", "No lo creo ┐(ﾟ～ﾟ)┌ ", "Tal vez ( ͡° ͜ʖ ͡°) ", "No sé ┐(´∀｀)┌ ", "Lo dudo ◉︵◉ ", " ¡Claro! o(｀^´*) "," Sí b(￣▽￣*) "," No ⋋_⋌ "," Por supuesto! (｀∇´ゞ "," Por supuesto que no (｀ε´)"];
  if (!args) return message.reply("Escribe una pregunta a responder (꒪⌓꒪).");
  message.channel.send(message.member.user+' mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');

 }});

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

  }});

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

        }});

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
    
  }});

//Modulo Informacion del Servidor
client.on("message", (message) => {
 if(message.content.startsWith(PREFIX + "servidor")){

    var server = message.guild;
  
    const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(client.name, client.iconURL)
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor(0x00FF00)
    
   message.channel.send({ embed });

  }});

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
    
  }});

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
			'-> '+PREFIX+'encuesta <Pregunta> :: Crea una encuesta simple con una pregunta definida por el usuario.\n'+
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
	         }});

//Modulo de Bienvenida
 client.on("guildMemberAdd", (member) => {
   console.log(`${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('409551281363877888'); 
   canal.send(`${member.user}, disfruta tu estancia (´∀｀)♡, te invitamos a leer nuestro <#433456401206083604> , puedes usar todos los canales que desees,\n Si necesitas ayuda para usar a alguno de nuestros \`Bots\` te invitamos a usar el comando Documentacion. Ejemplo: ~documentacion, si deseas pertenecer legitimamente al server, te recomendamos hablar con uno de nuestros Vigilantes del Aula para agregarte. Buena suerte!`);
  var role = member.guild.roles.find("name", "♿ Nuevos"); 
  member.addRole(role)
 });

//Modulo de Despedida
client.on("guildMemberRemove", (member) => {
member.guild.channels.get('').send('**' + member.user.username + '**, ha abandonado el server, Rest in Peace 💀');
});
				   
//Generador de Encuestas
 client.on("message", (message) => {
if(message.content.startsWith(PREFIX + "encuesta")){
 const content = message.content.split(' ').slice(1);
 const args = content.join(' ');
 
if(!args) return message.channel.send(`Asigne una pregunta para la encuesta (つ﹏<。). Ejemplo:\n \`~encuesta\` \`Aqui tu pregunta\` `)

const embed = new Discord.RichEmbed()
      .setAuthor('Pregunta:')
      .setDescription('**'+args+'**\n▔▔▔▔▔▔▔▔▔▔▔')
      .addField('Opcion 1', '1\u20e3 Si')
      .addField('Opcion 2', '2\u20e3 No')
      .setColor(0xfdf953)
      .setTimestamp()

message.channel.send({embed})
.then(m => {
        m.react("1\u20e3");
        m.react("2\u20e3");

})
}});



//Modulo Purgar
 client.on("message", (message) => {

  let cont = message.content.slice(PREFIX.length).split(" "); 
  let args = cont.slice(1); 

    if (message.content.startsWith(PREFIX + "purgar")) { 
        
        async function purge() {
            message.delete(); 

            
            if (!message.member.roles.find("name", "Programador")) { 
                message.channel.send('Necesitas el rol de \`Programador\` para usar este comando, si no lo tienes, asignatelo （￣へ￣）.'); 
                return; 
            }
            
            if (isNaN(args[0])) {
                
                message.channel.send('Porfavor, escribe la cantidad de mensajes que deseas eliminar de forma numerica (￣▽￣)V. \n Uso: ' + PREFIX + 'purgar <cantidad>'); 
                
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); 
            console.log(fetched.size + ' mensajes encontrados, borrando...'); 

            
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); 

        }

        
        purge();
        }});

//Modulo "Hora Mundial" 
var worldClock = require("world-clock") const clock = require('world-clock')() 

client.on("message", (message) => { if (message.content.startsWith(PREFIX + "hora")) { 	 

const hora = clock.localTime('America/Mexico_City', Date.now()).toString() 	 

const result = substr(${hora}, 0, -4).toString() 

message.channel.send(`${result}`); }}); 



//channel.edit({ name: 'new-channel' })

//Modulo de Musica


client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(PREFIX.length)

	if (command === `reproducir`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('Lo siento, pero necesitas estar en un canal de voz para funcionar ┐(￣ヘ￣)┌');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('눈_눈, No tengo permisos para conectar a tu canal de voz,asegurate de haberme dado los permisos!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('눈_눈, No tengo permitido hablar en este canal de audio, asegurate de haberme dado los permisos!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`♪～(￣ε￣) La lista de Reproduccion: **${playlist.title}** ha sido agregadá al listado de reproducción.`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
\`\`⌛ Seleccion de Multimedia:\`\`
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
\`\`Porfavor coloca un valor numerico referente a tu resultado en la busqueda, del 1 al 10 (○^ω^)_旦~~♪.\`\`
					`) .then(msg => {
    msg.delete(15000)
  }); 
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('(｀ε´) ,No se ha insertado el valor o es incorrecto, Cancelando la seleccion del multimedia...') .then(msg => {
    msg.delete(5000)
  });
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('（・∩・）No he obtenido ningun resultado.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `saltar`) {
		if (!msg.member.voiceChannel) return msg.channel.send('No estas en un canal de voz! (⋋▂⋌)');
		if (!serverQueue) return msg.channel.send('No hay nada reproduciendose como para saltarlo. ( ｰ`дｰ´)');
		serverQueue.connection.dispatcher.end('Se ha saltado el multimedia (￣▽￣)V');
		return undefined;
	} else if (command === `detener`) {
		if (!msg.member.voiceChannel) return msg.channel.send('No estas en un canal de voz! (⋋▂⋌)');
		if (!serverQueue) return msg.channel.send('No hay nada reproduciendose como para detenerlo. ( ｰ`дｰ´)');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Se ha detenido el multimedia! (￣▽￣)V');
		return undefined;
	} else if (command === `volumen`) {
		if (!msg.member.voiceChannel) return msg.channel.send('No estas en un canal de voz! (⋋▂⋌)');
		if (!serverQueue) return msg.channel.send('No hay nada reproduciendose.（｀ー´）');
		if (!args[1]) return msg.channel.send(`El volumen actual es: **${serverQueue.volume}** (⌐▨_▨)`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`ヽ( ・∀・)ノ● , Ajustando el volumen a: **${args[1]}** ...`);
	} else if (command === `estatus`) {
		if (!serverQueue) return msg.channel.send('No hay nada reproduciendose.');
		return msg.channel.send(`♫♪♫♪ Reproduciendo ahora...: **${serverQueue.songs[0].title}** ♪～(￣ε￣)`);
	} else if (command === `listado`) {
		if (!serverQueue) return msg.channel.send('No hay nada reproduciendose (⋟﹏⋞)');
		return msg.channel.send(`
\`\`。。。(ノ＿　＿)ノ Listado de multimedia:\`\`
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Reproduciendo ahora...: ♪(´ε｀ )** ${serverQueue.songs[0].title}
		`);
	} else if (command === `pausa`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ ﾍ(･_|Pausando la reproduccion...');
		}
		return msg.channel.send('No hay nada reproduciendose.');
	} else if (command === `continuar`) {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('|ω・｀)ノ▶ Reproduciendo...!');
		}
		return msg.channel.send('No hay nada reproduciendose. ヘ(´－｀;)ヘ');
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
			console.error(` **(눈_눈),** \`No puedo unirme al canal de voz:\` \`\`\`${error}\`\`\``);
			queue.delete(msg.guild.id);
			return msg.channel.send(` **(눈_눈),** \`No puedo unirme al canal de voz:\` \`\`\`${error}\`\`\``);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`\`(つ >ω●)つ\` ✅ \`\`\`${song.title}\`\`\` \`\`ha sido agregado al listado de reproducción!\`\``);
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
			if (reason === 'La conexion ha tardado demaciado. (;´д｀) ') console.log('Reproduccion Terminada.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`\`\`♫♪♫♪ Reproduciendo...:\`\` \`\`\`${song.title}\`\`\` ♪～(￣ε￣)`);
}

//Autenticacion del Bot via Config.json
client.login(process.env.BOT_TOKEN); 
