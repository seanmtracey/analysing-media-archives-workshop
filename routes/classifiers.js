const debug = require('debug')('routes:classifiers');
const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');
const convertSeconds = require('convert-seconds')

const storage = require(`${__dirname}/../bin/lib/storage`);
const database = require(`${__dirname}/../bin/lib/database`);

router.get('/', function(req, res, next) {
    res.render('classifiers', { title: 'Media Archive Analyser | Custom Classifiers' });
});

router.get('/classifier/:CLASSIFIER_ID', (req, res, next) => {
    res.render('classifier', { title: 'Media Archive Analyser | Custom Classifier' });
    res.end();
});

router.post('/classifier/:CLASSIFIER_ID/class/create', (req, res, next) => {
    res.end();
});

router.post('/classifier/:CLASSIFIER_ID/class/delete/:CLASS_ID', (req, res, next) => {
    res.end();
});

router.post('/classifier/:CLASSIFIER_ID/class/image/add/:CLASS_ID', (req, res, next) => {
    res.end();
});

router.post('/classifier/:CLASSIFIER_ID/class/image/delete/:IMAGE_ID', (req, res, next) => {
    res.end();
});

module.exports = router;
