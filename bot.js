const {Client, MessageActionRow} = require('discord.js');
const { maxHeaderSize } = require('http');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const settings = require('./settings.json');

client.on('ready',()=>{
    console.log(`${client.user.tag}登入了,NMSL`);
});

client.on('message',msg=>{

    const backstage = msg.guild.channels.cache.find(ch => ch.name === '伺服器後台');

    if(msg.content.startsWith("濠吉掰")){
        if(msg.author.bot)
            return;
        //msg.reply("我是廢物濠吉!!");
        msg.channel.send("你好，你這臭雞雞");
    }/*
    if(msg.content.includes("濠吉")){
        if(msg.author.bot)
            return;
        var rnd = Random(3,1);
        switch(rnd){
            case 1:msg.reply("nmsl"); break;
            case 2:msg.reply("nmsl2"); break;
            case 3:msg.reply("nmsl3"); break;
        }
    }
    */

    if(msg.channel.id!='955092845038010448'){
        backstage.send(`${msg.author.username} sent [${msg}]`);
    }

    if(msg.author.id == '338271740763439107'){
        //msg.channel.send('三色豆走開');
    }

    if(msg.author.id == '369125525509111818'){
        msg.channel.send({files:["./image/濠吉專用.png"]});
    }

function Random(max, min){
    var rnd = Math.floor(Math.random()*max) + min;
    return rnd;
}

})



client.login(settings.token);