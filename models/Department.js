const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
    {
        departmentName: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.models.Department || mongoose.model("Department", departmentSchema);