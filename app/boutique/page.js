'use client'

import { useState, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Filter } from 'lucide-react'
import productsData from '@/lib/data/products.json'
import { searchProducts, sortProducts, getProductsByCategory } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

export default function BoutiquePage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')

  const [products, setProducts] = useState(productsData)
  const [filteredProducts, setFilteredProducts] = useState(productsData)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all')
  const [sortBy, setSortBy] = useState('default')
  const [priceRange, setPriceRange] = useState('all')

  const categories = [
    { value: 'all', label: 'Toutes les Catégories' },
    { value: 'marinades', label: 'Marinades' },
    { value: 'peppers', label: 'Poivres de Penja' },
    { value: 'spices', label: 'Épices' },
    { value: 'jams', label: 'Confitures' },
    { value: 'syrups', label: 'Sirops' },
  ]

  useEffect(() => {
    let result = products

    // Apply category filter
    result = getProductsByCategory(result, selectedCategory)

    // Apply search
    if (searchQuery) {
      result = searchProducts(result, searchQuery)
    }

    // Apply price filter
    if (priceRange === 'under-10') {
      result = result.filter(p => p.price < 10)
    } else if (priceRange === '10-15') {
      result = result.filter(p => p.price >= 10 && p.price <= 15)
    } else if (priceRange === 'over-15') {
      result = result.filter(p => p.price > 15)
    }

    // Apply sorting
    result = sortProducts(result, sortBy)

    setFilteredProducts(result)
  }, [searchQuery, selectedCategory, sortBy, priceRange, products])

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1, selectedVariation: product.variations[0] })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`${product.name} ajouté au panier !`)
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-white">Notre Boutique</h1>
          <p className="text-center text-xl mt-4 text-gray-200">
            Découvrez notre sélection de produits artisanaux d'exception
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Prix" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les prix</SelectItem>
                <SelectItem value="under-10">Moins de 10€</SelectItem>
                <SelectItem value="10-15">10€ - 15€</SelectItem>
                <SelectItem value="over-15">Plus de 15€</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Par défaut</SelectItem>
                <SelectItem value="price-asc">Prix croissant</SelectItem>
                <SelectItem value="price-desc">Prix décroissant</SelectItem>
                <SelectItem value="name-asc">Nom A-Z</SelectItem>
                <SelectItem value="name-desc">Nom Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">Aucun produit trouvé</p>
            <Button 
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
                setPriceRange('all')
                setSortBy('default')
              }}
              className="mt-4"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}