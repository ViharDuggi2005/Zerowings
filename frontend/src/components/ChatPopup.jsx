import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./ChatPopup.css";

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hello! 👋 How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!userInfo.name.trim()) {
      errors.name = "Name is required";
    }
    if (!userInfo.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(userInfo.phone.replace(/\D/g, ""))) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }
    return errors;
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsAuthenticated(true);
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage = inputValue;
    const newMessage = {
      id: messages.length + 1,
      type: "user",
      text: userMessage,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
    setIsSending(true);

    try {
      // Send message to backend API
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      console.log(data.reply);

      // Bot response from API
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        text: data.reply || "Thank you for your message!",
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Chat error:", error);

      // Bot response for error
      const errorResponse = {
        id: messages.length + 2,
        type: "bot",
        text: "Something went wrong. Please try again later.",
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-popup-container">
      {/* Chat Window */}
      {isOpen && !isAuthenticated && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-title">
              <h3>Chat with AI Agent</h3>
              <p>Let's get to know you first</p>
            </div>
            <button
              className="chat-close"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chat-auth-form">
            <form onSubmit={handleAuthSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
                {formErrors.phone && (
                  <span className="error-message">{formErrors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email (Optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
              </div>

              <button type="submit" className="btn-start-chat">
                Start Chat
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && isAuthenticated && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-title">
              <h3>Chat with AI Agent</h3>
              <p>We're here to help</p>
            </div>
            <button
              className="chat-close"
              onClick={() => {
                toggleChat();
                setIsAuthenticated(false);
              }}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message message-${msg.type}`}>
                <div className="message-content">
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isSending}
            />
            <button
              className="chat-send-btn"
              onClick={handleSendMessage}
              aria-label="Send message"
              disabled={isSending}
            >
              {isSending ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="loading-spinner"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        className={`chat-float-btn ${isOpen ? "hidden" : ""}`}
        onClick={toggleChat}
        aria-label="Open chat"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  );
}
