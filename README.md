# petra-site

Personal portfolio of Petra Ivas (ivas.is) - React (Create React App).
Deliberately no public CV - the page is a portfolio and introduction; the CV goes to recruiters directly.

## Run locally
    npm install
    npm start        # preview at http://localhost:3000

## Content lives in
- src/components/home/Data.jsx         - name, tagline, bio
- src/components/home/Social.jsx       - GitHub / LinkedIn (TODO: add URL) / email
- src/components/research/Research.jsx - the Projects list
- src/components/skills/Skills.jsx     - the skills groups
- public/favicon/                      - TODO: replace icons (currently inherited)

## Deploy (to the droplet)
    npm run build
    scp -r build/* root@139.59.175.85:/opt/portfolio/
