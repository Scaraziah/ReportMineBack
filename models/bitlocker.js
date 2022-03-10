const mongoose = require('mongoose');

const bitlockerSchema = new mongoose.Schema({
    name: {type: String, required: true },
    serviceTag: {type: String, required: true },
    currentUser: {type: String },
    remoteOffice: {type: String, required: true },
    driveName: {type: String, required: true },
    driveType: {type: String, required: true },
    proStatus: {type: String, required: true },
    encryStatus: {type: String, required: true },
    lockStatus: {type: String, required: true },
    encryMethod: {type: String, required: true },
    recKey: {type: String, required: true },
    dateModified: {type: Date, default: Date.now },
})

const Bitlocker = mongoose.model('Bitlocker',  bitlockerSchema);

function validateBitlocker(bitlocker) {
    const schema =Joi.object({
        name: Joi.string().min(5).max(50).required(),
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
