const mongoose = require('mongoose');

const bitlockerSchema = new mongoose.Schema({
    computerName: { String, required: true },
    serviceTag: { String, required: true },
    currentUser: { String, required: true },
    remoteOffice: { String, required: true },
    driveName: { String, required: true },
    driveType: { String, required: true },
    proStatus: { String, required: true },
    encryStatus: { String, required: true },
    lockStatus: { String, required: true },
    encryMethod: { String, required: true },
    recKey: { String, required: true },
    dateModified: { type: Date, default: Date.now },
})