'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      })
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-foreground/60 text-lg">Have a project in mind? Let's build something impactful</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left side - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Whether you're interested in collaborating on a project, discussing technology trends, or just saying hello – I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-4">
              <a href="mailto:sami@example.com" className="group flex items-center gap-4 p-4 rounded-xl bg-card/40 backdrop-blur border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card/60">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <p className="font-semibold text-foreground">sami@example.com</p>
                </div>
              </a>

              <div className="group flex items-center gap-4 p-4 rounded-xl bg-card/40 backdrop-blur border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card/60">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Location</p>
                  <p className="font-semibold text-foreground">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow me</h4>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-card/40 backdrop-blur border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 group">
                  <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-card/40 backdrop-blur border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary/50 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary/50 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-foreground/40"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-foreground font-semibold py-6 text-base disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
