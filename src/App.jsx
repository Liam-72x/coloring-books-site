import React, { useMemo, useState } from "react";

export default function ColoringBooksSite() {
  const [query, setQuery] = useState("");

  // --- Data (from your list) ---
  const colorTheMagic = useMemo(
    () => [
      {
        id: "ctm-dinosaurs",
        title: "Color the Magic: Land of the Dinosaurs",
        blurb:
          "30 dino scenes — expanded edition with original, kid-friendly prehistoric adventures.",
        tags: ["Dinosaurs", "Adventure"],
        link: "https://www.amazon.co.uk/dp/B0FKH4S6ZP",
        release: "2025-07-27",
      },
      {
        id: "ctm-space",
        title: "Color the Magic: Space Explorers",
        blurb: "Rockets, robots, planets and pulsing galaxies to color.",
        tags: ["Space", "Robots"],
        link: "https://www.amazon.co.uk/dp/B0FGJX7BQH",
        release: "2025-07-01",
      },
      {
        id: "ctm-ocean",
        title: "Color the Magic: Ocean Adventure Edition",
        blurb: "Dive with dolphins, reefs, subs and sea monsters.",
        tags: ["Ocean", "Adventure"],
        link: "https://www.amazon.co.uk/dp/B0FFGFCYPD",
        release: "2025-07-01",
      },
      {
        id: "ctm-fantasy",
        title: "Color the Magic: A Fantasy Coloring Adventure",
        blurb: "Castles, heroes, dragons and quests to color.",
        tags: ["Fantasy", "Dragons"],
        link: "https://www.amazon.co.uk/dp/B0FFGJFHY8",
        release: "2025-07-01",
      },
      {
        id: "ctm-rainbows",
        title: "Color the Magic: Realms of Rainbows and Unicorns",
        blurb: "Unicorn realms, rainbow skies and magical fields.",
        tags: ["Unicorns", "Rainbows"],
        link: "https://www.amazon.co.uk/dp/B0FG6YFG1Z",
        release: "2025-07-01",
      },
      {
        id: "ctm-princesses",
        title: "Color the Magic: A World of Princesses",
        blurb: "Princess palaces, ballrooms and royal adventures.",
        tags: ["Princesses"],
        link: "https://www.amazon.co.uk/dp/B0FGDJGWCV",
        release: "2025-07-01",
      },
      {
        id: "ctm-bots",
        title: "Color the Magic: Bots, Beams and Galactic Dreams",
        blurb: "Futuristic cities, mechs, lasers and nebulae.",
        tags: ["Sci-Fi"],
        link: "https://www.amazon.co.uk/dp/B0FG2MCNW4",
        release: "2025-07-01",
      },
    ],
    []
  );

  const cozyCollection = useMemo(
    () => [
      {
        id: "cozy-animal-homes",
        title: "Cozy Animal Homes",
        blurb: "Whimsical burrows, treehouses, and woodland hideaways.",
        tags: ["Cozy", "Animals"],
        link: "https://www.amazon.co.uk/dp/B0FHKV4NBK",
        release: "2025-06-27",
      },
      {
        id: "cozy-cottages",
        title: "Cozy Cottages",
        blurb: "30 charming cottage scenes for relaxing coloring sessions.",
        tags: ["Cozy", "Homes"],
        link: "https://www.amazon.co.uk/dp/B0FG2YWK9K",
        release: "2025-07-12",
      },
    ],
    []
  );

  const standalone = useMemo(
    () => [
      {
        id: "beach-days",
        title: "Beach Days Coloring Book",
        blurb: "Sunny sands, seashells and seaside fun to color.",
        tags: ["Beach", "Relaxing"],
        link: "https://www.amazon.co.uk/dp/B0FHPPQKCK",
        release: "2025-07-01",
      },
    ],
    []
  );

  const divineLegends = useMemo(
    () => [
      {
        id: "roman-gods",
        title: "Divine Legends: The Roman Gods",
        blurb: "A compact, fact-rich guide with clean layouts.",
        tags: ["Facts", "Reference"],
        link: "https://www.amazon.co.uk/dp/B0FGDQLSVN",
        release: "2025-07-01",
      },
      {
        id: "greek-gods",
        title: "Divine Legends: The Greek Gods",
        blurb: "Concise profiles of the Greek pantheon.",
        tags: ["Facts", "Reference"],
        link: "https://www.amazon.co.uk/dp/B0FG1S65GV",
        release: "2025-07-01",
      },
    ],
    []
  );

  // --- Helpers ---
  const filterList = (items) => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter((b) =>
      [b.title, b.blurb, (b.tags || []).join(" ")].join(" ").toLowerCase().includes(q)
    );
  };

  const Section = ({ id, title, items }) => (
    <section id={id} className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((b) => (
            <article
              key={b.id}
              className="group border rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-neutral-200 to-neutral-100 flex items-center justify-center">
                {/* Swap for <img src={b.cover} .../> when you add cover images */}
                <div className="text-center px-6">
                  <div className="text-sm uppercase tracking-wide text-neutral-500">
                    {title}
                  </div>
                  <h3 className="mt-1 text-lg font-extrabold leading-tight">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">{b.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2 justify-center">
                    {(b.tags || []).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full bg-white border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between gap-2">
                <div className="text-xs text-neutral-500">
                  Released {new Date(b.release).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <a
                    className="text-sm font-semibold underline hover:no-underline"
                    href={b.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Amazon
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl tracking-tight">
            Color the Magic ✨
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-70" href="#ctm">Color the Magic</a>
            <a className="hover:opacity-70" href="#cozy">Cozy Collection</a>
            <a className="hover:opacity-70" href="#standalone">Standalone</a>
            <a className="hover:opacity-70" href="#divine">Divine Legends</a>
            <a className="hover:opacity-70" href="#about">About</a>
            <a className="hover:opacity-70" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search all books…"
              className="hidden md:block px-3 py-2 border rounded-xl text-sm w-56"
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative isolate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Color the Magic, Cozy vibes, and more.
            </h1>
            <p className="mt-4 text-lg text-neutral-600 max-w-prose">
              Clean, margin-safe pages with thoughtful themes for relaxing coloring
              and kid-friendly adventures.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#ctm" className="px-4 py-2 rounded-xl bg-neutral-900 text-white font-semibold hover:opacity-90">Browse Color the Magic</a>
              <a href="#cozy" className="px-4 py-2 rounded-xl border font-semibold hover:bg-neutral-50">Cozy Collection</a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 p-4 w-full">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-neutral-300 to-neutral-100 border" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <Section id="ctm" title="Color the Magic Series" items={filterList(colorTheMagic)} />
      <Section id="cozy" title="Cozy Collection" items={filterList(cozyCollection)} />
      <Section id="standalone" title="Standalone Books" items={filterList(standalone)} />
      <Section id="divine" title="Divine Legends" items={filterList(divineLegends)} />

      {/* About (trimmed) */}
      <section id="about" className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-extrabold">About</h2>
          <p className="mt-3 text-neutral-700 max-w-prose">
            I create cozy, calming coloring books and kid-friendly adventures.
            Pages are designed with clean margins, no cut-offs, and high print readability.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-extrabold">Contact</h2>
          <p className="mt-3 text-neutral-700 max-w-prose">
            Questions or wholesale? Drop your email and I’ll get back to you.
          </p>
          <form className="mt-6 grid sm:grid-cols-3 gap-3">
            <input className="px-3 py-2 border rounded-xl" placeholder="Name" aria-label="Name" />
            <input className="px-3 py-2 border rounded-xl sm:col-span-2" placeholder="Email" aria-label="Email" />
            <button type="button" className="px-4 py-2 rounded-xl bg-neutral-900 text-white font-semibold hover:opacity-90 sm:col-span-3">
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Color the Magic. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a className="hover:opacity-70" href="#ctm">Color the Magic</a>
            <a className="hover:opacity-70" href="#cozy">Cozy</a>
            <a className="hover:opacity-70" href="#standalone">Standalone</a>
            <a className="hover:opacity-70" href="#divine">Divine Legends</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
