import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import router from "./routes/customerRoute.js";
import dealsRouter from "./routes/dealRoutes.js";
import taskRouter from "./routes/taskRoute.js"
const app = express();

// Connect to database
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

// Routes
app.use("/api/users",userRouter);
app.use("/api/customers",router);
app.use("/api/deals",dealsRouter);
app.use("/api/tasks",taskRouter);

// Listen to port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
