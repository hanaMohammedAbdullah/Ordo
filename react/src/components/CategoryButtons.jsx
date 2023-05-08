import React, { useState } from "react";

const categoryClasses = [
    {
        id: 1,
        category_id: 1,
        name: "soap",
        created_at: "2023-05-03 21:43:27",
        updated_at: "2023-05-03 21:43:27",
    },
    {
        id: 2,
        category_id: 2,
        name: "sandwitch",
        created_at: "2023-05-03 21:43:27",
        updated_at: "2023-05-03 21:43:27",
    },
    {
        id: 3,
        category_id: 3,
        name: "fresh drink",
        created_at: "2023-05-03 21:43:27",
        updated_at: "2023-05-03 21:43:27",
    },
    {
        id: 4,
        category_id: 4,
        name: "fruit",
        created_at: "2023-05-03 21:43:27",
        updated_at: "2023-05-03 21:43:27",
    },
    {
        id: 7,
        category_id: 7,
        name: "dishes",
        created_at: "2023-05-03 21:43:27",
        updated_at: "2023-05-03 21:43:27",
    },
];

const CategoryButtons = () => {
    const [activeCategory, setActiveCategory] = useState(
        categoryClasses[0].name
    );

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
                            ? "bg-yellow-500 text-white border-0"
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
