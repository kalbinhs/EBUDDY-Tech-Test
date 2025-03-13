import { Request, Response } from "express";
import { getUser, updateUser } from "../repository/userCollection";

export const fetchUserData = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    try {
      const user = await getUser(userId);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return; // Explicitly return after sending response
      }
      res.json(user);
    } catch (error) {
      const err = error as Error; // Assert error type
      res.status(500).json({ error: err.message });
      return; // Return after sending response in case of error
    }
  };
  

export const updateUserData = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const userData = req.body;
  try {
    await updateUser(userId, userData);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    const err = error as Error; // Assert error type
    res.status(500).json({ error: err.message });
  }
};
