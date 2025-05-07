'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Code2, Languages } from 'lucide-react'

const experiences = [
  {
    title: 'FreeLance Developer',
    company: 'Self-Employed',
    date: '2022 - Present',
    description: 'Building web applications and providing consulting services.',
    icon: Briefcase,
  },
  
  {
    title: 'Bachelor of Computer Science',
    company: 'Guru Gobind Singh Indraprastha University',
    date: '2022 - Present',
    description: 'Pursuing a degree in Computer Science with a focus on software development.',
    icon: GraduationCap,
  },
]

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion','React Native'],
    icon: Code2,
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'],
    icon: Code2,
  },
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL','C++'],
    icon: Languages,
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'GraphQL'],
    icon: Code2,
  },
  {
    category: 'Soft Skills',
    items: ['Teamwork', 'Communication', 'Problem Solving', 'Time Management'],
    icon: Code2,
  },
  {
    category: 'Design',
    items: ['Figma', 'Adobe XD', 'Sketch'],
    icon: Code2,
  },
  {
    category:'Machine Learning',
    items:['TensorFlow','PyTorch','Scikit-learn'],
    icon: Code2,
  }
  ,
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get to know more about my background, skills, and experience.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-2xl font-bold">Experience & Education</h3>
            <div className="relative">
              <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 to-transparent" />
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-8 pl-8"
                >
                  <div className="absolute left-6 top-0 h-4 w-4 rounded-full bg-primary shadow-lg shadow-primary/20" />
                  <div className="rounded-lg border bg-card p-6 shadow-lg transition-all hover:shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <exp.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">{exp.title}</h4>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.date}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-2xl font-bold">Skills & Expertise</h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border bg-card p-6 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 