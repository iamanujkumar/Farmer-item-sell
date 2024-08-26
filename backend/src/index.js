import express from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./Routes/UserRoute.js";
import itemRoutes from "./Routes/Item.js"; // Make sure this matches the filename
import itemController from './Controller/ItemController.js'

// Connect to MongoDB
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Set up routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/my-items", itemRoutes); // Add item routes
app.use("/api/v1/items", itemController); // Add item routes


app.get("/api/test", (req, res) => {
    res.json({ message: "Hello" });
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
