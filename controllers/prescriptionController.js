const Prescription = require("../models/Prescription");

const addPrescription = async (req, res) => {

    try {

        const {
            appointment,
            medicines,
            diagnosis,
            doctorNotes
        } = req.body;

        const prescription = await Prescription.create({
            appointment,
            medicines,
            diagnosis,
            doctorNotes
        });

        res.status(201).json({
            success: true,
            message: "Prescription Added Successfully",
            prescription
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getPrescriptions = async (req, res) => {

    try {

        const prescriptions = await Prescription.find()
            .populate({
                path: "appointment",
                populate: [
                    { path: "patient" },
                    { path: "doctor" }
                ]
            });

        res.status(200).json({
            success: true,
            prescriptions
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// In Order to View Single Prescription
const getPrescription = async (req, res) => {

    try {

        const prescription = await Prescription.findById(req.params.id)
            .populate({
                path: "appointment",
                populate: [
                    { path: "patient" },
                    { path: "doctor" }
                ]
            });

        if (!prescription) {

            return res.status(404).json({
                success: false,
                message: "Prescription Not Found"
            });

        }

        res.status(200).json({
            success: true,
            prescription
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updatePrescription = async (req, res) => {

    try {

        const prescription = await Prescription.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!prescription) {

            return res.status(404).json({
                success: false,
                message: "Prescription Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Prescription Updated Successfully",
            prescription
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const deletePrescription = async (req, res) => {

    try {

        const prescription = await Prescription.findByIdAndDelete(req.params.id);

        if (!prescription) {

            return res.status(404).json({
                success: false,
                message: "Prescription Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Prescription Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addPrescription,
    getPrescriptions,
    getPrescription,
    updatePrescription,
    deletePrescription
};