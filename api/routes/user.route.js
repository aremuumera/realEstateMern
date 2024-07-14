
import express from 'express';
// import { getUsers, getUser, deleteUser,  savePost, profilePosts, getNotificationNumber } from '../controllers/user.controller.js';
import { deleteUser, getNotificationNumber, getUser, getUsers, profilePosts, savePost, updateUser } from '../controllers/User.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router  = express.Router();

router.get("/", getUsers);
router.get("/yikes/:id", verifyToken, getUser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.post("/save", verifyToken, savePost)
router.get("/profilePosts", verifyToken, profilePosts);
router.get("/notification", verifyToken, getNotificationNumber);




export default router;