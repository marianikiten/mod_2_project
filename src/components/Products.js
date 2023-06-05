import React from 'react'
import ProductCard from './ProductCard';
import item_id from "react";

const Products = ({products}) => {
  return (
    <div className="py-10">
        
    <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
            island shopping
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center"> 
            haha, welcome to a chinese version of balinese art.
            since api fetching needs to be here by project requirements, 
            you'll see these ... here...for now
        </p>
    </div>
    <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
        <ProductCard key={item_id} product={item}/>
        ))}
    </div>
        </div>
  );
};

export default Products;