'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      })

      setSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })

      setTimeout(() => setSuccess(false), 5000)
    } catch (error) {
      alert('Erreur lors de l\'envoi du message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-white">Contactez-Nous</h1>
          <p className="text-center text-xl mt-4 text-gray-200">
            Questions diverses ? Demande de devis ? Nous sommes à votre service !
          </p>
          <p className="text-center text-lg mt-2 text-gray-300">
            Depuis 2021, Terre et saveurs, basé à Bruxelles importe le poivre de Penja grand cru directement des plantations familiales situées au Cameroun afin de ravir les papilles des amateurs de poivre et de produits gourmet.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">Ma Localisation</h3>
                <p className="text-gray-600">
                  Belgique, Bruxelles
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Phone className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">Téléphone</h3>
                <p className="text-gray-600">
                  <a href="tel:+33123456789" className="hover:text-primary transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">E-mail</h3>
                <p className="text-gray-600">
                  Utilisez le formulaire de contact ci-dessous
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">Horaires</h3>
                <p className="text-gray-600">
                  Lundi – Vendredi: 9h – 17h
                </p>
              </CardContent>
            </Card>

            {/* Livraison Info */}
            <Card className="bg-accent">
              <CardContent className="pt-6">
                <h3 className="text-lg font-heading font-semibold mb-4">Livraison</h3>
                <p className="text-gray-700 font-medium">
                  🚚 Livraison gratuite en Belgique dès 50€ d'achat
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
                <p className="text-gray-600">
                  Remplissez le formulaire de contact ci-dessous puis cliquez sur "Envoyer". Nous prendrons contact avec vous dans les meilleurs délais.
                </p>
              </CardHeader>
              <CardContent>
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    ✓ Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        required
                        placeholder="Votre prénom"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        required
                        placeholder="Votre nom de famille"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
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
                        placeholder="votre.email@exemple.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+32 123 45 67 89"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="Question sur vos produits, demande de devis, partenariat..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={8}
                      placeholder="Bonjour,&#10;&#10;Je vous contacte concernant...&#10;&#10;Merci de votre retour.&#10;&#10;Cordialement,"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-primary"
                    disabled={loading}
                  >
                    {loading ? 'Envoi en cours...' : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="mt-6">
              <CardContent className="p-0">
                <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Google Maps</p>
                    <p className="text-sm">Belgique, Bruxelles</p>
                    <p className="text-xs mt-2 text-gray-500">
                      Terre et Saveurs - Épicerie Fine Africaine
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}