import React, { useMemo, useState } from "react";

export default function ColoringBooksSite() {
  const [query, setQuery] = useState("");
  const [collection, setCollection] = useState("all");
  const [sort, setSort] = useState("newest");

  const books = useMemo(
    () => [
      {
        id: "cozy-cottages",
        title: "The Cozy Collection: Cozy Cottages",
        blurb:
          "30 charming cottage scenes designed for relaxing, cozy coloring sessions.",
        tags: ["Cozy Collection", "Homes", "Relaxing"],
        series: "Cozy Collection",
        release: "2025-06-27",
        links: { amazon: "https://www.amazon.co.uk/dp/B0FHKV4NBK" },
      },
      {
        id: "cozy-kitchens",
        title: "The Cozy Collection: Cozy Kitchens",
        blurb: "30 warm, inviting kitchen illustrations full of homely details.",
        tags: ["Cozy Collection", "Kitchens"],
        series: "Cozy Collection",
        release: "2025-07-12",
        links: { amazon: "https://www.amazon.co.uk/dp/B0FG2YWK9K" },
      },
      {
        id: "spoonful-of-color",
        title: "Spoonful of Color",
        blurb:
          "50 realistic food & drink illustrations — black-and-white, no shading, perfect for clean coloring.",
        tags: ["Food", "Realistic", "A4"],
        series: "Standalone",
        release: "2025-07-01",
        links: { amazon: "https://www.amazon.co.uk/dp/B0FHPPQKCK" },
      },
      {
        id: "dinosaurs",
        title: "Color the Magic: Land of the Dinosaurs",
        blurb:
          "30 dino scenes — expanded edition with original, kid-friendly prehistoric adventures.",
        tags: ["Dinosaurs", "Adventure"],
        series: "Color the Magic",
        release: "2025-07-27",
        links: { amazon: "https://www.amazon.co.uk/dp/B0FKH4S6ZP" },
      },
      {
        id: "tombs-and-treasures",
        title: "Color the Magic: Tombs & Treasures",
        blurb:
          "Explorers, temples, relics, and mystical traps across 30 high-adventure pages.",
        tags: ["Adventure", "Explorers"],
        series: "Color the Magic",
        release: "2025-07-27",
        links: { amazon: "https://www.amazon.co.uk/dp/B0FGJX7BQH" },
      },
      {
        id: "divine-legends-1",
        title: "Divine Legends — Fact Book I",
        blurb: "A compact, fact‑rich guide with clean layouts.",
        tags: ["Facts", "Reference"],
        series: "Divine Legends (Fact Books)",
        release: "2025-07-01",
        links: { amazon: "https://www.amazon.co.uk/dp/B0FGDQLSVN" },
      },
      {
        id: "divine-legends-2",
        title: "Divine Legends — Fact Book II",
        blurb: "Second volume of the fact series with concise, reader‑friendly pages.",
        tags: ["Facts", "Reference"],
        series: "Divine Legends (Fact Books)",
        release: "2025-07-01",
        links: { amazon: "https://www.amazon.co.uk/dp/B0FG1S65GV" },
      },
    ],
    []
  );

  const seriesList = [
    { value: "all", label: "All series" },
    { value: "Cozy Collection", label: "Cozy Collection" },
    { value: "Color the Magic", label: "Color the Magic" },
    { value: "Divine Legends (Fact Books)", label: "Divine Legends" },
    { value: "Standalone", label: "Standalone" },
  ];

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    let results = books.filter((b) =>
      [b.title, b.blurb, b.tags.join(" "), b.series]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );

    if (collection !== "all") {
      results = results.filter((b) => b.series === collection);
    }

    results.sort((a, b) => {
      if (sort === "newest") return Date.parse(b.release) - Date.parse(a.release);
      if (sort === "alpha") return a.title.localeCompare(b.title);
      return 0;
    });

    return results;
  }, [books, query, collection, sort]);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl tracking-tight">
            Color the Magic ✨
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-70" href="#books">Books</a>
            <a className="hover:opacity-70" href="#about">About</a>
            <a className="hover:opacity-70" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#shop" className="px-3 py-2 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:opacity-90">Shop</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative isolate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Cozy, Creative, & Kid‑Friendly Coloring Books
            </h1>
            <p className="mt-4 text-lg text-neutral-600 max-w-prose">
              Relaxing, clean designs with proper margins and thoughtful themes — from the
              <span className="font-semibold"> Cozy Collection</span> to high‑adventure tales in
              <span className="font-semibold"> Color the Magic</span>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#books" className="px-4 py-2 rounded-xl bg-neutral-900 text-white font-semibold hover:opacity-90">Browse Books</a>
              <a href="#contact" className="px-4 py-2 rounded-xl border font-semibold hover:bg-neutral-50">Contact</a>
            </div>
            <div id="shop" className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="text-neutral-600">Available on:</span>
              <a href="#" className="underline hover:no-underline">Amazon</a>
            </div>
          </div>

          {/* Decorative preview panel */}
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 p-4 w-full">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-neutral-300 to-neutral-100 border"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="border-t" id="books">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-end flex-wrap gap-4">
            <div className="grow">
              <h2 className="text-2xl md:text-3xl font-extrabold">Books</h2>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                aria-label="Search books"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search titles, tags, or series..."
                className="w-full md:w-64 px-3 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-neutral-300"
              />
              <select
                aria-label="Filter by collection"
                value={collection}
                onChange={(e) => setCollection(e.target.value)}
                className="px-3 py-2 border rounded-xl"
              >
                {seriesList.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <select
                aria-label="Sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-2 border rounded-xl"
              >
                <option value="newest">Newest</option>
                <option value="alpha">A → Z</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((b) => (
              <article key={b.id} className="group border rounded-3xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[3/4] bg-gradient-to-br from-neutral-200 to-neutral-100 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="text-sm uppercase tracking-wide text-neutral-500">{b.series}</div>
                    <h3 className="mt-1 text-lg font-extrabold leading-tight">{b.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600 line-clamp-3">{b.blurb}</p>
                    <div className="mt-3 flex flex-wrap gap-2 justify-center">
                      {b.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full bg-white border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <div className="text-xs text-neutral-500">Released {new Date(b.release).toLocaleDateString()}</div>
                  <div className="flex items-center gap-2">
                    <a className="text-sm font-semibold underline hover:no-underline" href={b.links.amazon} target="_blank" rel="noreferrer">
                      Amazon
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Bar */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 rounded-3xl border p-5">
            <p className="text-neutral-700">
              Want your book featured at the top? <span className="font-semibold">Pin it</span> with a cover image and direct link.
            </p>
            <a href="#contact" className="px-4 py-2 rounded-xl bg-neutral-900 text-white font-semibold hover:opacity-90">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">About</h2>
            <p className="mt-3 text-neutral-700 max-w-prose">
              I create cozy, calming coloring books and kid‑friendly adventures. Pages are designed with clean margins, no cut‑offs, and high print readability.
              Collections include the <span className="font-semibold">Cozy Collection</span> and
              <span className="font-semibold"> Color the Magic</span> series.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border p-4">
                <div className="text-3xl font-extrabold">30+</div>
                <div className="text-sm text-neutral-600">Illustrations per book</div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="text-3xl font-extrabold">A4</div>
                <div className="text-sm text-neutral-600">Vertical, bleed‑safe layout</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border p-6 bg-neutral-50">
            <h3 className="font-bold">Press Kit</h3>
            <p className="mt-2 text-sm text-neutral-700">Download logos, cover mockups, and a short bio.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#" className="px-4 py-2 rounded-xl bg-neutral-900 text-white font-semibold hover:opacity-90">Press Zip</a>
              <a href="#" className="px-4 py-2 rounded-xl border font-semibold hover:bg-neutral-100">Author Bio</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-extrabold">Stay in the loop</h2>
              <p className="mt-3 text-neutral-700 max-w-prose">
                Get new releases in your inbox.
              </p>
            </div>
            <form className="md:col-span-3 grid sm:grid-cols-3 gap-3">
              <input className="px-3 py-2 border rounded-xl" placeholder="Name" aria-label="Name" />
              <input className="px-3 py-2 border rounded-xl sm:col-span-2" placeholder="Email" aria-label="Email" />
              <button type="button" className="px-4 py-2 rounded-xl bg-neutral-900 text-white font-semibold hover:opacity-90 sm:col-span-3">
                Subscribe
              </button>
              <p className="text-xs text-neutral-500 sm:col-span-3">
                By subscribing, you agree to receive occasional emails. Unsubscribe anytime.
              </p>
            </form>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
            <a href="#" className="underline hover:no-underline">Instagram</a>
            <a href="#" className="underline hover:no-underline">Pinterest</a>
            <a href="#" className="underline hover:no-underline">Amazon Author Page</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Color the Magic. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a className="hover:opacity-70" href="#privacy">Privacy</a>
            <a className="hover:opacity-70" href="#terms">Terms</a>
          </nav>
        </div>
