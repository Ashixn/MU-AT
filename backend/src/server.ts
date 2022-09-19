import {
  ClientConfig,
  Client,
  middleware,
  MiddlewareConfig,
  WebhookEvent,
  TextMessage,
  MessageAPIResponseBase,
} from "@line/bot-sdk";
import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 3000;

const clientConfig : ClientConfig = {
  channelAccessToken: process.env.ACCESS_TOKEN || "",
  channelSecret: process.env.SECRET_TOKEN || "",
}

const middlewareConfig : MiddlewareConfig = {
  channelAccessToken: process.env.ACCESS_TOKEN || "",
  channelSecret: process.env.SECRET_TOKEN || "",
}

const client = new Client(clientConfig);

app.listen(PORT, () =>
  console.log(`Server listening on PORT:${PORT} 🚀`)
);
