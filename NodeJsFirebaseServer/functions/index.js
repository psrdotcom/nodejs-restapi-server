const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = require("express")();
const PORT = 4000;

app.get("/api/home", (req, res) => {
  res.setHeader("set-cookie", ["SERVER-COOKIE=jdskfh783467"]);
  res.send("Success!!");
});

app.get("/api/path1", (req, res) => {
  res.setHeader("set-cookie", [
    "PATH1-COOKIE=jdskfh7834dfdf67_path1; path=/path1; httponly; max-age-1;",
  ]);
  res.send("Path1 Success!!");
});

app.listen(PORT, () => console.log("Listening on port", PORT));

exports.app = functions.https.onRequest(app);
