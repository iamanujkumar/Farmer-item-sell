import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
const Profile: React.FC = () => {
    const { user, updateUser } = useAppContext();
    const [name, setName] = useState(user?.firstName || '');
    const [bio, setBio] = useState(user?.bio || '');
    const [profilePic, setProfilePic] = useState(user?.profilePic || '');
    const [location, setLocation] = useState(user?.location || '');
    const navigate = useNavigate(); 

    useEffect(() => {
        if (user) {
            setName(user.firstName);
            setBio(user.bio);
            setProfilePic(user.profilePic);
            setLocation(user.location);
        }
    }, [user]);

    const handleUpdateProfile = async () => {
        await updateUser({ firstName: name, bio, profilePic, location });
    };
    const handleAddProducts = () => {
        navigate('/add-item');  
    };

    return (
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-8 p-6">
            <div className="lg:w-1/3 flex flex-col items-center mb-6 lg:mb-0">
                <img
                    src={profilePic || 'default-profile-pic.png'}
                    alt="Profile Picture"
                    className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
                    style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                />
                <h2 className="text-4xl font-bold text-green-600 uppercase">{name}</h2>
                <p className="text-gray-600 text-1xl capitalize">{bio}</p>
                <p className="text-gray-600 text-2xl capitalize">{location}</p>
            </div>
            <div className="lg:w-2/3 flex flex-col space-y-4">
                
                <div className="flex flex-col space-y-2">
                    <label className='text-gray-900 text-1xl capitalize font-bold'><h3>Personal Details</h3></label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <label className='text-gray-900 text-1xl capitalize font-bold'><h3>Bio</h3></label>
                    <textarea
                        placeholder="Bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <label className='text-gray-900 text-1xl capitalize font-bold'><h3>Your Adress</h3></label>
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <label className='text-gray-900 text-1xl capitalize font-bold'><h3>Enter Your Profile Image URL</h3></label>
                    <input
                        type="text"
                        placeholder="Profile Picture URL"
                        value={profilePic}
                        onChange={(e) => setProfilePic(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        onClick={handleUpdateProfile}
                        className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700"
                    >
                        Update Profile
                    </button>

                    <button
                        onClick={handleAddProducts}  
                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 mt-4"
                    >
                        Add Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
