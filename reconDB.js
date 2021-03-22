const { reconDB } = require('reconlx');

const db = new reconDB({
    uri: 'mongodb+srv://recon:09022863963@youtubetutorials.66enp.mongodb.net/Data'
})

module.exports = db;