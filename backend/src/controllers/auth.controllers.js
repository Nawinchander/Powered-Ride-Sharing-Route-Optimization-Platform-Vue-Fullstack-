exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const valid = await bcrypt.compare(
        password,
        user.password
    );

    if (!valid) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    res.json({ token });
};