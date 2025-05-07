'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function ProfileSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 md:flex-row md:gap-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-64 w-64 md:h-80 md:w-80"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/80 p-1">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/image.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create efficient,
              scalable, and user-friendly solutions.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              <div className="rounded-lg border bg-card p-4 shadow-lg">
                <h3 className="text-2xl font-bold text-primary">2+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="rounded-lg border bg-card p-4 shadow-lg">
                <h3 className="text-2xl font-bold text-primary">20+</h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="rounded-lg border bg-card p-4 shadow-lg">
                <h3 className="text-2xl font-bold text-primary">10+</h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 