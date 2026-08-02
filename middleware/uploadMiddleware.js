const upload = require("../config/multer");

const uploadDoctorImage = upload.single("profileImage");

const uploadReport = upload.single("reportFile");

module.exports = {
    uploadDoctorImage,
    uploadReport
};