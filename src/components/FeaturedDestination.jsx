import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = ({ destination }) => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 py-8">
            <Title title='Featured Destinations' subTitle='Explore our most popular destinations' align='center' />
            <div className="flex flex-wrap items-center justify-between mb-6">

                {roomsDummyData.slice(0, 4).map((room, index) => (
                    <HotelCard key={room._id} room={room} index={index} />
                ))}

            </div>
            <div className="flex justify-center">
                <button
                    onClick={() => {
                        navigate('/rooms');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="my-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    View All Destination
                </button>
            </div>
        </div>
    );
};

export default FeaturedDestination;