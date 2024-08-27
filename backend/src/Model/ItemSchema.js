import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    number : {type: String, required:true},
    category: { type: String, required: true },
    quantity:{ type: Number, required: true},
    city: { type: String, required: true }, // New field
    state: { type: String, required: true }, // New field
    price: { type: Number, required: true },
    imagesUrl: { type: [String] }, // Array of image URLs
    rating: { type: Number, default: 0 }, // New field with default value
}, { timestamps: true });

// Ensure you export the model as default
const Item = mongoose.model('Item', itemSchema);
export default Item; // Default export
