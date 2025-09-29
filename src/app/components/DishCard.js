import React from 'react';
import { Star, Clock, Users, MapPin } from 'lucide-react';

// DishCard Component
const DishCard = ({ dish }) => {
  return (
    <div className="bg-white rounded-[18px] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={dish.image} 
          alt={dish.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-[#6e2f5c]`}>
            {dish.category}
          </span>
        </div>
        <div className="absolute flex top-3 right-3 bg-white rounded-full px-2 py-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
           <span className={` ml-1 text-xs font-medium text-black `}>   {dish.rating}</span>
       
        </div>
      </div>
      
      <div className="p-4 mt-5">
        <h3 className="text-lg font-[400] text-gray-800 mb-2">{dish.name}</h3>
        
      <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
  {/* Price (left) */}
  <span className="text-2xl font-md text-[#334f3b]">
    ${dish.price}
  </span>

  {/* Timing (right) */}
  <div className="flex items-center">
    <Clock className="w-4 h-4 mr-1" />
    <span>{dish.cookTime}</span>
  </div>
</div>

        
       
<div className="flex justify-center">
  <button
    type="button"
    className="flex items-center justify-center gap-2 
               text-white bg-gradient-to-br from-[#334f3b] to-[#21c24f] hover:bg-gradient-to-bl 
               font-medium rounded-lg text-sm 
            md:px-30  lg:px-25 xl:px-32  px-29 py-3 
               text-center"
  >
    Add to Cart
  </button>
</div>


       
      </div>
    </div>
  );
};
export default DishCard;


