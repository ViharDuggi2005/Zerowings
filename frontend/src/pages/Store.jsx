import { useNavigate } from "react-router-dom";
import { useState } from "react";
import vtolImage from "../assets/products/vtol3.png";
import dockImage from "../assets/products/dock.png";
import thermalImage from "../assets/products/thermal.png";
import facadeImage from "../assets/products/facade.png";

export default function Store() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const storeProducts = [
    {
      id: 1,
      name: "Moving Platform VTOL",
      price: 0,
      description: "Autonomous Quadplane VTOL for Ship-Based Operations",
      category: "Systems",
      inStock: true,
      image: vtolImage,
    },
    {
      id: 2,
      name: "Zerowings Dock",
      price: 0,
      description: "Autonomous Drone-in-a-Box System",
      category: "Systems",
      inStock: true,
      image: dockImage,
    },
    {
      id: 3,
      name: "Autonomous Thermal Inspection Drone",
      price: 0,
      description: "Advanced Thermal Imaging for Enhanced Surveillance",
      category: "Systems",
      inStock: true,
      image: thermalImage,
    },
    {
      id: 4,
      name: "ZW SolarWash",
      price: 0,
      description: "Autonomous Drone Cleaning System for Solar Panels",
      category: "Systems",
      inStock: true,
      image: thermalImage,
    },
    {
      id: 5,
      name: "Facade Cleaning Drone",
      price: 0,
      description: "Autonomous Drone Cleaning System for Building Facades",
      category: "Systems",
      inStock: true,
      image: facadeImage,
    },
  ];

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="store-container">
      <div className="store-heading">
        <h1>Zerowings Store</h1>
        <p>Premium aerospace systems and solutions</p>
      </div>

      <section className="store-content">
        <div className="store-wrapper">
          <div className="store-sidebar">
            <h3>Categories</h3>
            <ul className="category-list">
              <li>
                <a href="#systems">Systems</a>
              </li>
              <li>
                <a href="#components">Components</a>
              </li>
              <li>
                <a href="#accessories">Accessories</a>
              </li>
            </ul>
          </div>

          <div className="store-products">
            <div className="products-grid">
              {storeProducts.map((product) => (
                <div key={product.id} className="store-product-card">
                  <div className="store-product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                    />
                    {product.inStock ? (
                      <span className="stock-badge in-stock">In Stock</span>
                    ) : (
                      <span className="stock-badge out-of-stock">
                        Out of Stock
                      </span>
                    )}
                  </div>
                  <div className="store-product-info">
                    <h3>{product.name}</h3>
                    <p className="product-category">{product.category}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="store-product-footer">
                      <span className="price">
                        {product.price === 0
                          ? "Contact for Pricing"
                          : `₹${product.price}`}
                      </span>
                      <div className="product-actions">
                        <button
                          className="btn-details"
                          onClick={() => handleViewDetails(product.id)}
                        >
                          View Details
                        </button>
                        <button
                          className="btn-cart"
                          onClick={() => handleAddToCart(product)}
                          disabled={!product.inStock}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="store-info">
        <div className="info-content">
          <h2>Enterprise Solutions</h2>
          <p>
            For custom configurations, bulk orders, or enterprise licensing
            inquiries, please contact our sales team directly.
          </p>
          <button className="contact-sales-btn">Contact Sales</button>
        </div>
      </section>
    </div>
  );
}
