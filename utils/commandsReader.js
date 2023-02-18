const fs = require('node:fs')

function runCode(commandName, check, err, code, bot) {
  if (!check) return console.error("AOIFile Error: " + commandName + " does not end with " + extension);
  if (err) return console.error(err);
  console.log(`AOIFile Log: Loading ${commandName} file...`)
  if (!code) return console.error(`AOIFile Error: The code for the ${commandName} command is just empty...`)
  const cleanCode = code.split(/;/);
  if (!cleanCode.join(" ").startsWith("NAME")) return console.error("AOIFile Error: Provide Command Name and Aliases (read more in https://github.com/apenasigordev/dotaoi#create-commands)");
  bot.command({
    name: cleanCode[0].replace(/NAME /g, ""),
    aliases: JSON.parse(cleanCode[1].replace(/ ALIASES /g, "")),
    code: cleanCode.slice(2).join(' ')
  })
  console.log(`AOIFile Log: Loaded ${commandName} file`)
}

module.exports.loadCommands = (bot, category = false, extension = ".aoi", commandFile = "./commands") => {
  if (!bot) throw new Error("AOIFile Error: Bot not defined");
  if (!commandFile) throw new Error("AOIFile Error: Please put a commands folder");
  if (category) {
    const categories = fs.readdirSync(commandFile);

    for (let category of categories) {
      const commands = fs.readdirSync(commandFile + "/" + category);
      for (let cmds of commands) {
        const check = cmds.endsWith(extension);
        // if (!check) throw new Error(`${cmds} não termina com .aoi`)
        const commandName = cmds.replace(extension, "");
        fs.readFile("./commands/" + category + "/" + cmds, 'utf8', (err, code) => {
          runCode(commandName, check, err, code, bot)
        })
      }
    }
  } else {
    const commands = fs.readdirSync(commandFile);
    for (let cmds of commands) {
      const check = cmds.endsWith(extension);
      // if (!check) throw new Error(`${cmds} não termina com .aoi`)
      const commandName = cmds.replace(extension, "");
      fs.readFile("./commands/" + category + "/" + cmds, 'utf8', (err, code) => {
        runCode(commandName, check, err, code, bot)
      })
    }
  }
}