import cowsay, { TURTLE } from "cowsay";
import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
  const { text } = req.body;
  const turtleText = "-f turtle";
  res.json({
    response_type: "in_channel",
    text:
      "```" + text.includes(turtleText)
        ? cowsay.say({ text })
        : cowsay.say({ text: text.trim(turtleText).trim(" "), cow: TURTLE }) +
          "```",
  });
};
