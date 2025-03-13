import { Request, Response, NextFunction } from "express";
import admin from "firebase-admin";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ error: "Unauthorized: Missing or invalid token" });
      return;
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.body.userId = decodedToken.uid; // Attach userId to the request

    next(); // Move to the next middleware or route handler
  } catch (error) {
    res.status(403).json({ error: "Forbidden: Invalid or expired token" });
  }
};
