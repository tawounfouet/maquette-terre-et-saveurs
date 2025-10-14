'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Minus, Plus, ShoppingCart, ArrowLeft } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { formatPrice, getProductBySlug } from '@/lib/utils'
import productsData from '@/lib/data/products.json'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState(null)
  const [selectedVariation, setSelectedVariation] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const foundProduct = getProductBySlug(productsData, params.slug)
    if (foundProduct) {
      setProduct(foundProduct)
      if (foundProduct.variations && foundProduct.variations.length > 0) {
        setSelectedVariation(foundProduct.variations[0])
      }
    }
  }, [params.slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Produit non trouvé</h2>
          <Button onClick={() => router.push('/boutique')}>Retour à la boutique</Button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const cartItem = {
      ...product,
      quantity,
      selectedVariation,
      cartId: `${product.id}-${selectedVariation?.id || 'default'}`
    }

    const existingItemIndex = cart.findIndex(item => 
      item.cartId === cartItem.cartId
    )

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity
    } else {
      cart.push(cartItem)
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`${quantity} x ${product.name} ajouté(s) au panier !`)
    router.push('/panier')
  }

  const relatedProducts = productsData
    .filter(p => 
      p.id !== product.id && 
      p.categories.some(cat => product.categories.includes(cat))
    )
    .slice(0, 4)

  const currentPrice = selectedVariation?.price || product.price

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => router.push('/boutique')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à la boutique
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-24 object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="flex gap-2 mb-4">
              {product.featured && (
                <Badge className="bg-secondary">Coup de Coeur</Badge>
              )}
              {product.sale_price && (
                <Badge className="bg-red-500">Promo</Badge>
              )}
              {product.stock_status === 'lowstock' && (
                <Badge className="bg-orange-500">Stock Limité</Badge>
              )}
            </div>

            <h1 className="text-4xl font-heading font-bold mb-4 text-gray-900">
              {product.name}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {product.short_description}
            </p>

            {/* Price */}
            <div className="mb-6">
              {product.sale_price ? (
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-red-600">
                    {formatPrice(product.sale_price)}
                  </span>
                  <span className="text-2xl line-through text-gray-400">
                    {formatPrice(product.regular_price)}
                  </span>
                </div>
              ) : (
                <span className="text-4xl font-bold text-primary">
                  {formatPrice(currentPrice)}
                </span>
              )}
            </div>

            {/* Variations */}
            {product.variations && product.variations.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Taille / Format</label>
                <Select 
                  value={selectedVariation?.id} 
                  onValueChange={(val) => {
                    const variation = product.variations.find(v => v.id === val)
                    setSelectedVariation(variation)
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {product.variations.map(variation => (
                      <SelectItem key={variation.id} value={variation.id}>
                        {variation.name} - {formatPrice(variation.price)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Quantité</label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-2xl font-semibold w-16 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={product.stock_quantity && quantity >= product.stock_quantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {product.stock_quantity && (
                <p className="text-sm text-gray-500 mt-2">
                  {product.stock_quantity} unités disponibles
                </p>
              )}
            </div>

            {/* Add to Cart */}
            <Button 
              size="lg" 
              className="w-full btn-primary text-lg py-6 mb-4"
              onClick={handleAddToCart}
              disabled={product.stock_status === 'outofstock'}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Ajouter au Panier
            </Button>

            {/* Stock Status */}
            <div className="mb-6">
              {product.stock_status === 'instock' && (
                <p className="text-green-600 font-medium">✓ En stock</p>
              )}
              {product.stock_status === 'lowstock' && (
                <p className="text-orange-600 font-medium">⚠️ Stock limité</p>
              )}
              {product.stock_status === 'outofstock' && (
                <p className="text-red-600 font-medium">✗ Rupture de stock</p>
              )}
            </div>

            {/* Description */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-heading font-semibold mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Produits Similaires</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard 
                  key={relatedProduct.id} 
                  product={relatedProduct}
                  onAddToCart={(prod) => {
                    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
                    cart.push({ ...prod, quantity: 1 })
                    localStorage.setItem('cart', JSON.stringify(cart))
                    alert(`${prod.name} ajouté au panier !`)
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}