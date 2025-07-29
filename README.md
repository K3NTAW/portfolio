# Developer Portfolio

A modern, responsive developer portfolio built with Next.js 15, React 19, and shadcn/ui. Features GitHub integration, Vercel project display, and a beautiful animated UI.

## Features

- 🎨 Modern UI with shadcn/ui components
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- 🔗 GitHub integration (displays your repositories)
- 🚀 Vercel integration (shows your deployments)
- ✨ Animated hero section with particle effects
- 📄 CV download functionality
- 🎯 Skills showcase with badges

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: shadcn/ui
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Custom Canvas-based particles
- **APIs**: GitHub API, Vercel API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- GitHub account
- Vercel account (optional)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd developer-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
GITHUB_TOKEN=your_github_personal_access_token
VERCEL_TOKEN=your_vercel_access_token
```

### Environment Variables

#### GitHub Token
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token with `public_repo` scope
3. Add it to `.env.local` as `GITHUB_TOKEN`

#### Vercel Token (Optional)
1. Go to Vercel Dashboard → Settings → Tokens
2. Create a new token
3. Add it to `.env.local` as `VERCEL_TOKEN`

### Customization

#### Personal Information
- Update the hero section in `src/app/page.tsx`
- Modify the skills array in the same file
- Update social links in `src/components/footer.tsx`

#### CV
- Add your CV file to the `public` directory as `cv.pdf`
- The download button will automatically link to it

#### GitHub Username
- Update the username in `src/lib/github.ts` (currently set to "k3ntaw")

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Building for Production

```bash
npm run build
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with theme provider
│   └── page.tsx        # Main portfolio page
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── header.tsx     # Navigation header
│   ├── footer.tsx     # Footer with social links
│   ├── project-card.tsx # GitHub project display
│   ├── vercel-card.tsx  # Vercel project display
│   ├── skill-badge.tsx  # Skill badges
│   └── mode-toggle.tsx  # Theme toggle
└── lib/               # Utility functions
    ├── github.ts      # GitHub API integration
    ├── vercel.ts      # Vercel API integration
    └── utils.ts       # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the icon set
- [Next.js](https://nextjs.org/) for the React framework
