import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/view/view.css";
import img1 from "../assets/images/navbar/1717530807_Sparkle.jpg";
import img2 from "../assets/images/navbar/1717531008_A ray of sunshine.jpg";
import img3 from "../assets/images/navbar/1717531195_Mellow Yellow.jpg";
import img4 from "../assets/images/navbar/1717531484_Carpe Diem.jpg";

import img5 from "../assets/images/navbar/1716549790_Afternoon Tea Lover.jpg";
import img6 from "../assets/images/navbar/1716725704_Beer & Cheese.jpg";
import img7 from "../assets/images/navbar/1716725855_Coffee Break Hamper.jpeg";
import img8 from "../assets/images/navbar/1716726010_Chocolate Tower.jpg";
import img9 from "../assets/images/navbar/1716726010_Chocolate Tower (1).jpg";
import img10 from "../assets/images/navbar/1716726166_Happy Birthday Gift Box with Fizz .jpg";
import img11 from "../assets/images/navbar/1716726320_Happy Birthday Gift Box with Red Wine .jpg";
import img12 from "../assets/images/navbar/1716726502_Fizz.jpg";

import img13 from "../assets/images/plants/1716720328_Pink RP (1).jpg";
import img14 from "../assets/images/plants/1716720549_Mini Red Rose.jpg";
import img15 from "../assets/images/plants/1716720913_Aloe Vera.jpg";
import img16 from "../assets/images/plants/1716721072_Rubber Plant IF.jpg";
import img17 from "../assets/images/plants/1716721313_Trio of Succulents.jpg";

import img19 from "../assets/images/treats/1716549158_Happy Birthday Hamper .jpg";
import img20 from "../assets/images/treats/1716549398_Thank you gift for her.jpg";
import img21 from "../assets/images/treats/1716549582_Retro Sweets.jpg";
import img22 from "../assets/images/treats/1716717381_Ultimate Pick & Mix Letterbox Gift Hamper .jpg";
import img23 from "../assets/images/treats/1716717586_Candy Chocolate Letterbox Gift Hamper.jpg";
import img24 from "../assets/images/treats/1716717749_Vegan Sweets Letterbox Gift Hamper.jpg";
import img25 from "../assets/images/treats/1716718045_Variety Chocolate Bouquet.jpg";
import img26 from "../assets/images/treats/1716719383_Malteser & Galaxy Chocolate Bouquet .jpg";
import img27 from "../assets/images/treats/1716719647_Ferrero & Lindt.jpg";

function View() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Flowers",
      items: [
        { src: img1, alt: "Sparkle Bouquet", price: "£89.99 £44.99" },
        { src: img2, alt: "A Ray of Sunshine", price: "£99.99 £49.99" },
        { src: img3, alt: "Mellow Yellow", price: "£99.99 £49.99" },
        { src: img4, alt: "Carpe Diem", price: "£89.99 £44.99" },
      ],
    },
    {
      title: "Plants",
      items: [
        { src: img13, alt: "Afternoon Tea Lover", price: "£89.99 £44.99" },
        { src: img14, alt: "Beer & Cheese", price: "£99.99 £49.99" },
        { src: img15, alt: "Coffee Break Hamper", price: "£99.99 £49.99" },
        { src: img16, alt: "Chocolate Tower", price: "£89.99 £44.99" },
        { src: img17, alt: "Chocolate Tower", price: "£89.99 £44.99" },
      ],
    },
    {
      title: "Hampers",
      items: [
        { src: img5, alt: "Afternoon Tea Lover", price: "£89.99 £44.99" },
        { src: img6, alt: "Beer & Cheese", price: "£99.99 £49.99" },
        { src: img7, alt: "Coffee Break Hamper", price: "£99.99 £49.99" },
        { src: img8, alt: "Chocolate Tower", price: "£89.99 £44.99" },
        { src: img9, alt: "Chocolate Tower", price: "£89.99 £44.99" },
        {
          src: img10,
          alt: "Happy Birthday Gift Box with Fizz",
          price: "£89.99 £44.99",
        },
        {
          src: img11,
          alt: "Happy Birthday Gift Box with Red Wine",
          price: "£89.99 £44.99",
        },
        {
          src: img12,
          alt: "Fizz",
          price: "£89.99 £44.99",
        },
      ],
    },
    {
      title: "Summer Blooms",
      items: [
        { src: img1, alt: "Afternoon Tea Lover", price: "£89.99 £44.99" },
        { src: img2, alt: "Beer & Cheese", price: "£99.99 £49.99" },
        { src: img3, alt: "Coffee Break Hamper", price: "£99.99 £49.99" },
        { src: img4, alt: "Chocolate Tower", price: "£89.99 £44.99" },
      ],
    },
    {
      title: "Unique Hampers",
      items: [
        { src: img19, alt: "Afternoon Tea Lover", price: "£89.99 £44.99" },
        { src: img20, alt: "Beer & Cheese", price: "£99.99 £49.99" },
        { src: img21, alt: "Coffee Break Hamper", price: "£99.99 £49.99" },
        { src: img22, alt: "Chocolate Tower", price: "£89.99 £44.99" },
        { src: img23, alt: "Chocolate Tower", price: "£89.99 £44.99" },
        { src: img24, alt: "Chocolate Tower", price: "£89.99 £44.99" },
        { src: img25, alt: "Chocolate Tower", price: "£89.99 £44.99" },
        { src: img26, alt: "Chocolate Tower", price: "£89.99 £44.99" },
        { src: img27, alt: "Chocolate Tower", price: "£89.99 £44.99" },
        { src: img19, alt: "Chocolate Tower", price: "£89.99 £44.99" },
        { src: img20, alt: "Chocolate Tower", price: "£89.99 £44.99" },
        { src: img21, alt: "Chocolate Tower", price: "£89.99 £44.99" },
      ],
    },
  ];

  const handleImageClick = (item) => {
    navigate("/information", { state: { item } });
  };

  return (
    <div className="main">
      {categories.map((category, index) => (
        <div className="flowers-container" key={index}>
          <h2 className="title-with-line">
            <span id="hover-p">{category.title}</span>
            <a href="#"> view all</a>
          </h2>
          <div className="flower-grid">
            {category.items.map((item, idx) => (
              <div className="flower-card" key={idx}>
                <img
                  src={item.src}
                  alt={item.alt}
                  onClick={() => handleImageClick(item)}
                />
                <h3 id="hover-p">{item.alt}</h3>
                <p id="hover-p">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default View;
