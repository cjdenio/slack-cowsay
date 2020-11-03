import cowsay from "cowsay";
import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
  res.json({
    response_type: "in_channel",
    text:
      "```" +
      cowsay.say({
        text: req.body.text,
      }) +
      "```",
  });
};
