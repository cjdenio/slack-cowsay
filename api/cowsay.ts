import cowsay from "cowsay";
import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
  let text = req.body.text;
  let turtleText = "-f turtle";

  res.json({
    response_type: "in_channel",
    text:
      "```" +
      (text.includes(turtleText)
        ? cowsay.say({
            text: text.replace("-f turtle", "").trim(),
            f: "turtle",
          })
        : cowsay.say({ text: text })) +
      "```",
  });
};
