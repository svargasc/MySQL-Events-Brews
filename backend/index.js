import express from 'express';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import eventsRoutes from './routes/events.routes.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(userRoutes);
app.use(eventsRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


