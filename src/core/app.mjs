import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Routes
import authRoutes from '../routes/Auth/authRoute.mjs';
import errorHandler from '../middlewares/errorHandler.mjs';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`- Server listening on port ${PORT} ✅`);
});