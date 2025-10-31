import React from 'react';
import splendorLiquerImg from '../assets/sl.jpeg';
import tableBg from '../assets/table.jpeg';
import { Link } from 'react-router-dom';

const SplendorLiqueur = () => {
  return (
    <section
      data-testid="splendor-section"
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${tableBg})` }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right">
            <img
              src={splendorLiquerImg}
              alt="Splendor Liqueur"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Splendor Liqueur
            </h2>
            <p className="text-gray-200 mb-4">
              A fine spirit crafted for discerning palates. Experience the rich and smooth taste of Splendor Liqueur, a perfect blend of premium ingredients and masterful distillation.
            </p>
            <p className="text-gray-200 mb-6">
              Whether you're celebrating a special occasion or enjoying a quiet evening, Splendor Liqueur is the perfect companion.
            </p>
            <Link to="/splendor-liqueur" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplendorLiqueur;
