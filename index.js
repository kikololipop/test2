const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Bangkok', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1208934459299209247')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/flufty_twenty') //Must be a youtube video link 
    .setState('Ⳋ᧙ ﮩ٨ـﮩﮩ٨❀҈ ུ ຼ˃ ຶ⵿·')
    .setName(' ຶ⵿·.° ᭪ᬻᭊ۪ ◖꫶᳝᳜⃛ ཤꪴ͠  ུ ຼ˃̶̨̡࿔ ')
    .setDetails(` ຶ⵿·.° ᭪ᬻᭊ۪ ◖꫶᳝᳜⃛ ཤꪴ͠ [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/860910056211087400/1202970411583672350/IMG_6396.jpg?ex=65e1d980&is=65cf6480&hm=ccf445f0a738f3b5a2e3004f&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText(`ད⇀͟ ꙱꙰  ❀͟ᛪ͟ ❥. ↼͟ཌनी̴͒ ྄ ྀ༒⃟ ི: `) //Text when you hover the Large image

    .addButton('discord', 'https://discord.gg/5HjgMwfWrT')
;

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `ཤꪴ͠  ུ ຼ˃̶̨̡࿔ ̶̨̡࿔ ᭩͡ᰯ꙱ ⢾ ❀ ིུ͠ `;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);