import {
  WebhookEvent,
  MessageAPIResponseBase,
  TextMessage,
} from "@line/bot-sdk";
import { client } from "../server";

export const textEventHandler = async (
  event: WebhookEvent
): Promise<MessageAPIResponseBase | undefined> => {
  if (event.type !== "message" || event.message.type !== "text") {
    return;
  }
  const { replyToken } = event;
  const { text } = event.message;

  const response: TextMessage = {
    type: "text",
    text,
  };
  await client.replyMessage(replyToken, response);
};
