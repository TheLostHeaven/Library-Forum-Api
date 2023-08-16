//Aqui se maneja lo que llevaria el index en general pero para que el index no quede tan pesado se pone aqui
import express from "express";
import cors from "cors";

const app = express();

import loginRegister from './routes/loginRegister.js';
import startPath from './routes/startPath.js';
import profilePath  from './routes/profilePath.js';
import routeuser  from './routes/route.user.js';
import AdminController  from './routes/adminController.js';


app.use('/', loginRegister);
app.use('/', startPath);
app.use('/', profilePath);
app.use('/', routeuser)
app.use('/', AdminController);

app.use(express.json());

app.use(
  cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
      preflightContinue: false,
      optionsSuccessStatus: 204,
  })
);


export default app;
