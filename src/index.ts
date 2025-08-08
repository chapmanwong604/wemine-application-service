import express from "express";
import { CONFIG } from "./config.ts";
import { router } from "./routes/api.ts";

const app = express();
const PORT = CONFIG.PORT;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("This is a service for applying position.");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`=================================`)
  console.log(`APP IS LISTENING ON PORT: ${PORT}`)
  console.log(`=================================`)
});
