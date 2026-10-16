import type { Experience } from "@/types/experience";

const adventureImages = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
];

const cultureImages = [
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80",
];

const foodImages = [
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
];

const wellnessImages = [
  "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
];

const natureImages = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=80",
];

export const experiences: Experience[] = [
  {
    id: "exp-001", title: "Sunrise Trek to Rainbow Mountain", description: "Hike above the clouds with a local guide and watch the Andes glow at first light.",
    category: "Adventure", destination: "Cusco, Peru", price: 89, rating: 4.9,
    imageUrl: adventureImages[0],
  },
  {
    id: "exp-002", title: "Table Mountain at Golden Hour", description: "Climb a scenic trail to sweeping Cape Town views as the sun sets over the Atlantic.",
    category: "Adventure", destination: "Cape Town, South Africa", price: 72, rating: 4.8,
    imageUrl: adventureImages[1],
  },
  {
    id: "exp-003", title: "Queenstown Canyon Swing", description: "Leap into a dramatic alpine canyon with a certified crew and panoramic lake views.",
    category: "Adventure", destination: "Queenstown, New Zealand", price: 145, rating: 4.9,
    imageUrl: adventureImages[2],
  },
  {
    id: "exp-004", title: "Glacier Walk in Skaftafell", description: "Explore blue ice formations and crevasses on a small-group glacier expedition.",
    category: "Adventure", destination: "Reykjavik, Iceland", price: 118, rating: 4.8,
    imageUrl: adventureImages[3],
  },
  {
    id: "exp-005", title: "Banff Via Ferrata Climb", description: "Traverse ladders and suspension bridges high above the Canadian Rockies.",
    category: "Adventure", destination: "Banff, Canada", price: 132, rating: 4.9,
    imageUrl: adventureImages[4],
  },
  {
    id: "exp-006", title: "Interlaken Paragliding Flight", description: "Soar over turquoise lakes with an expert pilot and land in the heart of town.",
    category: "Adventure", destination: "Interlaken, Switzerland", price: 210, rating: 4.9,
    imageUrl: adventureImages[0],
  },
  {
    id: "exp-007", title: "Annapurna Foothills Day Hike", description: "Follow stone paths through hillside villages and rhododendron forests.",
    category: "Adventure", destination: "Pokhara, Nepal", price: 64, rating: 4.7,
    imageUrl: adventureImages[1],
  },
  {
    id: "exp-008", title: "Atlas Mountains E-Bike Ride", description: "Ride quiet mountain roads past Berber villages with a picnic beside a river.",
    category: "Adventure", destination: "Marrakech, Morocco", price: 96, rating: 4.8,
    imageUrl: adventureImages[2],
  },
  {
    id: "exp-009", title: "Moab Desert Canyoneering", description: "Rappel into sandstone slots and discover hidden pools with a wilderness guide.",
    category: "Adventure", destination: "Moab, United States", price: 155, rating: 4.9,
    imageUrl: adventureImages[3],
  },
  {
    id: "exp-010", title: "La Paz Mountain Bike Descent", description: "Descend high-altitude switchbacks through changing landscapes with full safety gear.",
    category: "Adventure", destination: "La Paz, Bolivia", price: 110, rating: 4.8,
    imageUrl: adventureImages[4],
  },
  {
    id: "exp-011", title: "Arctic Dog Sled Adventure", description: "Mush a team of huskies across snowy trails and warm up around a campfire.",
    category: "Adventure", destination: "Tromso, Norway", price: 189, rating: 4.8,
    imageUrl: adventureImages[0],
  },
  {
    id: "exp-012", title: "Kathmandu Valley Rock Climbing", description: "Learn climbing basics on natural limestone with views across the valley.",
    category: "Adventure", destination: "Kathmandu, Nepal", price: 78, rating: 4.7,
    imageUrl: adventureImages[1],
  },
  {
    id: "exp-013", title: "Chamonix Aiguille Hiking Route", description: "Take a guided high-alpine hike beneath Mont Blanc and spot wild ibex.",
    category: "Adventure", destination: "Chamonix, France", price: 125, rating: 4.9,
    imageUrl: adventureImages[2],
  },
  {
    id: "exp-014", title: "Madeira Levada Trail Run", description: "Run a lush irrigation trail past waterfalls and laurel forest with a local athlete.",
    category: "Adventure", destination: "Funchal, Portugal", price: 58, rating: 4.8,
    imageUrl: adventureImages[3],
  },
  {
    id: "exp-015", title: "Arenal Volcano Zipline Circuit", description: "Fly between rainforest platforms with views of the volcano and Lake Arenal.",
    category: "Adventure", destination: "La Fortuna, Costa Rica", price: 92, rating: 4.8,
    imageUrl: adventureImages[4],
  },
  {
    id: "exp-016", title: "Auckland Harbor Kayak", description: "Paddle to a volcanic island and climb to its summit for a harbor panorama.",
    category: "Adventure", destination: "Auckland, New Zealand", price: 84, rating: 4.7,
    imageUrl: adventureImages[0],
  },
  {
    id: "exp-017", title: "Ubud Jungle ATV Expedition", description: "Navigate muddy tracks, rice terraces, and forest paths on a guided quad ride.",
    category: "Adventure", destination: "Ubud, Indonesia", price: 68, rating: 4.6,
    imageUrl: adventureImages[1],
  },
  {
    id: "exp-018", title: "Arrabida Coast Sea Kayaking", description: "Paddle beneath limestone cliffs and pause at quiet coves for a swim.",
    category: "Adventure", destination: "Lisbon, Portugal", price: 75, rating: 4.8,
    imageUrl: adventureImages[2],
  },
  {
    id: "exp-019", title: "Squamish Via Ferrata", description: "Climb a protected route above Howe Sound with a certified mountain guide.",
    category: "Adventure", destination: "Vancouver, Canada", price: 149, rating: 4.9,
    imageUrl: adventureImages[3],
  },
  {
    id: "exp-020", title: "Oaxaca Sierra Norte Horse Ride", description: "Ride pine-forested trails with a community guide and stop at a mountain lookout.",
    category: "Adventure", destination: "Oaxaca, Mexico", price: 81, rating: 4.7,
    imageUrl: adventureImages[4],
  },
  {
    id: "exp-021", title: "Kyoto Backstreets and Temples", description: "Visit quiet neighborhood shrines and learn the stories behind their rituals.",
    category: "Culture", destination: "Kyoto, Japan", price: 54, rating: 4.8,
    imageUrl: cultureImages[0],
  },
  {
    id: "exp-022", title: "Ancient Rome in Small Details", description: "Explore the Forum and nearby lanes with an archaeologist who brings daily life to view.",
    category: "Culture", destination: "Rome, Italy", price: 62, rating: 4.9,
    imageUrl: cultureImages[1],
  },
  {
    id: "exp-023", title: "Istanbul Across Two Continents", description: "Ride the ferry, visit a historic market, and trace the city's layered heritage.",
    category: "Culture", destination: "Istanbul, Turkey", price: 48, rating: 4.8,
    imageUrl: cultureImages[2],
  },
  {
    id: "exp-024", title: "Mexico City Mural Walk", description: "Read the stories in landmark murals and discover the artists who shaped them.",
    category: "Culture", destination: "Mexico City, Mexico", price: 39, rating: 4.7,
    imageUrl: cultureImages[3],
  },
  {
    id: "exp-025", title: "Athens Acropolis at Dawn", description: "Enter the ancient citadel early and explore its monuments before the crowds arrive.",
    category: "Culture", destination: "Athens, Greece", price: 71, rating: 4.9,
    imageUrl: cultureImages[4],
  },
  {
    id: "exp-026", title: "Cairo Coptic Quarter Stories", description: "Walk historic churches and lanes with a guide sharing the neighborhood's living traditions.",
    category: "Culture", destination: "Cairo, Egypt", price: 45, rating: 4.6,
    imageUrl: cultureImages[0],
  },
  {
    id: "exp-027", title: "Jaipur Palace and Artisan Trail", description: "Tour royal architecture and meet craftspeople keeping block printing alive.",
    category: "Culture", destination: "Jaipur, India", price: 52, rating: 4.8,
    imageUrl: cultureImages[1],
  },
  {
    id: "exp-028", title: "Paris Impressionist Neighborhoods", description: "Follow an art historian through studios and streets that inspired famous painters.",
    category: "Culture", destination: "Paris, France", price: 67, rating: 4.7,
    imageUrl: cultureImages[2],
  },
  {
    id: "exp-029", title: "Havana Music and Architecture", description: "Explore restored squares and hear how Cuban rhythms grew across generations.",
    category: "Culture", destination: "Havana, Cuba", price: 43, rating: 4.8,
    imageUrl: cultureImages[3],
  },
  {
    id: "exp-030", title: "Florence Renaissance Workshop", description: "Visit artisan studios and learn how local makers preserve centuries-old techniques.",
    category: "Culture", destination: "Florence, Italy", price: 58, rating: 4.8,
    imageUrl: cultureImages[4],
  },
  {
    id: "exp-031", title: "Seoul Hanok Village Walk", description: "Discover traditional homes, courtyards, and neighborhood customs with a resident guide.",
    category: "Culture", destination: "Seoul, South Korea", price: 41, rating: 4.7,
    imageUrl: cultureImages[0],
  },
  {
    id: "exp-032", title: "Marrakech Medina and Crafts", description: "Navigate the old medina and meet makers of leather, metalwork, and woven goods.",
    category: "Culture", destination: "Marrakech, Morocco", price: 36, rating: 4.8,
    imageUrl: cultureImages[1],
  },
  {
    id: "exp-033", title: "Lima Historic Center Tour", description: "Connect colonial landmarks, hidden courtyards, and modern Peruvian identity.",
    category: "Culture", destination: "Lima, Peru", price: 34, rating: 4.6,
    imageUrl: cultureImages[2],
  },
  {
    id: "exp-034", title: "Prague Legends After Dark", description: "Hear local folklore while walking lantern-lit lanes and Gothic courtyards.",
    category: "Culture", destination: "Prague, Czechia", price: 32, rating: 4.7,
    imageUrl: cultureImages[3],
  },
  {
    id: "exp-035", title: "Fez Tanneries and Old Medina", description: "Learn the history of the medina and its workshops from a knowledgeable local.",
    category: "Culture", destination: "Fez, Morocco", price: 38, rating: 4.6,
    imageUrl: cultureImages[4],
  },
  {
    id: "exp-036", title: "Cusco Inca Stonework Walk", description: "Trace Inca engineering through plazas and precisely fitted ancient walls.",
    category: "Culture", destination: "Cusco, Peru", price: 47, rating: 4.8,
    imageUrl: cultureImages[0],
  },
  {
    id: "exp-037", title: "Granada Alhambra Garden Stories", description: "Explore intricate courtyards and water gardens with a specialist guide.",
    category: "Culture", destination: "Granada, Spain", price: 65, rating: 4.9,
    imageUrl: cultureImages[1],
  },
  {
    id: "exp-038", title: "Beijing Hutong Family Visit", description: "Walk historic lanes and share tea with a local family in their courtyard home.",
    category: "Culture", destination: "Beijing, China", price: 56, rating: 4.7,
    imageUrl: cultureImages[2],
  },
  {
    id: "exp-039", title: "New Orleans Creole Heritage Walk", description: "Discover the city's diverse roots through architecture, music, and neighborhood stories.",
    category: "Culture", destination: "New Orleans, United States", price: 40, rating: 4.8,
    imageUrl: cultureImages[3],
  },
  {
    id: "exp-040", title: "Oaxaca Zapotec Textile Traditions", description: "Visit a family weaving workshop and learn about natural dyes and local patterns.",
    category: "Culture", destination: "Oaxaca, Mexico", price: 49, rating: 4.9,
    imageUrl: cultureImages[4],
  },
  {
    id: "exp-041", title: "Naples Pizza Makers' Table", description: "Learn dough secrets from a pizzaiolo and bake your own classic Neapolitan pie.",
    category: "Food", destination: "Naples, Italy", price: 59, rating: 4.9,
    imageUrl: foodImages[0],
  },
  {
    id: "exp-042", title: "Bangkok Floating Market Bites", description: "Sample regional snacks from canal boats and learn how each dish is prepared.",
    category: "Food", destination: "Bangkok, Thailand", price: 44, rating: 4.8,
    imageUrl: foodImages[1],
  },
  {
    id: "exp-043", title: "Mexico City Taco Crawl", description: "Taste beloved street-side tacos and salsa styles with a local food writer.",
    category: "Food", destination: "Mexico City, Mexico", price: 51, rating: 4.9,
    imageUrl: foodImages[2],
  },
  {
    id: "exp-044", title: "Lima Coastal Ceviche Class", description: "Prepare fresh ceviche and leche de tigre while learning about Peru's coastal cuisine.",
    category: "Food", destination: "Lima, Peru", price: 68, rating: 4.8,
    imageUrl: foodImages[3],
  },
  {
    id: "exp-045", title: "Tokyo Market to Sushi Counter", description: "Explore a lively food market before a chef-led lesson in sushi fundamentals.",
    category: "Food", destination: "Tokyo, Japan", price: 96, rating: 4.9,
    imageUrl: foodImages[4],
  },
  {
    id: "exp-046", title: "Istanbul Spice Bazaar Tasting", description: "Taste lokum, dried fruit, and regional cheeses while learning to shop the bazaar.",
    category: "Food", destination: "Istanbul, Turkey", price: 39, rating: 4.7,
    imageUrl: foodImages[0],
  },
  {
    id: "exp-047", title: "Lyon Les Halles Food Tour", description: "Meet specialty vendors and sample cheeses, charcuterie, and local sweets.",
    category: "Food", destination: "Lyon, France", price: 74, rating: 4.8,
    imageUrl: foodImages[1],
  },
  {
    id: "exp-048", title: "Oaxaca Mole from Scratch", description: "Toast spices, grind chiles, and make a richly layered mole with a home cook.",
    category: "Food", destination: "Oaxaca, Mexico", price: 63, rating: 4.9,
    imageUrl: foodImages[2],
  },
  {
    id: "exp-049", title: "Hanoi Old Quarter Street Eats", description: "Follow tiny alleyways to family-run stalls for pho, bun cha, and egg coffee.",
    category: "Food", destination: "Hanoi, Vietnam", price: 37, rating: 4.8,
    imageUrl: foodImages[3],
  },
  {
    id: "exp-050", title: "Lisbon Pastel and Petiscos Walk", description: "Pair warm custard tarts with savory neighborhood favorites and Portuguese coffee.",
    category: "Food", destination: "Lisbon, Portugal", price: 46, rating: 4.8,
    imageUrl: foodImages[4],
  },
  {
    id: "exp-051", title: "Seoul Night Market Kitchen", description: "Try sizzling market classics and discover the ingredients behind Korean comfort food.",
    category: "Food", destination: "Seoul, South Korea", price: 42, rating: 4.7,
    imageUrl: foodImages[0],
  },
  {
    id: "exp-052", title: "Buenos Aires Steakhouse Secrets", description: "Learn the art of the Argentine asado over a relaxed meal with a grill master.",
    category: "Food", destination: "Buenos Aires, Argentina", price: 82, rating: 4.9,
    imageUrl: foodImages[1],
  },
  {
    id: "exp-053", title: "Marrakech Home-Cooked Tagine", description: "Shop for seasonal produce, then cook a fragrant tagine in a family kitchen.",
    category: "Food", destination: "Marrakech, Morocco", price: 57, rating: 4.8,
    imageUrl: foodImages[2],
  },
  {
    id: "exp-054", title: "Palermo Market and Arancini", description: "Taste Sicily's street food favorites among the colorful stalls of a historic market.",
    category: "Food", destination: "Palermo, Italy", price: 41, rating: 4.7,
    imageUrl: foodImages[3],
  },
  {
    id: "exp-055", title: "Singapore Hawker Center Safari", description: "Sample signature dishes across a celebrated hawker center with a local guide.",
    category: "Food", destination: "Singapore, Singapore", price: 48, rating: 4.8,
    imageUrl: foodImages[4],
  },
  {
    id: "exp-056", title: "Barcelona Tapas and Vermouth", description: "Hop between neighborhood bars for classic tapas and a lesson in aperitif culture.",
    category: "Food", destination: "Barcelona, Spain", price: 61, rating: 4.8,
    imageUrl: foodImages[0],
  },
  {
    id: "exp-057", title: "Athens Market-to-Table Cooking", description: "Choose fresh ingredients at the central market and prepare a Greek family menu.",
    category: "Food", destination: "Athens, Greece", price: 72, rating: 4.8,
    imageUrl: foodImages[1],
  },
  {
    id: "exp-058", title: "Porto Cellar and Petiscos Pairing", description: "Taste regional snacks alongside port styles in a historic riverside cellar.",
    category: "Food", destination: "Porto, Portugal", price: 66, rating: 4.7,
    imageUrl: foodImages[2],
  },
  {
    id: "exp-059", title: "Delhi Old City Chaat Trail", description: "Try crisp, tangy chaat from trusted stalls and hear the stories behind each recipe.",
    category: "Food", destination: "New Delhi, India", price: 33, rating: 4.7,
    imageUrl: foodImages[3],
  },
  {
    id: "exp-060", title: "Copenhagen Nordic Bakery Route", description: "Visit neighborhood bakeries for rye bread, cardamom buns, and seasonal pastries.",
    category: "Food", destination: "Copenhagen, Denmark", price: 53, rating: 4.8,
    imageUrl: foodImages[4],
  },
  {
    id: "exp-061", title: "Ubud Morning Yoga and Rice Fields", description: "Practice a gentle flow in an open-air studio before walking through nearby rice terraces.",
    category: "Wellness", destination: "Ubud, Indonesia", price: 35, rating: 4.8,
    imageUrl: wellnessImages[0],
  },
  {
    id: "exp-062", title: "Sedona Red Rock Meditation", description: "Settle into a guided mindfulness session among Sedona's quiet desert formations.",
    category: "Wellness", destination: "Sedona, United States", price: 62, rating: 4.7,
    imageUrl: wellnessImages[1],
  },
  {
    id: "exp-063", title: "Reykjavik Geothermal Reset", description: "Unwind in mineral-rich hot pools and learn local bathing traditions from a host.",
    category: "Wellness", destination: "Reykjavik, Iceland", price: 88, rating: 4.8,
    imageUrl: wellnessImages[2],
  },
  {
    id: "exp-064", title: "Tulum Sound Bath by the Sea", description: "Listen to a restorative sound meditation in a breezy studio near the Caribbean shore.",
    category: "Wellness", destination: "Tulum, Mexico", price: 55, rating: 4.7,
    imageUrl: wellnessImages[3],
  },
  {
    id: "exp-065", title: "Kerala Ayurvedic Garden Ritual", description: "Learn about healing herbs and enjoy a traditional oil treatment with a trained practitioner.",
    category: "Wellness", destination: "Kochi, India", price: 79, rating: 4.8,
    imageUrl: wellnessImages[4],
  },
  {
    id: "exp-066", title: "Kyoto Forest Bathing Walk", description: "Slow down beneath cedar trees with simple sensory practices led by a forest guide.",
    category: "Wellness", destination: "Kyoto, Japan", price: 46, rating: 4.8,
    imageUrl: wellnessImages[0],
  },
  {
    id: "exp-067", title: "La Fortuna Hot Springs Evening", description: "Soak in naturally heated pools surrounded by tropical gardens and volcanic views.",
    category: "Wellness", destination: "La Fortuna, Costa Rica", price: 73, rating: 4.9,
    imageUrl: wellnessImages[1],
  },
  {
    id: "exp-068", title: "Chiang Mai Thai Massage Workshop", description: "Learn safe foundational stretches and pressure techniques from a local instructor.",
    category: "Wellness", destination: "Chiang Mai, Thailand", price: 49, rating: 4.7,
    imageUrl: wellnessImages[2],
  },
  {
    id: "exp-069", title: "Santa Teresa Beach Yoga", description: "Join a sunrise yoga session and a relaxed breathwork practice beside the Pacific.",
    category: "Wellness", destination: "Santa Teresa, Costa Rica", price: 29, rating: 4.8,
    imageUrl: wellnessImages[3],
  },
  {
    id: "exp-070", title: "Bali Flower Bath and Body Care", description: "Create a botanical bath blend and enjoy a traditional treatment in a garden pavilion.",
    category: "Wellness", destination: "Denpasar, Indonesia", price: 92, rating: 4.8,
    imageUrl: wellnessImages[4],
  },
  {
    id: "exp-071", title: "Algarve Cliffside Breathwork", description: "Practice guided breathing and gentle movement above quiet coastal coves.",
    category: "Wellness", destination: "Lagos, Portugal", price: 44, rating: 4.7,
    imageUrl: wellnessImages[0],
  },
  {
    id: "exp-072", title: "Cappadocia Sunrise Stretch", description: "Welcome the morning with a slow outdoor yoga flow as balloons rise over the valleys.",
    category: "Wellness", destination: "Goreme, Turkey", price: 38, rating: 4.8,
    imageUrl: wellnessImages[1],
  },
  {
    id: "exp-073", title: "Banff Lakeside Forest Therapy", description: "Take a quiet guided walk through pine forest and reconnect beside a glacial lake.",
    category: "Wellness", destination: "Banff, Canada", price: 57, rating: 4.8,
    imageUrl: wellnessImages[2],
  },
  {
    id: "exp-074", title: "Marrakech Hammam Tradition", description: "Experience a restorative hammam ritual with an introduction to its cultural roots.",
    category: "Wellness", destination: "Marrakech, Morocco", price: 64, rating: 4.7,
    imageUrl: wellnessImages[3],
  },
  {
    id: "exp-075", title: "Queenstown Alpine Recovery Session", description: "Stretch tired muscles in a guided mobility class after a day in the mountains.",
    category: "Wellness", destination: "Queenstown, New Zealand", price: 42, rating: 4.6,
    imageUrl: wellnessImages[4],
  },
  {
    id: "exp-076", title: "Lisbon Rooftop Sunrise Yoga", description: "Move through an energizing yoga sequence above the old city's terracotta rooftops.",
    category: "Wellness", destination: "Lisbon, Portugal", price: 31, rating: 4.7,
    imageUrl: wellnessImages[0],
  },
  {
    id: "exp-077", title: "Lake Atitlan Mayan Herbal Retreat", description: "Meet a local herbalist and learn how regional plants are used in everyday wellbeing.",
    category: "Wellness", destination: "Panajachel, Guatemala", price: 58, rating: 4.8,
    imageUrl: wellnessImages[1],
  },
  {
    id: "exp-078", title: "Budapest Thermal Bath Ritual", description: "Explore historic bathhouse customs and enjoy a calm guided thermal circuit.",
    category: "Wellness", destination: "Budapest, Hungary", price: 69, rating: 4.8,
    imageUrl: wellnessImages[2],
  },
  {
    id: "exp-079", title: "Oaxaca Temazcal Ceremony", description: "Take part in a guided traditional sweat-lodge ceremony with a respectful local host.",
    category: "Wellness", destination: "Oaxaca, Mexico", price: 76, rating: 4.8,
    imageUrl: wellnessImages[3],
  },
  {
    id: "exp-080", title: "Vancouver Seawall Mindful Walk", description: "Pair an easy waterfront walk with grounding exercises and mindful observation.",
    category: "Wellness", destination: "Vancouver, Canada", price: 27, rating: 4.6,
    imageUrl: wellnessImages[4],
  },
  {
    id: "exp-081", title: "Redwood Canopy Nature Walk", description: "Wander beneath towering old-growth trees and learn how this forest ecosystem thrives.",
    category: "Nature", destination: "Eureka, United States", price: 48, rating: 4.9,
    imageUrl: natureImages[0],
  },
  {
    id: "exp-082", title: "Pacific Coast Whale Watch", description: "Scan the horizon with a marine naturalist and learn about migrating whales and seabirds.",
    category: "Nature", destination: "Vancouver, Canada", price: 105, rating: 4.8,
    imageUrl: natureImages[1],
  },
  {
    id: "exp-083", title: "Cloud Forest Birding Morning", description: "Spot hummingbirds and toucans on a quiet trail with an expert local naturalist.",
    category: "Nature", destination: "Monteverde, Costa Rica", price: 71, rating: 4.9,
    imageUrl: natureImages[2],
  },
  {
    id: "exp-084", title: "Sahara Dunes by Camel", description: "Cross the dunes at sunset and spend the evening learning about desert ecology.",
    category: "Nature", destination: "Merzouga, Morocco", price: 86, rating: 4.8,
    imageUrl: natureImages[3],
  },
  {
    id: "exp-085", title: "Douro Valley River Landscape", description: "Cruise quiet bends of the river and see how vineyards shape the surrounding hills.",
    category: "Nature", destination: "Porto, Portugal", price: 77, rating: 4.7,
    imageUrl: natureImages[4],
  },
  {
    id: "exp-086", title: "Patagonia Glacier Viewpoint Trek", description: "Hike to a dramatic lookout and learn about the region's changing ice fields.",
    category: "Nature", destination: "Puerto Natales, Chile", price: 112, rating: 4.9,
    imageUrl: natureImages[0],
  },
  {
    id: "exp-087", title: "Hilo Volcanoes Rainforest Trail", description: "Walk through fern-filled forest and old lava landscapes with a park naturalist.",
    category: "Nature", destination: "Hilo, United States", price: 83, rating: 4.8,
    imageUrl: natureImages[1],
  },
  {
    id: "exp-088", title: "Ushuaia Beagle Channel Wildlife", description: "Look for sea lions and penguins while learning how southern wildlife adapts to the climate.",
    category: "Nature", destination: "Ushuaia, Argentina", price: 98, rating: 4.8,
    imageUrl: natureImages[2],
  },
  {
    id: "exp-089", title: "Plitvice Waterfall Boardwalk", description: "Follow wooden paths between vivid lakes and waterfalls with a park-savvy guide.",
    category: "Nature", destination: "Zagreb, Croatia", price: 91, rating: 4.8,
    imageUrl: natureImages[3],
  },
  {
    id: "exp-090", title: "Serengeti Sunrise Safari", description: "Search open grasslands for elephants, giraffes, and big cats with a conservation guide.",
    category: "Nature", destination: "Arusha, Tanzania", price: 245, rating: 4.9,
    imageUrl: natureImages[4],
  },
  {
    id: "exp-091", title: "Faroe Islands Coastal Hike", description: "Walk grassy headlands above the sea and hear how islanders live with changing weather.",
    category: "Nature", destination: "Torshavn, Faroe Islands", price: 105, rating: 4.8,
    imageUrl: natureImages[0],
  },
  {
    id: "exp-092", title: "Yellowstone Geyser Basin Walk", description: "See steaming pools and erupting geysers while learning about the park's geology.",
    category: "Nature", destination: "Jackson, United States", price: 88, rating: 4.9,
    imageUrl: natureImages[1],
  },
  {
    id: "exp-093", title: "Svalbard Arctic Fjord Cruise", description: "Cruise past glaciers and rugged cliffs while a naturalist explains polar ecosystems.",
    category: "Nature", destination: "Longyearbyen, Norway", price: 198, rating: 4.8,
    imageUrl: natureImages[2],
  },
  {
    id: "exp-094", title: "Mekong Delta Floating Gardens", description: "Travel by small boat through waterways and visit fruit gardens tended by local families.",
    category: "Nature", destination: "Can Tho, Vietnam", price: 63, rating: 4.7,
    imageUrl: natureImages[3],
  },
  {
    id: "exp-095", title: "Sossusvlei Desert Dunes", description: "Climb sculpted red dunes at dawn and discover the plants and wildlife of the Namib.",
    category: "Nature", destination: "Windhoek, Namibia", price: 176, rating: 4.9,
    imageUrl: natureImages[4],
  },
  {
    id: "exp-096", title: "Lake Bled Alpine Shore Walk", description: "Circle a clear glacial lake and pause at peaceful viewpoints beneath the Julian Alps.",
    category: "Nature", destination: "Bled, Slovenia", price: 42, rating: 4.8,
    imageUrl: natureImages[0],
  },
  {
    id: "exp-097", title: "Galapagos Coastal Snorkel", description: "Swim above lava reefs and observe sea turtles with a licensed naturalist guide.",
    category: "Nature", destination: "Puerto Ayora, Ecuador", price: 134, rating: 4.9,
    imageUrl: natureImages[1],
  },
  {
    id: "exp-098", title: "Scottish Highlands Waterfall Trail", description: "Follow a woodland path to cascading falls and learn about Highland habitats.",
    category: "Nature", destination: "Inverness, United Kingdom", price: 56, rating: 4.7,
    imageUrl: natureImages[2],
  },
  {
    id: "exp-099", title: "Komodo Island Dragon Trek", description: "Walk with a park ranger to observe Komodo dragons and dry-island wildlife safely.",
    category: "Nature", destination: "Labuan Bajo, Indonesia", price: 159, rating: 4.8,
    imageUrl: natureImages[3],
  },
  {
    id: "exp-100", title: "Lofoten Northern Lights Chase", description: "Travel to clear-sky viewpoints and learn to photograph the aurora with a local guide.",
    category: "Nature", destination: "Svolvaer, Norway", price: 127, rating: 4.8,
    imageUrl: natureImages[4],
  },
];