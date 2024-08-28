import { useMutation } from "react-query";
import * as apiClient from '../../Api/AddItem'
import { useAppContext } from "../../contexts/AppContext";
import ManageItemForm from "../../forms/ManageItemForm/manageItemForm";

const AddItem = () =>{
    const {showToast} = useAppContext();

    const {mutate, isLoading} = useMutation(apiClient.addMyItem,{
        onSuccess:()=>{
            showToast({message: "item Saved!",type:"SUCCESS"});
        },
        onError:()=>{
            showToast({message:"Error Saving item", type:"ERROR"})
        },
    });

    const  handleSave = (itemFormData: FormData)=>{
        mutate(itemFormData)
    }

    return(
        <ManageItemForm onSave={handleSave} isLoading={isLoading}/>
    )
};

export default AddItem;