const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {

    try{

        const { email, password } = req.body;

        const user = await User.findOne({
            email
        });

        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }

        const validPassword =
        await bcrypt.compare(
            password,
            user.password
        );

        if(!validPassword){

            return res.status(401).json({
                message:"Invalid Password"
            });

        }

        const token = jwt.sign(

            {
                id:user._id,
                role:user.role
            },

            process.env.JWT_SECRET,

            {
                expiresIn:"1d"
            }

        );

        res.status(200).json({

            token,

            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role
            }

        });

    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};


// const User =
// require("../models/User");

// const jwtUtil =
// require("../utils/jwt");

// exports.login =
// async (req, res) => {

//     const {
//         email,
//         password
//     } = req.body;

//     const user =
//     await User.findOne({
//         email
//     });

//     if (!user) {
//         return res.status(404)
//         .json({
//             message:
//             "User not found"
//         });
//     }

//     const valid =
//     await bcrypt.compare(
//         password,
//         user.password
//     );

//     if (!valid) {
//         return res.status(401)
//         .json({
//             message:
//             "Invalid Password"
//         });
//     }

//     const accessToken =
//     jwtUtil.generateAccessToken({
//         id: user._id,
//         role: user.role
//     });

//     const refreshToken =
//     jwtUtil.generateRefreshToken({
//         id: user._id
//     });

//     res.json({
//         accessToken,
//         refreshToken
//     });
// };

// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");

// // exports.register = async (req, res) => {

// //     const { name, email, password } = req.body;

// //     const hashedPassword =
// //         await bcrypt.hash(password, 10);

// //     const user = await User.create({
// //         name,
// //         email,
// //         password: hashedPassword
// //     });

// //     res.status(201).json(user);
// // };

// // exports.login = async (req, res) => {

// //     const user = await User.findOne({
// //         email: req.body.email
// //     });

// //     const valid =
// //         await bcrypt.compare(
// //             req.body.password,
// //             user.password
// //         );

// //     if (!valid) {
// //         return res.status(401).json({
// //             message: "Invalid Credentials"
// //         });
// //     }

// //     const token = jwt.sign(
// //         {
// //             id: user._id,
// //             role: user.role
// //         },
// //         process.env.JWT_SECRET
// //     );

// //     res.json({ token });
// // };


