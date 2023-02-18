# dotaoi
.aoi is a file extension created by me to make creating commands in [AOI.JS](https://npmjs.org/packages/aoi.js) easier.

----

# How to setup
Below we will have a list of commands for you to setup this "plugin".

## Clone repo
Execute this command first:

```bash
git clone https://github.com/apenasigordev/dotaoi.git
```

## Environment Variables 
After that, create a file called `.env`, and put this:
```env
TOKEN="YOUR BOT TOKEN"
```

## Create Commands 
Now go to the `commands` folder and create the command you want.

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