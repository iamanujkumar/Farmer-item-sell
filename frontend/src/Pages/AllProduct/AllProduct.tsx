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

  const navigate=useNavigate();

  const cartItems=useSelector((state)=>state.cart);
  const dispatch=useDispatch();

  const addCart = (item) => {
    // console.log(item)
    dispatch(addToCart(item));
  }

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  }

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
    <div className="bg-green-100 min-h-screen p-6 flex flex-col md:flex-row">
      <FilterSection onFilterChange={setFilters} p={product} sp={setProduct} />
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full h-full overflow-y-auto p-4">
        {filteredProducts.map((item, index) => {
          const { _id, imagesUrl, itemName, price, rating } = item;
          return (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-lg rounded-lg shadow-lg p-4 hover:bg-white/40 hover:backdrop-blur-xl transition-all flex flex-col justify-between"
            >
              <img
                src={imagesUrl[0]}
                alt={itemName}
                onClick={()=>navigate(`/productinfo/${_id}`)}
                className="w-full h-32 md:h-40 lg:h-48 object-cover rounded-md"
              />
              <div className="mt-4 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-green-800 text-center">{itemName}</h3>
                <p className="text-green-700 mt-2">₹{price}/kg</p>
                <div className="mt-2">{renderStars(rating)}</div>
                {cartItems.some((p)=> p._id === item._id)?
                <button onClick={() => deleteCart(item)}
                className="mt-4 bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition-all">
                  Delete from Cart
                </button>:<button onClick={() => addCart(item)}
                className="mt-4 bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition-all">
                  Add to Cart
                </button>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProduct;
