import {readdirSync} from 'fs';
async function loadCommands(client, directory) {
    const files = readdirSync(directory, {
        withFileTypes: true,
    });
    for (const file of files) {
        if (file.isDirectory()) {
            console.log("HI")      
            loadCommands(client, `${directory}/${file.name}`);
        } else if (file.name.endsWith(".js")) {
            const cmd = (await import(`${directory}/${file.name}`)).default;
            console.log(cmd)
            client.commands.set(cmd.name, cmd);
        }
    }
};
export {loadCommands}