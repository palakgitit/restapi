const express = require("express");
const router = express.Router();

const patientController = require("../controllers/patientController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.post(
    "/",
    auth,
    role("Admin", "Receptionist"),
    patientController.addPatient
);

router.get(
    "/",
    auth,
    patientController.getPatients
);

//In Order To  View Single Patient
router.get(
    "/:id",
    auth,
    patientController.getPatient
);

router.put(
    "/:id",
    auth,
    role("Admin", "Receptionist"),
    patientController.updatePatient
);

router.delete(
    "/:id",
    auth,
    role("Admin"),
    patientController.deletePatient
);

module.exports = router;