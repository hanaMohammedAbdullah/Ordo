import React, { useState } from 'react';

const categoryClasses = [
  { name: 'Italian', class: '' },
  { name: 'Seafood', class: '' },
  { name: 'Burgers', class: '' },
  { name: 'Kurdish', class: '' },
];

const CategoryButtons = () => {
  const [activeCategory, setActiveCategory] = useState(categoryClasses[0].name);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
  };

  return (
    <div className="flex justify-center space-x-2 sm:space-x-8 my-2">
      {categoryClasses.map(({ name, class: categoryClass }) => (
        <button
          key={name}
          className={`p-2 rounded-sm border text-black border-gray-900 ${
            name === activeCategory
              ? 'bg-yellow-500 text-white border-0'
              : categoryClass
          }`}
          onClick={() => handleCategoryClick(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
