import { getVoiceConnection } from '@discordjs/voice';
let keyword = "leave"
const leave =  {
    name: keyword,
    run: async (message) => {
            const channel = message.member.voice.channel
            if(channel !== null){
                const connection = getVoiceConnection(message.guild.id)
                if(!connection) return message.channel.send("你需要先加入語音頻道")
                    connection.destroy();
                    message.channel.send("已離開頻道")
                }
            else{
                    message.channel.send('你需要先加入語音頻道');
            }
                
        }
            
            
}
    

export default leave