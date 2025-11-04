'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-pink-50 to-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-pink-600"
      >
        Vitto & Amelia
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg text-gray-600"
      >
        Kami mengundang Anda ke hari bahagia kami 💕
      </motion.p>
    </section>
  )
}
