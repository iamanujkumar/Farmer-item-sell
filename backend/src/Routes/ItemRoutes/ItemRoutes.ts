import express, { Request, Response } from 'express';
import Item from '../../Models/Item';
import { ItemSearchResponse } from '../../ItemType/ItemType';
import { param, validationResult } from 'express-validator';

const router = express.Router();

// Search Route
router.get("/search", async (req: Request, res: Response) => {
    try {
        const query = constructSearchQuery(req.query);

        // Sorting options
        let sortOptions: any = {};
        switch (req.query.sortOption) {
            case "rating":
                sortOptions = { rating: -1 };  // High to Low Rating
                break;
            case "priceAsc":
                sortOptions = { price: 1 };  // Low to High Price
                break;
            case "priceDesc":
                sortOptions = { price: -1 };  // High to Low Price
                break;
            default:
                sortOptions = {};  // No sorting
                break;
        }

        // Pagination setup
        const pageSize = 20; // Number of items per page
        const pageNumber = parseInt(req.query.page ? req.query.page.toString() : "1");
        const skip = (pageNumber - 1) * pageSize;

        // Fetch items with sorting, pagination, and filters applied
        const items = await Item.find(query).sort(sortOptions).skip(skip).limit(pageSize);

        // Count total items matching the query
        const total = await Item.countDocuments(query);
        const response: ItemSearchResponse = {
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

// Get Item by ID Route
router.get("/:id", [
    param("id").notEmpty().withMessage("Item ID is required")
], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id.toString();
    try {
        const item = await Item.findById(id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching item" });
    }
});

// Construct Search Query Function
const constructSearchQuery = (queryParams: any) => {
    let constructedQuery: any = {};

    if (queryParams.itemName) {
        constructedQuery.itemName = new RegExp(queryParams.itemName, "i");
    }

    if (queryParams.category) {
        constructedQuery.category = new RegExp(queryParams.category, "i");
    }

    if (queryParams.minPrice || queryParams.maxPrice) {
        constructedQuery.price = {};
        if (queryParams.minPrice) {
            constructedQuery.price.$gte = parseInt(queryParams.minPrice);
        }
        if (queryParams.maxPrice) {
            constructedQuery.price.$lte = parseInt(queryParams.maxPrice);
        }
    }

    if (queryParams.rating) {
        constructedQuery.rating = { $gte: parseInt(queryParams.rating) };
    }

    return constructedQuery;
};

export default router;
