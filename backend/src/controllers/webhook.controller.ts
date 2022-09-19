import { Request, Response } from "express";
import { WebhookEvent } from "@line/bot-sdk";
import { textEventHandler } from "../services/textEventHandler";

export const postWebhook = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const events: WebhookEvent[] = req.body.events;

  const results = await Promise.all(
    events.map(async (event: WebhookEvent) => {
      try {
        await textEventHandler(event);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err);
        }
        return res.status(500).json({
          status: "error",
        });
      }
    })
  );

  // Return a successfull message.
  return res.status(200).json({
    status: "success",
    results,
  });
};
