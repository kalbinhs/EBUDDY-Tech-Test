import express from "express";
import { updateUserData, fetchUserData } from "../controller/api";  // ✅ Named imports
import { authMiddleware } from "../middleware/authMiddleware"; // ✅ Named import

const router = express.Router();

// Routes
router.put("/update-user-data", authMiddleware, updateUserData);
router.get("/fetch-user-data", authMiddleware, fetchUserData);

export default router;