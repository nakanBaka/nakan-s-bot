const config = require("../config.json");
const fs = require("fs")

exports.run = (Link, message, args) => {
  var desenvolvedores = ["341372896922435595"]
  if (!desenvolvedores.includes(message.author.id) & !message.member.hasPermission(["MANAGE_ROLES_OR_PERMISSIONS"])) return;
if(message.content.startsWith(config.prefix + "prefix")) {
    if (!args[0]) return message.channel.send(":error: **Prefix not inserted!**")
    let newPrefix = message.content.split(" ").slice(1, 2)[0];

    config.prefix = newPrefix;
    message.channel.send(`📘 Prefix changed to \`${newPrefix}\``).catch(console.error);
  
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }
}
exports.help = {
  name: 'prefix'
}
