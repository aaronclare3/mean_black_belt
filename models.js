const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://localhost/beltexam");

var SkillSchema = new mongoose.Schema({
    skill: { type: String },
    skill: { type: String },
    skill: { type: String }
})

var PetSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, unique: true, dropDups: true},
    type: {type: String, required: true, minlength: 3},
    description: {type: String, required: true, minlength: 3},
    likes: { type: Number, default: 0 },
    skills: [SkillSchema],
}, { timestamps: true }, {strict: true});

module.exports = mongoose.model("Pet", PetSchema);

