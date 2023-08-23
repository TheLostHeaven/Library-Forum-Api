import { Router } from "express";
import { getPublication, createPublication, deletePublicationById, updatePublicationById, getPublicationById } from "../controller/publication.js";
import { verifyToken, isAdminOrAuthor } from "../middleware/authJwt.js"


const router = Router();

router.get("/",[verifyToken], getPublication);

router.get("/:id",[verifyToken], getPublicationById);

router.post("/", [verifyToken], createPublication);

router.patch("/:id", [verifyToken, isAdminOrAuthor], updatePublicationById);

router.delete("/:id", [verifyToken,isAdminOrAuthor], deletePublicationById);

export default router;

