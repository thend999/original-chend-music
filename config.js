module.exports = {
        TOKEN: 'OTg1ODMzMTYxOTIzNjM3Mjc5.GtvRPi.wnSi-_HcF9Xqzu7KPjoufhJtyUWIGxHWTld0c8', //write your discord bot token
        playing: '❤️ /help',
        mongoDB: "mongodb+srv://proxyuptime:115500ali@cluster0.9iedz.mongodb.net/?retryWrites=true&w=majority", //write your mongoDB url.
        dblToken: "", //write your top.gg token.
 opt: {
        DJ: { 
                commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
        },
            
        voiceConfig: {
            leaveOnEnd: false, //If this variable is "true", the bot will leave the channel the music ends.
            autoSelfDeaf: false, //IF YOU WANT TO DEAF THE BOT, set false to true.

            leaveOnTimer:{ //The leaveOnEnd variable must be "false" to use this system.
                status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
                time: 10000, //1000 = 1 second
            }
        }, 

        maxVol: 250, //You can specify the maximum volume level.
        loopMessage: false,

        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //Please don't touch
                highWaterMark: 1 << 25 //Please don't touch
            }
            }
        }
}
