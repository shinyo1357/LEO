import { joinVoiceChannel, createAudioPlayer, createAudioResource } from '@discordjs/voice';
let keyword = "oof"
const oof =  {
    name: keyword,
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
                message.channel.send("正在播放音效"+`***${keyword}***`)
            }
            else{
                message.channel.send('你需要先加入語音頻道');
            }}
            ,500)
            
            
        }
    
    }   

export default oof