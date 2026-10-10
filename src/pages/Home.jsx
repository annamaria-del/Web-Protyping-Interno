import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(40,25,15,0.55), rgba(40,25,15,0.7)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85')",
      }}
    >
      <div className="px-6 text-center text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.4em]">
          Interior Design Gallery
        </p>

        <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
          Build Your Dream Home
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-200 md:text-xl">
          Discover beautiful interior inspirations and create
          your perfect living space.
        </p>

        <Link
          to="/gallery"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-medium text-stone-800 transition hover:bg-stone-200"
        >
          Explore Gallery →
        </Link>

        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-3 border-t border-white/30 pt-8">
          <div>
            <p className="text-3xl font-semibold">4.8</p>
            <p className="mt-1 text-sm text-stone-300">
              Average Rating
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">250+</p>
            <p className="mt-1 text-sm text-stone-300">
              Designs
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">20+</p>
            <p className="mt-1 text-sm text-stone-300">
              Styles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;