import React, { useContext } from "react";
import { CartContext } from "../../context/Cartcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, favoriteIds, toggleFavorite } =
    useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteId = favoriteIds.find((fid) => fid === id);

  return (
    <div
      className="product-each card text-center mx-5 my-3"
      style={{ width: "18rem" }}
    >
      <img src={productImage} className="card-img-top" alt={productName} />
      <div className="card-body">
        <h5 className="card-title text-secondary">
          {" "}
          <Link
            to={`/product/${id}`}
            className="btn btn-link  text-decoration-none text-dark"
          >
            {productName}
          </Link>
        </h5>
        <p className="card-text text-primary-emphasis">${price}</p>
        <button
          className="btn btn-primary position-relative"
          onClick={() => addToCart(id)}
        >
          Add To Cart{" "}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItem?.count}
          </span>
          <i className="ms-1 fa-solid fa-cart-shopping"></i>
        </button>
        <button
          type="button"
          className={
            "btn btn-primary position-relative ms-2 " +
            (favoriteId && "text-danger")
          }
          onClick={() => toggleFavorite(id)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
};
