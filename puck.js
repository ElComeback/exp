const { Client, Util } = require('discord.js');
const { PREFIX, TOKEN, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const client = new Client({ disableEveryone: true });
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();
const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);

//type=0 = playing | type=1 = streaming |type=2 = listening |type=3 = watching﻿
client.on('ready', () => {
client.user.setPresence({ game: { name: 'En Reparacion', type: 3 } });
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

//Modulo de Bienvenida
 client.on("guildMemberAdd", (member) => {
   console.log(`${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('409551281363877888'); 
   canal.send(`${member.user}, Bienvenido a Ether.net 2.0, Sientete libre de usar los canales como desees, por favor te sugerimos contactes a uno de nuestros moderadores para asignarte un rol dependiendo tu pais, y te invitamos a revisar nuestro #reglamento, si necesitas ayuda con los bots revisa nuestro apartado de #documentacion \nDisfruta tu estancia  (´∀｀)♡`);
   
 });

//Modulo Purgar
 client.on("message", (message) => {

  let cont = message.content.slice(prefix.length).split(" "); 
  let args = cont.slice(1); 

    if (message.content.startsWith(prefix + 'purgar')) { 
        
        async function purge() {
            message.delete(); 

            
            if (!message.member.roles.find("name", "Fundador")) { 
                message.channel.send('Necesitas el rol de \`Fundador\` para usar este comando （￣へ￣）.'); 
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

//Autenticacion del Bot via Config.json
client.login(process.env.BOT_TOKEN); 
