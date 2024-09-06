import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./ItemDetail";
import ImagesSection from "./ItemImage"; // Ensure this import is correct
import { ItemType } from "../../../../backend/src/ItemType/ItemType"; // Import the ItemType
import { useEffect } from "react";

export type ItemFormData = {
    itemName: string;         // Renamed from 'name'
    description: string;      // Kept the same
    number: string;           // New field added
    category: string;         // Kept the same
    quantity: number;         // Kept the same
    city: string;             // Kept the same
    state: string;            // New field added
    price: number;  
    imageFiles: FileList;       // Kept the same
    imagesUrl: string[];      // Renamed from 'imageFiles' and kept as array of strings
    rating: number;           // Kept the same
};

type Props = {
    item?: ItemType; // Changed type from item to ItemType
    onSave: (itemFormData: FormData) => void;
    isLoading: boolean;
}

const ManageItemForm = ({ onSave, isLoading, item }: Props) => {
    const formMethods = useForm<ItemFormData>();
    const { handleSubmit, reset } = formMethods;

    useEffect(() => {
        reset(item);
    }, [item, reset]);

    const onSubmit = handleSubmit((formDataJson: ItemFormData) => {
        const formData = new FormData();
        if (item) {
            formData.append("itemId", item._id); // Change from itemIdId to itemId
        }

        formData.append("itemName", formDataJson.itemName);
        formData.append("city", formDataJson.city);
        formData.append("state", formDataJson.state); // Added state field
        formData.append("description", formDataJson.description);
        formData.append("category", formDataJson.category);
        formData.append("price", formDataJson.price.toString());
        formData.append("number", formDataJson.number);
        formData.append("quantity", formDataJson.quantity.toString()); // Added quantity field
        formData.append("rating", formDataJson.rating.toString());

        if (formDataJson.imagesUrl) {
            formDataJson.imagesUrl.forEach((url, index) => {
                formData.append(`imagesUrl[${index}]`, url);
            });
        }

        Array.from(formDataJson.imageFiles).forEach((imageFile) => {
            formData.append(`imageFiles`, imageFile);
        });

        onSave(formData);
    });

    return (
        <FormProvider {...formMethods}>
            <form className="flex flex-col gap-10" onSubmit={onSubmit}>
                <DetailsSection />
                {/* <ImagesSection /> */}
                <span className="flex justify-end">
                    <button 
                        disabled={isLoading}
                        type="submit" 
                        className="bg-red-600 text-white p-2 font-bold hover:bg-green-500 disabled:bg-gray-500">
                        {isLoading ? "Saving..." : "Save"}
                    </button>
                </span>
            </form>
        </FormProvider>
    );
};

export default ManageItemForm;
