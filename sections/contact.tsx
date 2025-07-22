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
import {
  Mail,
  Github,
  Linkedin,
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

const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "torobuisnessro@yahoo.com",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    }
    
  ]
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/catalyntor13",
      label: "GitHub",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/catalin-toro-b46500351/",
      label: "LinkedIn",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      icon: Mail,
      href: "mailto:torobuisnessro@yahoo.com",
      label: "Mail",
      gradient: "from-indigo-600 to-purple-600",
    },
  ]


  
    return (
        <section
      id="contact"
      className="py-20 bg-gradient-to-br from-green-900 via-gray-800 to-green-500 relative overflow-hidden"
    >
      

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <Send className="h-8 w-8 text-green-400 animate-pulse" />
              <div className="absolute inset-0 h-8 w-8 text-green-400 animate-ping opacity-20">
                <Send className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent">
              Să Lucrăm{" "}
              <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                Împreună
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sunt întotdeauna interesat de proiecte noi și oportunități de colaborare. Să discutăm despre următorul tău
            proiect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Contactează-mă
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Hai să transformăm ideile tale în realitate! Sunt pregătit să colaborez la proiecte inovatoare și să
                aduc valoare prin soluții tehnice moderne.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
             {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <div
                    key={contact.label}
                    className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <IconComponent className="h-8 w-8 text-green-400 group-hover:text-white transition-colors duration-300" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-200">{contact.label}</h4>
                        <p className="text-gray-400">{contact.value}</p>
                      </div>
                    </div>
                 
                  </div>
                )
             })}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">Link-uri Social Media</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="group relative"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center hover:border-gray-600/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                        {/* Background gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full`}
                        />
                        <IconComponent
                          className={`h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10`}
                        />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="group relative bg-gray-900/50 backdrop-blur-sm border-0 overflow-hidden">
      {/* Border effects + particles păstrate */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      <div className="absolute inset-[1px] bg-gray-900/90 rounded-lg" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      <CardContent className="p-8 relative z-10">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-green-400 font-medium">Nume</Label>
              <Input
                id="name"
                type="text"
                {...register("name")}
                className="bg-black/50 border-gray-600/50 focus:border-green-500 focus:ring-green-500/20 text-white placeholder:text-gray-500"
                placeholder="Numele tău"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-green-400 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="bg-black/50 border-gray-600/50 focus:border-green-500 focus:ring-green-500/20 text-white placeholder:text-gray-500"
                placeholder="email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-green-400 font-medium">Mesaj</Label>
              <Textarea
                id="message"
                {...register("message")}
                rows={5}
                className="bg-black/50 border-gray-600/50 focus:border-green-500 focus:ring-green-500/20 text-white placeholder:text-gray-500 resize-none"
                placeholder="Mesajul tău..."
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Se trimite...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Trimite Mesajul
                </>
              )}
            </Button>

            {status === 'error' && (
              <p className="text-red-500 text-center">A apărut o eroare. Încearcă din nou.</p>
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
            <h3 className="text-2xl font-bold text-green-400 mb-2">Mesaj trimis cu succes!</h3>
            <p className="text-gray-300">Îți voi răspunde în cel mai scurt timp posibil.</p>
          </div>
        )}
      </CardContent>
      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        {/* Particule */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
      </div>
    </Card>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-green-400" />
            <Sparkles className="h-5 w-5 text-green-400 animate-pulse" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-green-400" />
          </div>
        </div>
      </div>
    </section>
    )
}