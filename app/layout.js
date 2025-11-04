import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata = {
  title: 'Vitto & Amelia Wedding',
  description: 'Undangan Pernikahan Vitto & Amelia 💕',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
