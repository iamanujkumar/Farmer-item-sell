import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
    const { user, updateUser } = useAppContext();
    const [name, setName] = useState(user?.firstName || '');
    const [bio, setBio] = useState(user?.bio || '');
    const [profilePic, setProfilePic] = useState(user?.profilePic || '');
    const [location, setLocation] = useState(user?.location || '');

    useEffect(() => {
        if (user) {
            setName(user.firstName);
            setBio(user.bio);
            setProfilePic(user.profilePic);
            setLocation(user.location);
        }
    }, [user]);
    const navigate = useNavigate();

    const handleUpdateProfile = async () => {
        await updateUser({ firstName: name, bio, profilePic, location });
    };

    return (
        <div className="flex flex-col lg:flex-row p-8 space-y-6 lg:space-y-0 lg:space-x-8 items-center lg:items-start bg-white shadow-lg rounded-lg">
            {/* Profile Picture and User Info */}
            <div className="lg:w-1/3 flex flex-col items-center text-center mb-6 lg:mb-0">
                <img
                    src={profilePic || 'default-profile-pic.png'}
                    alt="Profile Picture"
                    className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg border-4 border-green-600"
                    style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                />
                <h2 className="text-2xl font-bold text-green-700 uppercase mb-2">{name || 'Your Name'}</h2>
                <p className="text-gray-600 text-lg">{bio || 'Bio not provided'}</p>
                <p className="text-gray-500 text-md mt-1">{location || 'Location not set'}</p>
            </div>

            {/* Profile Update Form */}
            <div className="lg:w-2/3 flex flex-col space-y-6 p-4 bg-gray-100 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Update Your Profile</h3>

                <div className="flex flex-col space-y-4">
                    <div>
                        <label className='text-gray-900 text-lg font-semibold'>Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        />
                    </div>

                    <div>
                        <label className='text-gray-900 text-lg font-semibold'>Bio</label>
                        <textarea
                            placeholder="Bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        />
                    </div>

                    <div>
                        <label className='text-gray-900 text-lg font-semibold'>Address</label>
                        <input
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        />
                    </div>

                    <div>
                        <label className='text-gray-900 text-lg font-semibold'>Profile Picture URL</label>
                        <input
                            type="text"
                            placeholder="Profile Picture URL"
                            value={profilePic}
                            onChange={(e) => setProfilePic(e.target.value)}
                            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                        />
                    </div>

                    <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 mt-4">
                        <button
                            onClick={handleUpdateProfile}
                            className="bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 transition duration-300"
                        >
                            Update Profile
                        </button>

                        {/* Add Item Button */}
                        <button
                            onClick={() => navigate('/add-item')}
                            className="bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Add Item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
