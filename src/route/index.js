import {Router} from 'express'
import express from 'express'
import pkg from "../../package.json" assert {type: "json"};

const router = Router()
const app = express();

app.use(express.json());

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Forum API",
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    author: pkg.author,
  });
});

export default router