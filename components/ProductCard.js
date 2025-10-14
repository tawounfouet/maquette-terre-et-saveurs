'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/lib/utils'
import { ShoppingCart } from 'lucide-react'

export default function ProductCard({ product, onAddToCart }) {
  const handleAddToCart = (e) => {
    e.preventDefault()
    if (onAddToCart) {
      onAddToCart(product)
    }
  }

  return (
    <Link href={`/boutique/produit/${product.slug}`}>
      <Card className="group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-lg h-64">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.sale_price && (
            <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">
              Promo
            </Badge>
          )}
          {product.stock_status === 'lowstock' && (
            <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">
              Stock Limité
            </Badge>
          )}
          {product.featured && (
            <Badge className="absolute top-3 left-3 bg-secondary hover:bg-secondary-hover">
              Coup de Coeur
            </Badge>
          )}
        </div>

        <CardContent className="flex-grow pt-4">
          <h3 className="font-heading text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.short_description}
          </p>
        </CardContent>

        <CardFooter className="flex justify-between items-center pt-4 border-t">
          <div>
            {product.sale_price ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-red-600">
                  {formatPrice(product.sale_price)}
                </span>
                <span className="text-sm line-through text-gray-400">
                  {formatPrice(product.regular_price)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          <Button 
            size="sm" 
            className="btn-primary"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Ajouter
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}