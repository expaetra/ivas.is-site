# ivas.is-site

Personal portfolio site. Live at [ivas.is](https://ivas.is).

<img width="1101" height="586" alt="ivas is-screenshot" src="https://github.com/user-attachments/assets/064dc69e-5589-4b40-87b8-d929573d8e1c" />


React (Create React App), served by Caddy on a DigitalOcean droplet.

## Run locally
    npm install
    npm start        # preview at http://localhost:3000

## Content lives in
- src/components/home/Data.jsx         - name, tagline, bio
- src/components/home/Social.jsx       - GitHub / LinkedIn
- src/components/projects/Projects.jsx - the Projects list
- src/components/skills/Skills.jsx     - the skills groups

## Deploy (to the droplet)
    npm run build
    scp -r build/* root@139.59.175.85:/opt/portfolio/
