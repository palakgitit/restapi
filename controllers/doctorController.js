const Doctor = require("../models/Doctor");

// Add Doctor
const addDoctor = async (req, res) => {

    try {

        const {
            department,
            name,
            qualification,
            specialization,
            experience,
            contactNumber,
            email
        } = req.body;

        const checkDoctor = await Doctor.findOne({ email });

        if (checkDoctor) {
            return res.status(400).json({
                success: false,
                message: "Doctor Already Exists"
            });
        }

        const doctor = await Doctor.create({
            department,
            name,
            qualification,
            specialization,
            experience,
            contactNumber,
            email,
            profileImage: req.file ? req.file.filename : ""
        });

        res.status(201).json({
            success: true,
            message: "Doctor Added Successfully",
            doctor
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// View All Doctors
const getDoctors = async (req, res) => {

    try {

        const doctors = await Doctor.find().populate("department");

        res.status(200).json({
            success: true,
            doctors
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// View Single Doctor
const getDoctor = async (req, res) => {

    try {

        const doctor = await Doctor.findById(req.params.id).populate("department");

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor Not Found"
            });
        }

        res.status(200).json({
            success: true,
            doctor
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Update Doctor
const updateDoctor = async (req, res) => {

    try {

        const data = req.body;

        if (req.file) {
            data.profileImage = req.file.filename;
        }

        const doctor = await Doctor.findByIdAndUpdate(
            req.params.id,
            data,
            { new: true }
        );

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Doctor Updated Successfully",
            doctor
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Doctor
const deleteDoctor = async (req, res) => {

    try {

        const doctor = await Doctor.findByIdAndDelete(req.params.id);

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Doctor Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addDoctor,
    getDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor
};  