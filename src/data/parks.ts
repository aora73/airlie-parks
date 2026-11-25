export const LAGOON = {
  name: "Airlie Beach Lagoon",
  lat: -20.2672255,
  lng: 148.7174278,
};

export type Flag = "yes" | "no" | "ask" | "nearby";

export type Score = {
  score: number | null;
  count: number | null;
  approx?: string;
  url: string;
};

export type Park = {
  id: string;
  rank: number;
  name: string;
  short: string;
  former?: string;
  suburb: string;
  address: string;
  lat: number;
  lng: number;
  driveKm: number;
  driveMin: number;
  driveNote?: string;
  google: Score;
  tripadvisor: Score;
  website: string;
  phone: string;
  pets: Flag;
  petsLabel: string;
  pool: Flag;
  poolLabel: string;
  kitchen: Flag;
  dump: Flag;
  cabins: Flag;
  sites: string;
  beach: string;
  bestFor: string;
  blurb: string;
  watch: string;
  photo: string;
  photoCaption: string;
  photoCredit: string;
  photoCreditUrl: string;
  photo2: string;
  photo2Caption: string;
  photo2Credit: string;
  photo2CreditUrl: string;
};

const g = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const PARKS: Park[] = [
  {
    id: "nrma",
    rank: 1,
    name: "NRMA Airlie Beach Holiday Park",
    short: "NRMA Airlie Beach",
    former: "Seabreeze Tourist Park",
    suburb: "Cannonvale",
    address: "234 Shute Harbour Road, Cannonvale QLD 4802",
    lat: -20.276246,
    lng: 148.7031296,
    driveKm: 2.2,
    driveMin: 4,
    google: {
      score: 4.2,
      count: 1235,
      url: g("NRMA Airlie Beach Holiday Park Cannonvale"),
    },
    tripadvisor: {
      score: 4.1,
      count: 727,
      url: "https://www.tripadvisor.com/Hotel_Review-g2108610-d3609710-Reviews-NRMA_Airlie_Beach_Holiday_Park-Cannonvale_Airlie_Beach_Queensland.html",
    },
    website: "https://www.nrmaparksandresorts.com.au/airlie-beach/",
    phone: "(07) 4946 6379",
    pets: "yes",
    petsLabel: "Yes, on sites year-round",
    pool: "yes",
    poolLabel: "Two pools",
    kitchen: "yes",
    dump: "yes",
    cabins: "yes",
    sites: "Powered and unpowered sites, plus cabins",
    beach: "Cannonvale Beach, about a 5-minute walk",
    bestFor: "Pets, shops, a quieter base",
    blurb:
      "The closest park to the lagoon by car, on the Cannonvale side of Shute Harbour Road beside the shopping strip. Coles is next door. The foreshore walk into Airlie takes about 40 minutes, so most people drive or catch the bus for the reef boats. On site: two pools, a café and bar, camp kitchen, laundry and a dump point.",
    watch:
      "Some recent guests still call the amenities dated, and the road out front is busy. A 2026 review noted EV charging on site — confirm a bay when you book.",
    photo: "parks/nrma.jpg",
    photoCaption:
      "Pioneer Bay and Pigeon Island from Coral Esplanade, Cannonvale, in 2007. The park sits on this side of town, beside Cannonvale Beach. This is the bay, not the grounds.",
    photoCredit: "Steve Gibson, CC BY 2.0",
    photoCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Looking_from_Coral_Esplanade,_Cannonvale,_across_Pioneer_Bay_to_Pigeon_Island,_2007.jpg",
    photo2: "parks/nrma-2.jpg",
    photo2Caption:
      "Cannonvale Beach in 2012, about a five-minute walk from the park. This is the beach, not the grounds.",
    photo2Credit: "Ian Sutton, CC BY 2.0",
    photo2CreditUrl: "https://commons.wikimedia.org/wiki/File:Cannonvale_beach,_2012.jpg",
  },
  {
    id: "tasman",
    rank: 2,
    name: "Tasman Holiday Parks – Airlie Beach",
    short: "Tasman Airlie Beach",
    former: "Island Gateway Holiday Park",
    suburb: "Jubilee Pocket",
    address: "1 Jubilee Pocket Road, Airlie Beach QLD 4802",
    lat: -20.2820253,
    lng: 148.7299396,
    driveKm: 2.5,
    driveMin: 5,
    driveNote: "The park says the lagoon is about a 4-minute drive, or a 27-minute walk.",
    google: {
      score: 4.4,
      count: 1179,
      url: g("Tasman Holiday Parks Airlie Beach 1 Jubilee Pocket Road"),
    },
    tripadvisor: {
      score: 4.3,
      count: 319,
      url: "https://www.tripadvisor.com/Hotel_Review-g5408947-d1389102-Reviews-Tasman_Holiday_Parks_Airlie_Beach-Jubilee_Pocket_Airlie_Beach_Queensland.html",
    },
    website: "https://tasmanholidayparks.com/au/airlie-beach/",
    phone: "(07) 4860 1700",
    pets: "yes",
    petsLabel: "Pet-friendly sites",
    pool: "yes",
    poolLabel: "Resort pool, not a water park",
    kitchen: "yes",
    dump: "ask",
    cabins: "yes",
    sites: "Powered and unpowered sites, cabins and glamping",
    beach: "No beach on the doorstep. Lagoon is a short drive.",
    bestFor: "Walking into town",
    blurb:
      "On the Jubilee Pocket corner, east of the main street. The operator puts central Airlie at an 18-minute walk and the lagoon at about four minutes in the car. Resort pool, pump track, playground, BBQs, camp kitchen and laundry. Guests regularly mention the 4pm bird feeding. Buses 860 and 861 stop nearby for the marina.",
    watch:
      "This is a leafy holiday park, not a slide park. The little supermarket nearby is handy; the big shops are back in Cannonvale.",
    photo: "parks/tasman.jpg",
    photoCaption:
      "Airlie Beach main street. Tasman puts the centre of town at an 18-minute walk from the park.",
    photoCredit: "Richard N Horne, CC BY 4.0",
    photoCreditUrl: "https://commons.wikimedia.org/wiki/File:Airlie_Beach,_Main_Street.jpg",
    photo2: "parks/tasman-2.jpg",
    photo2Caption:
      "The foreshore path at Airlie Beach. Tasman puts the centre of town at an 18-minute walk.",
    photo2Credit: "Richard N Horne, CC BY 4.0",
    photo2CreditUrl: "https://commons.wikimedia.org/wiki/File:Airlie_Beach_Pathway.jpg",
  },
  {
    id: "discovery",
    rank: 3,
    name: "Discovery Parks – Airlie Beach",
    short: "Discovery Airlie Beach",
    former: "BIG4 Airlie Cove Resort",
    suburb: "Jubilee Pocket",
    address: "2634 Shute Harbour Road, Jubilee Pocket QLD 4802",
    lat: -20.28403,
    lng: 148.73791,
    driveKm: 3.5,
    driveMin: 5,
    google: {
      score: 4.2,
      count: 820,
      url: g("Discovery Parks Airlie Beach 2634 Shute Harbour Road"),
    },
    tripadvisor: {
      score: 4.2,
      count: 455,
      url: "https://www.tripadvisor.com/Hotel_Review-g261596-d283874-Reviews-Discovery_Parks_Airlie_Beach-Airlie_Beach_Queensland.html",
    },
    website:
      "https://www.discoveryholidayparks.com.au/caravan-parks/queensland/whitsunday-coast-airlie-beach/",
    phone: "(07) 4946 6727",
    pets: "ask",
    petsLabel: "Ask — listings disagree",
    pool: "yes",
    poolLabel: "Pool open; water park being upgraded",
    kitchen: "yes",
    dump: "ask",
    cabins: "yes",
    sites: "Sites and cabins, including pet-friendly sites on some listings",
    beach: "Not beachfront. Port of Airlie is a few minutes' drive.",
    bestFor: "Rainforest edge, families",
    blurb:
      "Set against Conway National Park, east of town towards Shute Harbour. Formerly BIG4 Airlie Cove. The park sells itself on wildlife in the grounds — lorikeets, wallabies, goannas — plus a pool and a water park that Discovery says is being upgraded while the pool stays open. A bus stops out the front. Third-party listings put Port of Airlie about a 3-minute drive away.",
    watch:
      "Tourism Whitsundays says pet-friendly sites are available if you enquire. Another booking site says no pets. Ring before you tow a dog.",
    photo: "parks/discovery.jpg",
    photoCaption:
      "The BIG4 park at Jubilee Pocket in August 2009. That park is now Discovery Parks – Airlie Beach.",
    photoCredit: "Geoff & Dianne Rhodes, CC BY 2.0",
    photoCreditUrl: "https://commons.wikimedia.org/wiki/File:Caravan_park,_Jubilee_Pocket,_2009.jpg",
    photo2: "parks/discovery-2.jpg",
    photo2Caption:
      "The Beak lookout, Conway National Park, November 2024. The park backs onto this national park. This is the lookout, not the grounds.",
    photo2Credit: "Hagai Agmon-Snir, CC BY-SA 4.0",
    photo2CreditUrl: "https://commons.wikimedia.org/wiki/File:TheBeakLookoutNov042024_02.jpg",
  },
  {
    id: "adventure",
    rank: 4,
    name: "BIG4 Adventure Whitsunday Resort",
    short: "Adventure Whitsunday",
    suburb: "Airlie Beach",
    address: "25–29 Shute Harbour Road, Airlie Beach QLD 4802",
    lat: -20.2852079,
    lng: 148.6784139,
    driveKm: 5.2,
    driveMin: 8,
    driveNote:
      "Postal address is Airlie Beach. The mapped site sits on the Cannonvale side of the suburb boundary, west of the shops.",
    google: {
      score: 4.6,
      count: 1656,
      url: g("BIG4 Adventure Whitsunday Resort 29 Shute Harbour Road"),
    },
    tripadvisor: {
      score: 4.7,
      count: 1018,
      url: "https://www.tripadvisor.com/Hotel_Review-g2108610-d623807-Reviews-BIG4_Adventure_Whitsunday_Resort-Cannonvale_Airlie_Beach_Queensland.html",
    },
    website: "https://www.adventurewhitsunday.com.au/",
    phone: "(07) 4948 5400",
    pets: "no",
    petsLabel: "No pets. Assistance animals welcome.",
    pool: "yes",
    poolLabel: "Lagoon pool and 13-slide water park",
    kitchen: "yes",
    dump: "ask",
    cabins: "yes",
    sites: "Camp sites through to 3-bedroom cabins, plus group dorms",
    beach: "Not on the beach. About 8 minutes to the lagoon.",
    bestFor: "Families who want the slides",
    blurb:
      "The big family resort on Shute Harbour Road, run by the McKinnon family since 1993. Thirteen waterslides, a lagoon pool, jumping pillows, floodlit mini golf, an animal park, outdoor cinema and a camp kitchen. It is the highest-rated park in this set on both Google and Tripadvisor. You will use the car for the main street.",
    watch:
      "A new accommodation wing, café and resort works are under construction. The park says work zones are fenced off from guests. No pets.",
    photo: "parks/adventure.jpg",
    photoCaption:
      "Airlie Beach, looking west over Pioneer Bay. Adventure Whitsunday is further along Shute Harbour Road, on the Cannonvale side. This is the bay, not the water park.",
    photoCredit: "John Robert McPherson, CC BY-SA 4.0",
    photoCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Airlie_Beach_looking_west,_Airlie_Beach_IMGP0257.jpg",
    photo2: "parks/adventure-2.jpg",
    photo2Caption:
      "Dawn on Pioneer Bay at Cannonvale. The resort is on this side of town. This is the bay, not the water park.",
    photo2Credit: "John Robert McPherson, CC BY-SA 4.0",
    photo2CreditUrl:
      "https://commons.wikimedia.org/wiki/File:Dawn,_Pioneer_Bay,_Cannonvale,_IMGP0017.jpg",
  },
  {
    id: "islands",
    rank: 5,
    name: "BIG4 Whitsunday Islands Holiday Park",
    short: "Whitsunday Islands",
    former: "BIG4 Whitsundays Tropical Eco Resort",
    suburb: "Flametree",
    address: "2955 Shute Harbour Road, Flametree QLD 4802",
    lat: -20.2772373,
    lng: 148.7541506,
    driveKm: 6.4,
    driveMin: 8,
    google: {
      score: 4.3,
      count: 641,
      url: g("BIG4 Whitsunday Islands Holiday Park Flametree"),
    },
    tripadvisor: {
      score: 4.5,
      count: 583,
      url: "https://www.tripadvisor.com/Search?q=BIG4%20Whitsunday%20Islands%20Holiday%20Park%20Flametree",
    },
    website: "https://www.big4.com.au/caravan-parks/qld/whitsunday/whitsunday-islands-holiday-park",
    phone: "(07) 4946 9388",
    pets: "yes",
    petsLabel: "Pets welcome year-round — confirm size when you book",
    pool: "yes",
    poolLabel: "Solar-heated pool",
    kitchen: "yes",
    dump: "ask",
    cabins: "yes",
    sites: "Sites and cabins on 7 acres of rainforest",
    beach: "Not beachfront. Shute Harbour is a few minutes further east.",
    bestFor: "Dogs and a quieter rainforest base",
    blurb:
      "Seven acres against Conway National Park at Flametree, between Airlie and Shute Harbour. Solar-heated pool, outdoor cinema, camp kitchen, BBQs, kiosk, laundry and a tour desk. BIG4 currently advertises dogs year-round. The mapped drive from the lagoon is 8 minutes — the same ballpark as Adventure, but in the opposite direction.",
    watch:
      "Review summaries mention dated cabins and early aircraft noise. Ask which rows sit away from the flight path if sleep matters.",
    photo: "parks/islands.jpg",
    photoCaption: "Boats in Shute Harbour, a few minutes east of the Flametree park.",
    photoCredit: "John Robert McPherson, CC BY-SA 4.0",
    photoCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Shute_Harbour_anchorage,_Shute_Harbour_IMGP0102.jpg",
    photo2: "parks/islands-2.jpg",
    photo2Caption:
      "Flametree in 2004, the suburb the park is in. This house is not the holiday park.",
    photo2Credit: "James Burke, CC BY 2.0",
    photo2CreditUrl:
      "https://commons.wikimedia.org/wiki/File:Flametree,_Queensland,_Australia,_2004.jpg",
  },
  {
    id: "proserpine",
    rank: 6,
    name: "Whitsunday Holiday Park – Proserpine",
    short: "Proserpine",
    suburb: "Proserpine",
    address: "79–83 Anzac Road, Proserpine QLD 4800",
    lat: -20.40484,
    lng: 148.571619,
    driveKm: 26.4,
    driveMin: 27,
    driveNote: "The council markets the run as about 20 minutes. The mapped free-flow route from the lagoon is 27 minutes.",
    google: {
      score: null,
      count: null,
      url: g("Whitsunday Holiday Park Proserpine 79 Anzac Road"),
    },
    tripadvisor: {
      score: 4.5,
      count: 22,
      url: "https://www.tripadvisor.com/Hotel_Review-g499682-d10429334-Reviews-Whitsunday_Holiday_Park_Proserpine-Proserpine_Queensland.html",
    },
    website: "https://www.whitsundayholidayparks.com.au/Our-Parks/Proserpine",
    phone: "(07) 4945 0490",
    pets: "yes",
    petsLabel: "Pets allowed",
    pool: "nearby",
    poolLabel: "Town pool and water park next door, not inside the park",
    kitchen: "yes",
    dump: "ask",
    cabins: "yes",
    sites: "56 powered sites, 16 unpowered, two small cabins",
    beach: "Inland. No beach.",
    bestFor: "A cheap overnight, or a base near the airport",
    blurb:
      "Whitsunday Regional Council's small town park on Anzac Road, next to the bowls club, tennis courts, showgrounds and golf club. Fifty-six powered sites, sixteen unpowered, and two cabins that sleep two. Camp kitchen, BBQs, communal TV and a coin laundry. The main street is about a 15-minute walk. Whitsunday Coast Airport is the next suburb over.",
    watch:
      "Tripadvisor lists a pool because the public pool is next door — it is not inside the park. The 4.5 score is from only 22 reviews. A separate Google total was not published in the sources checked.",
    photo: "parks/proserpine.jpg",
    photoCaption:
      "Proserpine Entertainment Centre, May 2023. The holiday park is on Anzac Road, a short walk from the main street.",
    photoCredit: "Greditdesu, CC BY-SA 4.0",
    photoCreditUrl: "https://commons.wikimedia.org/wiki/File:Proserpine_Entertainment_Centre_May_2023.jpg",
    photo2: "parks/proserpine-2.jpg",
    photo2Caption:
      "Main Street, Proserpine. The holiday park is about a 15-minute walk from here. Not the grounds.",
    photo2Credit: "Greditdesu, CC BY-SA 3.0",
    photo2CreditUrl: "https://commons.wikimedia.org/wiki/File:Main_Street_Proserpine.jpg",
  },
  {
    id: "conway",
    rank: 7,
    name: "BIG4 Ingenia Holidays Conway Beach",
    short: "Conway Beach",
    former: "Conway Beach Tourist Park",
    suburb: "Conway Beach",
    address: "10 Daniels Street, Conway Beach QLD 4800",
    lat: -20.47669,
    lng: 148.73729,
    driveKm: 38.6,
    driveMin: 37,
    driveNote: "Operators and guests often say about 30 minutes. The mapped route from the lagoon is 37 minutes.",
    google: {
      score: 4.4,
      count: 363,
      url: g("BIG4 Ingenia Holidays Conway Beach 10 Daniels Street"),
    },
    tripadvisor: {
      score: 4.2,
      count: 85,
      url: "https://www.tripadvisor.com/Hotel_Review-g255083-d8403171-Reviews-Conway_Beach_Tourist_Park-Whitsunday_Islands_Queensland.html",
    },
    website: "https://www.big4.com.au/caravan-parks/qld/whitsunday/conway-beach-tourist-park",
    phone: "See the park website",
    pets: "yes",
    petsLabel: "Dogs on selected sites and in some cabins",
    pool: "yes",
    poolLabel: "Pool, splash park and jumping pillow",
    kitchen: "yes",
    dump: "ask",
    cabins: "yes",
    sites: "Cabins and sites, including ensuite sites",
    beach: "About 100 metres to Conway Beach",
    bestFor: "Beach, space, kids — if you don't mind the drive",
    blurb:
      "South of the airport on a long open beach, with the Whitsunday islands on the horizon. Pool, splash park, jumping pillow, tennis, pedal karts, camp kitchen and George's Diner on site. Dogs are accepted on selected sites and in nominated cabins. Guests who like it talk about the stroll to the sand and how maintained the grounds are.",
    watch:
      "You are giving up the lagoon. Google review summaries flag mosquitoes and patchy after-hours check-in. Stinger season on this coast runs roughly October to May.",
    photo: "parks/conway.jpg",
    photoCaption:
      "Conway Beach at low tide, photographed from the cliff in 1937–38. The park is on this beach now. This is not a current photo of the grounds.",
    photoCredit: "State Library of Queensland, public domain",
    photoCreditUrl:
      "https://commons.wikimedia.org/wiki/File:StateLibQld_2_242179_View_from_the_cliff_at_low_tide,_Conway_Beach,_Proserpine,_1937-1938.jpg",
    photo2: "parks/conway-2.jpg",
    photo2Caption:
      "Coral Beach walking track in Conway National Park. That is a different beach, near Shute Harbour, not the park at Conway Beach.",
    photo2Credit: "Timothy Wakeham, CC BY-SA 4.0",
    photo2CreditUrl:
      "https://commons.wikimedia.org/wiki/File:Coral_Beach_Walking_Track,_Conway_National_Park.jpg",
  },
  {
    id: "hydeaway",
    rank: 8,
    name: "Hydeaway Bay Caravan & Camping Park",
    short: "Hydeaway Bay",
    suburb: "Hydeaway Bay",
    address: "414 Hydeaway Bay Drive, Hydeaway Bay QLD 4800",
    lat: -20.0870417,
    lng: 148.487315,
    driveKm: 52,
    driveMin: 59,
    driveNote: "The park says about 45 minutes north of Airlie. The mapped road route is 52 km and 59 minutes.",
    google: {
      score: 3.9,
      count: null,
      approx: "~200",
      url: g("Hydeaway Bay Caravan and Camping Park"),
    },
    tripadvisor: {
      score: 3.3,
      count: 109,
      url: "https://www.tripadvisor.com/Hotel_Review-g3248346-d4843494-Reviews-Hydeaway_Bay_Caravan_Camping_Park-Hydeaway_Bay_Queensland.html",
    },
    website: "https://hydeawaybaycaravanpark.com.au/",
    phone: "(07) 4945 7170",
    pets: "yes",
    petsLabel: "All sites. Pets must be restrained.",
    pool: "yes",
    poolLabel: "Newer swimming pool",
    kitchen: "yes",
    dump: "yes",
    cabins: "ask",
    sites: "Caravan and camping sites",
    beach: "A short walk to a swimming beach",
    bestFor: "A quiet beach week, not a night in town",
    blurb:
      "The northern option, on the Gloucester side of the cape. New pool, camp kitchen with gas BBQs, timber-fired BBQ, shared fire pit, kiosk, rec room, coin laundry and a chemical-free dump point. Every site takes a restrained dog. The beach and the pub are walkable. There is no town water network here — the park has rainwater if you need it.",
    watch:
      "Lowest Tripadvisor score in this set (3.3 from 109). Bring groceries; Proserpine is the supply run. Treat the drive as an hour, not the brochure's 45 minutes, if you are towing.",
    photo: "parks/hydeaway.jpg",
    photoCaption: "Hydeaway Bay in 2021. The caravan park is a short walk from this beach.",
    photoCredit: "Allan Henderson, CC BY 2.0",
    photoCreditUrl: "https://commons.wikimedia.org/wiki/File:Hydeaway_Bay,_2021.jpg",
    photo2: "parks/hydeaway-2.jpg",
    photo2Caption:
      "Boats at Dingo Beach in 2009, the next beach around from Hydeaway Bay. Not the park.",
    photo2Credit: "Allan Henderson, CC BY 2.0",
    photo2CreditUrl: "https://commons.wikimedia.org/wiki/File:Boating,_Dingo_Beach,_2009.jpg",
  },
];

export const MAX_DRIVE = Math.max(...PARKS.map((p) => p.driveMin));
