// app.js

// Import required modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const invoiceRoutes = require("./routes/invoicesRoutes");

const app = express();

const viewsPath = path.join(process.cwd(), 'views');
app.set('views', viewsPath);

// Set view engine
app.set("view engine", "ejs");
//app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// MySQL Database Connection
const db = mysql.createConnection({
    host: "localhost", // Change if needed
    user: "root", // Your MySQL username
    password: "soorya", // Your MySQL password
    database: "invoiceapril23", // Your database name
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL successfully!");
});

// Routes
app.use("/", invoiceRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
