import express from 'express';
import Item from '../Model/ItemSchema.js';
import { param, validationResult }  from 'express-validator';

const router = express.Router();

router.get("/search", async (req, res) => {
    try {
        const query = constructSearchQuery(req.query);

        let sortOptions = {};
        switch (req.query.sortOption) {
            case "rating":
                sortOptions = { rating: -1 };
                break;
            case "priceAsc":
                sortOptions = { price: 1 };
                break;
            case "priceDesc":
                sortOptions = { price: -1 };
                break;
            default:
                sortOptions = {}; // Default to no sorting if no valid option is provided
                break;
        }

        const pageSize = 5;
        const pageNumber = parseInt(req.query.page ? req.query.page.toString() : "1");

        const skip = (pageNumber - 1) * pageSize;

        const items = await Item.find(query).sort(sortOptions).skip(skip).limit(pageSize);

        const total = await Item.countDocuments(query); // Count documents matching the query
        const response = {
            data: items,
            pagination: {
                total,
                page: pageNumber,
                pages: Math.ceil(total / pageSize),
            },
        };
        res.json(response);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Get a single item by ID
router.get("/:id", [
    param("id").notEmpty().withMessage("Item id is required")
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id.toString();
    try {
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching item" });
    }
});

// Helper function to construct search query
const constructSearchQuery = (queryParams) => {
    let constructedQuery = {};

    if (queryParams.name) {
        constructedQuery.name = new RegExp(queryParams.name, "i"); // Case-insensitive search
    }

    if (queryParams.category) {
        constructedQuery.category = new RegExp(queryParams.category, "i");
    }

    if (queryParams.rating) {
        const rating = Array.isArray(queryParams.rating)
            ? queryParams.rating.map(r => parseInt(r))
            : parseInt(queryParams.rating);

        constructedQuery.rating = { $in: rating };
    }

    if (queryParams.maxPrice) {
        constructedQuery.price = {
            $lte: parseInt(queryParams.maxPrice),
        };
    }

    if (queryParams.minPrice) {
        constructedQuery.price = constructedQuery.price || {};
        constructedQuery.price.$gte = parseInt(queryParams.minPrice);
    }

    return constructedQuery;
};

export default router;
