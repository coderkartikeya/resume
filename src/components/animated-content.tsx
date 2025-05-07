'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'

export function AnimatedContent() {
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a')
    // Set the href to your resume file path
    link.href = '/resume.pdf'
    // Set the download attribute with the desired filename
    link.download = 'Kartikeya_Vats_Resume.pdf'
    // Append to body
    document.body.appendChild(link)
    // Trigger the download
    link.click()
    // Clean up
    document.body.removeChild(link)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex max-w-[980px] flex-col items-center gap-4 text-center relative"
    >
      <div className="w-full bg-black/60 rounded-xl p-10 shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
        >
          Hi, I'm <span className="gradient-text">Kartikeya Vats</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-[750px] text-lg text-muted-foreground sm:text-xl"
        >
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4"
        >
          <Button 
            size="lg" 
            className="relative overflow-hidden"
            onClick={handleDownloadResume}
          >
            <span className="relative z-10">Download Resume</span>
            <ArrowDown className="ml-2 h-4 w-4" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button variant="outline" size="lg" className="gradient-border">
            Contact Me
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex gap-4 pt-4"
        >
          <a
            href="https://github.com/coderkartikeya"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:bg-primary/10 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/kartikeya-vats-7a47a9330"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:bg-primary/10 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:bg-primary/10 transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
} 