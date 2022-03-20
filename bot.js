const {Client} = require('discord.js');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const settings = require('./settings.json');

client.on('ready',()=>{
    console.log(`${client.user.tag}登入了,NMSL`);
});

client.on('message',msg=>{
    if(msg.content.startsWith("濠吉掰")){
        //msg.reply("我是廢物濠吉!!");
        msg.channel.send("我是廢物濠吉!!");
    }
})


client.login(settings.token);