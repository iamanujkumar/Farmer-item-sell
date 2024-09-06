import React from 'react';
import backgroundImg from '../../assets/bg.png'
import img1 from '../../assets/25off.png';
import productImg1 from '../../assets/var.webp'; // Add your product image path here
import productImg2 from '../../assets/green.avif'; 
import productImg3 from '../../assets/apple.jpg'; 
import './Discount.css';

const Discount: React.FC = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        position: 'relative'
      }}>
      <section className="DiscountSection">
        <div className="img">
          <img src={img1} alt="25% Off" />
        </div>

        <div className="textinfo">
          <h2>Buy Now And Get Exciting Offers!</h2>
        </div>

        
      </section>

      <div className="transformBox">
        <div className="cardsContainer">
          <div className="card">
            <img src={productImg1} alt="Product" />
            
          </div>
          <div className="card">
            <img src={productImg2} alt="Product" />
            
          </div>
          <div className="card">
            <img src={productImg3} alt="Product" />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
