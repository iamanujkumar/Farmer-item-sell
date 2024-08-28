import { UserType } from "../../../backend/src/ItemType/ItemType";
import { RegisterFormData } from "../Pages/Register"
import { SignInFormData } from "../Pages/SignIn";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "" ;


export const fetchCurrentUser = async (): Promise<UserType> =>{
  const responce = await fetch(`${API_BASE_URL}/api/users/me`,{
    credentials:"include"
  })
  if(!responce.ok){
    throw new Error("Error fetching user")
  }
  return responce.json();
}

export const register = async (formData:RegisterFormData) =>{
        const responce = await fetch(`${API_BASE_URL}/api/users/register`,{
            method:'POST',
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData),
        });

        const responceBody = await responce.json();
        if(!responce.ok){
            throw new Error(responceBody.message);
        }
}

export const signIn = async (formData: SignInFormData)=>{
    const responce = await fetch(`${API_BASE_URL}/api/auth/login`,{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
    })
    const body = await responce.json();
    if(!responce.ok){
        throw new Error(body.message);
    }
    return body;
};

export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
      credentials: "include",
    });
  
    if (!response.ok) {
      throw new Error("Token invalid");
    }
  
    return response.json();
  };


export const signOut = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
      credentials: "include",
      method: "POST",
    });
  
    if (!response.ok) {
      throw new Error("Error during sign out");
    }
  };

