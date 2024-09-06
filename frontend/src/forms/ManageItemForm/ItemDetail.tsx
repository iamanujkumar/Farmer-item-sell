import { useFormContext } from "react-hook-form";
import { ItemFormData } from "./manageItemForm"; // Import ItemFormData
import ImagesSection from "./ItemImage"; // Import the ImagesSection

const DetailsSection = () => {
    const { register, formState: { errors } } = useFormContext<ItemFormData>();

    return (
        <div className="p-32 bg-white shadow-md rounded-lg max-w-3xl mx-auto mt-6">
            <h1 className="text-4xl font-bold text-green-700 mb-6">
                Add Item
            </h1>

            {/* Form Fields */}
            <div className="flex flex-col gap-6">
                {/* Item Name */}
                <label className="text-gray-800 text-lg font-semibold">
                    Item Name
                    <input
                        type="text"
                        className="border rounded-md w-full py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        {...register("itemName", { required: "This field is required" })}
                    />
                    {errors.itemName && (
                        <span className="text-red-500 text-sm mt-1">{errors.itemName.message}</span>
                    )}
                </label>

                {/* Description */}
                <label className="text-gray-800 text-lg font-semibold">
                    Description
                    <textarea
                        rows={4}
                        className="border rounded-md w-full py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        {...register("description", { required: "This field is required" })}
                    />
                    {errors.description && (
                        <span className="text-red-500 text-sm mt-1">{errors.description.message}</span>
                    )}
                </label>

                {/* Number */}
                <label className="text-gray-800 text-lg font-semibold">
                    Number
                    <input
                        type="text"
                        className="border rounded-md w-full py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        {...register("number", { required: "This field is required" })}
                    />
                    {errors.number && (
                        <span className="text-red-500 text-sm mt-1">{errors.number.message}</span>
                    )}
                </label>

                {/* Category */}
                <label className="text-gray-800 text-lg font-semibold">
                    Category
                    <input
                        type="text"
                        className="border rounded-md w-full py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        {...register("category", { required: "This field is required" })}
                    />
                    {errors.category && (
                        <span className="text-red-500 text-sm mt-1">{errors.category.message}</span>
                    )}
                </label>

                {/* Quantity */}
                <label className="text-gray-800 text-lg font-semibold">
                    Quantity
                    <input
                        type="number"
                        className="border rounded-md w-full py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        {...register("quantity", { required: "This field is required", valueAsNumber: true })}
                    />
                    {errors.quantity && (
                        <span className="text-red-500 text-sm mt-1">{errors.quantity.message}</span>
                    )}
                </label>

                {/* City */}
                <label className="text-gray-800 text-lg font-semibold">
                    City
                    <input
                        type="text"
                        className="border rounded-md w-full py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        {...register("city", { required: "This field is required" })}
                    />
                    {errors.city && (
                        <span className="text-red-500 text-sm mt-1">{errors.city.message}</span>
                    )}
                </label>

                {/* State */}
                <label className="text-gray-800 text-lg font-semibold">
                    State
                    <input
                        type="text"
                        className="border rounded-md w-full py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        {...register("state", { required: "This field is required" })}
                    />
                    {errors.state && (
                        <span className="text-red-500 text-sm mt-1">{errors.state.message}</span>
                    )}
                </label>

                {/* Price */}
                <label className="text-gray-800 text-lg font-semibold">
                    Price
                    <input
                        type="number"
                        className="border rounded-md w-full py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        {...register("price", { required: "This field is required", valueAsNumber: true })}
                    />
                    {errors.price && (
                        <span className="text-red-500 text-sm mt-1">{errors.price.message}</span>
                    )}
                </label>

                {/* Rating */}
                <label className="text-gray-800 text-lg font-semibold">
                    Rating
                    <input
                        type="number"
                        min="1"
                        max="5"
                        className="border rounded-md w-full py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        {...register("rating", { required: "This field is required", valueAsNumber: true })}
                    />
                    {errors.rating && (
                        <span className="text-red-500 text-sm mt-1">{errors.rating.message}</span>
                    )}
                </label>

                {/* Image Upload */}
                <ImagesSection />
            </div>
        </div>
    );
};

export default DetailsSection;
