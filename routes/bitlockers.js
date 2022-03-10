const { Bitlocker, validateBitlocker } = require('../models/bitlocker');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {

        const {error} = validateBitlocker(req.body)
        if (error)
        return res.status(400).send(error)

        const bitlocker = new Bitlocker ({
            computerName: req.body.computerName,
            serviceTag: req.body.serviceTag,
            currentUser: req.body.currentUser,
            remoteOffice: req.body.remoteOffice,
            driveName: req.body.driveName,
            driveType: req.body.driveType,
            proStatus: req.body.proStatus,
            encryStatus: req.body.encryStatus,
            lockStatus: req.body.lockStatus,
            encryMethod: req.body.encryMethod,
            recKey: req.body.recKey
        });

        await bitlocker.save();
        return res.send(bitlocker)
       } catch (ex) {
            return res.status(500).send(`Internal Server Error: ${ex}`);
       }
});

router.get('/', async (req, res) => {
    try{
        const bitlockers = await Bitlocker.find();
        return res.send(bitlockers);
    } catch (ex) {
        return res.status(500).send(`Internal Server error: ${ex}`);
    }
});

module.exports = router;
