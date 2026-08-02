const express = require("express");
const router = express.Router();

const reportController = require("../controllers/reportController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { uploadReport } = require("../middleware/uploadMiddleware");

router.post(
    "/",
    auth,
    role("Admin", "Doctor"),
    uploadReport,
    reportController.addReport
);

router.get(
    "/",
    auth,
    reportController.getReports
);

//In Order To View Single Report
router.get(
    "/:id",
    auth,
    reportController.getReport
);

router.put(
    "/:id",
    auth,
    role("Admin", "Doctor"),
    uploadReport,
    reportController.updateReport
);

router.delete(
    "/:id",
    auth,
    role("Admin", "Doctor"),
    reportController.deleteReport
);

module.exports = router;