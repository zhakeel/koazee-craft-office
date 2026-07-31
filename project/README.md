# Koazee's Craft Office — Website

## File structure
```
index.html        Page structure only — rarely needs editing
css/style.css      All colors, fonts, spacing (edit the :root variables at the top)
js/data.js         ALL your content: text, gift cards, images — edit this most
js/main.js         Renders data.js onto the page — no need to touch this
images/            Your product photos (swap in new ones anytime)
```

## The 3 things you'll edit most

### 1. Add / remove / edit a gift card
Open `js/data.js`, find the `gifts:` array, and add a block like this:

```js
{ image: "images/your-new-photo.jpg", tag: "for her love ✨", category: "Bouquets", title: "New Bouquet" },
```

- Drop the photo file into the `images/` folder first.
- Delete a line to remove a card. Reorder lines to reorder the grid.

### 2. Change colors
Open `css/style.css`, edit the values at the very top under `:root`:

```css
--wine: #7C2436;   /* main brand color */
--gold: #B8863E;   /* accents */
--bg:   #FBF1EC;   /* page background */
```

Every button, tag and heading updates automatically.

### 3. Change hero text, process steps, or the "our craft" section
All in `js/data.js` — look for `hero`, `process`, `story`, `values`, and `cta`.
Each one is plain text or a short list, no HTML knowledge required
(except `<em>` `<br>` already used in the headline for styling — leave those as-is or remove them).

## Viewing your changes
Just open `index.html` in any browser (double-click it). No build step, no
server needed — it's all plain HTML/CSS/JS.

## Publishing it
Upload the whole folder (`index.html`, `css/`, `js/`, `images/`) to any static
host — Netlify, Vercel, GitHub Pages, or your own web hosting. Keep the folder
structure exactly as-is so the file paths keep working.
