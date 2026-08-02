require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const Doctor = require("./models/Doctor");
const Patient = require("./models/Patient");
const Department = require("./models/Department");
const Appointment = require("./models/Appointment");
const app = express();

connectDB();


app.set("view engine", "ejs");
app.set("views", "./views");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", async (req, res) => {
    try {
        const doctors = await Doctor.find();
        const patients = await Patient.find();
        const departments = await Department.find();
        const appointments = await Appointment.find();

        res.render("dashboard", {
            message: "Dashboard Loaded 🚀",
            doctors,
            patients,
            departments,
            appointments
        });
    } catch (err) {
        console.log(err);
        res.send("Error loading dashboard");
    }
});

//  (ALL JSON)
app.use("/api", require("./routes/authRoutes"));
app.use("/api/departments", require("./routes/departmentRoutes"));
app.use("/api/doctors", require("./routes/doctorRoutes"));
app.use("/api/patients", require("./routes/patientRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/prescriptions", require("./routes/prescriptionRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));

// API status route
app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        message: "API is working perfectly ✅"
    });
});




app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});