import React from "react";
import { PRODUCTS } from "../../products";
import { HorizontalScroll } from "./HorizontalScroll";


export const Products = () => {
  return (
    <>
      <div className="products" style={{ margin: "10px" }}>
        <div className="products-title">
          <h1 className="p-2 text-primary-emphasis">Products</h1>
        </div>

        <HorizontalScroll products={PRODUCTS} />
      </div>
    </>
  );
};
