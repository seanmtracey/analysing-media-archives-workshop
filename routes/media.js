const debug = require('debug')('routes:media');
const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');
const convertSeconds = require('convert-seconds')

const storage = require(`${__dirname}/../bin/lib/storage`);
const database = require(`${__dirname}/../bin/lib/database`);

router.get('/', function(req, res, next) {
    res.render('media', { title: 'Media Archive Analyser | Media File' });
});

module.exports = router;
