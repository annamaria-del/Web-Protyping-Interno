import { useState } from "react";

const designs = [
  {
    id: 1,
    name: "Ruang Tamu Minimalis",
    category: "Minimalis",
    description: "Ruang tamu dengan warna netral dan pencahayaan alami.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Interior Modern",
    category: "Modern",
    description: "Perpaduan furnitur elegan dan suasana nyaman.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Kamar Scandinavian",
    category: "Scandinavian",
    description: "Desain hangat dengan material kayu dan warna lembut.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Hunian Luxury",
    category: "Luxury",
    description: "Interior berkelas dengan detail elegan.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Ruang Keluarga Modern",
    category: "Modern",
    description: "Ruang keluarga luas untuk berkumpul bersama.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Kamar Minimalis",
    category: "Minimalis",
    description: "Kamar tidur sederhana, rapi, dan nyaman.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = [
  "Semua",
  "Minimalis",
  "Modern",
  "Scandinavian",
  "Luxury",
];

const css = `
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Arial, Helvetica, sans-serif; }
  button { font: inherit; }
  button:focus-visible { outline: 2px solid #925363; outline-offset: 3px; }

  .site {
    min-height: 100vh;
    background: #faf6f6;
    color: #34272a;
  }

  .navbar {
    padding: 20px 7%;
    background: #fff;
    border-bottom: 1px solid #eadde0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .logo {
    font-size: 26px;
    font-weight: 800;
    letter-spacing: 4px;
    color: #782f40;
  }

  .navlinks {
    display: flex;
    gap: 22px;
    flex-wrap: wrap;
  }

  .navbtn {
    background: none;
    border: 0;
    cursor: pointer;
    color: #4b3a3e;
    padding: 7px 0;
  }

  .navbtn.active {
    color: #782f40;
    font-weight: 700;
    border-bottom: 2px solid #782f40;
  }

  .hero {
    padding: 85px 7%;
    background: #f0e2e4;
  }

  .eyebrow {
    color: #925363;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 12px;
    font-weight: 700;
  }

  .hero h1 {
    max-width: 700px;
    font-size: clamp(38px, 6vw, 68px);
    line-height: 1.1;
    margin: 20px 0;
    font-weight: 600;
    color: #51232f;
  }

  .intro {
    color: #75656a;
    max-width: 570px;
    font-size: 16px;
    line-height: 1.8;
  }

  .primary {
    background: #782f40;
    color: white;
    padding: 13px 21px;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 18px;
    transition: background 0.2s;
  }

  .primary:hover { background: #5e2230; }

  .section { padding: 55px 7% 70px; }

  .section h2 {
    font-size: clamp(28px, 4vw, 38px);
    margin: 12px 0;
    color: #51232f;
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 28px 0;
  }

  .filter {
    background: #fff;
    color: #60464d;
    border: 1px solid #e3cfd4;
    border-radius: 30px;
    padding: 9px 16px;
    cursor: pointer;
  }

  .filter.active {
    background: #782f40;
    color: white;
    border-color: #782f40;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
    gap: 24px;
  }

  .design-card {
    overflow: hidden;
    border: 1px solid #eadde0;
    border-radius: 8px;
    background: white;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .design-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px #782f4012;
  }

  .design-img {
    width: 100%;
    height: 225px;
    object-fit: cover;
    background: #f0e2e4;
  }

  .card-body { padding: 18px; }

  .category-label {
    color: #925363;
    font-size: 12px;
  }

  .card-body h3 {
    margin: 10px 0;
    font-size: 19px;
    color: #51232f;
  }

  .description {
    color: #75656a;
    line-height: 1.7;
    font-size: 14px;
  }

  .card-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 18px;
  }

  .text-btn {
    border: 0;
    background: transparent;
    color: #782f40;
    cursor: pointer;
    padding: 6px 0;
  }

  .fav-btn {
    border: 1px solid #e3cfd4;
    background: white;
    color: #782f40;
    border-radius: 5px;
    padding: 8px 10px;
    cursor: pointer;
  }

  .empty { padding: 35px 0; color: #75656a; }

  .footer {
    padding: 28px 7%;
    text-align: center;
    color: #75656a;
    background: #f3e9e9;
    font-size: 13px;
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 10;
    background: #281218aa;
    display: grid;
    place-items: center;
    padding: 20px;
  }

  .modal {
    background: white;
    border-radius: 9px;
    width: 100%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
  }

  .modal-img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    .navbar { padding: 18px 5%; }
    .navlinks { gap: 15px; }
    .hero { padding: 60px 6%; }
    .section { padding: 42px 6%; }
    .design-img { height: 210px; }
  }
`;

export default function App() {
  const [page, setPage] = useState("Beranda");
  const [category, setCategory] = useState("Semua");
  const [favorites, setFavorites] = useState([]);
  const [selected, setSelected] = useState(null);

  function navigate(nextPage) {
    setPage(nextPage);
    setCategory("Semua");
    setSelected(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  const visibleDesigns = designs.filter((design) => {
    const matchesCategory =
      category === "Semua" || design.category === category;
    const matchesPage =
      page !== "Favorit" || favorites.includes(design.id);
    return matchesCategory && matchesPage;
  });

  return (
    <div className="site">
      <style>{css}</style>

      <header className="navbar">
        <div className="logo">INTERNO.</div>
        <nav className="navlinks" aria-label="Navigasi utama">
          {["Beranda", "Galeri", "Favorit", "Tentang"].map((item) => (
            <button
              key={item}
              className={`navbtn ${page === item ? "active" : ""}`}
              onClick={() => navigate(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      {page === "Beranda" && (
        <section className="hero">
          <p className="eyebrow">Inspirasi desain interior</p>
          <h1>Temukan ruang yang terasa seperti rumah.</h1>
          <p className="intro">
            Jelajahi inspirasi interior untuk menciptakan hunian yang indah,
            nyaman, dan sesuai dengan gaya kamu.
          </p>
          <button className="primary" onClick={() => navigate("Galeri")}>
            Jelajahi Galeri →
          </button>
        </section>
      )}

      {page === "Tentang" ? (
        <section className="section">
          <p className="eyebrow">Tentang INTERNO</p>
          <h2>Desain yang membuat ruang lebih bermakna.</h2>
          <p className="intro">
            INTERNO adalah galeri inspirasi desain interior untuk membantu
            kamu menemukan gaya ruangan yang sesuai dengan impianmu, dari
            minimalis hingga luxury.
          </p>
          <button className="primary" onClick={() => navigate("Galeri")}>
            Lihat Galeri
          </button>
        </section>
      ) : (
        <section className="section">
          <p className="eyebrow">
            {page === "Favorit" ? "Koleksi pribadi" : "Pilihan inspirasi"}
          </p>
          <h2>
            {page === "Favorit" ? "Desain Favorit" : "Jelajahi Desain"}
          </h2>
          <p className="intro">
            {page === "Favorit"
              ? "Semua desain yang kamu simpan ada di sini."
              : "Temukan inspirasi untuk ruang yang mencerminkan gaya kamu."}
          </p>

          <div className="filters">
            {categories.map((item) => (
              <button
                key={item}
                className={`filter ${category === item ? "active" : ""}`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {visibleDesigns.length > 0 ? (
            <div className="gallery">
              {visibleDesigns.map((design) => (
                <article className="design-card" key={design.id}>
                  <img
                    className="design-img"
                    src={design.image}
                    alt={design.name}
                    loading="lazy"
                  />
                  <div className="card-body">
                    <span className="category-label">{design.category}</span>
                    <h3>{design.name}</h3>
                    <p className="description">{design.description}</p>
                    <div className="card-actions">
                      <button
                        className="text-btn"
                        onClick={() => setSelected(design)}
                      >
                        Lihat detail →
                      </button>
                      <button
                        className="fav-btn"
                        onClick={() => toggleFavorite(design.id)}
                        aria-pressed={favorites.includes(design.id)}
                      >
                        {favorites.includes(design.id)
                          ? "♥ Tersimpan"
                          : "♡ Favorit"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="empty">
              Belum ada desain favorit. Buka Galeri dan simpan desain yang kamu
              suka.
            </p>
          )}
        </section>
      )}

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <img
              className="modal-img"
              src={selected.image}
              alt={selected.name}
            />
            <div className="card-body">
              <p className="eyebrow">{selected.category}</p>
              <h2>{selected.name}</h2>
              <p className="intro">{selected.description}</p>
              <button
                className="primary"
                onClick={() => toggleFavorite(selected.id)}
              >
                {favorites.includes(selected.id)
                  ? "Hapus dari Favorit"
                  : "Simpan ke Favorit"}
              </button>
              <button
                className="text-btn"
                style={{ marginLeft: 16 }}
                onClick={() => setSelected(null)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        © 2026 INTERNO. — Temukan inspirasi ruang impianmu.
      </footer>
    </div>
  );
}
