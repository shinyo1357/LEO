import {readdirSync} from 'fs';
const commandLoader =  async function loadCommands(client, directory) {
    const files = readdirSync(directory, {
        withFileTypes: true,
    });
    for (const file of files) {
        if (file.isDirectory()) {
            console.log("456")                        
            loadCommands(client, `${directory}/${file.name}`);
        } else if (file.name.endsWith(".js")) {
            const cmd = await import(`${directory}/${file.name}`);
            client.commands.set(cmd.name, cmd);
        }
    }
};
export {commandLoader}