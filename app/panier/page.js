'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'

export default function CartPage() {
  const router = useRouter()
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(savedCart)
    setLoading(false)
  }, [])

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return
    
    const updatedCart = cart.map(item =>
      item.cartId === cartId ? { ...item, quantity: newQuantity } : item
    )
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const removeItem = (cartId) => {
    const updatedCart = cart.filter(item => item.cartId !== cartId)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const subtotal = cart.reduce((sum, item) => {
    const price = item.selectedVariation?.price || item.price
    return sum + (price * item.quantity)
  }, 0)

  const shipping = subtotal > 50 ? 0 : 5.90
  const total = subtotal + shipping

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6 text-center">
            <ShoppingBag className="h-20 w-20 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-semibold mb-2">Votre panier est vide</h2>
            <p className="text-gray-600 mb-6">
              Découvrez nos produits d'exception et commencez vos achats !
            </p>
            <Link href="/boutique">
              <Button className="btn-primary">
                Découvrir la Boutique
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-white">Mon Panier</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => {
              const itemPrice = item.selectedVariation?.price || item.price
              return (
                <Card key={item.cartId}>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      {/* Image */}
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-32 h-32 object-cover rounded-lg"
                      />

                      {/* Details */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-heading font-semibold mb-2">
                          {item.name}
                        </h3>
                        {item.selectedVariation && (
                          <p className="text-sm text-gray-600 mb-2">
                            Format: {item.selectedVariation.name}
                          </p>
                        )}
                        <p className="text-lg font-bold text-primary mb-4">
                          {formatPrice(itemPrice)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.cartId)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Supprimer
                          </Button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="text-right">
                        <p className="text-xl font-bold">
                          {formatPrice(itemPrice * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            <Link href="/boutique">
              <Button variant="outline" className="w-full">
                Continuer mes achats
              </Button>
            </Link>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Récapitulatif</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Sous-total</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span>Livraison</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-600">Gratuite</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>

                {subtotal < 50 && (
                  <p className="text-sm text-gray-600 bg-accent p-3 rounded">
                    🚚 Livraison gratuite dès {formatPrice(50)} d'achat !
                    Plus que {formatPrice(50 - subtotal)} pour en profiter.
                  </p>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between text-2xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(total)}</span>
                  </div>
                </div>

                <Button 
                  className="w-full btn-secondary text-lg py-6"
                  onClick={() => router.push('/checkout')}
                >
                  Procéder au paiement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <p>🔒 Paiement sécurisé</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}