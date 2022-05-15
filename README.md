# flext.dev

My upgraded portfolio and blog site. Here is where I show my work and side projects and write about interesting web development topics, business ideas, and being productive as a developer.

The site is also a learning platformf or myself, where I try out new tools & libraries, coding patterns, and whatever new and interesting comes my way.

## Objective

My aim is to make the site accessible for anybody as a learning tool. I will follow a strict RDD(read more) approach and document the development and different stages using git branches(read more). Feel free to clone the site for learning purposes & checkout the Tech Stack (link) to see if you are interested in the things used here.

## Local Development

To run this project locally, simply clone the project and copy the `.env.example` to `.env`. You will need accounts for the following services:
- Firebase (link)
- Google books App (lets see how)
- Other accounts to follow

```bash
  yarn install
  yarn dev
```

## Outline

### Primary navigation
- `pages/index` - Landing Page - Preview of other pages
  - Welcome intro - CTA: Read more about me
  - Latest news - CTA: Blog Overview / Individual Blog
  - Projects preview - CTA: Projects page
- `pages/about` - About Page
  - Introduction
  - Timeline
  - Gallery
  - CTA: Link to CV
- `pages/blog` - Blog Overview - Option to sort by topic (tag) - Search
- `pages/projects` - Projects & work I've done / Might completely integrate into home page & not keep extra page

### More

- `pages/tweets` - Tweets & Interesting reads I like to share
- `pages/newsletter` - Collection of my previously sent newsletters
- `pages/uses` - My pc setup & gear
- `pages/snippets` - Scripts i've written for interesting things
- `pages/books` - API integration of Google books - showcase books i've read
- `pages/learn` - Calendar with things I want to learn / have learned gone through
- `pages/resume` - Detailed CV of myself

## Features

- Dashboard - view of interesting things
  - Usage Stats Summary
  - Books read count
      
- DarkMode / multicolor mode
- Show usage stats (hover over elements to see clicks etc.)
- Link library exit page via page query - no direct links to X
- Newsletter Sign-up
- MDX Blog - preview code correctly
- Branches for different levels of development - change version of page selector

## Tech stack

Client side:
- React.js
- Next.js
- Tailwind CSS
- Next-seo
- tRPC with react-query

Server side:
- Next.js
- Node.js
- planet-scale
- prisma
- tRPC

Development:
- Typescript
- fx-style (gts + custom eslint + custom prettier)
- Github

Hosting & Domain:
- Vercel
- Google Domains

## Contributing

Contributions are always welcome!
Please inbox me for small issues or create a pull request for anything else.






