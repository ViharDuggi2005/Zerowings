import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } =
    useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>{cartItems.length} items in your cart</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-content">
            <h2>Your cart is empty</h2>
            <p>Start shopping to add items to your cart</p>
            <button
              className="btn-continue-shopping"
              onClick={() => navigate("/store")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-section">
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="item-category">{item.category}</p>
                    <p className="item-price">
                      {item.price === 0
                        ? "Contact for Pricing"
                        : `₹${item.price.toLocaleString()}`}
                    </p>
                  </div>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="qty-btn"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                      className="qty-input"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">
                    <span>
                      {item.price === 0
                        ? "Contact for Pricing"
                        : `₹${(item.price * item.quantity).toLocaleString()}`}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn-remove"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <button
              className="btn-continue-shopping-bottom"
              onClick={() => navigate("/store")}
            >
              ← Continue Shopping
            </button>
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>

              <div className="summary-item">
                <span>Subtotal:</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="summary-item">
                <span>Shipping:</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="summary-item">
                <span>Tax:</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Total:</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>

              <button
                className="btn-checkout"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>

              <div className="security-badge">
                <p>🔒 Secure checkout powered by Zerowings</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
