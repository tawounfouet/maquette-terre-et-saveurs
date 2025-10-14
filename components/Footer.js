'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Terre & Saveurs</h3>
            <p className="text-sm text-gray-300">
              Découvrez nos produits artisanaux d'exception : poivres de Penja, marinades, épices, confitures et sirops.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/boutique" className="hover:text-secondary transition-colors">Boutique</Link></li>
              <li><Link href="/recettes" className="hover:text-secondary transition-colors">Recettes</Link></li>
              <li><Link href="/a-propos" className="hover:text-secondary transition-colors">À Propos</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Catégories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/boutique?category=marinades" className="hover:text-secondary transition-colors">Marinades</Link></li>
              <li><Link href="/boutique?category=peppers" className="hover:text-secondary transition-colors">Poivres de Penja</Link></li>
              <li><Link href="/boutique?category=spices" className="hover:text-secondary transition-colors">Épices</Link></li>
              <li><Link href="/boutique?category=jams" className="hover:text-secondary transition-colors">Confitures</Link></li>
              <li><Link href="/boutique?category=syrups" className="hover:text-secondary transition-colors">Sirops</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>123 Rue de la Gastronomie<br />75001 Paris, France</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contact@terreetsaveurs.fr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300">
              © 2024 Terre & Saveurs. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-gray-300">
              <Link href="/mentions-legales" className="hover:text-secondary transition-colors">Mentions Légales</Link>
              <Link href="/cgv" className="hover:text-secondary transition-colors">CGV</Link>
              <Link href="/confidentialite" className="hover:text-secondary transition-colors">Confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}