const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Global Request Logger
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path} ${new Date().toLocaleString()}`);
  next();
});

// Public Login
app.post("/api/v1/auth/login", (req, res) => {
  res.status(200).json({
    message: "Login Successful",
    token: "abc123"
  });
});

// Public Vehicles
app.get("/api/v1/vehicles", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      model: "Swift",
      type: "Hatchback",
      pricePerDay: 1000,
      available: true
    },
    {
      id: 2,
      model: "Creta",
      type: "SUV",
      pricePerDay: 2500,
      available: false
    }
  ]);
});

// Auth Middleware
function authGuard(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  next();
}

// Protected Routes
app.post("/api/v1/bookings", authGuard, (req, res) => {
  res.status(201).json({
    message: "Booking Created"
  });
});

app.get("/api/v1/bookings/my", authGuard, (req, res) => {
  res.status(200).json({
    bookings: []
  });
});

app.patch("/api/v1/bookings/:id/status", authGuard, (req, res) => {
  res.status(200).json({
    message: "Status Updated"
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Internal Server Error"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});