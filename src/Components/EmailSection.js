import React, { useState } from "react";
import { toast } from "react-toastify"; // Correctly import toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS

function EmailSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    if (email && name) {
      setName("");
      setEmail("");
      toast.success(
        "Thank you for subscribing to our email. We will be in touch soon!"
      );
    }
  };
  return (
    <div className="subscribe-form-s">
      {" "}
      {/* Corrected class name */}
      <h2>
        <i class="fa-solid fa-envelope"></i> Keep in touch with us
      </h2>
      <p>
        Sign up to our emails for news, competitions and exclusive discounts.
      </p>
      <form onSubmit={handleSubmit}>
        <div
          className="form-group"
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>
        <div
          className="form-group"
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email addres"
            required
          />
        </div>
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>
      <p className="privacy-policy">
        We won't share your details with anyone. View our{" "}
        <a href="#">Privacy Policy</a>.
      </p>
    </div>
  );
}

export default EmailSection;
