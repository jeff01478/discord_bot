const {Client, MessageActionRow} = require('discord.js');
const { maxHeaderSize } = require('http');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const settings = require('./settings.json');
const { joinVoiceChannel } = require('@discordjs/voice');

client.on('ready',()=>{
    console.log(`${client.user.tag}登入了,NMSL`);
});

client.on('message',msg=>{

    const backstage = msg.guild.channels.cache.find(ch => ch.name === '伺服器後台');

    
    if(msg.content.startsWith("嗨濠吉掰")){
        if(msg.author.bot)
            return;
        //msg.reply("我是廢物濠吉!!");
        msg.channel.send("你好，你這臭雞雞");
    }
    
    /*
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

    if(msg.content.includes("覺得") || msg.content.includes("認為") || msg.content.includes("應該") || 
       msg.content.includes("或許") || msg.content.includes("也許") || msg.content.includes("可能") || 
       msg.content.includes("不可能") || msg.content.includes("感覺")){
        if(msg.author.bot)
            return;
        var rnd = Random(5,1);
        switch(rnd){
            case 1:msg.channel.send("你說的真對(燦笑");break;
            case 2:msg.channel.send("嘛 這麼說也是呢www");break;
            case 3:msg.channel.send("是這樣子的嗎? ww(摸頭");break;
            case 4:msg.channel.send("你真的確定嗎?? (推眼鏡");break;
            case 5:msg.channel.send("嘛 我感覺是沒那麼誇張啦ww(汗顏");break;
        }
    }


    if(msg.channel.id!='955092845038010448'){
        if(msg.author.bot)
            return;
        backstage.send(`${msg.author.username} sent [${msg}]`);
    }

    if(msg.channel.id!='955102930430742568'){
        if(msg.author.bot)
            return;
        backstage.send(`${msg.author.username} sent [${msg}]`);
    }


    if(msg.author.id == '369125525509111818'){
        var rnd = Random(3,1);
        switch(rnd){
            case 1: msg.channel.send({files:["./image/1.jpg"]}); break;
            case 2: msg.channel.send({files:["./image/2.png"]}); break;
            case 3: msg.channel.send({files:["./image/3.png"]}); break;
        }
    }
    
    if(msg.guild.id == '682954755890216960'){
        if(msg.content.includes("88") || msg.content.includes("掰掰") || msg.content.includes("讚") || msg.content.includes("不讚") || msg.content.includes("爛")){
            if(msg.author.bot)
                return;
            const reactionEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'b1ff8a513fdc9d1f');
            msg.react(reactionEmoji);
        }

        if(msg.content.includes("替身")){
            if(msg.author.bot)
                return;
            const reactionEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'JOJO');
            msg.react(reactionEmoji);
        }

        var rnd = Random(5,1);
            if(rnd == 1){
                if(msg.author.bot)
                    return;
                const reactionEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'b1ff8a513fdc9d1f');
                msg.react(reactionEmoji);
            }
        
    }
    
    if(msg.guild.id == '682954755890216960'){
        if(msg.content.includes("濠吉掰當我的替身")){
            joinVoiceChannel({
                    channelId: msg.member.voice.channel.id,
                    guildId: msg.guild.id,
                    adapterCreator: msg.guild.voiceAdapterCreator
            })
        }
    }

function Random(max, min){
    var rnd = Math.floor(Math.random()*max) + min;
    return rnd;
}

})

client.login(settings.token);