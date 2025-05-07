'use client'

import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { AnimatedContent } from '@/components/animated-content'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { ProfileSection } from '@/components/profile-section'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex-1">
        <section className="flex min-h-screen items-center justify-center relative overflow-hidden">
          {/* Background image and overlay */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/bg.jpg"
              alt="Background"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
          </div>
          <AnimatedContent />
        </section>
        <ProfileSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  )
}
