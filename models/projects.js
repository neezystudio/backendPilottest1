const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    projectStatus: { type: Number, required: true},
    projectCost: { type: Number, required: true}
})