import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import { useNavigate } from "react-router";
import axios from "axios";
import Category from "../Catgray/Category";
import { useParams } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
const Show = () => {
  let navigate = useNavigate();
  const [user, setuser] = useState([]);
  // const [search, setSearch] = useState('')
  const [data, setData] = useState("");
  const [categories, setCategories] = useState("");
  ///pagination/////
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * 4;
  const firsIindex = lastIndex - 4;
  const records = user.slice(firsIindex, lastIndex);
  const npage = Math.ceil(user.length / 4);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const { category } = useParams();

  //////////
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    // const data =  res.json();
    setuser(res.products);
    setData(res.products);
    console.log(res);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  /////////////////
  const view = (id) => {
    navigate(`/view/${id}`);
    console.log(id);
  };
  ////////////delete//////////////
  const delet = (id) => {
    axios
      .delete(`https://dummyjson.com/carts/${id}`)
      .then((res) => {
        console.log(res, "res");
      }, [])
      .catch((error) => console.log(`Error delete : ${error}`));
  };
  const Update = (id) => {
    navigate(`/Update/${id}`);
  };
  const Add = () => {
    navigate("/Add");
  };
  ///////////////////////// search//////////////////////////
  const searchData = ({ target }) => {
    var value = target.value;
    const filterData = data.filter((item) => {
      return (
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.price.toString().includes(value.toLowerCase()) ||
        item.brand.toString().includes(value.toLowerCase())
      );
    });
    setuser(filterData);
  };
  /////////////////////////////category/////////////////////////
  const filterData = (val) => {
    let result = data.filter((item) => {
      console.log(item.category == val);
      return item.category == val;
    });
    setuser(result);
    console.log(result, "result");
  };
  return (
    <React.Fragment>
      <br />
      <br />
      <button className="Add" onClick={Add}>
        Add
        <AiFillEdit />
      </button>
      <br />
      <br />
      <div>
        <input
          type="text"
          className="Search"
          placeholder="Search"
          aria-label="Recipient's username"
          onChange={searchData}
        />
      </div>
      <br />
      <br />
      <div className="productsWrapper">
        {records.map((product) => {
          return (
            <div className="card" key={product.id}>
              <img src={product.images[0]} alt="no image" />
              <p> title:- {product.description}</p>
              <p> id- {product.id}</p>
              <p> title:- {product.title}</p>
              <p>price:- {product.price}</p>
              <p>rating:- {product.rating}</p>
              <p>stock: {product.stock}</p>
              <p>brand: {product.brand}</p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (window.confirm("are you sure to delete your account ")) {
                    delet(product.id);
                  }
                }}
              >
                Delete
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                className="btn"
                onClick={() => {
                  Update(product.id);
                }}
              >
                Update
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="btn"
                onClick={() => {
                  view(product.id);
                }}
              >
                view
              </button>
            </div>
          );
        })}
        <nav className="line">
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="btn" onClick={prePage}>
                prev
              </a>
            </li>
            {numbers.map((n) => (
              <li>
                <a
                  href="#"
                  className="page-item"
                  onClick={() => changeCPage(n)}
                >
                  <button className="btn">{n}</button>
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="btn" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
  function prePage(e) {
    if (currentPage !== firsIindex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default Show;
