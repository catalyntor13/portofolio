"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { contactSchema, ContactFormData } from "@/schemas/contact-schema"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { send } from "@/lib/send"
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion"
import { toast } from "react-hot-toast"

import {
  Mail,
  Linkedin,
  Github,
  Send,
  Sparkles,
  CheckCircle,
  Loader2,
} from "lucide-react"
import Link from "next/link"


export default function ContactSection() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitted, setIsSubmitted] = useState(false)



  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000); // 5 secunde

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const onSubmit = async (data: ContactFormData) => {
    setStatus('idle')

    try {
      await send(data)
      setIsSubmitted(true)
      setStatus('success')
      reset()
    } catch (error) {
      setStatus('error')
    }
  }






  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden scroll-mt-20"
    >


      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative z-10">

          {/* Icon Container Elegant */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 mb-6 relative group"
          >
            <Send className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            {/* Strălucire la hover */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="text-white">Ready to Build? </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-gradient bg-300%">
              Let's Talk
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Trading dashboard, real-timeanalytics, or custom web app? Let's discuss your project and bring it to life.
          </motion.p>
        </div>

        <div className="grid max-w-2xl mx-auto">
       
           
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}

          >


            <Card className="group relative rounded-2xl overflow-hidden bg-slate-900/50 shadow-2xl backdrop-blur-sm border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 ">
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-8 relative z-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-emerald-400 font-medium">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        {...register("name")}
                        className="w-full px-4 py-3 bg-slate-950/80 border border-slate-700 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 text-white placeholder:text-slate-500 transition-all outline-none rounded-xl"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-emerald-400 font-medium">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full px-4 py-3 bg-slate-950/80 border border-slate-700 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 text-white placeholder:text-slate-500 transition-all outline-none rounded-xl"
                        placeholder="email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-emerald-400 font-medium">Message</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-950/80 border border-slate-700 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 text-white placeholder:text-slate-500 transition-all outline-none resize-none rounded-xl"
                        placeholder="Your message..."
                      />
                      {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {status === 'error' && (
                      <p className="text-red-500 text-center">An error occurred. Please try again.</p>
                    )}
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="relative mb-6">
                      <CheckCircle className="h-16 w-16 text-green-400 mx-auto animate-bounce" />
                      <div className="absolute inset-0 h-16 w-16 text-green-400 animate-ping opacity-20 mx-auto">
                        <CheckCircle className="h-16 w-16" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message sent successfully!</h3>
                    <p className="text-emerald-300">I will reply as soon as possible.</p>
                  </div>
                )}
              </CardContent>


              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
              </div>
            </Card>

          </motion.div>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-emerald-400" />
            <Sparkles className="h-5 w-5 text-emerald-300 animate-pulse" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-emerald-400" />
          </div>
        </div>
      </div>

    </section>
  )
}