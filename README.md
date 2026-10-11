# Shaadibhaiya — marketing site

A static landing page for Shaadibhaiya, pitched as a startup: a multi-agent
coordination layer for Indian weddings (venue, decor, catering, entertainment,
guests, scheduling and WhatsApp agents, all watched over by a supervisor).

```
shaadibhaiya-website/
├── index.html
├── css/style.css
├── js/script.js
└── README.md
```

No build step, no dependencies to install — it's plain HTML/CSS/JS.

## Preview it locally

Just open `index.html` in a browser. If you want it served properly (so
relative paths behave exactly like they will on GitHub Pages), from inside
the folder run:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Host it on GitHub Pages

1. **Create a new repository** on GitHub — e.g. `shaadibhaiya` — public, no
   README/license/.gitignore (you already have these files).
2. **Push this folder to it**, from inside `shaadibhaiya-website/`:

   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Turn on Pages**: in the repo, go to **Settings → Pages**. Under
   *Build and deployment*, set **Source** to `Deploy from a branch`, pick
   branch `main` and folder `/ (root)`, then **Save**.
4. GitHub builds the site (takes a minute or two) and gives you a URL at
   `https://<your-username>.github.io/<repo-name>/`. That's your live link —
   put it anywhere you're marketing this (resume, deck, socials, GitHub
   profile).

If you'd rather have it at the root of `your-username.github.io` (no
`/repo-name/` in the URL), name the repository exactly
`<your-username>.github.io` instead and the same steps apply.

### Custom domain (optional)

If you buy a domain later: add a `CNAME` file at the root containing just
the domain, point the domain's DNS at GitHub's Pages IPs (or a CNAME record
to `<your-username>.github.io`), then set the domain under
**Settings → Pages → Custom domain**.

## Making the waitlist form actually collect emails

Right now the "Notify me" form is cosmetic — it validates the email and
shows a thank-you message, but GitHub Pages can't run a backend to store it
anywhere (see `js/script.js`). Easiest fixes, no server required:

- **Formspree** (formspree.io): create a free form, then change the `<form>`
  tag in `index.html` to
  `<form action="https://formspree.io/f/your-id" method="POST">` and remove
  the `preventDefault()` block in `script.js` so it submits normally.
- **Google Forms**: swap the form for an embedded Google Form, or point the
  `action` at the form's formResponse URL.
- **Getform / Basin**: same idea as Formspree — swap the `action` URL.

## Customizing

All colors, fonts and spacing live as CSS custom properties at the top of
`css/style.css` (the `:root` block) — change the brand palette or type
scale there rather than hunting through individual rules. The squad roster,
copy and step-by-step section are plain content in `index.html` — edit the
text directly, nothing is generated.

## Honesty note

The copy on this site is written for a pre-launch/early-access pitch (real
product description, no fabricated user numbers, testimonials, or press
mentions). If you present this as a startup to judges, investors or
recruiters, keep it that way rather than adding invented traction — add real
numbers as you actually get them.
