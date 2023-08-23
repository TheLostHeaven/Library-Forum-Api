import { Router } from "express";
import { createUser, getUser, getUserForId, updateUserForId, deleteUserById} from "../controller/user.js";
import { isAdmin, verifyToken, isAdminOrOwner } from "../middleware/authJwt.js";
import { checkExistingUser } from "../middleware/verifySignup.js";

const router = Router();

router.get("/", [verifyToken, checkExistingUser, isAdmin], getUser)
router.get("/:id", verifyToken, checkExistingUser, isAdmin, getUserForId)
router.post("/", [verifyToken, isAdmin, checkExistingUser], createUser);
router.patch("/:id", [verifyToken, isAdminOrOwner, checkExistingUser], updateUserForId)
router.delete("/:id", [verifyToken, isAdminOrOwner, checkExistingUser], deleteUserById)

export default router;

