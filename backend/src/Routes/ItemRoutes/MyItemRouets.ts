import express, { Request, Response } from 'express';
import multer from 'multer';
import cloudinary from 'cloudinary';
import Item from '../../Models/Item';
import { ItemType } from '../../ItemType/ItemType';
import verifyToken from '../../middleware/auth';
import { body } from 'express-validator';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
});

// Create a new item
router.post("/", verifyToken, [
    body("itemName").notEmpty().withMessage('Item name is required'),
    body("description").notEmpty().withMessage('Description is required'),
    body("number").notEmpty().withMessage('Number is required'),
    body("category").notEmpty().withMessage('Category is required'),
    body("quantity").notEmpty().isNumeric().withMessage('Quantity is required'),
    body("city").notEmpty().withMessage('City is required'),
    body("state").notEmpty().withMessage('State is required'),
    body("price").notEmpty().isNumeric().withMessage('Price is required'),
    body("rating").isNumeric().withMessage('Rating is required').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
], upload.array("imageFiles", 6), async (req: Request, res: Response) => {
    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newItem: ItemType = req.body;

        // Upload images to Cloudinary
        const imageUrls = await uploadImage(imageFiles);

        newItem.imagesUrl = imageUrls;
        newItem.lastUpdated = new Date();
        newItem.userId = req.userId;

        const item = new Item(newItem);
        await item.save();

        res.status(201).send(item);
    } catch (error) {
        console.error("Error creating item:", error);
        res.status(500).json({ message: "Something went wrong saving item"});
    }
});


// Get all items for a user
router.get("/", verifyToken, async (req: Request, res: Response) => {
    try {
        const items = await Item.find({ userId: req.userId });
        res.json(items);

    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ message: "Error fetching items" });
    }
});

router.get("/:id", verifyToken, async (req: Request, res: Response) => {
    const id = req.params.id.toString();
    try {
        const item = await Item.findOne({
            _id: id,
            userId: req.userId,
        });
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json(item);

    } catch (error) {
        console.error("Error fetching item:", error);
        res.status(500).json({ message: "Error fetching item" });
    }
});

// Update an item
router.put("/:itemId", verifyToken, upload.array("imageFiles"), async (req: Request, res: Response) => {
    try {
        const updatedItem: ItemType = req.body;
        updatedItem.lastUpdated = new Date();
        
        const item = await Item.findOneAndUpdate({
            _id: req.params.itemId,
            userId: req.userId,
        }, updatedItem, { new: true });

        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }

        const files = req.files as Express.Multer.File[];
        if (files.length > 0) {
            const updatedImageUrls = await uploadImage(files);
            item.imagesUrl = [...updatedImageUrls, ...(updatedItem.imagesUrl || [])];
        }

        await item.save();

        res.status(200).json(item);

    } catch (error) {
        console.error("Error updating item:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Helper function to upload images to Cloudinary
async function uploadImage(imageFiles: Express.Multer.File[]) {
    const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = "data:" + image.mimetype + ";base64," + b64;
        const res = await cloudinary.v2.uploader.upload(dataURI);
        return res.url;
    });

    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls;
}

export default router;
