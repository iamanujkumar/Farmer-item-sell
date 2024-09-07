import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductInfo from '../../Pages/ProductInfo/ProductInfo';
import bg from '../../assets/bg.png'

interface Product {
  _id: number;
  title: string;
  price: string;
  description: string;
  imagesUrl: string[]; // Adjusted to match the API response
  rating: number;
}

const RecommendationProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/searchItems/search/?*');
        console.log(response.data.data);
        const shuffledProducts = response.data.data.sort(() => 0.5 - Math.random());
        const selectedProducts = shuffledProducts.slice(0, 12);
        setProducts(selectedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21 16.54 14.56 22 10.27 15.81 9.63 12 3 8.19 9.63 2 10.27 7.46 14.56 5.82 21 12 17.27z"/>
          </svg>
        ))}
        {halfStar && (
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21 16.54 14.56 22 10.27 15.81 9.63 12 3 8.19 9.63 2 10.27 7.46 14.56 5.82 21 12 17.27z"/>
          </svg>
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <svg key={index} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21 16.54 14.56 22 10.27 15.81 9.63 12 3 8.19 9.63 2 10.27 7.46 14.56 5.82 21 12 17.27z"/>
          </svg>
        ))}
      </div>
    );
  };

  const showMoreProducts = () => {
    setVisibleCount(visibleCount + 4); // Increase the number of visible products by 4
  };

  return (
    <div
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    position: 'relative',
  }}
>
  <div className="flex flex-col items-center"> {/* Flexbox to center content */}
    <h2 className="text-2xl mt-8 font-bold text-slate-800 mb-6 text-center">
      Recommended Products
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"> {/* Center grid and set max width */}
      {products.slice(0, visibleCount).map((product) => (
        <div
          key={product._id}
          className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-66"
        >
          <div
            className="relative p-2.5 overflow-hidden rounded-xl bg-clip-border"
            style={{ height: '200px', width: '350px' }}
          >
            <img
              src={product.imagesUrl[0]}
              alt={product.title}
              onClick={() => navigate(`/productinfo/${product._id}`)}
              className="object-contain w-3/4 h-full rounded-md"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-slate-800 text-xl font-semibold">{product.title}</p>
              <p className="text-cyan-600 text-xl font-semibold">Rs - {product.price}</p>
            </div>
            <div className="block font-sans text-xl antialiased font-normal leading-normal text-gray-700">
              {renderStars(product.rating)}
            </div>
            <button
              className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={() => navigate(`/productinfo/${product._id}`)}
            >
              View More
            </button>
          </div>
        </div>
      ))}
    </div>
    {visibleCount < products.length && (
      <div className="flex justify-center mt-6">
        <button
          onClick={showMoreProducts}
          className="bg-cyan-600 text-white px-4 py-2 rounded-md transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 active:bg-cyan-700"
        >
          Show More
        </button>
      </div>
    )}
  </div>
</div>

  );
};

export default RecommendationProducts;
