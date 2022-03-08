const mongoose = require('mongoose');

const bitlockerSchema = new mongoose.Schema({
    computerName: { String, required: true },
    serviceTag: { String, required: true },
    currentUser: { String },
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

const Bitlocker = mongoose.model('Bitlocker',  bitlockerSchema);

function validateBitlocker(bitlocker) {
    const schema =Joi.object({
        computerName: Joi.string().min(5).max(50).required(),
        serviceTag: Joi.string().min(5).max(255).required(),
        currentUser: Joi.string().min(5).max(255).required(),
        remoteOffice: Joi.string().min(5).max(1024).required(),
        driveName: Joi.string().min(5).max(1024).required(),
        driveType: Joi.string().min(5).max(1024).required(),
        proStatus: Joi.string().min(5).max(1024).required(),
        encryStatus: Joi.string().min(5).max(1024).required(),
        lockStatus: Joi.string().min(5).max(1024).required(),
        encryMethod: Joi.string().min(5).max(1024).required(),
        recKey: Joi.string().min(5).max(1024).required(),
    });
    return schema.validate(bitlocker);
}

module.exports = Bitlocker;
exports.validateBitlocker = validateBitlocker;
