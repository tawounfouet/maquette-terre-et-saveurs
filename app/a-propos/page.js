'use client'

import Hero from '@/components/Hero'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Award, Heart, Leaf, Users, MapPin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <Hero 
        title="Notre Histoire"
        subtitle="Passion, Authenticité & Qualité depuis 2020"
        image="https://images.unsplash.com/photo-1654158168200-f8e241edb386"
        height="h-[400px]"
      />

      {/* Laurence Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-primary">Laurence, Fondatrice</h2>
              <p className="text-lg mb-4 text-gray-700">
                Passionnée de gastronomie depuis toujours, j'ai créé Terre & Saveurs avec une mission simple : 
                rendre accessible les produits d'exception tout en soutenant les producteurs locaux et les 
                partenariats solidaires.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Mon coup de cœur ? Le poivre de Penja du Cameroun. Lors d'un voyage en 2019, j'ai découvert 
                ce trésor culinaire aux arômes incomparables. J'ai décidé de le faire connaître en France, 
                tout en garantissant une rémunération juste aux producteurs.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Aujourd'hui, Terre & Saveurs c'est une gamme complète de produits artisanaux, sélectionnés 
                avec soin et amour, pour sublimer votre cuisine au quotidien.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1695924274007-82018762e6bc" 
                alt="Laurence"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-primary">Notre Mission</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Offrir des produits d'exception tout en respectant les hommes et la terre. 
            Chaque achat chez Terre & Saveurs contribue à un commerce plus juste et plus éthique.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <Award className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Qualité Premium</h3>
                <p className="text-gray-600">
                  Sélection rigoureuse des meilleurs produits. Chaque épice, chaque confiture est 
                  testée et approuvée pour sa qualité exceptionnelle.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <Heart className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Artisanal</h3>
                <p className="text-gray-600">
                  Respect du savoir-faire traditionnel. Nos produits sont élaborés selon des méthodes 
                  artisanales transmises de génération en génération.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <Leaf className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Éthique</h3>
                <p className="text-gray-600">
                  Commerce équitable et partenariats solidaires. Nous garantissons une rémunération 
                  juste à tous nos producteurs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <Users className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Communauté</h3>
                <p className="text-gray-600">
                  Proximité avec nos clients. Nous sommes à l'écoute et partageons nos recettes 
                  et astuces culinaires.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-white">Nos Engagements Solidaires</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="pt-6 text-center">
                <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Poivre de Penja</h3>
                <p className="text-gray-200">
                  Partenariat direct avec les producteurs camerounais. Garantie d'une rémunération 
                  équitable et soutien au développement local.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="pt-6 text-center">
                <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Producteurs Français</h3>
                <p className="text-gray-200">
                  Collaboration avec des artisans français pour nos confitures, sirops et marinades. 
                  Circuit court privilégié.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="pt-6 text-center">
                <Leaf className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Agriculture Responsable</h3>
                <p className="text-gray-200">
                  Privilégie les cultures respectueuses de l'environnement. Pas de pesticides, 
                  agriculture raisonnée.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">Galerie</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1602716133884-67f7d39d0238" 
              alt="Poivre de Penja"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.unsplash.com/photo-1758745464235-ccb8c1253074" 
              alt="Épices"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.unsplash.com/photo-1585678668451-ecd744ae0a1b" 
              alt="Confitures"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.unsplash.com/photo-1591271955631-f6167c3d3564" 
              alt="Marinades"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.unsplash.com/photo-1530388489801-7e31e6d2bd63" 
              alt="Sirops"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.pexels.com/photos/6163267/pexels-photo-6163267.jpeg" 
              alt="Cuisine"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-primary">Rejoignez l'Aventure</h2>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
            Découvrez nos produits d'exception et faites partie de notre communauté de passionnés de gastronomie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/boutique">
              <Button size="lg" className="btn-primary">
                Découvrir la Boutique
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}