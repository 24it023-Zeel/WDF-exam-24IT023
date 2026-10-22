const express = require("express");
const router = express.Router();

const authGuard = require("../middleware/authGuard");

// Login
router.post("/auth/login", (req, res) => {

    res.json({
        customer: "Zeel",
        token: "mytoken"
    });

});

// Public Vehicles
router.get("/vehicles", (req, res) => {

    res.json([
        {
            id:1,
            model:"Swift",
            type:"Hatchback",
            pricePerDay:1000,
            available:true
        },
        {
            id:2,
            model:"Creta",
            type:"SUV",
            pricePerDay:2500,
            available:false
        }
    ]);

});

// Protected Booking Create

router.post("/bookings", authGuard, (req,res)=>{

    res.status(201).json({
        message:"Booking Created"
    });

});

// Protected My Bookings

router.get("/bookings/my", authGuard,(req,res)=>{

    res.json([
        {
            bookingId:1,
            vehicle:"Swift"
        }
    ]);

});

// Update Status

router.patch("/bookings/:id/status",authGuard,(req,res)=>{

    res.json({
        message:"Booking Status Updated"
    });

});

module.exports = router;