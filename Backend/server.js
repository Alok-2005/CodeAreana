import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ImageKit from "imagekit";
import multer from "multer";
import fetch from "node-fetch";

// Initialize environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

// Use environment variable for website URL (fallback to localhost)
const WEBSITE_URL = process.env.WEBSITE_URL || `http://localhost:${PORT}`;

// Initialize Express and middleware
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || " https://codecraft-pccoer.web.app" }));
app.use(express.json());

// Configure services
const upload = multer({ storage: multer.memoryStorage() });
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

// Root route to prevent 404 on ping
app.get("/", (req, res) => {
  res.send("Server is alive!");
});

// Upload endpoint
app.post("/upload", upload.single("payment"), async (req, res) => {
  try {
    const { 
      leaderName, 
      email, 
      contact, 
      college, 
      team, 
      members,
      memberList = "[]"  
    } = req.body;

    let membersArray = [];
    try {
      membersArray = JSON.parse(memberList);
    } catch (error) {
      console.error("Error parsing memberList:", error);
      return res.status(400).json({ success: false, error: "Invalid member data format" });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, error: "No payment file uploaded" });
    }

    const result = await imagekit.upload({
      file: req.file.buffer,
      fileName: `payment_${Date.now()}_${req.file.originalname}`,
    });

    const sheetData = {
      action: "register",
      leader: { name: leaderName, email, phone: contact, college },
      team: { name: team, size: members },
      members: membersArray,
      payment: { url: result.url, status: "Completed" }
    };

    const sheetResponse = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, {
      method: "POST",
      body: JSON.stringify(sheetData),
      headers: { "Content-Type": "application/json" }
    });

    const responseData = await sheetResponse.json();

    res.json({
      success: true,
      imageUrl: result.url,
      sheetResponse: responseData
    });

  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ success: false, error: error.message || "Internal server error" });
  }
});

// Ping function to keep server awake
const pingWebsite = async () => {
  try {
    const res = await fetch(WEBSITE_URL);
    console.log(`Pinged ${WEBSITE_URL} - Status: ${res.status} - ${new Date()}`);
  } catch (err) {
    console.error(`Ping error: ${err}`);
  }
};

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  pingWebsite(); // initial ping
  setInterval(pingWebsite, 12 * 60 * 1000); // repeat every 12 minutes
});
