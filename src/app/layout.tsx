import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { headers } from 'next/headers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A modern developer portfolio showcasing GitHub projects",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  
  // Check if request is from curl or terminal tools
  const isTerminalRequest = userAgent.toLowerCase().includes('curl') || 
                           userAgent.toLowerCase().includes('wget') ||
                           userAgent.toLowerCase().includes('lynx') ||
                           userAgent.toLowerCase().includes('browsh') ||
                           userAgent.toLowerCase().includes('w3m');

  if (isTerminalRequest) {
    // Return terminal version
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
`;

    return new Response(terminalPortfolio, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  }

  // Return normal web layout for browsers
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
