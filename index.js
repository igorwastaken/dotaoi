const aoijs = require("aoi.js");
const fs = require('node:fs')
const bot = new aoijs.AoiClient({
  token: process.env.TOKEN,
  prefix: "!",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage"],
});

const aoiFile = require('./utils/fileName')

aoiFile.loadCommands(bot, true)