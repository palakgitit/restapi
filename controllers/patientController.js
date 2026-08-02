const Patient = require("../models/Patient");

const addPatient = async (req, res) => {

    try {

        const {
            name,
            age,
            gender,
            address,
            mobileNumber,
            bloodGroup
        } = req.body;

        const patient = await Patient.create({
            name,
            age,
            gender,
            address,
            mobileNumber,
            bloodGroup
        });

        res.status(201).json({
            success: true,
            message: "Patient Added Successfully",
            patient
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getPatients = async (req, res) => {

    try {

        const patients = await Patient.find();

        res.status(200).json({
            success: true,
            patients
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getPatient = async (req, res) => {

    try {

        const patient = await Patient.findById(req.params.id);

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Patient Not Found"
            });
        }

        res.status(200).json({
            success: true,
            patient
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updatePatient = async (req, res) => {

    try {

        const patient = await Patient.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Patient Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Patient Updated Successfully",
            patient
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const deletePatient = async (req, res) => {

    try {

        const patient = await Patient.findByIdAndDelete(req.params.id);

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Patient Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Patient Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addPatient,
    getPatients,
    getPatient,
    updatePatient,
    deletePatient
};