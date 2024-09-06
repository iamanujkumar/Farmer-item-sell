import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as apiClient from '../../Api/AddItem';

const Profile: React.FC = () => {
    const { user, updateUser } = useAppContext();
    const navigate = useNavigate();
    const [name, setName] = useState(user?.firstName || '');
    const [bio, setBio] = useState(user?.bio || '');
    const [profilePic, setProfilePic] = useState(user?.profilePic || '');
    const [location, setLocation] = useState(user?.location || '');
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (user) {
            setName(user.firstName);
            setBio(user.bio);
            setProfilePic(user.profilePic);
            setLocation(user.location);
        }
    }, [user]);

    const { data: itemsData } = useQuery("fetchMyItems", apiClient.fetchMyItems, {
        onError: () => {
            // Handle error
        }
    });

    if (!itemsData) {
        return <span>No Items Found</span>;
    }

    const handleUpdateProfile = async () => {
        await updateUser({ firstName: name, bio, profilePic, location });
    };

    const handleAddProducts = () => {
        navigate('/add-item');
    };

    const handleEditItem = (itemId: string) => {
        navigate(`/edit-item/${itemId}`); 
    };

    return (
        <div className="flex flex-col lg:flex-row p-6 animate-fade-in bg-white mt-0">
         
            <div className="lg:w-1/4 flex flex-col items-center lg:items-start mb-6 lg:mb-0">
                <img
                    src={profilePic || 'default-profile-pic.png'}
                    alt="Profile Picture"
                    className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg transition-transform transform hover:scale-110"
                    style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                />
                <h2 className="text-4xl font-bold text-green-600 uppercase">{name}</h2>
                <p className="text-white text-xl capitalize items-center">{bio}</p>
                <p className="text-white text-2xl capitalize">{location}</p>
               
                <div className="w-full mt-8 ml-0">
                    <h3 className="text-3xl font-bold text-black mb-4">Personal Details</h3>
                    <div className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-3 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors duration-200 ease-in-out text-black"
                        />
                        <textarea
                            placeholder="Bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="p-3 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors duration-200 ease-in-out text-black"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="p-3 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors duration-200 ease-in-out text-black"
                        />
                        <input
                            type="text"
                            placeholder="Profile Picture URL"
                            value={profilePic}
                            onChange={(e) => setProfilePic(e.target.value)}
                            className="p-3 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors duration-200 ease-in-out text-black"
                        />
                        <button
                            onClick={handleUpdateProfile}
                            className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-transform transform hover:scale-105"
                        >
                            Update Profile
                        </button>
                        <button
                            onClick={handleAddProducts}
                            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 mt-4 transition-transform transform hover:scale-105"
                        >
                            Add Products
                        </button>
                    </div>
                </div>
            </div>

           
            <div className="lg:w-3/4 flex flex-col space-y-4 p-6 bg-gray-300 rounded-lg shadow-lg border-2 border-white animate-slide-in ml-4">
                <h3 className="text-2xl font-bold text-black mb-4">Your Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {itemsData.map((item) => (
                        <div key={item._id} className="border-2 border-gray-700 p-4 rounded-md shadow-md bg-gray-700 transition-transform transform hover:scale-105 hover:shadow-xl">
                            <img
                                src={item.imagesUrl[0] || 'default-item-pic.png'}
                                alt={item.itemName}
                                className="w-full h-48 object-cover mb-4 rounded-md"
                            />
                            <h4 className="text-xl font-bold text-yellow-400">{item.itemName}</h4>
                            <p className="text-gray-400">{item.description}</p>
                            <p className="text-green-500 font-bold">Price: ${item.price}</p>
                            <button
                                onClick={() => handleEditItem(item._id)}
                                className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mt-4 hover:bg-yellow-600 transition-transform transform hover:scale-105"
                            >
                                Edit Item
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;