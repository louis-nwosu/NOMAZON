import React from "react";
import "./customBoostrap.scss";

//import components
import { Hero } from "./components/hero.sec";
import { ProductList } from "./components/productsList.sec";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <ProductList />
    </React.Fragment>
  );
}

export default App;
