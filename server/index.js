const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const Datastore = require('nedb');

const botsDB = new Datastore({ filename: 'db/bots.db', autoload: true });
const serverDB = new Datastore({ filename: 'db/servers.db', autoload: true });
const emojiDB = new Datastore({ filename: 'db/emojis.db', autoload: true });

botsDB.loadDatabase();
serverDB.loadDatabase();
emojiDB.loadDatabase();

const app = express(); // Create a web app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cors({ origin: '*' }));

const port = process.env.SERVER_PORT || 3000;

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname + '/build/index.html'));
    res.send({success: true, status: 200});
});

app.get('/bots', (req, res)=>{
    const {search, user} = req.query;
    let filter = {}

    if (search === 'mine')
        filter = {
            userid: user
        }
    botsDB.find(filter, (err, docs)=> {
        if (err) {
            res.status(500).send({success: false, msg: err});
        } else {
            console.log(docs)
            res.status(200).send({success: true, bots: docs});
        }
    });
});

app.post('/bot/add', (req, res) => {
    const {botID, clientID, shortDesc, desc, cmdPrefix, website, inviteLink, serverInvite, tags, avatar, email, userid, username, display} = req.body;
    botsDB.insert({
        botID, clientID, shortDesc, desc, cmdPrefix, website, inviteLink, serverInvite, avatar, email, userid, username, display, tags: tags.join(',')
    }, (err)=> {
        if (err)
            res.status(200).send({success: false, msg: err});
        else
            res.status(200).send({success: true, msg: 'Saved'});
    });
});

app.listen(port, function () { 
    console.log(`App listening! Port: ${port}`);
});