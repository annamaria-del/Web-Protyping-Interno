import { useState } from "react";
import DesignCard from "../components/DesignCard";
import designs from "../utils/data";

function Gallery() {
  const [selectedStyle, setSelectedStyle] = useState("All");
  const [search, setSearch] = useState("");

  const filteredDesigns = designs.filter((design) => {
    const matchStyle =
      selectedStyle === "All" ||
      design.style === selectedStyle;

    const matchSearch = design.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchStyle && matchSearch;
  });

  const styles = [
    "All",
    "Minimalist",
    "Modern",
    "Scandinavian",
    "Luxury",
  ];

  return (
    <section className="min-h-screen bg-stone-100 px-6 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-stone-500">
            Our Collection
          </p>

          <h1 className="text-4xl font-semibold text-stone-900 md:text-5xl">
            Explore Interior Designs
          </h1>

          <p className="mt-4 max-w-2xl text-stone-600">
            Find inspiration for your dream home from our
            collection of beautiful interior spaces.
          </p>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search interior design..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-stone-300 bg-white px-5 py-3 outline-none focus:border-stone-700"
          />
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`rounded-full px-5 py-2 ${
                selectedStyle === style
                  ? "bg-stone-900 text-white"
                  : "bg-white text-stone-700 hover:bg-stone-200"
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {filteredDesigns.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredDesigns.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white py-20 text-center">
            <p className="text-xl text-stone-600">
              No interior designs found.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Gallery;