import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProducts = async () => {
    return await prisma.product.findMany();
};

export const getProductById = async (id: number) => {
    return await prisma.product.findUnique({
        where: { id },
    });
};

export const createProduct = async (name: string, price: number, image: string) => {
    return await prisma.product.create({
        data: { name, price, image },
    });
};

export const updateProduct = async (id: number, name: string, price: number, image: string) => {
    return await prisma.product.update({
        where: { id },
        data: { name, price, image },
    });
};

export const deleteProduct = async (id: number) => {
    return await prisma.product.delete({
        where: { id },
    });
};
