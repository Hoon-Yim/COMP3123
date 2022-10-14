const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: {
        type: String,
        enum: ["HIGH", "MEDIUM", "LOW"],
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    },
    dateUpdated: Date
});

noteSchema.pre("findOneAndUpdate", function (next) {
    this.update({}, {
        $set: {
            dateUpdated: Date.now()
        }
    });
    next();
});

module.exports = mongoose.model("note", noteSchema);