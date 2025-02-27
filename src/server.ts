import express from 'express';
import connectDB from './database';
import mainRoutes from './routes/main';
import productRoutes from './routes/products';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', mainRoutes);
app.use('/products/', productRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error("Failed to connect to database", err);
});
