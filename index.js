var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "11pm_community"
assets : {
large_image : "11pm_community",
large_text : "11pm's World" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Join our server" , url : "https://discord.gg/UbwMZepenJ"},{label : "facebook page",url : "https://facebook.com/bestvvolt"}]
}
})
})
client.login({ clientId : "827961430807674952" }).catch(console.error);
