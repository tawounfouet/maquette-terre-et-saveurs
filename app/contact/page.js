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
            Une question ? Un conseil ? N'hésitez pas à nous écrire !
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
                <h3 className="text-lg font-heading font-semibold mb-2">Adresse</h3>
                <p className="text-gray-600">
                  123 Rue de la Gastronomie<br />
                  75001 Paris<br />
                  France
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
                <h3 className="text-lg font-heading font-semibold mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:contact@terreetsaveurs.fr" className="hover:text-primary transition-colors">
                    contact@terreetsaveurs.fr
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">Horaires</h3>
                <p className="text-gray-600">
                  Lundi - Vendredi : 9h - 18h<br />
                  Samedi : 10h - 17h<br />
                  Dimanche : Fermé
                </p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-accent">
              <CardContent className="pt-6">
                <h3 className="text-lg font-heading font-semibold mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors">
                    <span className="sr-only">Facebook</span>
                    f
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors">
                    <span className="sr-only">Instagram</span>
                    @
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors">
                    <span className="sr-only">Twitter</span>
                    𝕏
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
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
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        required
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
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
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
                      placeholder="Question, commande, partenariat..."
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
                      placeholder="Décrivez votre demande en détail..."
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
                    <p className="text-sm">123 Rue de la Gastronomie, Paris</p>
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