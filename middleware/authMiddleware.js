const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access Denied"
        });
    }

    try {

        const jwtToken = token.split(" ")[1];

        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        req.user = user;

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });

    }

};

module.exports = auth;