import React from "react";
import Navbar from "./compoments/Navbar";
import Hero from "./compoments/Hero";
import HeadlineCards from "./compoments/HeadlineCards";
import Food from "./compoments/Food";
import Category from "./compoments/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
