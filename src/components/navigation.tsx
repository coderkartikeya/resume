'use client'

import { ThemeToggle } from '@/components/theme-toggle'

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">Kartikeya Vats</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center space-x-4">
            <a href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
} 