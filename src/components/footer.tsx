import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 px-4 py-6 text-center md:px-6">
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        >
          <Twitter className="h-6 w-6" />
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        >
          <Linkedin className="h-6 w-6" />
        </a>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © 2024 My Portfolio. All rights reserved.
      </p>
    </footer>
  );
} 