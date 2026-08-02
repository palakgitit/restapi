const express = require("express");
const router = express.Router();

const doctorController = require("../controllers/doctorController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { uploadDoctorImage } = require("../middleware/uploadMiddleware");

router.post(
    "/",
    auth,
    role("Admin"),
    uploadDoctorImage,
    doctorController.addDoctor
);

router.get(
    "/",
    auth,
    doctorController.getDoctors
);

//In Order To View Single Doctor
router.get(
    "/:id",
    auth,
    doctorController.getDoctor
);

router.put(
    "/:id",
    auth,
    role("Admin"),
    uploadDoctorImage,
    doctorController.updateDoctor
);

router.delete(
    "/:id",
    auth,
    role("Admin"),
    doctorController.deleteDoctor
);

module.exports = router;