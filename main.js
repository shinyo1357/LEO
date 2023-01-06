import { Activity, Client, Events, GatewayIntentBits, Guild, ActivityType, Message, PermissionFlagsBits, Collection } from 'discord.js';
import dotenv from 'dotenv';
//import prefix from './config.json' assert { type: 'json' };
import { joinVoiceChannel, getVoiceConnection, VoiceConnectionStatus,AudioPlayerStatus, createAudioPlayer, NoSubscriberBehavior, createAudioResource } from '@discordjs/voice';
const {loadCommands} = await import('./commandLoader.js');
dotenv.config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates] });
client.commands = new Collection()
client.once(Events.ClientReady, c => {
	client.user.setStatus('dnd');
	client.user.setActivity('吾乃LEO之王，犯我者必禁言', { type: ActivityType.Watching });
	console.log(`Ready! Logged in as ${c.user.tag}`);
});
let dinen = 3;
const prefix = "?";
client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const [command, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmdObject = client.commands.get(command);
	cmdObject?.run(message, args, client);

});

function Chat(messagedata, reply_chat){
client.on('messageCreate', (message) =>{
	if(message.author.bot) return;
	if(message.content == messagedata){
		message.channel.send(reply_chat)
	}
}
)}

Chat("閉嘴", "是嗎");
Chat("禁言", "可憐");
Chat("屁眼", "屁眼");
Chat("哈哈", "屁眼");
Chat("是嗎", "錯");

client.on('messageCreate', (message) =>{
    if(message.member.id == 624916540021800962){
	 if(dinen == 0){
	  let role = message.guild.roles.cache.find(role => role.name === "憨兒");
      dinen = 3
	  message.reply("禁言!")
	  message.member.roles.add(role);
	  let timesRun = 0;
      let interval = setInterval(function(){
      timesRun += 1;
      if(timesRun === 30){
      clearInterval(interval);
	  message.member.roles.remove(role);
    }
   }, 1000);

	 }
	 else{
		message.reply("你還剩" + dinen + "次發言次數")
		message.react('😡')
		dinen--;
	 }
	}
	
	
})
loadCommands(client, './Commands');
client.login(process.env.TOKEN);
		