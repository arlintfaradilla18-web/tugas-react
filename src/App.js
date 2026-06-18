import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Halo, Aku Arlint! 👋</h1>
        <p>Portfolio Digital & Rencana Perjalanan</p>
      </header>

      <main className="main-content">
        <section className="card">
          <h2>Tentang Saya</h2>
          <p>Mahasiswa Pemrograman Web Lanjut yang antusias membangun aplikasi web modern.</p>
        </section>

        <section className="card">
          <h2>Makanan Favorit</h2>
          <ul>
            <li><strong>Mie Ayam:</strong> Topping Meatballs & Dumplings.</li>
            <li><strong>Sampingan:</strong> Chicken Cashew.</li>
          </ul>
        </section>

        <section className="card">
          <h2>Rencana Liburan</h2>
          <p>Destinasi: <strong>Singapura</strong> 🇸🇬</p>
          <p>Sudah tidak sabar menjelajahi kota baru bersama John!</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Arlint Faradilla Gesta - PWA Project</p>
      </footer>
    </div>
  );
}

export default App;