const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
import { ItemType } from '../../../backend/src/ItemType/ItemType';

// Add a new item
export const addMyItem = async (itemFormData: FormData) => {
    const response = await fetch(`${API_BASE_URL}/api/my-items`, {
        method: "POST",
        credentials: "include",
        body: itemFormData,
    });
    if (!response.ok) {
        throw new Error("Failed to add Item");
    }
    return response.json();
};

// Fetch all items for the user
export const fetchMyItems = async (): Promise<ItemType[]> => {
    const response = await fetch(`${API_BASE_URL}/api/my-items`, {
        credentials: "include"
    });
    if (!response.ok) {
        throw new Error("Error fetching Items");
    }
    return response.json();
}

// Fetch a specific item by ID
export const fetchMyItemById = async (itemId: string): Promise<ItemType> => {
    const response = await fetch(`${API_BASE_URL}/api/my-items/${itemId}`, {
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error("Error fetching item");
    }
    return response.json();
};

// Update an item by ID
export const updateMyItemById = async (itemFormData: FormData) => {
    const response = await fetch(`${API_BASE_URL}/api/my-items/${itemFormData.get("itemId")}`, {
        method: "PUT",
        body: itemFormData,
        credentials: "include",
    });
    if (!response.ok) {
        throw new Error("Failed to update Item");
    }
    return response.json();
}
