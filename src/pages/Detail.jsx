import { Link, useParams } from "react-router-dom";
import designs from "../utils/data";
import { useFavorites } from "../utils/FavoriteContext";

function Detail() {
  const { id } = useParams();

  const design = designs.find(
    (item) => item.id === Number(id)
  );

  const { toggleFavorite, isFavorite } = useFavorites();

  if (!design) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">
            Design Not Found
          </h1>

          <Link
            to="/gallery"
            className="mt-5 inline-block rounded-lg bg-stone-900 px-5 py-3 text-white"
          >
            Back to Gallery
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-stone-100 px-6 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">

        <Link
          to="/gallery"
          className="mb-8 inline-block text-stone-600"
        >
          ← Back to Gallery
        </Link>

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

          <img
            src={design.image}
            alt={design.title}
            className="h-full min-h-[450px] w-full object-cover"
          />

          <div className="flex flex-col justify-center p-8 md:p-12">

            <p className="mb-3 text-sm uppercase tracking-widest text-stone-500">
              {design.style} · {design.room}
            </p>

            <h1 className="text-4xl font-semibold text-stone-900">
              {design.title}
            </h1>

            <p className="mt-6 leading-7 text-stone-600">
              {design.description}
            </p>

            <button
              onClick={() => toggleFavorite(design)}
              className="mt-8 w-fit rounded-xl bg-stone-900 px-6 py-3 text-white"
            >
              {isFavorite(design.id)
                ? "♥ Remove from Favorites"
                : "♡ Add to Favorites"}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;