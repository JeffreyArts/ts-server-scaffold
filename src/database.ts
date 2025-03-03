import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log('Connected to SQLite database');
    } catch (error) {
        console.error('Error connecting to SQLite', error);
        process.exit(1);
    }
};

export { prisma, connectDB };
export default connectDB
