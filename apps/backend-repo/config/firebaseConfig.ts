import admin from "firebase-admin";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config();

// Load service account credentials
const serviceAccount = require(path.join(__dirname, "firebase-adminsdk.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ebuddy-backend-94b5f.firebaseio.com", // Replace with your actual project ID
});

const db = admin.firestore();
export { db };
