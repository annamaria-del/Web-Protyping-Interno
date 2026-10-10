import { Link } from "react-router-dom";
import DesignCard from "../components/DesignCard";
import { useFavorites } from "../utils/FavoriteContext";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <section className="min-h-screen bg-stone-100 px-6 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-12 text-4xl font-semibold text-stone-900">
          Favorite Designs
        </h1>

        {favorites.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white py-24 text-center">

            <div className="mb-4 text-5xl">
              ♡
            </div>

            <h2 className="text-2xl font-semibold text-stone-800">
              No Favorites Yet
            </h2>

            <p className="mt-3 text-stone-500">
              Explore our gallery and save your favorite designs.
            </p>

            <Link
              to="/gallery"
              className="mt-6 inline-block rounded-xl bg-stone-900 px-6 py-3 text-white"
            >
              Explore Gallery
            </Link>

          </div>
        )}

      </div>
    </section>
  );
}

export default Favorites;