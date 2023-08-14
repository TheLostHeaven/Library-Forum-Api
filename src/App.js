//Aqui se maneja lo que llevaria el index en general pero para que el index no quede tan pesado se pone aqui
import express from "express";
import cors from "cors";

const app = express();

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
