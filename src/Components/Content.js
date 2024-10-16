import React from "react";
import "../assets/content/content.css";
import img1 from "../assets/images/navbar/1717530807_Sparkle.jpg";
import img2 from "../assets/images/navbar/1717531008_A ray of sunshine.jpg";
import img3 from "../assets/images/navbar/1717531195_Mellow Yellow.jpg";
import img4 from "../assets/images/navbar/1717531484_Carpe Diem.jpg";

function Content() {
  return (
    <div className="content-container">
      <div className="content-left-container">
        <img src={img1} alt="" />
        <div className="content-left-container-text">
          <p id="hover-p">Carpe Diem</p>
          <p id="hover-p">£ 49.99</p>
        </div>
      </div>
      <div className="content-right-container">
        <div className="content-right-container-top">
          <div className="content-right-container-top-left">
            <img src={img2} alt="" />
            <p id="hover-p">A Ray of Sunshine</p>
            <p id="hover-p">£ 49.99</p>
          </div>
          <div className="content-right-container-top-right">
            <img src={img3} alt="" />
            <p id="hover-p">Mellow Yellow Bouquet</p>
            <p id="hover-p">£ 49.99</p>
          </div>
        </div>
        <div className="content-right-container-bottom">
          <img src={img4} alt="" />
          <p id="hover-p">Mellow Yellow Bouquet</p>
          <p id="hover-p">£ 49.99</p>
        </div>
      </div>
    
    </div>
  );
}

export default Content;
