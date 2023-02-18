const fs = require('node:fs')

module.exports.loadCommands = (bot, category = false, extension=".aoi", commandFile = "./commands") => {
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
          if (!check) return console.error("AOIFile Error: " + commandName + " não termina com " + extension);
          if (err) return console.error(err);
          console.log(`AOIFile Log: Loading ${commandName}...`)
          if (!code) return console.error(`AOIFile Error: o código do comando ${commandName} é só um vazio... apenas`)
          // console.log(commandName, code)
          bot.command({
            name: commandName,
            code: code
          })
          console.log(`AOIFile Log: Loaded ${commandName}`)
        })
      }
    }
  } else {
    const commands = fs.readdirSync(commandFile);
    for (let cmds of commands) {
      const check = cmds.endsWith(extension);
      // if (!check) throw new Error(`${cmds} não termina com .aoi`)
      const commandName = cmds.replace(extension, "");
      fs.readFile("./commands/" + cmds, 'utf8', (err, code) => {
        if (!check) return console.error("AOIFile Error: " + commandName + " não termina com " + extension);
        if (err) return console.error(err);
        console.log(`AOIFile Log: Loading ${commandName}...`)
        if (!code) return console.error(`AOIFile Error: o código do comando ${commandName} é só um vazio... apenas`)
        // console.log(commandName, code)
        bot.command({
          name: commandName,
          code: code
        })
        console.log(`AOIFile Log: Loaded ${commandName}`)
      })
    }
  }
}