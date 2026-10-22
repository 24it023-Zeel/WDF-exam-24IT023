const express = require("express");

const app = express();

const requestLogger = require("./middleware/requestLogger");
const apiRoutes = require("./routes/api");

app.use(express.json());

app.use(requestLogger);

app.use("/api/v1", apiRoutes);

// Global Error Handler

app.use((err, req, res, next) => {

    res.status(500).json({
        message: "Server Error"
    });

});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});