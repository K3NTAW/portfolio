"use client";

import GitHubProjectsDisplay from '@/components/GitHubProjectsDisplay';
import GitHubStats from '@/components/GitHubStats';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/4 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">


          {/* Main Content */}
          <div className="space-y-8">
            {/* Name */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-fade-in">
              Kenta Waibel
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay">
              Full-stack developer crafting digital experiences with modern technologies
            </p>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto animate-fade-in-delay-2">
              Passionate about creating beautiful, functional, and scalable web applications. 
              Specializing in React, TypeScript, Node.js, and cloud technologies.
            </p>

                        {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8 animate-fade-in-delay-3">
              <a 
                href="https://github.com/k3ntaw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/kenta-waibel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>

                <a 
                  href="mailto:hello@k3ntaw.dev" 
                  className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-6 h-6" />
                </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute -bottom-64 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={scrollToContent}
              className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="py-12">
        <div className="container mx-auto">
          <GitHubStats username="k3ntaw" />
          <GitHubProjectsDisplay username="k3ntaw" />
        </div>
      </section>
    </div>
  );
}
