'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { formatPrice } from '@/lib/utils'
import { CreditCard, Check } from 'lucide-react'

export default function CheckoutPage() {
  const router = useRouter()
  const [cart, setCart] = useState([])
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'France',
    notes: ''
  })

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    if (savedCart.length === 0) {
      router.push('/panier')
    }
    setCart(savedCart)
  }, [])

  const subtotal = cart.reduce((sum, item) => {
    const price = item.selectedVariation?.price || item.price
    return sum + (price * item.quantity)
  }, 0)

  const shipping = subtotal > 50 ? 0 : 5.90
  const total = subtotal + shipping

  const handleDeliverySubmit = (e) => {
    e.preventDefault()
    setStep(2)
  }

  const handlePaymentSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Mock order creation
      const order = {
        items: cart,
        deliveryInfo,
        subtotal,
        shipping,
        total,
        status: 'pending',
        paymentMethod: 'stripe',
        createdAt: new Date().toISOString()
      }

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      })

      const data = await response.json()
      
      // Clear cart
      localStorage.removeItem('cart')
      setOrderId(data.id)
      setStep(3)
    } catch (error) {
      alert('Erreur lors de la création de la commande')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-white">Finaliser ma commande</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center ${
              step >= 1 ? 'text-primary' : 'text-gray-400'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                step >= 1 ? 'border-primary bg-primary text-white' : 'border-gray-400'
              }`}>
                {step > 1 ? <Check className="h-5 w-5" /> : '1'}
              </div>
              <span className="ml-2 font-semibold">Livraison</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300" />
            <div className={`flex items-center ${
              step >= 2 ? 'text-primary' : 'text-gray-400'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                step >= 2 ? 'border-primary bg-primary text-white' : 'border-gray-400'
              }`}>
                {step > 2 ? <Check className="h-5 w-5" /> : '2'}
              </div>
              <span className="ml-2 font-semibold">Paiement</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300" />
            <div className={`flex items-center ${
              step >= 3 ? 'text-primary' : 'text-gray-400'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                step >= 3 ? 'border-primary bg-primary text-white' : 'border-gray-400'
              }`}>
                {step > 3 ? <Check className="h-5 w-5" /> : '3'}
              </div>
              <span className="ml-2 font-semibold">Confirmation</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Delivery Info */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Informations de livraison</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleDeliverySubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          required
                          value={deliveryInfo.firstName}
                          onChange={(e) => setDeliveryInfo({...deliveryInfo, firstName: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          required
                          value={deliveryInfo.lastName}
                          onChange={(e) => setDeliveryInfo({...deliveryInfo, lastName: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={deliveryInfo.email}
                          onChange={(e) => setDeliveryInfo({...deliveryInfo, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={deliveryInfo.phone}
                          onChange={(e) => setDeliveryInfo({...deliveryInfo, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Adresse *</Label>
                      <Input
                        id="address"
                        required
                        value={deliveryInfo.address}
                        onChange={(e) => setDeliveryInfo({...deliveryInfo, address: e.target.value})}
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="zipCode">Code postal *</Label>
                        <Input
                          id="zipCode"
                          required
                          value={deliveryInfo.zipCode}
                          onChange={(e) => setDeliveryInfo({...deliveryInfo, zipCode: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">Ville *</Label>
                        <Input
                          id="city"
                          required
                          value={deliveryInfo.city}
                          onChange={(e) => setDeliveryInfo({...deliveryInfo, city: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Pays *</Label>
                        <Input
                          id="country"
                          required
                          value={deliveryInfo.country}
                          onChange={(e) => setDeliveryInfo({...deliveryInfo, country: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="notes">Notes de commande (optionnel)</Label>
                      <Textarea
                        id="notes"
                        value={deliveryInfo.notes}
                        onChange={(e) => setDeliveryInfo({...deliveryInfo, notes: e.target.value})}
                        placeholder="Instructions spéciales pour la livraison..."
                      />
                    </div>

                    <Button type="submit" className="w-full btn-primary" size="lg">
                      Continuer vers le paiement
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Paiement sécurisé</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 p-4 bg-accent rounded-lg">
                    <p className="text-sm text-gray-700">
                      🔒 Paiement sécurisé par Stripe (Mode Démonstration)
                    </p>
                  </div>

                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <CreditCard className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-semibold mb-2">Zone de paiement Stripe</p>
                      <p className="text-sm text-gray-600">
                        En production, le composant Stripe Elements sera intégré ici
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => setStep(1)}
                      >
                        Retour
                      </Button>
                      <Button 
                        type="submit" 
                        className="flex-1 btn-secondary"
                        disabled={loading}
                      >
                        {loading ? 'Traitement...' : 'Valider le paiement'}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <Card>
                <CardContent className="pt-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold mb-4">Commande confirmée !</h2>
                  <p className="text-lg text-gray-600 mb-2">
                    Merci pour votre commande, {deliveryInfo.firstName} !
                  </p>
                  <p className="text-gray-600 mb-6">
                    Numéro de commande : <span className="font-semibold">{orderId}</span>
                  </p>
                  <p className="text-gray-600 mb-8">
                    Un email de confirmation a été envoyé à {deliveryInfo.email}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={() => router.push('/')} variant="outline">
                      Retour à l'accueil
                    </Button>
                    <Button onClick={() => router.push('/boutique')} className="btn-primary">
                      Continuer mes achats
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary Sidebar */}
          {step < 3 && (
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Récapitulatif de commande</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {cart.map((item) => {
                      const itemPrice = item.selectedVariation?.price || item.price
                      return (
                        <div key={item.cartId} className="flex gap-3 pb-3 border-b">
                          <img 
                            src={item.images[0]} 
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-grow">
                            <p className="font-semibold text-sm">{item.name}</p>
                            <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-semibold text-sm">
                            {formatPrice(itemPrice * item.quantity)}
                          </p>
                        </div>
                      )
                    })}
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between">
                      <span>Sous-total</span>
                      <span className="font-semibold">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Livraison</span>
                      <span className="font-semibold">
                        {shipping === 0 ? (
                          <span className="text-green-600">Gratuite</span>
                        ) : (
                          formatPrice(shipping)
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-xl font-bold pt-2 border-t">
                      <span>Total</span>
                      <span className="text-primary">{formatPrice(total)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}