import express from 'express';
import multer from 'multer';
import cloudinary from 'cloudinary';
import Item from '../Model/ItemSchema.js';
import verifyToken from '../Middleware/Auth.js';

// Configure Cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Setup multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create an express router
const router = express.Router();

// Route to add an item
router.post('/add', verifyToken,upload.array('images', 5), async (req, res) => {
    try {
        const { itemName, description, category, city, state, price } = req.body;
       

        // Access userId from the verified token
        const userId = req.userId;

        // Upload images to Cloudinary and get the URLs
        const imagesUrl = await Promise.all(
            req.files.map(file => 
                new Promise((resolve, reject) => {
                    const uploadStream = cloudinary.v2.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result.secure_url);
                        }
                    });
                    uploadStream.end(file.buffer);
                })
            )
        );

        // Create the item
        const newItem = new Item({
            userId,
            itemName,
            description,
            category,
            city,
            state,
            price,
            imagesUrl,
        });
        console.log(newItem);

        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding item', error });
    }
});

export default router;
