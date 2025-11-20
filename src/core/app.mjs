import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// Routes
import authRoutes from '../routes/Auth/authRoute.mjs';
import errorHandler from '../middlewares/errorHandler.mjs';

const app = express();

app.use(cors({
  origin: "http://localhost:4321",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use('/api/auth', authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`- Server listening on port ${PORT} ✅`);
});