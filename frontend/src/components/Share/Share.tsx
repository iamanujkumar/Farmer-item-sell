import React from 'react';

const ShareButton = ({ title, text, url }) => {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title || 'Check out this item!',
                    text: text || 'I found this interesting item on our e-commerce platform.',
                    url: url || window.location.href,  // Use the current URL if not provided
                });
                console.log('Content shared successfully!');
            } catch (error) {
                console.error('Error sharing content:', error);
            }
        } else {
            alert('Web Share API is not supported in your browser.');
        }
    };

    return (
        <button
            onClick={handleShare}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors duration-200"
        >
            Share
        </button>
    );
};

export default ShareButton;
