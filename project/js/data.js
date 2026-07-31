/* =========================================================
   KOAZEE'S CRAFT OFFICE — SITE CONTENT
   ---------------------------------------------------------
   Edit everything here. You don't need to touch index.html,
   style.css or main.js to change text, images or gift cards.
   ========================================================= */

const SITE = {
  brand: "Koazee",
  brandSub: "Craft Office",
  instagramUrl: "https://www.instagram.com/koazee.craft.office",
  whatsappUrl: "https://chat.whatsapp.com/CgtjeiTfnfK0BlNwN8EzcI",
  youtubeUrl: "https://youtube.com/@koazeecraftoffice?si=l2yr1ZJjiKgdk51U",
  whatsappMembers: "179+",

  /* Where "Customize yours" buttons on gift cards should send people.
     Change to "whatsappUrl" if you'd rather orders start on WhatsApp. */
  orderLink: "instagramUrl",

  /* Used by the "Follow us" section, the footer, and the floating
     chat button. Add/remove/reorder freely — icon is chosen by "type". */
  socialChannels: [
    { type: "instagram", label: "Instagram", handle: "@koazee.craft.office", url: "https://www.instagram.com/koazee.craft.office" },
    { type: "whatsapp", label: "WhatsApp group", handle: "179+ members", url: "https://chat.whatsapp.com/CgtjeiTfnfK0BlNwN8EzcI" },
    { type: "youtube", label: "YouTube", handle: "@koazeecraftoffice", url: "https://youtube.com/@koazeecraftoffice?si=l2yr1ZJjiKgdk51U" }
  ],

  hero: {
    eyebrow: "Handmade · Pre-order · Island-wide delivery",
    // Use <em>...</em> for the italic wine-colored words
    headline: "Gifts that say <em>I made<br>this for you.</em>",
    lede: "Koazee's Craft Office hand-builds customized polaroids, frames, hampers, bouquets and keepsakes for the people you love most — every piece made to order, wrapped with the same care as the story behind it.",
    stats: [
      { num: "179+", label: "Members in our craft circle" },
      { num: "11+", label: "Customizable gift categories" },
      { num: "100%", label: "Made to order, by hand" }
    ],
    // Three tilted polaroid photos in the hero collage
    images: [
      { src: "images/hero1.jpg", caption: "just us, framed" },
      { src: "images/polaroid2.jpg", caption: "made for you" },
      { src: "images/detail1.jpg", caption: "with love, Koazee" }
    ]
  },

  marqueeWords: [
    "For her love", "For his love", "For engagement",
    "For friends", "For nikkah", "Customize yours"
  ],

  /* Every gift card on the page. Add, remove or reorder freely —
     the grid updates automatically. Fields:
       image     - path under images/
       tag       - small handwritten tag text (occasion + emoji)
       category  - small uppercase label above the title
       title     - card heading
       cta       - button text (defaults to "Customize yours →") */
  gifts: [
    { image: "images/polaroid2.jpg", tag: "for her friends 🎞️", category: "Polaroids", title: "Customized Polaroids" },
    { image: "images/engagement_frame.jpg", tag: "engagement 🍷💍", category: "Frames", title: "Engagement Frame" },
    { image: "images/love_frame.jpg", tag: "for his love 💗🦋", category: "Frames", title: "Love Frame" },
    { image: "images/hamper.jpg", tag: "for her love 🫶🏽", category: "Hampers", title: "Customized Hamper" },
    { image: "images/bouquet.jpg", tag: "for her love ❤️🌺", category: "Bouquets", title: "Customized Bouquet" },
    { image: "images/card.jpg", tag: "for her love ❤️🦩", category: "Cards", title: "Customized Card" },
    { image: "images/invitation.jpg", tag: "engagement 🍓♥️", category: "Invitations", title: "Engagement Invitation" },
    { image: "images/nikkah.jpg", tag: "for their friend 🤍🦢", category: "Nikkah sets", title: "Nikkah Frame & Pen" },
    { image: "images/giftbox.jpg", tag: "for her love ♥️🍯", category: "Gift boxes", title: "Customized Gift" },
    { image: "images/photohoop.jpg", tag: "for her friend 🫶🏽", category: "Photo hoops", title: "Customized Photo Hoop" },
    { image: "images/photo_frame.jpg", tag: "your story 🌷", category: "Keepsakes", title: "Something Just for You", cta: "Tell us your idea →" }
  ],

  process: [
    { title: "Pick a category", text: "Browse polaroids, frames, hampers, bouquets and more, and choose the piece that fits the moment." },
    { title: "Send your details", text: "Message us on Instagram or WhatsApp with your photos, names, colors and the story you want told." },
    { title: "We pre-order & craft", text: "Every piece is made to order by hand — nothing is mass-produced or kept sitting on a shelf." },
    { title: "Delivered island-wide", text: "Once it's ready, it's packed with care and sent to any corner of the island." }
  ],

  story: {
    eyebrow: "Our craft",
    heading: "Every detail is chosen, not default.",
    text: "Dried florals, hand-tied ribbon, warm wood and kraft-paper tags — the same materials you'd reach for if you were making the gift yourself. We just do the fiddly part for you.",
    points: [
      "Names, dates and photos personalized on every piece",
      "Natural textures — dried flowers, twine, wood, linen ribbon",
      "Built for real occasions: engagements, nikkah, anniversaries, friendship days",
      "Pre-order basis, so every piece gets full attention"
    ],
    mainImage: "images/detail2.jpg",
    smallImage: "images/photo_frame.jpg"
  },

  values: [
    { title: "Made, not manufactured", text: "Each order is built individually by hand — that's why we work on a pre-order basis instead of holding ready stock." },
    { title: "Personal by default", text: "Names, photos, colors and little details are part of the design from the first sketch, not an add-on." },
    { title: "Reaches every corner", text: "Wherever you are on the island, your gift is packed carefully and delivered to your door." }
  ],

  cta: {
    heading: "Ready to surprise someone?",
    text: "Send us the occasion, a few photos and your delivery details — we'll take it from there. Every piece is built to order, so the sooner you reach out, the sooner it's on its way."
  },

  faq: [
    { q: "How do I place an order?", a: "Message us on WhatsApp or Instagram with the gift category you like, your photos or names, and any color or theme preferences. We'll confirm the details before starting." },
    { q: "Is everything really handmade?", a: "Yes — every piece is built to order by hand, which is why we work on a pre-order basis rather than keeping ready-made stock." },
    { q: "Do you deliver outside Colombo?", a: "Yes, we deliver island-wide. Message us with your location and we'll confirm delivery details for your area." },
    { q: "Can I customize photos, names and colors?", a: "Absolutely — personalization is the whole point. Send us what you'd like included and we'll build the piece around it." },
    { q: "How long does an order take?", a: "It depends on the piece and how customized it is. Message us with what you have in mind and we'll give you a timeline." }
  ]
};

// Keep socialChannels always in sync with the single URLs above —
// edit whatsappUrl / instagramUrl / youtubeUrl once, everywhere updates.
SITE.socialChannels.forEach(ch => {
  if (ch.type === "whatsapp") ch.url = SITE.whatsappUrl;
  if (ch.type === "instagram") ch.url = SITE.instagramUrl;
  if (ch.type === "youtube") ch.url = SITE.youtubeUrl;
});
