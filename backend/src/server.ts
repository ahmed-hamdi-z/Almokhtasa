import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import formRoutes from './routes/formRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', formRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});