
const express = require('express');
const router = express.Router();

router.get('/*', function (req, res, next) {
    res.status(200).send(getMessage());
});

router.post('/', function (req, res, next) {
    res.status(200).send(getMessage());
});

function getMessage(){
    return `Para utilizar esse programa, utilize a requisição:\ncurl -s --request POST http://localhost:${process.env.PORT || 3000}/rest/mars/[INSTRUÇÕES]`;
}

module.exports = router;
