import React from 'react';
import './About.css';  // Importing the stylesheet for styling

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About TRIFLES</h1>
      </div>
      <div className="about-content">
        <p>
          <strong>TRIFLES</strong> is an innovative mobile application designed to revolutionize the way farmers access markets by directly connecting them with buyers. In the traditional system, farmers often rely on intermediaries who take a substantial portion of the profits, leaving the producers with minimal returns. TRIFLES seeks to eliminate these intermediaries, providing farmers with direct access to consumers, wholesalers, and retailers, thereby empowering them to earn more from their hard work.
        </p>
        
        <p>
          Through <strong>TRIFLES</strong>, farmers can list their produce, negotiate prices directly with buyers, and receive payments securely through the platform. The app’s intuitive design ensures ease of use, making it accessible even to users with minimal technical expertise. Additionally, TRIFLES helps buyers discover fresh produce from local farmers, making it a win-win solution for everyone involved.
        </p>

        <h2>Our Vision</h2>
        <p>
          The vision of <strong>TRIFLES</strong> is to create a sustainable and transparent ecosystem where farmers have the power to sell their produce directly to the market at fair prices. By doing so, we aim to increase farmer income, reduce food wastage, and provide fresher, more affordable produce to consumers.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li><strong>Direct Market Access:</strong> Farmers can directly connect with buyers, bypassing middlemen.</li>
          <li><strong>Real-Time Market Prices:</strong> Access to live market data to help farmers set competitive and fair prices.</li>
          <li><strong>Secure Payment Gateway:</strong> All transactions are secure, ensuring peace of mind for both parties.</li>
          <li><strong>Buyer Profiles:</strong> Farmers can view buyer ratings and past transactions for safer, more trusted business dealings.</li>
          <li><strong>Location-Based Produce Search:</strong> Buyers can discover fresh, locally grown produce based on their geographical location.</li>
          <li><strong>Multi-Language Support:</strong> The app is available in multiple languages to ensure accessibility to a broader user base.</li>
          <li><strong>Farmer-Friendly Interface:</strong> Designed for ease of use, even by farmers with minimal digital literacy.</li>
        </ul>

        <h2>Our Impact</h2>
        <p>
          By cutting out the middlemen and enabling farmers to sell their produce directly to buyers, <strong>TRIFLES</strong> is reducing post-harvest losses and ensuring that farmers earn fair prices. The platform also helps consumers get fresher produce at better rates, reducing the price inflation caused by layers of intermediaries.
        </p>

        <p>
          At <strong>TRIFLES</strong>, we believe that empowering farmers through technology is key to building a stronger, more equitable agricultural sector. Join us in our mission to build a better future for the farmers who feed the world.
        </p>
      </div>
    </div>
  );
};

export default About;