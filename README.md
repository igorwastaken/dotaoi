# dotaoi
.aoi is a file extension created by me to make creating commands in [AOI.JS](https://npmjs.org/packages/aoi.js) easier.

----

# How to setup
Below we will have a list of commands for you to setup this "plugin".

## Install package
Execute this command first:

```bash
npm i https://github.com/apenasigordev/dotaoi
```

## Environment Variables 
After that, create a file called `.env`, and put this:
```env
TOKEN="YOUR BOT TOKEN"
```

## Create Commands 
Now go to the `commands` folder and create the command you want.

NOTE: all commands needs starts with `NAME {commandName}; ALIASES {["commandAliase1", "commandAliase2"] (optional)};` to set command name and aliases

## Categories
Go to `index.js` and on the last line put this:
```js
aoiFile.loadCommands(bot, true) // Just add "true"
```

Now you can separate the files by categories, creating a file with the name of the category you want.

**This is already set to true, but if you don't want categories, just remove it.**

## Custom extension
You also can change from `.aoi` to `.{something}`.

Go to `index.js` and on the last line put this:
```js
aoiFile.loadCommands(bot, true, ".owo") // Just add ".owo"
```
Now rename all `.aoi` files extension to the file extension you put.
