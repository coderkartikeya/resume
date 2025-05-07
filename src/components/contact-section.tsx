'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-6"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">kartikeyavats04@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    github.com/coderkartikeya
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    linkedin.com/in/kartikeyavats
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Twitter className="h-5 w-5 text-primary" />
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    twitter.com/Coderkartikeya
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-xl font-bold">Location</h3>
              <p className="text-muted-foreground">
                Shahdara , Delhi , India
                <br />
                Open to remote work and relocation
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 