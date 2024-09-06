import axios from 'axios';
import { useEffect, useState } from 'react';
import FilterSection from '../../components/Filter/Filter';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/CartSlice';

const AllProduct = () => {
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({});

  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  const getAllProduct = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/searchItems/search/?*');
      setProduct(response.data.data); // Accessing the nested `data` field
      setFilteredProducts(response.data.data); // Initially, show all products
      console.log(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    getAllProduct();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, product]);

  const applyFilters = () => {
    let updatedProducts = [...product];

    if (filters.selectedCategory) {
      updatedProducts = updatedProducts.filter(
        (item) => item.category === filters.selectedCategory
      );
    }

    if (filters.priceRange) {
      updatedProducts = updatedProducts.filter(
        (item) => item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1]
      );
    }

    if (filters.location) {
      updatedProducts = updatedProducts.filter(
        (item) => item.location === filters.location
      );
    }

    if (filters.sortOption) {
      if (filters.sortOption.includes('Price')) {
        updatedProducts.sort((a, b) => {
          if (filters.sortOption.includes('Low to High')) {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });
      } else if (filters.sortOption.includes('Rating')) {
        updatedProducts.sort((a, b) => {
          if (filters.sortOption.includes('High to Low')) {
            return b.rating - a.rating;
          } else {
            return a.rating - b.rating;
          }
        });
      }
    }

    setFilteredProducts(updatedProducts);
  };

  const renderStars = (rating) => {
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
    <div className="bg-green-100 min-h-screen flex flex-col md:flex-row">
      <FilterSection onFilterChange={setFilters} p={product} sp={setProduct} />
      <div className="flex-1 overflow-y-auto p-4 max-h-screen">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {filteredProducts.map((item, index) => {
            const { _id, imagesUrl, itemName, price, rating } = item;
            return (
              <div key={index} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-56">
                <div className="relative p-2.5 h-44 overflow-hidden rounded-xl bg-clip-border">
                  <img
                    src={imagesUrl[0]}
                    alt={itemName}
                    onClick={() => navigate(`/productinfo/${_id}`)}
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-slate-800 text-xl font-semibold">{itemName}</p>
                    <p className="text-cyan-600 text-xl font-semibold">{price}</p>
                  </div>
                  <p className="block font-sans text-xl antialiased font-normal leading-normal text-gray-700">
                    {renderStars(rating)}
                  </p>
                  {cartItems.some((p) => p._id === item._id) ? (
                    <button
                      onClick={() => deleteCart(item)}
                      className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Delete from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => addCart(item)}
                      className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
