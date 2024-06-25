import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Loginshow() {
  const [items, setItems] = useState([]);
  let jk = useNavigate();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("userdata"));
    if (items) {
      setItems(items);
    }
  }, []);

  const ans = () => {
    ("/Show");
  };

  return (
    <div className="alldata">
      <div>
        <img src={items.image} height="20" width="170" />
        <p>Id : - {items.id}</p>
        <p>frist Name : {items.firstName}</p>
        <p>Last Name : {items.lastName}</p>
        <p>Gender : {items.gender}</p>
      </div>
      <button className="btn btn-info" onClick={ans}>
        products
      </button>
    </div>
  );
}

export default Loginshow;
