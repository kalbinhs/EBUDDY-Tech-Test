import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";

const userCollection = db.collection("USERS");

export const getUser = async (userId: string): Promise<User | null> => {
  const doc = await userCollection.doc(userId).get();
  return doc.exists ? (doc.data() as User) : null;
};

export const updateUser = async (userId: string, userData: Partial<User>) => {
  await userCollection.doc(userId).update(userData);
};
