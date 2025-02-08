const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// // Google Drive Direct Download Link (Replace FILE_ID)
// const EAZZY_GOOGLE_DRIVE_FILE_ID = `1WG6BcYbVRb_B_BZw5tEZ-8AR1GbIY_6v`
// const EAZZY_BUSINESS_GOOGLE_DRIVE_FILE_ID = `1WBUyC3nmxI-AgpqfqmK51rApscOEcHMo`

// const EAZZY_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${EAZZY_GOOGLE_DRIVE_FILE_ID}`
// const EAZZY_BUSINESS_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${EAZZY_BUSINESS_GOOGLE_DRIVE_FILE_ID}`

// // Route to redirect to Google Drive download link
// app.get("/eazzy-app/download", (req, res) => {
//     res.redirect(EAZZY_DOWNLOAD_URL);
// });

// app.get("/eazzy-business-app/download", (req, res) => {
//     res.redirect(EAZZY_BUSINESS_DOWNLOAD_URL);
// });

app.get("/eazzy-app/download", (req, res) => {
    res.redirect("https://github.com/chauhan-nilesh/server/releases/download/v1.0.2/Eazzy.apk");
});

app.get("/eazzy-business-app/download", (req, res) => {
    res.redirect("https://github.com/chauhan-nilesh/server/releases/download/v1.0.1/Eazzy.Business.apk");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
