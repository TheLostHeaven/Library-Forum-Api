import app from "./src/App.js";
import "./src/database/database.js"
import "./src/libs/initialSetup.js"

import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3000

app.listen(PORT)
console.log("Server listen on port" + PORT)
