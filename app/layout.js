import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terre & Saveurs - Produits Artisanaux d\'Exception',
  description: 'Découvrez nos produits artisanaux : poivre de Penja, marinades, épices, confitures et sirops. Saveurs authentiques et qualité d\'exception.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo-terre-et-saveurs-nobg_300x300.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}