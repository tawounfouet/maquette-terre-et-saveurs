import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  metadataBase: new URL('https://maquette-terre-et-saveurs.vercel.app'),
  title: 'Terre & Saveurs - Produits Artisanaux d\'Exception',
  description: 'Découvrez nos produits artisanaux : poivre de Penja, marinades, épices, confitures et sirops. Saveurs authentiques et qualité d\'exception.',
  
  // Open Graph metadata (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Terre & Saveurs - Épicerie Fine Africaine',
    description: 'Découvrez nos produits artisanaux d\'exception : poivre de Penja IGP, marinades gourmets, épices africaines authentiques. Saveurs d\'Afrique depuis 2021.',
    images: [
      {
        url: '/logo-terre-et-saveurs-nobg_300x300.png',
        width: 300,
        height: 300,
        alt: 'Logo Terre & Saveurs - Épicerie Fine Africaine',
      }
    ],
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Terre & Saveurs',
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Terre & Saveurs - Épicerie Fine Africaine',
    description: 'Poivre de Penja IGP, épices africaines authentiques, marinades gourmets. Saveurs d\'exception depuis 2021.',
    images: ['/logo-terre-et-saveurs-nobg_300x300.png'],
  },
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