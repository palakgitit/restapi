# Hospital Management REST API

A Hospital Management REST API built using Node.js, Express.js, MongoDB, JWT Authentication, and MVC Architecture.

## Features

- User Registration & Login
- JWT Authentication
- Role-Based Authorization
- Password Encryption using bcrypt
- Department Management
- Doctor Management
- Patient Management
- Appointment Management
- Prescription Management
- Medical Report Upload using Multer
- Dashboard Statistics
- MongoDB Relationships using Populate

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- EJS
- Postman


# ScreenShot:

![alt text](<Screenshot 2026-08-02 160351.png>)

 ![alt text](<Screenshot 2026-08-02 160227.png>) 
 
 ![alt text](<Screenshot 2026-08-02 160114.png>) 
 
 ![alt text](<Screenshot 2026-08-02 160040.png>) 
 
 ![alt text](<Screenshot 2026-08-02 154426.png>)

 
## Installation

```bash
npm install
```

## Run Project

```bash
npm run dev
```

## Environment Variables

Create a `.env` file.

```env
PORT=3000

MONGO_URI=mongodb://127.0.0.1:27017/hospitalDB

JWT_SECRET=your_super_secret_key

JWT_EXPIRES_IN=7d
```

## API Base URL

```
http://localhost:3000/api
```

## Authentication APIs

| Method | Endpoint |
|---------|----------|
| POST | /register |
| POST | /login |
| PUT | /change-password |

## Department APIs

| Method | Endpoint |
|---------|----------|
| POST | /departments |
| GET | /departments |
| GET | /departments/:id |
| PUT | /departments/:id |
| DELETE | /departments/:id |

## Doctor APIs

| Method | Endpoint |
|---------|----------|
| POST | /doctors |
| GET | /doctors |
| GET | /doctors/:id |
| PUT | /doctors/:id |
| DELETE | /doctors/:id |

## Patient APIs

| Method | Endpoint |
|---------|----------|
| POST | /patients |
| GET | /patients |
| GET | /patients/:id |
| PUT | /patients/:id |
| DELETE | /patients/:id |

## Appointment APIs

| Method | Endpoint |
|---------|----------|
| POST | /appointments |
| GET | /appointments |
| GET | /appointments/:id |
| PUT | /appointments/:id |
| DELETE | /appointments/:id |

## Prescription APIs

| Method | Endpoint |
|---------|----------|
| POST | /prescriptions |
| GET | /prescriptions |
| GET | /prescriptions/:id |
| PUT | /prescriptions/:id |
| DELETE | /prescriptions/:id |

## Medical Report APIs

| Method | Endpoint |
|---------|----------|
| POST | /reports |
| GET | /reports |
| GET | /reports/:id |
| PUT | /reports/:id |
| DELETE | /reports/:id |

## Dashboard API

| Method | Endpoint |
|---------|----------|
| GET | /dashboard |

## Project Structure

```
config/
controllers/
middleware/
models/
routes/
views/
public/
app.js
package.json
```


Hospital-Management-System/
│
├── config/
│   ├── db.js
│   └── multer.js
│
├── controllers/
│   ├── authController.js
│   ├── departmentController.js
│   ├── doctorController.js
│   ├── patientController.js
│   ├── appointmentController.js
│   ├── prescriptionController.js
│   ├── reportController.js
│   └── dashboardController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   └── uploadMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Department.js
│   ├── Doctor.js
│   ├── Patient.js
│   ├── Appointment.js
│   ├── Prescription.js
│   └── MedicalReport.js
│
├── routes/
│   ├── authRoutes.js
│   ├── departmentRoutes.js
│   ├── doctorRoutes.js
│   ├── patientRoutes.js
│   ├── appointmentRoutes.js
│   ├── prescriptionRoutes.js
│   ├── reportRoutes.js
│   └── dashboardRoutes.js
│
├── views/
│   ├── auth/
│   │     login.ejs
│   │     register.ejs
│   │
│   ├── department/
│   │     add.ejs
│   │     edit.ejs
│   │     list.ejs
│   │
│   ├── doctor/
│   │     add.ejs
│   │     edit.ejs
│   │     list.ejs
│   │
│   ├── patient/
│   │     add.ejs
│   │     edit.ejs
│   │     list.ejs
│   │
│   ├── appointment/
│   │     add.ejs
│   │     edit.ejs
│   │     list.ejs
│   │
│   ├── prescription/
│   │     add.ejs
│   │     edit.ejs
│   │     list.ejs
│   │
│   ├── report/
│   │     add.ejs
│   │     edit.ejs
│   │     list.ejs
│   │
│   ├── dashboard.ejs
│   └── partials/
│         header.ejs
│         navbar.ejs
│         sidebar.ejs
│         footer.ejs
│
├── public/
│   ├── css/
│   │      style.css
│   │
│   ├── js/
│   │      script.js
│   │
│   ├── images/
│   │
│   └── uploads/
│          doctors/
│          reports/
│
├── .env
├── app.js
├── package.json
└── README.md