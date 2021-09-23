// App Basic Imports:
import express from "express";
import bodyParser from "body-parser";

// All Routes:
import usersRoutes from "./routes/users.js";

// App Settings:
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/api/v1", usersRoutes);

/**
app.listen(PORT, () => {
  console.log(`Server Running On: http://localhost:${PORT}`);
});
*/
app.listen(PORT);
