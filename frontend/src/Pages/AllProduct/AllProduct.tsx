import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllProduct: React.FC =() => {

  interface ItemType{
    _id: string;
    userId: string;
    itemName: string;
    description: string;
    number: string;
    category: string;
    quantity: number;
    city: string;
    state: string;
    price: number;
    imagesUrl: string[];
    rating: number;
    lastUpdated: Date;
};
  const [product,setProduct]=useState<ItemType[]>({});
  const getAllProduct=async()=>{
    try {
      const products=await axios.get<ItemType[]>(`http://localhost:8000/api/searchItems/search/?*`);   
      setProduct(products.data);
      console.log(product);
      console.log(products.data);
    } catch (error) {
      
    }
  }
  const products = [
    { id: 1, name: 'Fresh Tomatoes', price: 3.99, image: 'https://example.com/tomatoes.jpg', rating: 4.5 },
    { id: 2, name: 'Organic Carrots', price: 2.49, image: 'https://example.com/carrots.jpg', rating: 3 },
    { id: 3, name: 'Crisp Apples', price: 1.99, image: 'https://example.com/apples.jpg', rating: 5 },
    { id: 4, name: 'Green Peppers', price: 4.29, image: 'https://example.com/peppers.jpg', rating: 2.5 },
    { id: 5, name: 'Fresh Spinach', price: 3.50, image: 'https://example.com/spinach.jpg', rating: 4 },
    { id: 6, name: 'Juicy Oranges', price: 5.49, image: 'https://example.com/oranges.jpg', rating: 3.5 },
    // Add more products as needed
  ];
  useEffect(()=>{
    getAllProduct();

  },[]); 
  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex justify-center">
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

  return (
    <div className="bg-green-100 min-h-[70vh] p-6 flex justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full h-full overflow-y-auto p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/30 backdrop-blur-lg rounded-lg shadow-lg p-4 hover:bg-white/40 hover:backdrop-blur-xl transition-all flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 md:h-40 lg:h-48 object-cover rounded-md"
            />
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-green-800 text-center">{product.name}</h3>
              <p className="text-green-700 mt-2">${product.price.toFixed(2)}</p>
              <div className="mt-2">{renderStars(product.rating)}</div>
              <button className="mt-4 bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
