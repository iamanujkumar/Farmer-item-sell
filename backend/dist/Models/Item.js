"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const itemSchema = new mongoose_1.default.Schema({
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
const Item = mongoose_1.default.model("Item", itemSchema);
exports.default = Item;
