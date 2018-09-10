const debug = require('debug')('routes:asset');
const express = require('express');
const router = express.Router();

const storage = require(`${__dirname}/../bin/lib/storage`);
const database = require(`${__dirname}/../bin/lib/database`);

const storageMap = {
    keyframe : process.env.COS_KEYFRAMES_BUCKET_NAME,
    media : process.env.COS_MEDIA_ARCHIVE_BUCKET_NAME,
    audio : process.env.COS_AUDIO_BUCKET_NAME,
}

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Media Archive Analyser' });
});

router.get('^/keyframe/:ObjectKey', (req, res, next) => {
    //storage.getStream(req.params.ObjectKey, process.env.COS_KEYFRAMES_BUCKET_NAME).pipe(res);
    debug('ObjectKey:', req.params.ObjectKey);
    res.end();
});

router.get('^/media/:ObjectKey', (req, res, next) => {
    //storage.getStream(req.params.ObjectKey, process.env.COS_MEDIA_ARCHIVE_BUCKET_NAME).pipe(res);
    debug('ObjectKey:', req.params.ObjectKey);
    res.end();
});

router.get('^/audio/:ObjectKey', (req, res, next) => {
    //storage.getStream(req.params.ObjectKey, process.env.COS_AUDIO_BUCKET_NAME).pipe(res);
    debug('ObjectKey:', req.params.ObjectKey);
    res.end();
});

module.exports = router;
