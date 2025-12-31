# Empire Industrial Corp. - Official Website

A professional B2B landing page for Empire Industrial Corp., an industrial chemical and material supplier bridging North American and Asian markets.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript
- **Deployment**: Vercel

## Features

- Responsive design (Mobile-first)
- Design Tokens system via CSS Variables
- Reusable UI components
- SEO optimized
- Performance optimized

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── lib/
│   └── utils.ts           # Utility functions
├── styles/
│   └── tokens.css         # Design Tokens (CSS Variables)
└── public/                # Static assets
```

## Design Tokens

All design tokens are defined in `styles/tokens.css` using CSS Variables:

- **Colors**: Brand, surface, content, border, interactive
- **Typography**: Font families, sizes, line heights
- **Spacing**: Consistent spacing scale
- **Border Radius**: Component-specific radii
- **Shadows**: Elevation system
- **Animations**: Durations and easings

### Customizing Design Tokens

To update the visual identity:

1. Edit `styles/tokens.css` to change CSS variables
2. Update `tailwind.config.ts` if adding new token categories

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Other Platforms

```bash
npm run build
npm start
```

## License

Private - Empire Industrial Corp.
