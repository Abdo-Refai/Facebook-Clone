import "./MarketPlace.css";
import Sidebar from "../sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../rtk/slices/CartSlice";

function MarketPlace() {
  let cart = useSelector((state) => state.cart);
  let [products, setProducts] = useState([]);
  let [category, setCategory] = useState([]);
  let dispatch = useDispatch();
  let fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  let fetchCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };
  let categoryName = (catName) => {
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  return (
    <Container>
      <Row>
        <Col xs={4} md={2}>
          <Sidebar />
        </Col>
        <Col xs={12} md={7}>
          <div className="container py-5 my-5">
            <div className="heading">
              <h2>MarketPlace</h2>
              <Link to={"/cart"} className="cart">
                <FontAwesomeIcon icon={faCartShopping} /> Cart - {cart.length}
              </Link>
            </div>
            <div className="row">
              {products.map((product) => {
                return (
                  <div className="col-3 card mb-3" key={product.id}>
                    <img
                      src={product.image}
                      className="card-img-top card-img"
                      alt={product.title}
                    />
                    <div className="card-body">
                      <p className="card-title">{product.category}</p>
                      <p className="card-text">${product.price}</p>
                      <p className="card-title">{product.title.slice(0, 15)}</p>
                      <hr />
                      <div className="rate">
                        <span className="font-star">
                          <FontAwesomeIcon icon={faStar} className="star" />
                          {product.rating.rate}
                        </span>
                        <span className="sold">
                          {product.rating.count} Sold
                        </span>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to Cart
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
        <Col xs={4} md={3}>
          <div className="categories">
            <h4>Top Categories</h4>
            <hr />
            <p className="li" onClick={() => fetchProducts()}>
              get All Products
            </p>
            {category.map((cat, index) => {
              return (
                <p className="li" key={index} onClick={() => categoryName(cat)}>
                  {cat}
                </p>
              );
            })}
          </div>
          <div className="filter">
            <p>Price</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MarketPlace;
