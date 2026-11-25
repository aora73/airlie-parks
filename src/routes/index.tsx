import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Dog, ExternalLink, Phone, Waves } from "lucide-react";
import { LAGOON, MAX_DRIVE, PARKS, type Flag, type Park } from "@/data/parks";

export const Route = createFileRoute("/")({ component: Home });

type SortKey = "drive" | "google" | "tripadvisor" | "name";
type FilterKey = "all" | "pets" | "close" | "pool" | "slides";

const FILTERS: { id: FilterKey; label: string }[] = [
  { id: "all", label: "All eight" },
  { id: "close", label: "Under 10 min" },
  { id: "pets", label: "Pets welcome" },
  { id: "pool", label: "Pool on site" },
  { id: "slides", label: "Water play" },
];

function Home() {
  const [sort, setSort] = useState<SortKey>("drive");
  const [filter, setFilter] = useState<FilterKey>("all");
  const [scope, setScope] = useState<"town" | "coast">("town");
  const [selectedId, setSelectedId] = useState("nrma");
  const [MapView, setMapView] = useState<typeof import("@/components/park-map").ParkMap | null>(
    null,
  );

  useEffect(() => {
    void import("@/components/park-map").then((mod) => setMapView(() => mod.ParkMap));
  }, []);

  const visible = useMemo(() => {
    const rows = PARKS.filter((park) => {
      if (filter === "close") return park.driveMin < 10;
      if (filter === "pets") return park.pets === "yes";
      if (filter === "pool") return park.pool === "yes";
      if (filter === "slides") return park.id === "adventure" || park.id === "conway" || park.id === "discovery";
      return true;
    });
    const copy = [...rows];
    copy.sort((a, b) => {
      if (sort === "name") return a.short.localeCompare(b.short);
      if (sort === "google") return (b.google.score ?? -1) - (a.google.score ?? -1);
      if (sort === "tripadvisor") return (b.tripadvisor.score ?? -1) - (a.tripadvisor.score ?? -1);
      return a.driveMin - b.driveMin || a.driveKm - b.driveKm;
    });
    return copy;
  }, [filter, sort]);

  function select(id: string) {
    const park = PARKS.find((item) => item.id === id);
    if (park && park.driveMin >= 10) setScope("coast");
    setSelectedId(id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(`park-${id}`)?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "nearest",
    });
  }

  const selected = visible.find((park) => park.id === selectedId) ?? visible[0] ?? null;
  const mapped = visible.filter((park) => scope === "coast" || park.driveMin < 10);

  return (
    <>
      <div className="bg-ink text-paper">
        <div className="h-1.5 bg-reef" />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-8">
          <a
            href="https://www.australianoffroadacademy.com.au/"
            className="flex min-h-11 items-center gap-3 text-paper"
          >
            <img src="brand/dingo-mark.png" alt="" className="size-11 bg-paper p-1" />
            <span>
              <span className="block text-xs tracking-wide text-sand">Australian Offroad Academy</span>
              <span className="font-display text-lg font-bold leading-none">Dingo Dave</span>
            </span>
          </a>
          <a
            href="https://aora-fieldstay.grok.me/"
            className="inline-flex min-h-11 items-center text-sm font-semibold underline decoration-reef underline-offset-4"
          >
            Stay ledger
          </a>
        </div>
      </div>
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:px-8 md:pt-10">
      <header className="border-b border-line pb-6">
        <p className="text-sm font-semibold tracking-wide text-reef">AORA · Whitsundays</p>
        <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-ink md:text-6xl">
          Caravan parks in and around Airlie Beach
        </h1>
        <p className="mt-3 max-w-3xl text-base text-muted md:text-lg">
          Eight parks that still take a van or a tent. Drive times are measured by car from the
          Airlie Beach Lagoon — the centre of town — not copied from a brochure. This sheet sits
          beside the{" "}
          <a href="https://aora-fieldstay.grok.me/" className="font-semibold text-reef underline underline-offset-2">
            AORA stay ledger
          </a>
          .
        </p>
        <figure className="mt-6 overflow-hidden border border-line">
          <img
            src="parks/lagoon.jpg"
            alt="People swimming in the Airlie Beach Lagoon, with forested hills behind the town."
            className="h-64 w-full object-cover sm:h-80 md:h-[28rem]"
          />
          <figcaption className="bg-foam px-3 py-2 text-xs leading-snug text-muted">
            Airlie Beach Lagoon, 24 April 2013. Every drive time on this page is measured from here.{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Airlie_Beach_Lagoon.JPG"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              Photo: Niki Gango, CC BY-SA 3.0
            </a>
          </figcaption>
        </figure>
        <dl className="mt-6 grid grid-cols-3 gap-3 border border-line bg-foam p-3 md:max-w-xl">
          <Stat k="Parks" v="8" />
          <Stat k="Closest" v="4 min" />
          <Stat k="Furthest" v="59 min" />
        </dl>
      </header>

      <section className="mt-8" aria-labelledby="map-heading">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 id="map-heading" className="font-display text-2xl font-semibold text-ink">
              Map
            </h2>
            <p className="text-sm text-muted">
              The red dot is the lagoon. Numbers are the drive rank. Airlie is the default so the five close parks stay readable. The base map is Esri street tiles — no map key.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setScope("town")}
              className={`min-h-11 border px-3 text-sm ${scope === "town" ? "border-ink bg-ink text-paper" : "border-line bg-paper text-ink"}`}
            >
              Airlie
            </button>
            <button
              type="button"
              onClick={() => setScope("coast")}
              className={`min-h-11 border px-3 text-sm ${scope === "coast" ? "border-ink bg-ink text-paper" : "border-line bg-paper text-ink"}`}
            >
              Whole coast
            </button>
          </div>
        </div>
        <div className="overflow-hidden border border-line bg-sand">
          {MapView ? (
            <MapView parks={mapped} selectedId={selected?.id ?? null} onSelect={select} />
          ) : (
            <div className="map-frame grid place-items-center text-sm text-muted">Loading the map…</div>
          )}
        </div>
        <ol className="mt-3 flex flex-wrap gap-2">
          {(mapped.length ? mapped : []).map((park) => (
            <li key={park.id}>
              <button
                type="button"
                onClick={() => select(park.id)}
                className={`min-h-11 border px-3 text-sm ${
                  selected?.id === park.id
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-paper text-ink"
                }`}
              >
                {park.rank} {park.short}
              </button>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10" aria-labelledby="table-heading">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 id="table-heading" className="font-display text-2xl font-semibold text-ink">
            Comparison
          </h2>
          <label className="text-sm text-muted">
            Sort
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortKey)}
              className="ml-2 min-h-11 border border-line bg-paper px-2 text-ink"
            >
              <option value="drive">Drive from the lagoon</option>
              <option value="google">Google score</option>
              <option value="tripadvisor">Tripadvisor score</option>
              <option value="name">Name</option>
            </select>
          </label>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`min-h-11 shrink-0 border px-3 text-sm ${
                filter === item.id ? "border-reef bg-reef text-paper" : "border-line bg-paper text-ink"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm text-muted">Swipe the table sideways. Tap a park to open it below.</p>
        <div className="mt-3 overflow-x-auto border border-line">
          <table className="compare-table w-full border-collapse text-left text-sm">
            <thead className="bg-ink text-paper">
              <tr>
                <Th>#</Th>
                <Th>Park</Th>
                <Th>By car</Th>
                <Th>Google</Th>
                <Th>Tripadvisor</Th>
                <Th>Pets</Th>
                <Th>Pool</Th>
                <Th>Kitchen</Th>
                <Th>Dump</Th>
                <Th>Beach</Th>
                <Th>Best for</Th>
              </tr>
            </thead>
            <tbody>
              {visible.map((park) => {
                const on = park.id === selected?.id;
                return (
                  <tr key={park.id} className={on ? "bg-foam" : "bg-paper"}>
                    <td className="border-t border-line px-3 py-3 font-semibold">{park.rank}</td>
                    <td className="border-t border-line px-3 py-3">
                      <button
                        type="button"
                        onClick={() => select(park.id)}
                        className="min-h-11 text-left font-semibold text-ink underline decoration-line underline-offset-4"
                      >
                        {park.short}
                      </button>
                      <div className="text-muted">{park.suburb}</div>
                    </td>
                    <td className="border-t border-line px-3 py-3 whitespace-nowrap">
                      <div className="font-semibold">{park.driveMin} min</div>
                      <div className="text-muted">{park.driveKm.toFixed(1)} km</div>
                      <div className="mt-1 h-1 w-16 bg-sand">
                        <div
                          className="h-1 bg-reef"
                          style={{ width: `${Math.max(8, (park.driveMin / MAX_DRIVE) * 100)}%` }}
                        />
                      </div>
                    </td>
                    <td className="border-t border-line px-3 py-3">
                      <ScoreLink score={park.google} />
                    </td>
                    <td className="border-t border-line px-3 py-3">
                      <ScoreLink score={park.tripadvisor} />
                    </td>
                    <td className="border-t border-line px-3 py-3">
                      <FlagCell flag={park.pets} />
                    </td>
                    <td className="border-t border-line px-3 py-3">
                      <FlagCell flag={park.pool} />
                    </td>
                    <td className="border-t border-line px-3 py-3">
                      <FlagCell flag={park.kitchen} />
                    </td>
                    <td className="border-t border-line px-3 py-3">
                      <FlagCell flag={park.dump} />
                    </td>
                    <td className="border-t border-line px-3 py-3">{park.beach}</td>
                    <td className="border-t border-line px-3 py-3">{park.bestFor}</td>
                  </tr>
                );
              })}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={11} className="px-3 py-8 text-muted">
                    Nothing in this filter. Try all eight.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-sm text-muted">
          “Ask” means the operator listing did not confirm it. It is not a no.
        </p>
      </section>

      <section className="mt-12" aria-labelledby="parks-heading">
        <h2 id="parks-heading" className="font-display text-2xl font-semibold text-ink">
          Each park
        </h2>
        <div className="mt-4 grid gap-6">
          {visible.map((park) => (
            <article
              key={park.id}
              id={`park-${park.id}`}
              className={`grid overflow-hidden border bg-paper md:grid-cols-[minmax(0,18rem)_1fr] ${
                selected?.id === park.id ? "border-reef" : "border-line"
              }`}
            >
              <figure className="bg-sand">
                <img
                  src={park.photo}
                  alt={park.photoCaption}
                  className="h-56 w-full object-cover md:h-72"
                />
                <figcaption className="px-3 py-2 text-xs leading-snug text-muted">
                  {park.photoCaption}{" "}
                  <a
                    href={park.photoCreditUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    {park.photoCredit}
                  </a>
                </figcaption>
              </figure>
              <div className="p-4 md:p-6">
                <p className="text-sm font-medium text-reef">
                  {park.rank} · {park.driveMin} min · {park.driveKm.toFixed(1)} km from the lagoon
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-ink">
                  {park.name}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {park.address}
                  {park.former ? ` · Formerly ${park.former}` : ""}
                </p>
                <p className="mt-3 text-base text-ink">{park.blurb}</p>
                {park.driveNote && <p className="mt-2 text-sm text-muted">{park.driveNote}</p>}
                <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  <Fact icon="score" label="Google" value={<ScoreLink score={park.google} />} />
                  <Fact icon="score" label="Tripadvisor" value={<ScoreLink score={park.tripadvisor} />} />
                  <Fact icon="dog" label="Pets" value={park.petsLabel} />
                  <Fact icon="pool" label="Pool" value={park.poolLabel} />
                  <Fact icon="score" label="Sites" value={park.sites} />
                  <Fact icon="score" label="Beach" value={park.beach} />
                </dl>
                <p className="mt-4 border-l-2 border-clay pl-3 text-sm text-ink">
                  <span className="font-semibold">Before you book. </span>
                  {park.watch}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    className="inline-flex min-h-11 items-center gap-2 bg-reef px-3 text-sm font-medium text-paper"
                    href={park.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Park website
                    <ExternalLink className="size-4" aria-hidden />
                  </a>
                  <a
                    className="inline-flex min-h-11 items-center gap-2 border border-line px-3 text-sm font-medium text-ink"
                    href={directions(park)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Directions
                  </a>
                  {park.phone.startsWith("(") && (
                    <a
                      className="inline-flex min-h-11 items-center gap-2 border border-line px-3 text-sm font-medium text-ink"
                      href={`tel:${park.phone.replace(/[^\d+]/g, "")}`}
                    >
                      <Phone className="size-4" aria-hidden />
                      {park.phone}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-10 border-t border-line pt-4 text-sm text-muted">
        <p>
          Australian Offroad Academy · Dingo Dave.{" "}
          <a href="https://aora-fieldstay.grok.me/" className="font-semibold text-ink underline underline-offset-2">
            Accommodation ledger
          </a>
          {" · "}
          <a href="https://aora73.github.io/aora-visitor-guides/airlie-parks/" className="font-semibold text-ink underline underline-offset-2">
            This page
          </a>
          {" · "}
          <a
            href="https://github.com/aora73/airlie-parks"
            className="font-semibold text-ink underline underline-offset-2"
          >
            GitHub
          </a>
        </p>
        <p className="mt-2 text-xs">
          <a href="numbers" className="underline underline-offset-2">
            How the numbers were made
          </a>
        </p>
      </footer>
    </main>
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-sm text-muted">{k}</dt>
      <dd className="font-display text-2xl font-semibold text-ink">{v}</dd>
    </div>
  );
}

function Th({ children }: { children: string }) {
  return <th className="px-3 py-3 font-medium">{children}</th>;
}

function ScoreLink({ score }: { score: Park["google"] }) {
  const label =
    score.score == null
      ? "Not confirmed"
      : `${score.score.toFixed(1)}${score.count != null ? ` · ${score.count.toLocaleString("en-AU")}` : score.approx ? ` · ${score.approx}` : ""}`;
  return (
    <a href={score.url} target="_blank" rel="noreferrer" className="font-semibold text-reef underline-offset-2 hover:underline">
      {label}
    </a>
  );
}

function FlagCell({ flag }: { flag: Flag }) {
  const label = flag === "yes" ? "Yes" : flag === "no" ? "No" : flag === "nearby" ? "Next door" : "Ask";
  const tone = flag === "yes" ? "text-reef" : flag === "no" ? "text-clay" : "text-muted";
  return <span className={`font-medium ${tone}`}>{label}</span>;
}

function Fact({
  icon,
  label,
  value,
}: {
  icon: "dog" | "pool" | "score";
  label: string;
  value: ReactNode;
}) {
  const Icon = icon === "dog" ? Dog : icon === "pool" ? Waves : null;
  return (
    <div className="flex gap-2">
      {Icon ? <Icon className="mt-0.5 size-4 shrink-0 text-reef" aria-hidden /> : null}
      <div>
        <dt className="text-muted">{label}</dt>
        <dd className="text-ink">{value}</dd>
      </div>
    </div>
  );
}

function directions(park: Park) {
  const origin = `${LAGOON.lat},${LAGOON.lng}`;
  const dest = `${park.lat},${park.lng}`;
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=driving`;
}
