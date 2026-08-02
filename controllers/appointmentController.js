const Appointment = require("../models/Appointment");

const addAppointment = async (req, res) => {

    try {

        const {
            patient,
            doctor,
            department,
            appointmentDate,
            appointmentTime,
            status
        } = req.body;

        const appointment = await Appointment.create({
            patient,
            doctor,
            department,
            appointmentDate,
            appointmentTime,
            status
        });

        res.status(201).json({
            success: true,
            message: "Appointment Booked Successfully",
            appointment
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getAppointments = async (req, res) => {

    try {

        const appointments = await Appointment.find()
            .populate("patient")
            .populate("doctor")
            .populate("department");

        res.status(200).json({
            success: true,
            appointments
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getAppointment = async (req, res) => {

    try {

        const appointment = await Appointment.findById(req.params.id)
            .populate("patient")
            .populate("doctor")
            .populate("department");

        if (!appointment) {

            return res.status(404).json({
                success: false,
                message: "Appointment Not Found"
            });

        }

        res.status(200).json({
            success: true,
            appointment
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updateAppointment = async (req, res) => {

    try {

        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!appointment) {

            return res.status(404).json({
                success: false,
                message: "Appointment Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Appointment Updated Successfully",
            appointment
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const deleteAppointment = async (req, res) => {

    try {

        const appointment = await Appointment.findByIdAndDelete(req.params.id);

        if (!appointment) {

            return res.status(404).json({
                success: false,
                message: "Appointment Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Appointment Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addAppointment,
    getAppointments,
    getAppointment,
    updateAppointment,
    deleteAppointment
};