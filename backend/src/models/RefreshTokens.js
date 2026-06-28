const mongoose = require("mongoose");

const refreshSchema =
new mongoose.Schema({
    userId: String,
    token: String
});

module.exports =
mongoose.model(
    "RefreshToken",
    refreshSchema
);