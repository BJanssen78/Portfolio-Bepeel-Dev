import express from "express";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

// Load and expand environment variables
const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!, here come my new hotel booking site");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
