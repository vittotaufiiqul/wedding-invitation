'use client'
import { useState } from 'react'

export default function RSVPForm() {
  const [name, setName] = useState('')
  const [attending, setAttending] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Terima kasih ${name}! Konfirmasi Anda: ${attending}`)
    setName('')
    setAttending('')
    setMessage('')
  }

  return (
    <section className="py-10 text-center bg-pink-50 rounded-2xl mx-4">
      <h2 className="text-2xl font-semibold mb-4 text-pink-600">Konfirmasi Kehadiran</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
        <input
          type="text"
          placeholder="Nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded-md"
          required
        />
        <select
          value={attending}
          onChange={(e) => setAttending(e.target.value)}
          className="border p-2 rounded-md"
          required
        >
          <option value="">Apakah Anda akan hadir?</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
        <textarea
          placeholder="Ucapan atau pesan..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
        >
          Kirim RSVP
        </button>
      </form>
    </section>
  )
}
