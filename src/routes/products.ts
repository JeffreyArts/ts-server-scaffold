import { Router } from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../models/product';

const router = Router();

// Create a new product
router.post('/', async (req, res) => {
    const { name, price, image } = req.body;

    try {
        const newProduct = await createProduct(name, price, image);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating product', error);
        res.status(500).json({ message: 'Error creating product' });
    }
});

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products', error);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await getProductById(Number(id));

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching product', error);
        res.status(500).json({ message: 'Error fetching product' });
    }
});

// Update a product
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, image } = req.body;

    try {
        const updatedProduct = await updateProduct(Number(id), name, price, image);

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error updating product', error);
        res.status(500).json({ message: 'Error updating product' });
    }
});

// Delete a product
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await deleteProduct(Number(id));

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product', error);
        res.status(500).json({ message: 'Error deleting product' });
    }
});

export default router;
