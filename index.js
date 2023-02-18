const aoijs = require("aoi.js");
require('dotenv').config()
const fs = require('node:fs')
const bot = new aoijs.AoiClient({
  token: process.env.TOKEN,
  prefix: "!",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage"],
});

const aoiFile = require('./utils/commandsReader')

aoiFile.loadCommands(bot, true)