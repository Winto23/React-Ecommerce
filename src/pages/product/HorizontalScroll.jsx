import React, { useRef } from "react";
import { Product } from "./Product";
import "../../App.css";

export const HorizontalScroll = ({ products }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="position-relative">
      {/* Scroll Left Button */}
      <button
        className="btn btn-outline-primary position-absolute top-50 start-0 translate-middle-y"
        style={{ zIndex: 1 }}
        onClick={scrollLeft}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {/* Scrollable Container */}
      <div
        className="d-flex overflow-auto scroll-container"
        ref={scrollContainerRef}
        style={{
          gap: "1rem",
          padding: "1rem 0",
          scrollBehavior: "smooth",
          width: "100%",
        }}
      >
        {products.map((product) => (
          <div key={product.id}>
            <Product data={product} />
          </div>
        ))}
      </div>

      {/* Scroll Right Button */}
      <button
        className="btn btn-outline-primary position-absolute top-50 end-0 translate-middle-y"
        style={{ zIndex: 1 }}
        onClick={scrollRight}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};
