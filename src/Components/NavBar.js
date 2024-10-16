import React, { useState, useEffect } from "react";
import "../assets/navbar/navbar.css";
import logo from "../assets/images/navbar/Integrityflowers Transparent cropped .ad071a6edeebd795f001.png";
import Flower from "../assets/images/navbar/1716546254_7.jpg";
import Flower2 from "../assets/images/navbar/1716546275_6.jpg";
import Flower3 from "../assets/images/navbar/1716546293_5.jpg";
import Flower4 from "../assets/images/navbar/1716546310_2.jpg";
import UniqueTreats from "../assets/images/navbar/1716548795_Happy Birthday Hamper .jpg";
import UniqueTreats2 from "../assets/images/navbar/1716548833_Cadbury Variety.jpg";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar({ name, date, price }) {
  const links = [
    "Summer Bloms",
    "Flowers",
    "Plants",
    "Hampers",
    "Unique Treats",
  ];
  const images = [
    {
      title: "Flowers",
      items: [
        { src: Flower, alt: "Sparkle Bouquet", name: "Sparkle Bouquet" },
        { src: Flower2, alt: "A Ray of Sunshine", name: "A Ray of Sunshine" },
        { src: Flower3, alt: "Mellow Yellow", name: "Mellow Yellow" },
        { src: Flower4, alt: "Carpe Diem", name: "Carpe Diem" },
      ],
    },
    {
      title: "Unique Treats",
      items: [
        {
          src: UniqueTreats,
          alt: "Happy Birthday Hamper",
          name: "Happy Birthday Hamper",
        },
        { src: UniqueTreats2, alt: "Cadbury Variety", name: "Cadbury Variety" },
      ],
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  const [popup, setPopup] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMouseEnter = (link) => {
    if (link === "Flowers" || link === "Unique Treats") {
      setPopup(link);
    }
  };

  const handleMouseLeave = () => {
    setPopup(null);
  };

  const handleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [code, setCode] = useState("");

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleApply = () => {
    // Handle applying the promo code
    console.log("Applying code:", code);
  };

  const [deliveryDate, setDeliveryDate] = useState(
    "Wednesday 11th September 2024"
  );

  const handleEditDate = () => {
    // Implement logic to edit delivery date, e.g., open a date picker
    console.log("Edit delivery date clicked");
  };

  const handleRemoveOrder = () => {
    setOrder(null);
    setDeliveryDate(null);
    localStorage.removeItem("order");
    localStorage.removeItem("deliveryDate");
    console.log("Remove order clicked");
  };

  const [order, setOrder] = useState({
    name: "Mellow Yellow Bouquet",
    originalPrice: 99.99,
    discountedPrice: 49.99,
    // Add other fields here
  });

  useEffect(() => {
    const savedOrder = localStorage.getItem("order");
    const savedDeliveryDate = localStorage.getItem("deliveryDate");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
    if (savedDeliveryDate) {
      setDeliveryDate(savedDeliveryDate);
    }
  }, []);

  useEffect(() => {
    if (order) {
      localStorage.setItem("order", JSON.stringify(order));
    } else {
      localStorage.removeItem("order");
    }
    if (deliveryDate) {
      localStorage.setItem("deliveryDate", deliveryDate);
    } else {
      localStorage.removeItem("deliveryDate");
    }
  }, [order, deliveryDate]);

  useEffect(() => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      name: name || "Mellow Yellow Bouquet",
      originalPrice: Number(price) || 99.99,
      discountedPrice: price ? Number(price) * 0.5 : 49.99,
      // Update other fields here
    }));
    setDeliveryDate(date || "Wednesday 11th September 2024");
  }, [name, date, price]);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left-container">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-right-container">
          <div className="upper-part">
            <div className="navbar-sign-in-register">
              <p onClick={() => navigate("/sign-up")}>Sign In / Register |</p>
            </div>
            <div className="navbar-cart-icons">
              <i className="fa-solid fa-phone"></i>{" "}
              <p onClick={() => navigate("/number")}>+1234567890 |</p>
            </div>
            <div className="navbar-cart-icons">
              <i className="fa-solid fa-basket-shopping"></i>{" "}
              <p onClick={handleSideBar}>Basket ({order ? 1 : 0})</p>
            </div>
          </div>
          <div className="lower-part">
            <div className="navbar-words">
              <p>Earliest available delivery</p>
              <span>
                {new Date().toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-links">
        <table>
          <tr>
            {links.map((link, index) => (
              <td key={index}>
                <button
                  onMouseEnter={() => handleMouseEnter(link)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link}
                </button>
              </td>
            ))}
          </tr>
        </table>
      </div>
      {popup && (
        <div className="popup-container">
          <div
            className="popup"
            onMouseEnter={() => setPopup(popup)}
            onMouseLeave={handleMouseLeave}
          >
            {images
              .filter((image) => image.title === popup)
              .map((image) => (
                <div className="popup-items-container" key={image.title}>
                  {image.items.map((item, index) => (
                    <div key={index} className="popup-item">
                      <img src={item.src} alt={item.alt} />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              ))}
            <div className="popup-button">
              <button>View our full range of flowers</button>
            </div>
          </div>
        </div>
      )}
      {isSidebarOpen && (
        <div className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
          <div className="basket-header">
            <h1>Basket</h1>
            <span className="close-button" onClick={handleSideBar}>
              <i className="fa-solid fa-x"></i>
            </span>
          </div>
          <div className="promo-code">
            <label htmlFor="promo-code">Promo/voucher code</label>
            <div className="promo-code-input">
              <input
                type="text"
                id="promo-code"
                value={code}
                onChange={handleCodeChange}
                placeholder="Enter your code"
              />
              <button onClick={handleApply} className="apply-button">
                Apply
              </button>
            </div>
            {order && (
              <div className="order-summary">
                <div className="order-details">
                  <h2>{order.name}</h2>
                </div>
                <div className="total">
                  Total: £{order.originalPrice.toFixed(2)} £
                  {order.discountedPrice.toFixed(2)}
                </div>
                <div className="delivery-date">
                  <div className="delivery-date-text">
                    <p>Delivery date</p>
                    <span>{deliveryDate}</span>
                  </div>
                  <div className="edit-icon" onClick={handleEditDate}>
                    &#9997;
                  </div>
                </div>
                <div className="basket-buttons">
                  <button className="remove-order" onClick={handleRemoveOrder}>
                    Remove order
                  </button>
                  <button
                    className="checkout-button"
                    onClick={() => navigate("/checkout")}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
            <div className="sidebar-content">
              <div className="sidebar-item"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
