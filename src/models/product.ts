import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String
});

// Verwijder __v wanneer je het document omzet naar JSON of object
ProductSchema.set('toJSON', {
    transform: (doc, ret) => {
        // Verwijder __v uit de response
        delete ret.__v;
        return ret;
    }
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;
