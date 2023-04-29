import { useState } from "react";

const Rating = ({ rating, setRating }) => {
    const [hoverRating, setHoverRating] = useState(null);

    const handleMouseEnter = (index) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(null);
    };

    const handleClick = (index) => {
        setRating(index + 1);
        // Handle click event
    };

    const stars = Array.from({ length: 5 }, (_, index) => (
        <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 fill-current ${
                (hoverRating || rating) > index
                    ? "text-yellow-500"
                    : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
        >
            <path d="M10 14.14l-4.14 2.36 1-4.68L2.38 7.62l4.76-.41L10 2l2.86 5.21 4.76.41-3.48 3.2 1 4.68L10 14.14z" />
        </svg>
    ));

    return <div className="flex ">{stars}</div>;
};

export default Rating;
