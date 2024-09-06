

const BusinessComponent = () => {
  return (
    <div className="w-full bg-green-600 p-8">
      {/* Heading */}
      <h1 className="text-white text-center text-2xl md:text-4xl font-bold">
        HELPS KEEP YOUR BUSINESS
      </h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        
        <div className="relative group">
          <img
            src="https://miro.medium.com/v2/resize:fit:800/1*phoaj6ozVUnXZ7le5Vfv6w.jpeg"
            alt="Lighting"
            className="w-full h-40 md:h-52 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
            <p className="text-white text-center font-semibold">Lighting</p>
          </div>
        </div>

        {/* Environment */}
        <div className="relative group">
          <img
            src="https://www.bio.org/sites/default/files/styles/bio_media_side_card_auto/public/2019-11/member-benefits-ag-foodandfarm.png?itok=6i-46WTY"
            alt="Environment"
            className="w-full h-40 md:h-52 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
            <p className="text-white text-center font-semibold">Environment</p>
          </div>
        </div>

        {/* Growing Medium */}
        <div className="relative group">
          <img
            src="https://sikrifarms.com/pub/media/wysiwyg/fertilizer-for-growers.png"
            alt="Growing Medium"
            className="w-full h-40 md:h-52 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
            <p className="text-white text-center font-semibold">Growing Medium</p>
          </div>
        </div>

        {/* Nutrients, Additives and Supplement */}
        <div className="relative group">
          <img
            src="https://cdn.wikifarmer.com/wp-content/uploads/2023/05/sustainable-nutrient-management.jpg"
            alt="Nutrients"
            className="w-full h-40 md:h-52 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
            <p className="text-white text-center font-semibold">
              Nutrients, Additives and Supplement
            </p>
          </div>
        </div>

        {/* Pest and Disease Control */}
        <div className="relative group">
          <img
            src="https://img.jagranjosh.com/imported/images/E/GK/modern-agriculture-impact-on-environment-gk.webp"
            alt="Pest Control"
            className="w-full h-40 md:h-52 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
            <p className="text-white text-center font-semibold">
              Pest and Disease Control
            </p>
          </div>
        </div>

        {/* Pots, Containers, Tables and Trays */}
        <div className="relative group">
          <img
            src="https://media.istockphoto.com/id/1212173913/photo/seedlings-in-plastic-plant-pots-and-recycled-plastic-food-containers.jpg?s=612x612&w=0&k=20&c=oZd3dE9sz0VDCXUi4zJud_fxotCUjFtWM-OFdMm4_l4="
            alt="Pots Containers"
            className="w-full h-40 md:h-52 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
            <p className="text-white text-center font-semibold">
              Pots, Containers, Tables and Trays
            </p>
          </div>
        </div>

        {/* Watering and Irrigation */}
        <div className="relative group">
          <img
            src="https://www.aquatreat.in/images/Agricultural-water-Conditioners.jpg"
            alt="Watering and Irrigation"
            className="w-full h-40 md:h-52 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
            <p className="text-white text-center font-semibold">
              Watering and Irrigation
            </p>
          </div>
        </div>

        {/* Garden Tools and Accessories */}
        <div className="relative group">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1_PbBSqeWA1Ukf6QK31dZVVrpcHKkxNI7yx0z2rY_wMQLw7HK_xdxDAEtHCq4b0vmaA&usqp=CAU"
            alt="Garden Tools"
            className="w-full h-40 md:h-52 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
            <p className="text-white text-center font-semibold">
              Garden Tools and Accessories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessComponent;