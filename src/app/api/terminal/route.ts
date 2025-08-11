import { NextResponse } from 'next/server';

export async function GET() {
  const terminalPortfolio = `
${'='.repeat(80)}
${' '.repeat(25)}🚀 KENTA WAIBEL PORTFOLIO 🚀
${'='.repeat(80)}

${' '.repeat(20)}Full-Stack Developer & Tech Enthusiast
${' '.repeat(25)}Crafting Digital Experiences

${'─'.repeat(80)}

🎯 ABOUT ME:
   • Passionate about creating beautiful, functional web applications
   • Specializing in React, TypeScript, Node.js, and cloud technologies
   • Building scalable solutions with modern best practices

${'─'.repeat(80)}

🛠️  TECH STACK:
   Frontend:  React, TypeScript, Tailwind CSS, Next.js
   Backend:   Node.js, Express, Python, FastAPI
   Database:  PostgreSQL, MongoDB, Redis
   Cloud:     AWS, Vercel, Docker, Kubernetes
   Tools:     Git, VS Code, Figma, Postman

${'─'.repeat(80)}

📱 SOCIAL LINKS:
   GitHub:    https://github.com/k3ntaw
   LinkedIn:  https://linkedin.com/in/kenta-waibel
   Email:     hello@k3ntaw.dev

${'─'.repeat(80)}

🌟 FEATURES:
   • Modern portfolio with dark glossy theme
   • Real-time GitHub integration
   • Responsive design for all devices
   • Beautiful animations and transitions
   • Professional project showcase

${'─'.repeat(80)}

🚀 GET IN TOUCH:
   Ready to collaborate on amazing projects?
   Let's build something incredible together!

${'─'.repeat(80)}

${' '.repeat(30)}Made with ❤️  and Next.js
${' '.repeat(25)}Visit: http://localhost:3000

${'='.repeat(80)}
`;

  return new NextResponse(terminalPortfolio, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
} 