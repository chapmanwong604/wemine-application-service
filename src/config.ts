import dotenv from "dotenv";
import type { Config } from "./interfaces.ts";

dotenv.config();

const CONFIG: Config = {
  PORT:               parseInt(process.env.PORT || "3000"),
  TARGET_URL:         process.env.TARGET_URL || "",
  NAME:               process.env.NAME  || "",
  EMAIL:              process.env.EMAIL || "",
  POSITION:           process.env.POSITION || "",
  CV_URL:             process.env.CV_URL || "",
  COVER_LETTER_URL:   process.env.COVER_LETTER_URL || "",
  INTRO:              process.env.INTRO || "",
  WEBSITE:            process.env.WEBSITE || "",
  NOTE:               process.env.NOTE || "",
  CODE_URL:           process.env.CODE_URL || "",
}

export { CONFIG };