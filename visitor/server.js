require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE_URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.uchwnds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log("Connecting to MongoDB:", DATABASE_URL);

mongoose
    .connect("mongodb://localhost:27017/visits")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));

const visitedSchema = new mongoose.Schema({
    ip: String,
    device: String,
    time: Date,
});
const Visit = mongoose.model("Visit", visitedSchema);

app.post("/api/log-visit", async (req, res) => {
    const { ip, device, time } = req.body;
    try {
        const visit = new Visit({ ip, device, time });
        await visit.save();
        res.status(200).send("Visit logged successfully");
    } catch (error) {
        console.error("Error saving visit:", error);
        return res.status(500).send("Error logging visit");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
