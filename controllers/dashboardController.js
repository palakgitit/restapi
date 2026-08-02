const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
const Appointment = require("../models/appointment");
const Department = require("../models/department");

exports.getDashboard = async (req, res) => {
    try {
        const doctors = await Doctor.find().populate("department");
        const patients = await Patient.find();
        const appointments = await Appointment.find()
            .populate("patient")
            .populate("doctor");
        const departments = await Department.find();

        res.render("dashboard", {
            doctors,
            patients,
            appointments,
            departments
        });

    } catch (err) {
        res.status(500).send(err.message);
    }
};