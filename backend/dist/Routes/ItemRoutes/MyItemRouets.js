"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const cloudinary_1 = __importDefault(require("cloudinary"));
const Item_1 = __importDefault(require("../../Models/Item"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
});
// Create a new item
router.post("/", auth_1.default, [
    (0, express_validator_1.body)("itemName").notEmpty().withMessage('Item name is required'),
    (0, express_validator_1.body)("description").notEmpty().withMessage('Description is required'),
    (0, express_validator_1.body)("number").notEmpty().withMessage('Number is required'),
    (0, express_validator_1.body)("category").notEmpty().withMessage('Category is required'),
    (0, express_validator_1.body)("quantity").notEmpty().isNumeric().withMessage('Quantity is required'),
    (0, express_validator_1.body)("city").notEmpty().withMessage('City is required'),
    (0, express_validator_1.body)("state").notEmpty().withMessage('State is required'),
    (0, express_validator_1.body)("price").notEmpty().isNumeric().withMessage('Price is required'),
    (0, express_validator_1.body)("rating").isNumeric().withMessage('Rating is required').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
], upload.array("imageFiles", 6), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imageFiles = req.files;
        const newItem = req.body;
        // Upload images to Cloudinary
        const imageUrls = yield uploadImage(imageFiles);
        newItem.imagesUrl = imageUrls;
        newItem.lastUpdated = new Date();
        newItem.userId = req.userId;
        const item = new Item_1.default(newItem);
        yield item.save();
        res.status(201).send(item);
    }
    catch (error) {
        console.error("Error creating item:", error);
        res.status(500).json({ message: "Something went wrong saving item" });
    }
}));
// Get all items for a user
router.get("/", auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield Item_1.default.find({ userId: req.userId });
        res.json(items);
    }
    catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ message: "Error fetching items" });
    }
}));
router.get("/:id", auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id.toString();
    try {
        const item = yield Item_1.default.findOne({
            _id: id,
            userId: req.userId,
        });
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json(item);
    }
    catch (error) {
        console.error("Error fetching item:", error);
        res.status(500).json({ message: "Error fetching item" });
    }
}));
// Update an item
router.put("/:itemId", auth_1.default, upload.array("imageFiles"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedItem = req.body;
        updatedItem.lastUpdated = new Date();
        const item = yield Item_1.default.findOneAndUpdate({
            _id: req.params.itemId,
            userId: req.userId,
        }, updatedItem, { new: true });
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        const files = req.files;
        if (files.length > 0) {
            const updatedImageUrls = yield uploadImage(files);
            item.imagesUrl = [...updatedImageUrls, ...(updatedItem.imagesUrl || [])];
        }
        yield item.save();
        res.status(200).json(item);
    }
    catch (error) {
        console.error("Error updating item:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
}));
// Helper function to upload images to Cloudinary
function uploadImage(imageFiles) {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadPromises = imageFiles.map((image) => __awaiter(this, void 0, void 0, function* () {
            const b64 = Buffer.from(image.buffer).toString("base64");
            let dataURI = "data:" + image.mimetype + ";base64," + b64;
            const res = yield cloudinary_1.default.v2.uploader.upload(dataURI);
            return res.url;
        }));
        const imageUrls = yield Promise.all(uploadPromises);
        return imageUrls;
    });
}
exports.default = router;
