import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const id  = '1';

  useEffect(() => {
    // Dummy data to simulate the product details
    const dummyData = {
      id: '1',
      itemName: 'Fresh Organic Tomatoes',
      price: 50,
      rating: 4.5,
      description: 'Fresh and juicy organic tomatoes, perfect for salads and cooking.',
      imagesUrl: ['https://via.placeholder.com/400'],
      location: {
        city: 'Mumbai',
        state: 'Maharashtra',
      },
    };

    // Simulate fetching data by using the id from the URL
    if (id === dummyData.id) {
      setProduct(dummyData);
      setLoading(false);
    } else {
      setError('Product not found.');
      setLoading(false);
    }
  }, [id]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-yellow-500">&#9733;</span>
          ))}
        {halfStar && <span className="text-yellow-500">&#9733;</span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-gray-300">&#9733;</span>
          ))}
      </div>
    );
  };

  if (loading) {
    return <div className="text-center text-green-700">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    product && (
      <div className="bg-green-100 h-screen flex justify-center items-center p-4">
        <div className="bg-white/30 backdrop-blur-lg rounded-lg shadow-lg w-full h-full md:w-5/6 md:h-5/6 lg:w-4/5 lg:h-4/5 max-w-7xl max-h-4xl p-6 flex flex-col md:flex-row">
          {/* Big Image */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full mb-4 md:mb-0 md:mr-4">
            <img
              src={product.imagesUrl[0]}
              alt={product.itemName}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">{product.itemName}</h1>
              <p className="text-xl text-green-700 mb-2">₹{product.price}/kg</p>
              <div className="mb-4">{renderStars(product.rating)}</div>
              <p className="text-gray-700 mb-4">{product.description}</p>
            </div>

            {/* Location */}
            <div className="mb-4">
              <h3 className="font-medium text-gray-800">Location:</h3>
              <p className="text-gray-600">{product.location.city}, {product.location.state}</p>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition-all">
                Add to Cart
              </button>
              <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-900 transition-all">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductInfo;
