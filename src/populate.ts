import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/product';
import { faker } from "@faker-js/faker"

dotenv.config();
mongoose.set('strictQuery', false);

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);

        // Delete all products
        await Product.deleteMany(); // Clear existing data
        
        // Create 8 new products
        const products = []
        for (let i = 0; i < 8; i++) {
            products.push({
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                image: faker.image.url()
            });
        }
        await Product.insertMany(products);

        console.log('Test data inserted successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding database', error);
        process.exit(1);
    }
};

seedData();
