import { Activity, Client, Events, GatewayIntentBits, Guild, ActivityType, Message, PermissionFlagsBits, Collection } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates] });
const oof =  {
    name: "oof",
    run: client.on('messageCreate', (voicemessage)=>{
        if(voicemessage.author.bot) return;
        if(voicemessage.content == "test"){
            const channel = voicemessage.member.voice.channel
            if(channel !== null){
                const connection = joinVoiceChannel({
                    channelId: channel.id,
                    guildId: channel.guild.id,
                    adapterCreator: channel.guild.voiceAdapterCreator,
                });
                const player = createAudioPlayer();
                const resource = createAudioResource('C:/Users/shinyo/Documents/GitHub/LEO/voice/1.mp3');
                connection.subscribe(player);
                player.play(resource);
            }
            else{
                voicemessage.channel.send('你需要先加入語音頻道');
            }
            
        }
    
    })
}
export { oof }