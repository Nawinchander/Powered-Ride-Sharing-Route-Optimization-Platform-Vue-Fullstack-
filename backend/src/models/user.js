const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String
    },

    email: {
        type: String,
        unique: true
    },

    password: {
        type: String
    },

    role: {
        type: String,
        enum: [
            "RIDER",
            "DRIVER",
            "ADMIN"
        ],
        default: "RIDER"
    }

},{
    timestamps:true
});

module.exports = mongoose.model(
    "User",
    userSchema
);


// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
// {
//     name: String,

//     email: {
//         type: String,
//         unique: true
//     },

//     password: String,

//     role: {
//         type: String,
//         enum: [
//             "RIDER",
//             "DRIVER",
//             "ADMIN"
//         ]
//     }
// },
// {
//     timestamps: true
// }
// );

// module.exports =
// mongoose.model(
//     "User",
//     userSchema
// );