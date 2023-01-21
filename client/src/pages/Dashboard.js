import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import SearchBar from "../components/SearchBar.js/index.js";
import Cart from '../components/Cart';


const Dashboard = () => {
  console.log('we are testing')

  return (
    <div className="container">
    <SearchBar />
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Dashboard;
