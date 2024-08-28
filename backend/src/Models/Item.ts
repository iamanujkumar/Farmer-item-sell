import mongoose from "mongoose";
import { ItemType } from "../ItemType/ItemType";

const itemSchema = new mongoose.Schema<ItemType>({
    userId: { type: String, required: true },
    itemName: { type: String, required: true },
    description: { type: String, required: true },
    number: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    price: { type: Number, required: true },
    imagesUrl: [{ type: String, required: true }],
    rating: { type: Number, required: true, min: 1, max: 5 },
    lastUpdated: { type: Date, required: true },
});


const Item = mongoose.model<ItemType>("Item", itemSchema);
export default Item;
