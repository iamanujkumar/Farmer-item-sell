import { useFormContext } from "react-hook-form";
import { ItemFormData } from "./manageItemForm"; // Update the import to use ItemFormData

const DetailsSection = () => {
    const { register, formState: { errors } } = useFormContext<ItemFormData>();

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold mb-3">
                Add Item
            </h1>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Item Name
                <input
                    type="text"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("itemName", { required: "This field is required" })} // Update to itemName
                />
                {errors.itemName && (
                    <span className="text-red-500">{errors.itemName.message}</span>
                )}
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1">
                Description
                <textarea
                    rows={10}
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("description", { required: "This field is required" })}
                />
                {errors.description && (
                    <span className="text-red-500">{errors.description.message}</span>
                )}
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1">
                Number
                <input
                    type="text"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("number", { required: "This field is required" })}
                />
                {errors.number && (
                    <span className="text-red-500">{errors.number.message}</span>
                )}
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1">
                Category
                <input
                    type="text"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("category", { required: "This field is required" })}
                />
                {errors.category && (
                    <span className="text-red-500">{errors.category.message}</span>
                )}
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1">
                Quantity
                <input
                    type="number"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("quantity", { required: "This field is required", valueAsNumber: true })}
                />
                {errors.quantity && (
                    <span className="text-red-500">{errors.quantity.message}</span>
                )}
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1">
                City
                <input
                    type="text"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("city", { required: "This field is required" })}
                />
                {errors.city && (
                    <span className="text-red-500">{errors.city.message}</span>
                )}
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1">
                State
                <input
                    type="text"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("state", { required: "This field is required" })}
                />
                {errors.state && (
                    <span className="text-red-500">{errors.state.message}</span>
                )}
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1">
                Price
                <input
                    type="number"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("price", { required: "This field is required", valueAsNumber: true })}
                />
                {errors.price && (
                    <span className="text-red-500">{errors.price.message}</span>
                )}
            </label>

            <label className="text-gray-700 text-sm font-bold flex-1">
                Rating
                <input
                    type="number"
                    min="1"
                    max="5"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("rating", { required: "This field is required", valueAsNumber: true })}
                />
                {errors.rating && (
                    <span className="text-red-500">{errors.rating.message}</span>
                )}
            </label>
        </div>
    );
};

export default DetailsSection;
