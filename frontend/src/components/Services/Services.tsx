// src/components/ServicesCarousel.js
import React from 'react';
import OwlCarousel from 'react-owl-carousel'; // Import Owl Carousel
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Import Owl Carousel theme CSS

const services = [
  {
    icon: 'flaticon-shipping-and-delivery',
    title: 'Home Delivery',
    link: '/single-services',
  },
  {
    icon: 'flaticon-vendor',
    title: 'Where We Sell',
    link: '/single-services',
  },
  {
    icon: 'flaticon-harvest',
    title: 'Produce of Vegetables',
    link: '/single-services',
  },
  {
    icon: 'flaticon-mission-accomplished',
    title: 'Use of Land',
    link: '/single-services',
  },
  {
    icon: 'flaticon-sushi',
    title: 'Feed of Fish',
    link: '/single-services',
  },
];

const ServicesCarousel = () => {
  return (
    <section className="services-section pb-24">
      <div className="container mx-auto px-4">
        <div className="services-content-area">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={30}
            nav
            items={3}
            autoplay
            autoplayTimeout={3000}
            dots={true}
            responsive={{
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 3 },
            }}
          >
            {services.map((service, index) => (
              <div key={index} className="services-item p-4 bg-white shadow-lg rounded-lg text-center">
                <div className="icon text-5xl mb-4">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <a href={service.link} className="hover:underline text-blue-600">
                    {service.title}
                  </a>
                </h3>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
