import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const seedData = async () => {
    try {
        // Delete all existing products
        await prisma.product.deleteMany();

        // Create 8 new products
        const products = [];
        for (let i = 0; i < 8; i++) {
            products.push({
                name: faker.commerce.productName(),
                price: parseFloat(faker.commerce.price()), // Ensure it's a float
                image: faker.image.url()
            });
        }

        await prisma.product.createMany({ data: products });

        console.log('Test data inserted successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await prisma.$disconnect();
    }
};

seedData();
