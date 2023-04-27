import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <main>
      <h1>SPLITER</h1>
      <section className="app--container">
        <div className="app--inputs">
          <label>Bill
            <input
              type="text"
              className="app--bill-input"
            />
          </label>
        </div>
        <div className="app--result">
          <button
            className="app--reset-btn"
            type="button"
          >
            RESET
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
