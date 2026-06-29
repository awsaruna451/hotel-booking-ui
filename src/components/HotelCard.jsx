import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
    return (
        <Link to={`/rooms/${room._id}`} onClick={() => scrollTo(0, 0)} key={room._id} className='relative max-w-70 w-fullrounded-x1 overflow-hidden bg-white text-gray-500/90 shadow-[0_2px_10px_rgba(0,0,0,0.1)] '>
            <img src={room.images[0]} alt={room.hotel.name}  />
            {index % 2 === 0 && (
                <p className='absolute top-2 left-2 px-3 py-1 bg-amber-500 text-white text-sm font-bold rounded-full inline-block'>Best Seller </p>
            )}
            <div className='p-4 pt-2 '>
                <div className='flex items-center justify-between'>
                    <p className='font-playfair text-xl font-medium text-gray-800'> {room.hotel.name} </p>
                    <div className='flex items-center gap-1'>
                        <img src={assets.starIconFilled} alt='star' className='h-3' /> 4.5
                    </div>
                </div>
                <div>
                    <img src={assets.locationIcon} alt='location' className='h-3 inline-block mr-1' /> <span>{room.hotel.address}</span>
                </div>
                <div>
                    <p><span className='font-bold'>$</span>{room.pricePerNight.toFixed(2)} <span className='text-gray-500'>/ night</span></p>
                    <button className='mt-2 px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded'>Book Now</button>

                </div>
            </div>
        </Link>
    ); 
};

export default HotelCard;