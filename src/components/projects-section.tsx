'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Swasth Seva',
    description: 'A health and wellness platform connecting users with professionals.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'swasthh.png',
    github: 'https://github.com/coderkartikeya/SwasthSeva',
    live: 'https://example.com',
  },
  {
    title: 'LinkNest',
    description: 'A social media platform for Joining Communities based and Location and many moderation features.',
    technologies: ['Next.js', 'MongoDb', 'Tailwind CSS'],
    image: 'linknest.png',
    github: 'https://github.com/coderkartikeya/linkNest',
    live: 'https://example.com',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: 'resume.png',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Ecommerce Store',
    description: 'An online store with a user-friendly interface and secure payment options.',
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB'],
    image: 'Ecomm.png',
    github: 'https://github.com/coderkartikeya/ecommerce',
    live: 'https://ecommerce-mu-gilt-14.vercel.app/',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media analytics and management platform.',
    technologies: ['Next.js', 'GraphQL', 'Tailwind CSS'],
    image: 'threads.png',
    github: 'https://github.com/coderkartikeya/threads',
    live: 'https://app-teal-gamma.vercel.app/',
  },
  {
    title: 'Plant Disease Detection',
    description: 'A web application for detecting plant diseases using Deep learning.',
    technologies: ['Deep Learning', 'Pytorch', 'Tensorflow','FastAPI','Next.js'],
    image: 'image.png',
    github: 'https://github.com/coderkartikeya/Disease/tree/main',
    live: 'https://github.com/coderkartikeya/Disease/tree/main',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border bg-card shadow-lg transition-all hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={`/${project.image}`}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="bg-primary hover:bg-primary/90 transition-colors"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 