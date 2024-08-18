const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.pmdfyvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
    // No need to include useNewUrlParser and useUnifiedTopology
    // The driver defaults to these settings
})
.then(() => console.log('Connected to MongoDB successfully'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Registration schema
const registrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNo: String,
    dob: Date,
    gender: String,
    Location: String,
    password: String
});

// Model of registration schema
const Registration = mongoose.model("Registration", registrationSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
});

app.post("/register", async (req, res) => {
    try {
        const { name, email, phoneNo, dob, gender, Location, password } = req.body;
        const existingUser = await Registration.findOne({ email: email });

        if (!existingUser) {
            const registrationData = new Registration({
                name,
                email,
                phoneNo, 
                dob,
                gender,
                Location,
                password
            });
            await registrationData.save();
            res.redirect("/success");
        } else {
            res.redirect("/error");
        }
    } catch (error) {
        console.error("Error during registration:", error);
        res.redirect("/error");
    }
});

app.get("/success", (req, res) => {
    res.sendFile(__dirname + "/pages/success.html");
});

app.get("/error", (req, res) => {
    res.sendFile(__dirname + "/pages/error.html");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
