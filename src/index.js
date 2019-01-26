import "./env";
import "./db";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import passport from "passport";
import { apiRouter } from "./routes";

const app = express();

const { PORT = 3000 } = process.env;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.disable("x-powered-by");

app.use("/", apiRouter);

app.listen(PORT, console.log("> 🍐 Listening"));
