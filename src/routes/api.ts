import axios from "axios";
import express, { type Router } from "express";
import type { Content } from "../interfaces.ts";
import { CONFIG } from "../config.ts";

const router: Router = express().router;

router.get("/apply", async (req, res) => {
  const content: Content = {
    "name":             CONFIG.NAME,
    "email":            CONFIG.EMAIL,
    "position":         CONFIG.POSITION,
    "cv_url":           CONFIG.CV_URL,
    "cover_letter_url": CONFIG.COVER_LETTER_URL,
    "intro":            CONFIG.INTRO,
    "website":          CONFIG.WEBSITE,
    "note":             CONFIG.NOTE,
    "code_url":         CONFIG.CODE_URL,
  };

  try {
    const result = await axios.post(CONFIG.TARGET_URL, content, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.status === 200) {
      return res.status(200).json({ status: "Submission Successful", message: result.data });
    } else {
      throw Error(result.data);
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return res.status(error.response?.status || 500).json({ status: "Submission Failed", message: error.response?.data });
    } else if (error instanceof Error) {
      return res.status(500).json({ status: "Submission Failed", message: error.message });
    } else {
      return res.status(500).json({ status: "Submission Failed", message: error });
    }
  }
});

export { router };