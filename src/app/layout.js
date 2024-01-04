import { Montserrat } from 'next/font/google'
//import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Inforio Sistemas',
  description: 'Inforio Sistemas e Concultoria',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
