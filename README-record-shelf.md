# Record Shelf — Usage

Files added:

- `record-shelf.html` — the main page (semantic tags used: `header`, `nav`, `main`, `section`, `article`, `figure`, `details`, etc.)
- `css/records.css` — styling for the shelf and records
- `js/records.js` — player logic

How to add audio files

1. Create an `audio/` folder at the project root.
2. Add MP3 files matching the data-src attributes in `record-shelf.html` (for example `audio/lana-sample1.mp3`).

Serve locally (recommended)

Run a simple local server from the project root and open `record-shelf.html` in your browser:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/record-shelf.html
```

Notes

- The HTML uses placeholder `data-src` values for tracks. Replace them with your file names or streaming URLs.
- The page uses accessible patterns: the `details` element to open records and a single `audio` element for playback.
