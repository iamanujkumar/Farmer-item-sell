import React, { useContext, useState } from "react";
import Toast from "../components/Toast";
import { useQuery } from "react-query";
import * as apiClient from "../Api/userApi";
import { loadStripe, Stripe } from "@stripe/stripe-js";

const STRIPE_PUB_KEY = import.meta.env.VITE_STRIPE_PUB_KEY || "";

type ToastMessage = {
    message: string;
    type: "SUCCESS" | "ERROR";
};

type User = {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    profilePic: string;
    location: string;
    bio: string;
};

type AppContext = {
    showToast: (toastMessage: ToastMessage) => void;
    isLoggedIn: boolean;
    stripePromise: Promise<Stripe | null>;
    user: User | null;
    updateUser: (data: Partial<User>) => Promise<void>;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

const stripePromise = loadStripe(STRIPE_PUB_KEY);

export const AppContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [toast, setToast] = useState<ToastMessage | undefined>(undefined);
    const [user, setUser] = useState<User | null>(null);

    const { isError } = useQuery("validateToken", apiClient.validateToken, {
        retry: false,
        onSuccess: async () => {
            try {
                const userData = await apiClient.fetchCurrentUser();
                setUser(userData); // Ensure userData matches User type
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        },
        onError: () => {
            setUser(null);
        },
    });

    const updateUser = async (data: Partial<User>) => {
        try {
            const updatedUser = await apiClient.updateUserProfile(data);
            setUser(updatedUser); // Ensure updatedUser matches User type
            showToast({ message: "Profile updated successfully", type: "SUCCESS" });
        } catch (error) {
            console.error("Failed to update user data:", error);
            showToast({ message: "Failed to update profile", type: "ERROR" });
        }
    };

    const showToast = (toastMessage: ToastMessage) => {
        setToast(toastMessage);
    };

    return (
        <AppContext.Provider
            value={{
                showToast,
                isLoggedIn: !isError,
                stripePromise,
                user,
                updateUser,
            }}
        >
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(undefined)}
                />
            )}
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};