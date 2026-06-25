const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {

    const { name, email, password } = req.body;

    const hashedPassword =
        await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    res.status(201).json(user);
};

exports.login = async (req, res) => {

    const user = await User.findOne({
        email: req.body.email
    });

    const valid =
        await bcrypt.compare(
            req.body.password,
            user.password
        );

    if (!valid) {
        return res.status(401).json({
            message: "Invalid Credentials"
        });
    }

    const token = jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET
    );

    res.json({ token });
};


