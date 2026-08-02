const express = require("express");
const router = express.Router();

const appointmentController = require("../controllers/appointmentController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.post(
    "/",
    auth,
    role("Admin", "Receptionist"),
    appointmentController.addAppointment
);

router.get(
    "/",
    auth,
    appointmentController.getAppointments
);

//In Order To  View Single Appointment
router.get(
    "/:id",
    auth,
    appointmentController.getAppointment
);

router.put(
    "/:id",
    auth,
    role("Admin", "Receptionist"),
    appointmentController.updateAppointment
);

router.delete(
    "/:id",
    auth,
    role("Admin", "Receptionist"),
    appointmentController.deleteAppointment
);

module.exports = router;