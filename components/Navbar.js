'use client'

import Link from 'next/link'
import { ShoppingCart, Menu, X, Search, Facebook, Instagram, Mail, Phone, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    // Get cart count from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0))
  }, [])

  const navigation = [
    { name: 'Accueil', href: '/' },
    { 
      name: 'La Boutique', 
      href: '/boutique',
      dropdown: [
        { name: 'Épices', href: '/boutique?category=epices' },
        { name: 'Poivres', href: '/boutique?category=poivres' },
        { name: 'Sirops', href: '/boutique?category=sirops' },
        { name: 'Confitures', href: '/boutique?category=confitures' },
        { name: 'Coffrets Cadeaux', href: '/boutique?category=coffrets' }
      ]
    },
    { 
      name: 'Produits', 
      href: '/boutique',
      dropdown: [
        { name: 'Poivre de Penja', href: '/boutique?product=poivre-penja' },
        { name: 'Épices Africaines', href: '/boutique?category=epices-africaines' },
        { name: 'Sirops Artisanaux', href: '/boutique?category=sirops' },
        { name: 'Marinades', href: '/boutique?category=marinades' }
      ]
    },
    { name: 'Recettes', href: '/recettes' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <div className="sticky top-0 z-50">
      {/* En-tête supérieure */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-4">
              <Link href="https://facebook.com" className="hover:text-secondary transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-secondary transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <div className="flex items-center space-x-1 text-xs">
                <Mail className="h-3 w-3" />
                {/* <span>contact@terre-et-saveurs.fr</span> */}
              </div>
            </div>

            {/* Bouton d'action */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-xs">
                <Phone className="h-3 w-3" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <Link href="/contact">
                <Button variant="secondary" size="sm" className="text-xs px-3 py-1">
                  Commander
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img 
                // src="/logo-terre-et-saveurs-nobg_300x300.png" 
                src="https://customer-assets.emergentagent.com/job_249e6c4f-a3dd-442f-a38a-9b6fb36a43c8/artifacts/owjdn5er_logo-terre-et-saveurs-nobg_300x300.png" 

                alt="Terre et Saveurs" 
                className="h-16 w-16"
              />
              <span className="text-2xl font-heading font-semibold text-primary hidden sm:block">
                Terre & Saveurs
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium py-2"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="h-4 w-4" />}
                  </Link>
                  
                  {/* Menu déroulant */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions: Recherche, Panier & Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Recherche */}
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="h-5 w-5" />
              </Button>

              {/* Panier */}
              <Link href="/panier">
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-secondary text-xs font-bold text-secondary-foreground rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 text-gray-700 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {/* Menu déroulant mobile */}
                  {item.dropdown && (
                    <div className="ml-4 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}