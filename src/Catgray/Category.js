import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = (props) => {
  const [categories, setCategories] = useState([]);
console.log(props +"propspropspropsprops")
  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
    };
    getCategory();
  }, []);
  return (
    <React.Fragment>
    <div className="category__wrapper">
    <h1 style={{ textAlign: "center" }}>All Categories</h1>
    <div className="category__wrapper">
    <div className="dropdown">
    {categories.map((item) => (
      <div key={item}>
      <button
      className="btn btn-outline-info"
      onClick={() => props.onChange(item)}
      >
      {item}
      </button>
      </div>
    ))}
    </div>
    </div>
    </div>
    </React.Fragment>
  );
};

export default Category;
