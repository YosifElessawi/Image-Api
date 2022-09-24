import express, { Application } from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import routes from './routes/index';

dotenv.config();
const PORT = process.env.PORT || 3000;
// create an instance server
const app: Application = express();
// HTTP request logger middleware
app.use(morgan('dev'));
// Use routes
app.use('/api', routes);
// start express server
app.listen(PORT, () => {
  console.log(`Server is running at prot:${PORT}`);
});
export default app;
