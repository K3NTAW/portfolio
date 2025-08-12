import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const acceptHeader = request.headers.get('accept') || '';
  
  // Check if request is from curl or terminal tools
  const isTerminalRequest = userAgent.toLowerCase().includes('curl') || 
                           userAgent.toLowerCase().includes('wget') ||
                           userAgent.toLowerCase().includes('lynx') ||
                           userAgent.toLowerCase().includes('browsh') ||
                           userAgent.toLowerCase().includes('w3m') ||
                           userAgent.toLowerCase().includes('httpie') ||
                           userAgent.toLowerCase().includes('insomnia') ||
                           userAgent.toLowerCase().includes('postman') ||
                           userAgent === '' || // Empty user agent often indicates curl
                           userAgent.toLowerCase().includes('python') ||
                           userAgent.toLowerCase().includes('node') ||
                           // Check Accept header for terminal requests
                           acceptHeader.includes('text/plain') ||
                           acceptHeader.includes('*/*') ||
                           acceptHeader === '';

  if (isTerminalRequest && request.nextUrl.pathname === '/') {
    // Return terminal version for root path
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
${' '.repeat(25)}Web version: http://localhost:3000

${'='.repeat(80)}

DEBUG INFO:
User-Agent: ${userAgent}
Accept: ${acceptHeader}
Is Terminal: ${isTerminalRequest}
`;

    return new NextResponse(terminalPortfolio, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
}; 