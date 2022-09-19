import express from "express";
import { middleware, MiddlewareConfig } from "@line/bot-sdk";
import { postWebhook } from "../controllers/webhook.controller";
import { config } from "dotenv";

config();

const middlewareConfig: MiddlewareConfig = {
  channelAccessToken: `${process.env.ACCESS_TOKEN}`,
  channelSecret: `${process.env.SECRET_TOKEN}`,
};

const router = express.Router();

router.route("/").post(middleware(middlewareConfig), postWebhook);

export default router;
