const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
    {
        department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department",
            required: true
        },

        name: {
            type: String,
            required: true
        },

        qualification: {
            type: String,
            required: true
        },

        specialization: {
            type: String,
            required: true
        },

        experience: {
            type: Number,
            required: true
        },

        contactNumber: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        profileImage: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);