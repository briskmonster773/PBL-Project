const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    mode: String,
    city: String,

    input: Object,
    weather: Object,

    output: {
        prediction: String,
        confidence: Number,
        message: String
    }
}, { timestamps: true });

module.exports = mongoose.model("Report", reportSchema);
