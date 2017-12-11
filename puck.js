const { Client, Util } = require('discord.js');
const { TOKEN, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const client = new Client({ disableEveryone: true });

const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

//Definicion de la variable Prefijo
var PREFIX = [~];

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Listo!'));

client.on('disconnect', () => console.log('Desconectado del Server, Reconectando...'));

client.on('reconnecting', () => console.log('Conectado!'));

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
			return msg.channel.send('No tengo permisos para conectar a tu canal de voz,asegurate de haberme dado los permisos!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('No tengo permitido hablar en este canal de audio, asegurate de haberme dado los permisos!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`✅ La lista de Reproduccion: **${playlist.title}** ha sido agregadá al listado de reproducción.`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Seleccion de Multimedia:**__

${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}

Porfavor coloca un valor numerico referente a tu resultado en la busqueda, del 1 al 10.
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
						return msg.channel.send('No se ha insertado el valor o es incorrecto, Cancelando la seleccion del multimedia...');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('🆘 No he obtenido ningun resultado.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `Saltar`) {
		if (!msg.member.voiceChannel) return msg.channel.send('No estas en un canal de voz!');
		if (!serverQueue) return msg.channel.send('No hay nada reproduciendose como para saltarlo.');
		serverQueue.connection.dispatcher.end('Se ha saltado el multimedia');
		return undefined;
	} else if (command === `Detener`) {
		if (!msg.member.voiceChannel) return msg.channel.send('No estas en un canal de voz!');
		if (!serverQueue) return msg.channel.send('No hay nada reproduciendose como para detenerlo.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Se ha detenido el multimedia!');
		return undefined;
	} else if (command === `Volumen`) {
		if (!msg.member.voiceChannel) return msg.channel.send('No estas en un canal de voz!');
		if (!serverQueue) return msg.channel.send('No hay nada reproduciendose.');
		if (!args[1]) return msg.channel.send(`El volumen actual es: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`Ajustando el volumen a: **${args[1]}** ...`);
	} else if (command === `Estatus`) {
		if (!serverQueue) return msg.channel.send('No hay nada reproduciendose.');
		return msg.channel.send(`🎶 Reproduciendo ahora...: **${serverQueue.songs[0].title}**`);
	} else if (command === `Listado`) {
		if (!serverQueue) return msg.channel.send('No hay nada reproduciendose');
		return msg.channel.send(`
__**Listado de multimedia:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Reproduciendo ahora...:** ${serverQueue.songs[0].title}
		`);
	} else if (command === `Pausa`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ Pausando la reproduccion...');
		}
		return msg.channel.send('There is nothing playing.');
	} else if (command === `Continuar`) {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Reproduciendo...!');
		}
		return msg.channel.send('No hay nada reproduciendose.');
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
			console.error(`No puedo unirme al canal de voz: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`No puedo unirme al canal de voz: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`✅ **${song.title}** ha sido agregado al listado de reproducción!`);
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
			if (reason === 'La conexion ha tardado demaciado.') console.log('Reproduccion Terminada.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Reproduciendo...: **${song.title}**`);
}

//Autenticacion del Bot via Config.json
client.login(process.env.BOT_TOKEN); 
