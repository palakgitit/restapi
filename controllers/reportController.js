const MedicalReport = require("../models/MedicalReport");

const addReport = async (req, res) => {

    try {

        const { patient, reportTitle } = req.body;

        const report = await MedicalReport.create({
            patient,
            reportTitle,
            reportFile: req.file ? req.file.filename : ""
        });

        res.status(201).json({
            success: true,
            message: "Medical Report Uploaded Successfully",
            report
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getReports = async (req, res) => {

    try {

        const reports = await MedicalReport.find().populate("patient");

        res.status(200).json({
            success: true,
            reports
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

//In Order to View Single Report
const getReport = async (req, res) => {

    try {

        const report = await MedicalReport.findById(req.params.id).populate("patient");

        if (!report) {

            return res.status(404).json({
                success: false,
                message: "Medical Report Not Found"
            });

        }

        res.status(200).json({
            success: true,
            report
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updateReport = async (req, res) => {

    try {

        const data = req.body;

        if (req.file) {
            data.reportFile = req.file.filename;
        }

        const report = await MedicalReport.findByIdAndUpdate(
            req.params.id,
            data,
            { new: true }
        );

        if (!report) {

            return res.status(404).json({
                success: false,
                message: "Medical Report Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Medical Report Updated Successfully",
            report
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const deleteReport = async (req, res) => {

    try {

        const report = await MedicalReport.findByIdAndDelete(req.params.id);

        if (!report) {

            return res.status(404).json({
                success: false,
                message: "Medical Report Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Medical Report Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addReport,
    getReports,
    getReport,
    updateReport,
    deleteReport
};