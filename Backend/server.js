import express from "express";
import multer from "multer";
import ImageKit from "imagekit";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" })) 
const upload = multer({ storage: multer.memoryStorage() });
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});
app.post("/upload", upload.single("payment"), async (req, res) => {
  console.log(req.body);
  
  try {
    const { leaderName, email, contact, college, team, members, memberList } = req.body;

    // Parse members JSON (important!)
    let membersArray = [];
    try {
      membersArray = JSON.parse(memberList || "[]");
    } catch (err) {
      console.error("Error parsing memberList:", err);
    }

    // Upload to ImageKit
    const result = await imagekit.upload({
      file: req.file.buffer,
      fileName: `payment_${Date.now()}${req.file.originalname}`,
    });

    // Save form + image URL + members to Google Sheets
    const sheetResponse = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, {
      method: "POST",
      body: JSON.stringify({
        action: "register",
        leader: { name: leaderName, email, phone: contact, college },
        team: { name: team, size: members },
        members: membersArray, // ✅ Added members array
        payment: { url: result.url, status: "Completed" }
      }),
      headers: { "Content-Type": "application/json" }
    });

    const sheetData = await sheetResponse.json();

    res.json({
      success: true,
      imageUrl: result.url,
      sheetResponse: sheetData
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});



app.listen(3000, () => console.log("Server running on port 3000"));
