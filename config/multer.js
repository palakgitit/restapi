const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        if (file.fieldname === "profileImage") {
            cb(null, "public/uploads/doctors");
        } else if (file.fieldname === "reportFile") {
            cb(null, "public/uploads/reports");
        }

    },

    filename: (req, file, cb) => {

        const fileName = Date.now() + path.extname(file.originalname);

        cb(null, fileName);

    }

});

const fileFilter = (req, file, cb) => {

    const allowedTypes = /jpg|jpeg|png|pdf/;

    const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    const mime = allowedTypes.test(file.mimetype);

    if (ext && mime) {

        cb(null, true);

    } else {

        cb(new Error("Only JPG, PNG and PDF files are allowed"));

    }

};

const upload = multer({
    storage,
    fileFilter
});

module.exports = upload;