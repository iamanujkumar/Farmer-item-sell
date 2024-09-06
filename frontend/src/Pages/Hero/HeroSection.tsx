import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bg from '../../assets/bg.png'

const HeroSection = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    dots: true,
    arrows: false,
    appendDots: dots => (
      <div style={{ bottom: "10px" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#22c55e", // Custom green color for dots
          margin: "5px"
        }}
      ></div>
    )
  };

  return (
    <section 
      className="relative w-full h-screen bg-[#F4FFF3] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        position: 'relative'
      }}
    >
      {/* Overlay for reduced opacity */}
      <div className="absolute inset-0 bg-white opacity-10 z-0"></div>
      
      {/* Full-Width Carousel */}
      <Slider {...sliderSettings} className="w-full h-full relative flex items-center z-10">
        {/* Slide 1 */}
        <div className="w-full h-full flex justify-between items-center px-6 md:px-6 lg:px-6 py-10 relative">
          {/* Main Content Centered Vertically */}
          <div className="flex flex-col justify-center items-start max-w-xl z-10 relative mt-20 md:mt-40">
            <div className="mb-36">
             <h1 className='text-3xl md:text-5xl font-extrabold text-gray-800'> Vegetables and Fruits <br /> Good For Health</h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
             {/* Action Buttons */}
             <div className="mt-8 flex space-x-4">
              <button className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none">
                What We Do +
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-green-500 text-green-500 rounded-full hover:bg-green-600 hover:text-white focus:outline-none">
                Visit Our Firm +
              </button>
            </div>
          </div>
          </div>

          {/* Floating Image */}
          <div className="absolute top-0.5 mt-32 mr-36 right-10 flex justify-end items-center">
            <img
              src="https://templates.envytheme.com/trifles/default/assets/img/home-three/1.png"
              alt="Vegetable Illustration"
              className=" max-w-lg h-auto object-contain transform scale-150 " // Increased scaling to 150%
            />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="w-full h-full flex justify-between items-center px-6 md:px-6 lg:px-6 py-10 relative">
          {/* Main Content Centered Vertically */}
          <div className="flex flex-col justify-center items-start max-w-xl z-10 relative mt-20 md:mt-40">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6">
              Fresh and Organic <br /> Every Day
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Discover the best selection of fresh and organic products directly from the farm to your table.
            </p>
            {/* Action Buttons */}
            <div className="mt-8 flex space-x-4">
              <button className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none">
                Explore Now +
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-green-500 text-green-500 rounded-full hover:bg-green-600 hover:text-white focus:outline-none">
                Our Products +
              </button>
            </div>
          </div>

          {/* Floating Image */}
          <div className="absolute top-0.5 mt-36 mr-12 right-10 flex justify-end items-center">
            <img
              src="https://templates.envytheme.com/trifles/default/assets/img/home-three/2.png"
              alt="Fruit Illustration"
              className="max-w-lg h-auto object-contain transform scale-150" // Increased scaling to 150%
            />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="w-full h-full flex justify-between items-center px-6 md:px-6 lg:px-6 py-10 relative">
          {/* Main Content Centered Vertically */}
          <div className="flex flex-col justify-center items-start max-w-xl z-10 relative mt-20 md:mt-40">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6">
              Sustainable Farming <br /> Practices
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Our commitment to sustainable farming ensures quality and freshness in every product.
            </p>
            {/* Action Buttons */}
            <div className="mt-8 flex space-x-4">
              <button className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none">
                Learn More +
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-green-500 text-green-500 rounded-full hover:bg-green-600 hover:text-white focus:outline-none">
                Get Involved +
              </button>
            </div>
          </div>

          {/* Floating Image */}
          <div className="absolute top-0.5 mt-52 mr-36 right-10 flex justify-end items-center">
            <img
              src="https://templates.envytheme.com/trifles/default/assets/img/home-three/3.png"
              alt="Farming Illustration"
              className="max-w-lg h-auto object-contain transform scale-150" // Increased scaling to 150%
            />
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;
