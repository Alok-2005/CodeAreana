import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ImageKit from "imagekit";
import multer from "multer";
import fetch from "node-fetch";

// Initialize environment variables
dotenv.config();

 
const PORT = process.env.PORT || 3000;

 

// Initialize Express and middleware
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Configure services
const upload = multer({ storage: multer.memoryStorage() });
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
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
      memberList = "[]"  // Default to empty array string
    } = req.body;

    // Parse member list with validation
    let membersArray = [];
    try {
      membersArray = JSON.parse(memberList);
    } catch (error) {
      console.error("Error parsing memberList:", error);
      return res.status(400).json({ 
        success: false, 
        error: "Invalid member data format" 
      });
    }

    // Handle missing file
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        error: "No payment file uploaded" 
      });
    }

    // Upload to ImageKit
    const result = await imagekit.upload({
      file: req.file.buffer,
      fileName: `payment_${Date.now()}_${req.file.originalname}`,
    });

    // Prepare data for Google Sheets
    const sheetData = {
      action: "register",
      leader: { name: leaderName, email, phone: contact, college },
      team: { name: team, size: members },
      members: membersArray,
      payment: { url: result.url, status: "Completed" }
    };

    // Send to Google Sheets
    const sheetResponse = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, {
      method: "POST",
      body: JSON.stringify(sheetData),
      headers: { "Content-Type": "application/json" }
    });

    const responseData = await sheetResponse.json();

    // Return success response
    res.json({
      success: true,
      imageUrl: result.url,
      sheetResponse: responseData
    });

  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ 
      success: false, 
      error: error.message || "Internal server error" 
    });
  }
});

// Start server
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));