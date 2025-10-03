// src/components/Home.js
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import CategoryCard from "./CategoryCard";
import FooterTabs from "./FooterTabs";
import "./Home.css";

const categories = [
  { title: "Motors & Pumps", subtitle: "Buy motors & pumps online", color: "#3b82f6" },
  { title: "Repair & Maintenance", subtitle: "Book expert services", color: "#22c55e" },
  { title: "Bore Drilling", subtitle: "Get quotes & contractors", color: "#a16207" },
  { title: "Electrical Works", subtitle: "Find certified electricians", color: "#facc15" },
];

const Home = () => {
  return (
    <div className="home">
      <Header /> {/* Top navbar */}
      <Hero />
      <section className="categories-section">
        <div className="categories-grid">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </section>
      <FooterTabs /> {/* Bottom mobile tabs */}
    </div>
  );
};

export default Home;
