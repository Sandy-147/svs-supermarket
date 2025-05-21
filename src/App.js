import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>SVS SUPER MARKET 🏪</h1>
        <p>Welcome to our store in Paradarami!</p>
      </header>

      <main className="main">
        <section className="product-section">
          <h2>Groceries</h2>
          <img src="/groceries.jpg" alt="Groceries" className="product-img" />
          <p>Fresh daily essentials and staples for your home.</p>
        </section>

        <section className="product-section">
          <h2>Snacks</h2>
          <img src="/snacks.jpg" alt="Snacks" className="product-img" />
          <p>Tasty treats and crispy snacks for everyone!</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 SVS SUPER MARKET. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
