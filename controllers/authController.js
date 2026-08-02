const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const register = async (req, res) => {

    try {

        const { name, email, password, role, mobile } = req.body;

        const checkUser = await User.findOne({ email });

        if (checkUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashPassword,
            role,
            mobile
        });

        res.status(201).json({
            success: true,
            message: "Registration Successful",
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({
            success: true,
            message: "Login successful",
            token
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const changePassword = async (req, res) => {

    try {

        const { oldPassword, newPassword } = req.body;

        const user = await User.findById(req.user._id);

        const matchPassword = await bcrypt.compare(oldPassword, user.password);

        if (!matchPassword) {
            return res.status(400).json({
                success: false,
                message: "Old Password is Incorrect"
            });
        }

        user.password = await bcrypt.hash(newPassword, 10);

        await user.save();

        res.status(200).json({
            success: true,
            message: "Password Changed Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    register,
    login,
    changePassword
};