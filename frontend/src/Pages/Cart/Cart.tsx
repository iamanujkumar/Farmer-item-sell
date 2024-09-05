import {useDispatch,useSelector} from 'react-redux'
import { decrementQuantity, deleteFromCart, increamentQuantity } from '../../redux/CartSlice';
import { useEffect } from 'react';

const products = [
    {
        id: 1,
        name: 'Fresh Organic Apples',
        href: '#',
        price: '₹150/kg',
        originalPrice: '₹180/kg',
        discount: '17% Off',
        location: 'Shimla, Himachal Pradesh',
        imageSrc:
            'https://example.com/apple-image.png',
    },
    {
        id: 2,
        name: 'Organic Basmati Rice',
        href: '#',
        price: '₹1200/quintal',
        originalPrice: '₹1300/quintal',
        discount: '8% Off',
        location: 'Karnal, Haryana',
        imageSrc:
            'https://example.com/rice-image.png',
    },
    {
        id: 3,
        name: 'Fresh Red Chilli',
        href: '#',
        price: '₹350/kg',
        originalPrice: '₹400/kg',
        discount: '12% Off',
        location: 'Guntur, Andhra Pradesh',
        imageSrc:
            'https://example.com/chilli-image.png',
    },
];

const Cart = () => {
    // const cartItems=useSelector((state)=>state.cart);
    // const dispatch=useDispatch();

    // const deleteCart=(item)=>{
    //     dispatch(deleteFromCart(item));
    // }

    // const handleIncrement=(id)=>{
    //     dispatch(increamentQuantity(id));
    // }

    // const handleDecrement=(id)=>{
    //     dispatch(decrementQuantity(id));
    // }

    // const cartItemTotal = cartItems.map(item => item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

    // const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cartItems));
    // }, [cartItems])


    return (
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                    <h1 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
                        Your Cart
                    </h1>
                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                        {/* Products Section with Glassy Effect */}
                        <section
                            aria-labelledby="cart-heading"
                            className="rounded-lg bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 shadow-lg lg:col-span-8"
                        >
                            <h2 id="cart-heading" className="sr-only">
                                Items in your cart
                            </h2>
                            <ul role="list" className="divide-y divide-gray-200">
                                {products.map((product) => (
                                    <div key={product.id} className="">
                                        <li className="flex py-6 sm:py-6 ">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.name}
                                                    className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                                                />
                                            </div>
                                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                    <div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-sm">
                                                                <a href={product.href} className="font-semibold text-green-800">
                                                                    {product.name}
                                                                </a>
                                                            </h3>
                                                        </div>
                                                        <div className="mt-1 flex text-sm">
                                                            <p className="text-sm text-gray-500">{product.location}</p>
                                                        </div>
                                                        <div className="mt-1 flex items-end">
                                                            <p className="text-xs font-medium text-gray-500 line-through">
                                                                {product.originalPrice}
                                                            </p>
                                                            <p className="text-sm font-medium text-gray-900">
                                                                &nbsp;&nbsp;{product.price}
                                                            </p>
                                                            &nbsp;&nbsp;
                                                            <p className="text-sm font-medium text-green-500">{product.discount}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <div className="mb-2 flex">
                                            <div className="min-w-24 flex">
                                                <button type="button" className="h-7 w-7 bg-gray-200 rounded-full">
                                                    -
                                                </button>
                                                <input
                                                    type="text"
                                                    className="mx-1 h-7 w-9 rounded-md border text-center"
                                                    defaultValue={1}
                                                />
                                                <button type="button" className="flex h-7 w-7 items-center justify-center bg-gray-200 rounded-full">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </section>
                        {/* Price Details Section with Glassy Effect */}
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 rounded-md bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 shadow-lg lg:col-span-4 lg:mt-0 lg:p-0"
                        >
                            <h2 id="summary-heading" className="border-b border-gray-200 px-4 py-3 text-lg font-medium text-green-800 sm:p-4">
                                Price Details
                            </h2>
                            <div>
                                <dl className="space-y-1 px-2 py-4">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-gray-800">Price (3 items)</dt>
                                        <dd className="text-sm font-medium text-gray-900">₹ 47,200</dd>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <dt className="text-sm text-gray-800">Discount</dt>
                                        <dd className="text-sm font-medium text-green-700">- ₹ 2,500</dd>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <dt className="text-sm text-gray-800">Delivery Charges</dt>
                                        <dd className="text-sm font-medium text-green-700">Free</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                        <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                        <dd className="text-base font-medium text-gray-900">₹ 44,700</dd>
                                    </div>
                                </dl>
                                <div className="px-2 pb-4 font-medium text-green-700">
                                    <div className="flex gap-4 mb-6">
                                        <button className="w-full px-4 py-3 text-center text-gray-100 bg-green-700 hover:bg-green-600 rounded-xl">
                                            Buy now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
    );
}

export default Cart;
