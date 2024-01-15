import React from "react";
import "./App.css";
import "./fontawesome/css/all.css";

import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import data from "./data";

function App() {
  return (
    <>
      <main className="wrapper">
        <About />
        <div className="section">
          <Filter />
          <div className="card-colum-3">
            {data.map((value, index) => (
              <Card key={index} {...value} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
