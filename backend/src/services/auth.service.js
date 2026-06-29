const bcrypt = require("bcryptjs");

exports.hashPassword =
(password) => {
    return bcrypt.hash(
        password,
        10
    );
};

exports.comparePassword =
(password, hash) => {
    return bcrypt.compare(
        password,
        hash
    );
};
