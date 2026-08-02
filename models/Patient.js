const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        age: {
            type: Number,
            required: true
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true
        },

        address: {
            type: String,
            required: true
        },

        mobileNumber: {
            type: String,
            required: true
        },

        bloodGroup: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.models.Patient || mongoose.model("Patient", patientSchema);