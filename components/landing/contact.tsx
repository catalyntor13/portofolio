"use client"

import { useState, useEffect } from "react"
import { contactSchema, ContactFormData } from "@/schemas/contact-schema"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { send } from "@/lib/send"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "react-hot-toast"

import {
  Send,
  CheckCircle,
  Loader2,
  X,
  Mail,
} from "lucide-react"


export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        duration: 4000,
        position: 'bottom-right',
        style: {
          background: '#0f172a',
          color: '#fff',
          border: '1px solid #06b6d4',
          borderRadius: '0.5rem',
        },
      })
    } catch (error) {
      setStatus('error')
      toast.error('Failed to send message. Please try again.', {
        duration: 4000,
        position: 'bottom-right',
        style: {
          background: '#0f172a',
          color: '#fff',
          border: '1px solid #ef4444',
          borderRadius: '0.5rem',
        },
      })
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Reset form state when closing
    setTimeout(() => {
      setIsSubmitted(false)
      setStatus('idle')
      reset()
    }, 300)
  }

  return (
    <>
      {/* Contact Button - For Indie Page */}
      <div className="z-40 mt-10">
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
        >
          Contact Me <Mail className="w-5 h-5 ml-1" />
        </motion.button>
      </div>

      {/* Modal Backdrop & Form */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-2xl border border-cyan-500/20 shadow-2xl overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
              >
                <X className="w-5 h-5 text-slate-300" />
              </button>

              <div className="relative z-10 p-8 space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                    <Send className="w-6 h-6 text-cyan-400" />
                    Get In Touch
                  </h2>
                  <p className="text-slate-400 text-sm">
                    Having a idea or project 
                  </p>
                </div>

                {/* Form or Success Message */}
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="modal-name" className="text-cyan-400 font-medium text-sm">
                        Name
                      </Label>
                      <Input
                        id="modal-name"
                        type="text"
                        {...register("name")}
                        className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-700 focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder:text-slate-500 transition-all outline-none rounded-lg text-sm"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="modal-email" className="text-cyan-400 font-medium text-sm">
                        Email
                      </Label>
                      <Input
                        id="modal-email"
                        type="email"
                        {...register("email")}
                        className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-700 focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder:text-slate-500 transition-all outline-none rounded-lg text-sm"
                        placeholder="email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <Label htmlFor="modal-message" className="text-cyan-400 font-medium text-sm">
                        Message
                      </Label>
                      <Textarea
                        id="modal-message"
                        {...register("message")}
                        rows={4}
                        className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-700 focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder:text-slate-500 transition-all outline-none resize-none rounded-lg text-sm"
                        placeholder="Your message..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs">{errors.message.message}</p>
                      )}
                    </div>

                    {status === 'error' && (
                      <p className="text-red-400 text-sm text-center">
                        An error occurred. Please try again.
                      </p>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                      className="mb-4"
                    >
                      <CheckCircle className="h-16 w-16 text-cyan-400 mx-auto" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                    <button
                      onClick={handleCloseModal}
                      className="px-4 py-2 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all text-sm font-medium"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}