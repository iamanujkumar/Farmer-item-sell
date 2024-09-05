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
const Item_1 = __importDefault(require("../../Models/Item"));
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
// Search Route
router.get("/search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = constructSearchQuery(req.query);
        // Sorting options
        let sortOptions = {};
        switch (req.query.sortOption) {
            case "rating":
                sortOptions = { rating: -1 }; // High to Low Rating
                break;
            case "priceAsc":
                sortOptions = { price: 1 }; // Low to High Price
                break;
            case "priceDesc":
                sortOptions = { price: -1 }; // High to Low Price
                break;
            default:
                sortOptions = {}; // No sorting
                break;
        }
        // Pagination setup
        const pageSize = 5; // Number of items per page
        const pageNumber = parseInt(req.query.page ? req.query.page.toString() : "1");
        const skip = (pageNumber - 1) * pageSize;
        // Fetch items with sorting, pagination, and filters applied
        const items = yield Item_1.default.find(query).sort(sortOptions).skip(skip).limit(pageSize);
        // Count total items matching the query
        const total = yield Item_1.default.countDocuments(query);
        const response = {
            data: items,
            pagination: {
                total,
                page: pageNumber,
                pages: Math.ceil(total / pageSize),
            },
        };
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}));
// Get Item by ID Route
router.get("/:id", [
    (0, express_validator_1.param)("id").notEmpty().withMessage("Item ID is required")
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id.toString();
    try {
        const item = yield Item_1.default.findById(id);
        if (item) {
            res.json(item);
        }
        else {
            res.status(404).json({ message: "Item not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching item" });
    }
}));
// Construct Search Query Function
const constructSearchQuery = (queryParams) => {
    let constructedQuery = {};
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
exports.default = router;
