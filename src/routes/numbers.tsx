import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/numbers")({
  head: () => ({
    meta: [{ title: "How the numbers were made · Airlie Parks" }],
  }),
  component: Numbers,
});

function Numbers() {
  return (
    <>
      <div className="bg-ink text-paper">
        <div className="h-1.5 bg-reef" />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-8">
          <a href="./" className="flex min-h-11 items-center gap-3 text-paper">
            <img src="brand/dingo-mark.png" alt="" className="size-11 bg-paper p-1" />
            <span>
              <span className="block text-xs tracking-wide text-sand">Australian Offroad Academy</span>
              <span className="font-display text-lg font-bold leading-none">Dingo Dave</span>
            </span>
          </a>
        </div>
      </div>
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-6 md:px-8 md:pt-10">
        <p className="text-sm">
          <a href="./" className="text-reef underline underline-offset-2">
            Back to the parks
          </a>
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink">
          How the numbers were made
        </h1>
        <ul className="mt-6 grid gap-4 text-base text-ink">
          <li>
            Town centre is the Airlie Beach Lagoon, Shute Harbour Road (−20.2672, 148.7174). Drive
            times and distances are one-way car routes on the OpenStreetMap road network (OSRM),
            free-flow, not live traffic. Checked 24 November 2026.
          </li>
          <li>
            Where a park’s own copy says a shorter time — Conway “about 30 minutes”, Hydeaway “about
            45”, Proserpine “about 20” — that line is quoted on the card. The table uses the mapped
            route, which is the slower, longer figure.
          </li>
          <li>
            Google scores are from Google’s hotel listings (or, for Tasman and Conway, a published
            extract of those reviews). Tripadvisor scores are from each property page. Hydeaway’s
            Google 3.9 is stable across directories; the review count is about 200 on Google-style
            listings and higher when mixed sources are bundled, so the count is shown as approximate.
            Proserpine did not have a separate Google total in the sources checked.
          </li>
          <li>
            Scores move. Facilities, pet rules and construction notes were taken from operator pages
            current in October–November 2026 (Camplify’s 13 October 2026 roundup, BIG4, NRMA,
            Discovery, Tasman, Whitsunday Regional Council, Hydeaway Bay). Ring the park before you
            rely on pets, a dump point marked “Ask”, or a site under the water slide.
          </li>
          <li>
            Photographs are real and freely licensed, mostly from Wikimedia Commons. Where a current
            photo of the grounds was not available, the picture is of the beach or the town, and the
            caption says so. None of them are generated.
          </li>
        </ul>
      </main>
    </>
  );
}
