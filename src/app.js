import express from 'express'
import cors from 'cors'

const app = express();

//app.use
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
      origin: "http://localhost:4200/",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
      preflightContinue: false,
      optionsSuccessStatus: 204,
  })
);

//Routes

import indexRouter from "./route/index.js"
import authRouter from "./route/auth.js"
import usersRouter from "./route/user.js"
import publicationsRouter from "./route/publication.js"


app.use("/api", indexRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter)
app.use("/api/publications", publicationsRouter);



export default app;
