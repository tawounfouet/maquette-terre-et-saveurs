'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Star, Award, Heart, Leaf } from 'lucide-react'
import productsData from '@/lib/data/products.json'
import recipesData from '@/lib/data/recipes.json'
import testimonialsData from '@/lib/data/testimonials.json'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Get featured products
  const featuredProducts = productsData.filter(p => p.featured).slice(0, 4)
  const recentRecipes = recipesData.slice(0, 3)

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      alert('Merci de votre inscription !')
      setEmail('')
    } catch (error) {
      alert('Erreur lors de l\'inscription')
    }
  }

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`${product.name} ajouté au panier !`)
    window.location.reload()
  }

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Terre & Saveurs"
        subtitle="Découvrez nos produits artisanaux d'exception"
        image="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg"
        ctaPrimary={{ text: 'Découvrir la Boutique', href: '/boutique' }}
        ctaSecondary={{ text: 'Nos Recettes', href: '/recettes' }}
      />

      {/* Brand Story Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-primary">L'Art de la Gastronomie</h2>
              <p className="text-lg mb-6 text-gray-700">
                Terre & Saveurs est né de la passion de Laurence pour les saveurs authentiques 
                et les produits d'exception. Chaque produit est sélectionné avec soin, en privilégiant 
                les producteurs locaux et les partenariats solidaires.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Notre poivre de Penja, notre fierté, provient directement du Cameroun et bénéficie 
                d'une IGP garantissant son authenticité et sa qualité exceptionnelle.
              </p>
              <Link href="/a-propos">
                <Button className="btn-primary">En Savoir Plus</Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1654158168200-f8e241edb386" 
                alt="Notre histoire"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">Nos Valeurs</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Qualité Premium</h3>
                <p className="text-gray-600">Sélection rigoureuse de produits d'exception</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Artisanal</h3>
                <p className="text-gray-600">Savoir-faire traditionnel et authentique</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Leaf className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Éthique</h3>
                <p className="text-gray-600">Partenariats solidaires et commerce équitable</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Star className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">Engagement qualité à chaque étape</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-primary">Nos Coups de Coeur</h2>
            <p className="text-lg text-gray-600">Découvrez notre sélection de produits d'exception</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/boutique">
              <Button size="lg" className="btn-secondary">
                Voir Toute la Boutique
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">Nos Catégories</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Marinades', image: 'https://images.unsplash.com/photo-1591271955631-f6167c3d3564', href: '/boutique?category=marinades' },
              { name: 'Poivres de Penja', image: 'https://images.unsplash.com/photo-1602716133884-67f7d39d0238', href: '/boutique?category=peppers' },
              { name: 'Épices', image: 'https://images.unsplash.com/photo-1758745464235-ccb8c1253074', href: '/boutique?category=spices' },
              { name: 'Confitures', image: 'https://images.unsplash.com/photo-1585678668451-ecd744ae0a1b', href: '/boutique?category=jams' },
              { name: 'Sirops', image: 'https://images.unsplash.com/photo-1530388489801-7e31e6d2bd63', href: '/boutique?category=syrups' },
            ].map((category) => (
              <Link key={category.name} href={category.href}>
                <Card className="group cursor-pointer hover:shadow-xl transition-all overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <h3 className="text-white font-heading text-xl font-semibold p-4">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Highlights */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-primary">Recettes Inspirées</h2>
            <p className="text-lg text-gray-600">Laissez-vous inspirer par nos créations culinaires</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentRecipes.map((recipe) => (
              <Link key={recipe.id} href={`/recettes/${recipe.slug}`}>
                <Card className="group hover:shadow-xl transition-shadow overflow-hidden h-full">
                  <div className="relative h-56">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{recipe.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>⏱️ {recipe.prepTime}</span>
                      <span>🍽️ {recipe.servings} pers.</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/recettes">
              <Button size="lg" variant="outline">
                Toutes les Recettes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-white">Ils Nous Font Confiance</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonialsData[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-xl mb-6 italic">
                  "{testimonialsData[currentTestimonial].text}"
                </p>
                <p className="font-semibold text-lg">
                  {testimonialsData[currentTestimonial].name}
                </p>
                <p className="text-sm text-gray-300">
                  {testimonialsData[currentTestimonial].location}
                </p>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-secondary' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 text-primary">Restez Connectés</h2>
            <p className="text-lg text-gray-600 mb-8">
              Inscrivez-vous à notre newsletter pour recevoir nos recettes, 
              nos nouveautés et nos offres exclusives.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow text-lg py-6"
              />
              <Button type="submit" size="lg" className="btn-primary px-8">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}