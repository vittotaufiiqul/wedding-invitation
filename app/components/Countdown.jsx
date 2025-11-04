'use client'
import { useState, useEffect } from 'react'

export default function Countdown() {
  const targetDate = new Date('2025-12-20T10:00:00').getTime()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="text-center py-10">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">Menuju Hari Bahagia</h2>
      <div className="flex justify-center gap-6 text-gray-700">
        <div><span className="text-3xl font-bold">{timeLeft.days}</span><p>Hari</p></div>
        <div><span className="text-3xl font-bold">{timeLeft.hours}</span><p>Jam</p></div>
        <div><span className="text-3xl font-bold">{timeLeft.minutes}</span><p>Menit</p></div>
        <div><span className="text-3xl font-bold">{timeLeft.seconds}</span><p>Detik</p></div>
      </div>
    </section>
  )
}
