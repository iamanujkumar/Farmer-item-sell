const categories = [
  {
    name: "Vegetables",
    items: [
      { name: "Tomato", count: 114 },
      { name: "Winter Melon – पेठा [ Petha ]", count: 7 },
      { name: "Bitter Gourd- Karela", count: 10 },
      { name: "Bottle Gourd-Laukee", count: 9 },
      { name: "Garlic", count: 30 },
      { name: "Cabbage Pattagobhi", count: 27 },
      // Add more vegetables here...
    ]
  },
  {
    name: "Fruits",
    items: [
      { name: "Apple", count: 55 },
      { name: "Banana", count: 106 },
      { name: "Avocado", count: 14 },
      { name: "Cherry", count: 4 },
      { name: "Grapes", count: 39 },
      // Add more fruits here...
    ]
  },
  {
    name: "Spices",
    items: [
      { name: "Black Pepper", count: 24 },
      { name: "Garlic", count: 3 },
      { name: "Turmeric (Haldi)", count: 33 },
      // Add more spices here...
    ]
  },
  {
    name: "Others",
    items: [
      { name: "Organic Products", count: 222 },
      { name: "Rice", count: 130 },
      { name: "Seeds", count: 91 },
      { name: "Honey", count: 12 },
      // Add more miscellaneous items here...
    ]
  }
];

const CategorySection = () => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="flex overflow-x-auto space-x-4">
        {categories.map((category, index) => (
          <div key={index} className="flex-shrink-0 w-64 bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            <ul className="space-y-1">
              {category.items.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="text-gray-500">{item.count}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
