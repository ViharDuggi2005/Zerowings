import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Checkout.css";

export default function Checkout() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [authMode, setAuthMode] = useState("options"); // "options", "google", "manual"
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleGoogleLogin = () => {
    // Mock Google Login - In production, use @react-oauth/google
    setAuthMode("google");
  };

  const handleManualEntry = () => {
    setAuthMode("manual");
  };

  const handleGoogleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email?.value || "";
    if (email) {
      setFormData((prev) => ({
        ...prev,
        email: email,
      }));
      setIsAuthenticated(true);
    }
  };

  const handleManualAuthSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email?.value || "";
    const firstName = e.target.firstName?.value || "";
    const phone = e.target.phone?.value || "";
    if (email && firstName && phone) {
      setFormData((prev) => ({
        ...prev,
        email: email,
        firstName: firstName,
        phone: phone,
      }));
      setIsAuthenticated(true);
    }
  };

  // Authentication Screen
  if (!isAuthenticated) {
    return (
      <div className="checkout-container">
        <div className="checkout-header">
          <h1>Secure Checkout</h1>
          <p>Login to continue with your purchase</p>
        </div>

        <div className="auth-wrapper">
          {authMode === "options" && (
            <div className="auth-options-screen">
              <div className="auth-options-content">
                <h2>Continue Your Purchase</h2>
                <p>Choose how you'd like to proceed</p>

                <div className="auth-buttons-group">
                  <button
                    className="btn-google-login"
                    onClick={handleGoogleLogin}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Continue with Google
                  </button>

                  <div className="auth-divider">
                    <span>or</span>
                  </div>

                  <button
                    className="btn-manual-entry"
                    onClick={handleManualEntry}
                  >
                    Enter Details Manually
                  </button>
                </div>

                <div className="auth-security-note">
                  <p>🔒 Your information is secure and encrypted</p>
                </div>
              </div>
            </div>
          )}

          {authMode === "google" && (
            <div className="auth-form-screen">
              <button
                className="btn-back-to-options"
                onClick={() => setAuthMode("options")}
              >
                ← Back
              </button>
              <form onSubmit={handleGoogleLoginSubmit} className="auth-form">
                <h2>Google Account</h2>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@gmail.com"
                    required
                  />
                </div>
                <p className="auth-form-note">
                  You'll be redirected to Google to complete authentication
                </p>
                <button type="submit" className="btn-auth-submit">
                  Continue with Google
                </button>
              </form>
            </div>
          )}

          {authMode === "manual" && (
            <div className="auth-form-screen">
              <button
                className="btn-back-to-options"
                onClick={() => setAuthMode("options")}
              >
                ← Back
              </button>
              <form onSubmit={handleManualAuthSubmit} className="auth-form">
                <h2>Enter Your Details</h2>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <button type="submit" className="btn-auth-submit">
                  Continue to Checkout
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <p>Add items to your cart before checkout</p>
        <button onClick={() => navigate("/store")}>Go to Store</button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    clearCart();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <div className="success-content">
          <div className="success-icon">✓</div>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for your purchase</p>
          <div className="order-details">
            <p>
              <strong>Order ID:</strong> #ZW
              {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
            <p>
              <strong>Total Amount:</strong> ₹{getTotalPrice().toLocaleString()}
            </p>
            <p>
              A confirmation email has been sent to{" "}
              <strong>{formData.email}</strong>
            </p>
          </div>
          <div className="success-actions">
            <button
              onClick={() => {
                clearCart();
                navigate("/store");
              }}
              className="btn-continue-shopping-success"
            >
              Continue Shopping
            </button>
            <button onClick={() => navigate("/")} className="btn-home">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <p>Complete your purchase</p>
      </div>

      <div className="checkout-content">
        <div className="checkout-form-section">
          <form onSubmit={handleSubmitOrder} className="checkout-form">
            {/* Shipping Information */}
            <div className="form-section">
              <h3>Shipping Information</h3>
              <div className="form-group form-row-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group form-row-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group form-row-3">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Payment Information */}
            <div className="form-section">
              <h3>Payment Information</h3>
              <div className="form-group">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  maxLength="19"
                />
              </div>
              <div className="form-group form-row-2">
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                  maxLength="5"
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  maxLength="4"
                />
              </div>
              <p className="payment-notice">
                🔒 Your payment information is secure and encrypted
              </p>
            </div>

            <button type="submit" className="btn-place-order">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="checkout-summary-section">
          <div className="order-summary">
            <h3>Order Summary</h3>

            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item-row">
                  <div>
                    <p className="item-name">{item.name}</p>
                    <p className="item-qty">Qty: {item.quantity}</p>
                  </div>
                  <div className="item-price">
                    {item.price === 0
                      ? "Contact for Price"
                      : `₹${(item.price * item.quantity).toLocaleString()}`}
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>

            <div className="summary-breakdown">
              <div className="breakdown-row">
                <span>Subtotal:</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="breakdown-row">
                <span>Shipping:</span>
                <span>TBD</span>
              </div>
              <div className="breakdown-row">
                <span>Tax (GST):</span>
                <span>TBD</span>
              </div>
              <div className="breakdown-divider"></div>
              <div className="breakdown-total">
                <span>Total:</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
