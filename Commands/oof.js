import { joinVoiceChannel, createAudioPlayer, createAudioResource } from '@discordjs/voice';
const oof =  {
    name: "oof",
    run: async (message) => {
            const channel = message.member.voice.channel
            setTimeout(() =>{
            if(channel !== null){
                const connection = joinVoiceChannel({
                    channelId: channel.id,
                    guildId: channel.guild.id,
                    adapterCreator: channel.guild.voiceAdapterCreator,
                });
                const player = createAudioPlayer();
                const resource = createAudioResource('C:/Users/shinyo/Documents/GitHub/LEO/voice/oof.mp3');
                connection.subscribe(player);
                player.play(resource);
            }
            else{
                message.channel.send('你需要先加入語音頻道');
            }}
            ,500)
            
            
        }
    
    }   

export default oof