# Developer Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Features real-time GitHub project integration using the GitHub API.

## Features

- 🎨 Modern UI with shadcn/ui components
- 📱 Fully responsive design
- 🔗 Real-time GitHub project integration
- 📖 README content display for each project
- ⭐ Star and fork counts from GitHub
- 🏷️ Technology tags and language indicators
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **API**: GitHub REST API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- GitHub Personal Access Token

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

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your GitHub Personal Access Token:
```bash
GITHUB_PAT=your_github_personal_access_token_here
```

### GitHub Personal Access Token Setup

1. Go to [GitHub Settings > Tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Integration"
4. Select the following scopes:
   - `repo` (Full control of private repositories)
   - `read:user` (Read access to user profile)
5. Copy the generated token and add it to your `.env.local` file

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Customization

1. **Update GitHub Username**: Change the username in `src/app/page.tsx`:
```tsx
<GitHubProjectsDisplay username="your-github-username" />
```

2. **Modify API Route**: Update the default username in `src/app/api/github-projects/route.ts`:
```typescript
const username = searchParams.get('username') || 'your-github-username';
```

3. **Styling**: Customize colors and styling in `src/app/globals.css` and `tailwind.config.ts`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `GITHUB_PAT` environment variable in Vercel dashboard
4. Deploy!

### Other Platforms

Make sure to set the `GITHUB_PAT` environment variable in your hosting platform's dashboard.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── github-projects/
│   │       └── route.ts          # GitHub API integration
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Main portfolio page
├── components/
│   ├── ui/                       # shadcn/ui components
│   └── GitHubProjectsDisplay.tsx # Main projects component
└── hooks/
    └── useGitHubProjects.ts      # Custom hook for API calls
```

## API Endpoints

- `GET /api/github-projects?username=<username>` - Fetches GitHub projects for a user

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this for your own portfolio!
# portfolio
