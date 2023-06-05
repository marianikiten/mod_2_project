import React, {useEffect} from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(()=>{
    setProducts(data.data);
  }, [data])
  return (
    <div>
      <Banner /> 
      <Products products={products}/>
      </div>
  );
};

export default Home