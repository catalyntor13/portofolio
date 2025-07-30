"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, BadgeCheck, ArrowRight, Sun} from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Landing Page",
      description:
        "Ideal pentru o prezență online rapidă și eficientă, axată pe un singur obiectiv. Perfect pentru lansări de produse, evenimente sau colectare de lead-uri.",
      price: "$250",
      features: [
        "O singura pagina moderna și responsiv: Design atractiv, adaptabil pe orice dispozitiv (mobil, tabletă, desktop).",
        "Structură optimizată pentru conversie",
        "SEO de bază (meta titluri, descrieri)",
        "Formular de contact integrat",
        "Suport tehnic inclus",
      ],
    },
    {
      id: 2,
      title: "Website Prezentare",
      description:
        "Soluția optimă pentru afacerile care necesită o prezență online mai complexă, cu multiple secțiuni pentru servicii, portofoliu sau informații detaliate.",
      price: "$500",
      features: [
        "Website cu 3-5 Pagini: (ex: Acasă, Despre Noi, Servicii/Portofoliu, Contact).",
        "Design Personalizat: Aspect unic, în linie cu identitatea vizuală a brandului tău.",
        "Formulare Avansate: Formular de contact detaliat",
        "SEO Avansat: Optimizare extinsă pentru vizibilitate în căutări.",
        "Suport Tehnic: Suport esențial pentru funcționare.",
      ],
    },
  ]



  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden scroll-mt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(251,146,60,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(239,68,68,0.1),transparent_50%)]" />

      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Globe className="h-8 w-8 text-green-400" />
              <motion.div
                className="absolute inset-0 h-8 w-8 text-green-400 opacity-20"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Globe className="h-8 w-8" />
              </motion.div>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-teal-300 to-green-500 bg-clip-text text-transparent">
              Servicii
            </h2>
          </div>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
           Soluții web simple și eficiente: landing pages și site-uri de prezentare, gândite pentru rezultate.
          </motion.p>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
  
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
        
              whileHover={{
                scale: 1.03,
            
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
              className="group"
            >
              <Card className="relative bg-gray-900/50 backdrop-blur-sm border-0 overflow-hidden h-full">
                {/* Animated border gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 opacity-0 rounded-lg"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-[1px] bg-gray-900/90 rounded-lg" />

                {/* Background gradient effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 rounded-lg"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />

                <CardContent className="p-8 relative z-10 h-full flex flex-col cursor-pointer ">
                  {/* Header */}
                  <div className="mb-6">
                    <motion.div className="flex items-center gap-3 mb-5"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.5, type: "spring" }}>
                      <Sun className="h-8 w-8 text-green-400 " />
                       <span className="text-xl font-semibold text-green-400">
                        {service.title} 
                        </span>
                    </motion.div>
                    

                    <motion.div
                      className="text-3xl font-bold bg-gray-100 bg-clip-text text-transparent mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.5, type: "spring" }}
                    >
                      {service.price}
                    </motion.div>

                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-4" >
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                        
                          className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                       
                       
                        >
                          <div>
                           
                          
                            <BadgeCheck className="h-5 w-5 text-green-400  mt-0.5 flex-shrink-0" />
                          </div>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link href="#contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    
                    <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-400 hover:to-teal-600 text-white border-0 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                     
                      <span>Contact</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </Button>
              
                  </motion.div>
</Link>
                  {/* Bottom gradient line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </CardContent>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        top: `${25 + i * 25}%`,
                        left: `${25 + i * 25}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
