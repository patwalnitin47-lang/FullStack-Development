# FullStack-Development

A collection of small, standalone HTML and CSS exercises for practising frontend fundamentals. Each page can be opened independently; there is no build step, JavaScript application, or package manager configuration in this repository.

## Exercises

| File | Concepts demonstrated |
| --- | --- |
| `index.html` | Login form layout, labels, inputs, focus states, buttons, and links using `styles.css` |
| `dashboard.html` | Sidebar navigation, flexbox, responsive CSS grid cards, panels, and media queries using `dashboard.css` |
| `new.html` | Typography, gradients, borders, image sizing, shadows, hover scaling, and Google Fonts |
| `test4.html` | Sticky villain cards, flexbox alignment, image cropping, colors, and text shadows |
| `test5.html` | A responsive horizontal Spider-Man villain gallery with sticky cards and background imagery |
| `test6.html` | Full-screen horizontal scrolling, scroll snapping, overlays, fixed headings, and positioned content |
| `test7.html` | Image-and-text villain cards, horizontal scrolling, Google Fonts, and Animate.css |
| `test8.html` | A basic horizontal slider built with inline flexbox, sticky items, and hidden scrollbars |
| `test9.html` | Radial and linear gradients, a health-bar example, and a circular gradient element |
| `combinators.html` | Descendant, child, adjacent-sibling, and general-sibling CSS combinators |
| `pseudoclass.html` | Form pseudo-classes such as `:enabled`, `:disabled`, `:required`, and `:optional` |
| `float.html` | Floating blocks, outlines, fixed dimensions, and repeated layout patterns |
| `newspaper.html` | Text styling including font size, weight, italics, line height, decoration, and transformation |
| `shadow.html` | Box shadows, image drop shadows, and local image usage |

## Stylesheets and assets

- `styles.css` contains the login-card styles for `index.html`.
- `dashboard.css` contains the responsive dashboard styles for `dashboard.html`.
- `fonts/Paul-le1V.ttf` is a local font asset, with source information in `fonts/info.txt`.
- The JPG, PNG, and WebP files in the project root provide imagery for the Spider-Man and shadow exercises.

Most later exercises keep their CSS inside the HTML file. `new.html` also includes a link to `new.css`, but that stylesheet is not currently present; its inline styles still provide the page's main appearance.

## Run locally

Because these are static pages, they can be opened directly in a browser. A local server gives more consistent behavior for relative assets:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/` and choose an exercise file, for example:

```text
http://localhost:8000/index.html
http://localhost:8000/dashboard.html
http://localhost:8000/test7.html
```

## External resources

Some pages request Google Fonts, Animate.css, or placeholder images from the internet. Those resources require a network connection. A few early Spider-Man examples also contain legacy image paths under an `images/` directory that is not present in the repository; use `test5.html`, `test6.html`, or `test7.html` for the versions that reference the included root-level images.

## Development

Edit an HTML or CSS file, refresh the browser, and inspect the result with the browser developer tools. Changes can be committed and pushed with:

```bash
git add -A
git commit -m "Describe the change"
git push
```

There are currently no automated tests or build commands.

## License

No license file is currently included. Add a `LICENSE` file before distributing the project under a specific license.
