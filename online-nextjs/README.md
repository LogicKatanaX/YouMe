YouMe Online (Next.js)

Purpose
- Next.js version of the YouMe dashboard UI.
- Keeps the same dashboard flow and sections except removed features below.
- Removed from this web build:
  - Music player (ambient and track controls)
  - YouTube downloader section
- Replaced with local upload audio:
  - Users can drag and drop local lofi/music files in Focus Mode.
  - Uploaded audio is played only in the browser and is not stored in database.

Included sections
- Focus Mode (Pomodoro + notes + local lofi upload player)
- Library
- Watchlist
- Daily Planner
- Admin
- Settings (themes + custom wallpaper crop)

Local development
1. Install Node.js 20+.
2. From this folder run:
   npm install
   npm run dev
3. Set `YOUME_API_BASE_URL` to the Flask backend origin before starting Next.js, for example:
   ```bash
   export YOUME_API_BASE_URL=http://localhost:5000
   ```
   On Windows PowerShell, use `$env:YOUME_API_BASE_URL = "http://localhost:5000"`.
4. Open http://localhost:3000

Deploy to Vercel
1. Push repository to GitHub.
2. In Vercel, import the GitHub repository.
3. Set Root Directory to online-nextjs.
4. Build command: npm run build
5. Output defaults to Next.js standard output.
6. Add the required project environment variable `YOUME_API_BASE_URL`, set to the Flask backend origin with no trailing slash (for example, `https://api.example.com`).
   - Configure it for every environment that serves the dashboard (Preview and Production, as applicable).
   - Next.js rewrites same-origin API paths, including `/admin_profile` and `/api/:path*`, to Flask. This prevents the SPA HTML fallback from being returned to frontend requests that call `response.json()`.

Implementation notes
- Dashboard markup is loaded from `public/youme-body.html`.
- Styles and behavior are loaded from `public/youme.css` and `public/youme.js`.
- Theme wallpapers are under `public/themes/`.
