import { ClientConfig, Client, MiddlewareConfig } from "@line/bot-sdk";
import express, { Application, Request, Response } from "express";
import { config } from "dotenv";
import WebhookRoute from "./routes/webhook.route";
import { connectDB } from "./DB/connect";
import UserRoute from "./routes/user.route";
import helmet from "helmet";

config();

connectDB();

const app: Application = express();
const PORT = process.env.PORT || 3000;

const clientConfig: ClientConfig = {
  channelAccessToken: `${process.env.ACCESS_TOKEN}`,
  channelSecret: `${process.env.SECRET_TOKEN}`,
};

export const client = new Client(clientConfig);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use("/webhook", WebhookRoute);
app.use("/api/users", UserRoute);

app.listen(PORT, () => console.log(`Server listening on PORT:${PORT} 🚀`));
