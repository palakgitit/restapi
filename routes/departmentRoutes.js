const express = require("express");
const router = express.Router();

const departmentController = require("../controllers/departmentController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.post(
    "/",
    auth,
    role("Admin"),
    departmentController.addDepartment
);

router.get(
    "/",
    auth,
    departmentController.getDepartments
);

// In Order To View Single Department
router.get(
    "/:id",
    auth,
    departmentController.getDepartment
);

router.put(
    "/:id",
    auth,
    role("Admin"),
    departmentController.updateDepartment
);

router.delete(
    "/:id",
    auth,
    role("Admin"),
    departmentController.deleteDepartment
);

module.exports = router;