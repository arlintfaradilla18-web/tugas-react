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
    <p>
      Halo, nama saya Arlint Gesta Faradilla, mahasiswa Teknik Informatika dari Universitas Muhammadiyah Purwokerto. 
      Perjalanan saya di dunia IT dimulai tepat saat saya melangkahkan kaki di bangku perkuliahan. Awalnya, segala sesuatu tentang 
      pemrograman terasa sangat asing bagi saya, namun rasa ingin tahu yang besar membuat saya terus bertahan.
    </p>
    <p>
      Seiring berjalannya waktu, dedikasi yang saya berikan membuahkan hasil. Saya mulai memahami alur bagaimana kode dibangun, 
      membangun struktur website yang fungsional, hingga merancang aplikasi mobile yang interaktif. Saya menyadari bahwa 
      dunia teknologi bergerak sangat cepat, oleh karena itu saya berkomitmen untuk terus belajar dan mengasah kemampuan 
      di bawah bimbingan dosen-dosen hebat di kampus. InsyaAllah, saya akan tetap konsisten dan pantang menyerah untuk 
      terus bertumbuh menjadi seorang programmer yang profesional dan memberikan dampak positif di masa depan.
    </p>
  </section>

  <section className="card">
    <h2>Makanan Favorit</h2>
    <p>
      Sebagai seorang yang memiliki <em>sweet tooth</em>, saya sangat mencintai segala hal yang berbau manis! 
      Pastries dengan tekstur yang renyah, kelembutan roti, hingga potongan cake yang manis selalu berhasil menaikkan 
      suasana hati saya kapan pun itu. Bagi saya, makanan manis bukan sekadar camilan, melainkan cara terbaik untuk memberi 
      apresiasi pada diri sendiri setelah seharian beraktivitas.
    </p>
    <p>
      Untuk makanan berat, selera saya cukup spesifik; saya menyukai cita rasa yang dominan manis-gurih karena perpaduan 
      tersebut terasa sangat pas di lidah. Tiga hidangan berat yang selalu menjadi pilihan utama dan favorit saya adalah:
    </p>
    <ul>
      <li><strong>Soto Sokaraja:</strong> Perpaduan kuah kaldu yang gurih dengan sentuhan bumbu kacang yang khas.</li>
      <li><strong>Nasi Ayam Suwir:</strong> Hidangan simpel yang punya cita rasa manis-gurih yang sangat menggugah selera.</li>
      <li><strong>Bakmie:</strong> Makanan klasik yang tidak pernah salah, terutama jika diracik dengan bumbu yang kaya rasa.</li>
    </ul>
  </section>

  <section className="card">
    <h2>Rencana Liburan (Impian)</h2>
    <p>
      Singapura adalah destinasi terdekat yang ingin saya kunjungi dalam waktu dekat. Namun, jauh di lubuk hati, saya 
      memiliki mimpi besar untuk menjelajahi dunia! 🌍
    </p>
    <p>
      Jika diberi kesempatan, saya sangat ingin mengunjungi <strong>Jepang</strong>, khususnya untuk mengunjungi 
      <em>Ghibli Park</em> dan <em>Ghibli Museum</em> agar bisa merasakan langsung suasana magis dari film-film kesukaan saya. 
      Selain itu, <strong>Switzerland</strong> juga masuk dalam daftar teratas impian saya; saya hanya ingin menikmati 
      suasana tenang, pegunungan, dan keindahan alam yang menakjubkan di sana.
    </p>
    <p>
      Saya juga memiliki ketertarikan khusus untuk menjelajahi negara-negara di <strong>Eropa</strong>, terutama 
      negara-negara kecil yang penuh sejarah seperti <strong>Hungaria</strong> dan destinasi lainnya. Bagi saya, 
      menikmati suasana, arsitektur, dan budaya di sana adalah pengalaman hidup yang sangat berharga.
    </p>
  </section>
</main>

      <footer className="footer">
        <p>© 2026 Arlint Gesta Faradilla - PWA Project</p>
      </footer>
    </div>
  );
}

export default App;