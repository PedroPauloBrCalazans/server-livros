import express from "express";
import routes from "./routes/index.js";

import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
routes(app);

export default app;
