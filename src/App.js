//Aqui se maneja lo que llevaria el index en general pero para que el index no quede tan pesado se pone aqui
import express from "express";
import cors from "cors";

const app = express();

import routerAuth from './routes/router.auth.js';
import routerAdmin from './routes/router.admin.js';
import routerProfile  from './routes/router.profile.js';
import routeUser  from './routes/route.user.js';
import routerStart from './routes/router.start.js'


app.use('/api/auth', routerAuth);
app.use('/api/admin', routerAdmin);
app.use('/api/profile', routerProfile);
app.use('/api/user', routeUser)
app.use('/api/start', routerStart)

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
