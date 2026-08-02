const express = require("express");
const router = express.Router();

const prescriptionController = require("../controllers/prescriptionController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.post(
    "/",
    auth,
    role("Admin", "Doctor"),
    prescriptionController.addPrescription
);

router.get(
    "/",
    auth,
    prescriptionController.getPrescriptions
);

// In Order TO View Single Prescription
router.get(
    "/:id",
    auth,
    prescriptionController.getPrescription
);

router.put(
    "/:id",
    auth,
    role("Admin", "Doctor"),
    prescriptionController.updatePrescription
);

router.delete(
    "/:id",
    auth,
    role("Admin", "Doctor"),
    prescriptionController.deletePrescription
);

module.exports = router;