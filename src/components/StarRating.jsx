import React from "react";
import { assets } from "../assets/assets";

const StarRating = ({ rating=4 }) => {
    return (
        <div className="flex items-center gap-1">
            {Array(5).fill(0).map((_, index) => (
                
                <img
                    src={assets.starIconFilled}
                    alt="star"
                    className={`h-4 ${rating > index ? "text-yellow-500" : "text-gray-300"}`}
                />
            ))}
        </div>
    );
};

export default StarRating;