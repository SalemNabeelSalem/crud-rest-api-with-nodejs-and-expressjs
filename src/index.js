import express from "express";
import bodyParser from "body-parser";

import UserRoutes from "./routes/user.routes.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/api/v1/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
