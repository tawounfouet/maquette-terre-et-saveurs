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
        subtitle="Produits de qualité des terres d'Afrique depuis 2021"
        image="https://images.unsplash.com/photo-1654158168200-f8e241edb386"
        height="h-[400px]"
      />

      {/* Laurence Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-primary">Bonjour, Je suis Laurence</h2>
              <p className="text-lg mb-4 text-gray-700">
                Je suis Laurence Lechevalier, créatrice de la marque Terre et Saveurs épicerie fine qui valorise 
                les saveurs africaines à travers les produits d'exception de la gastronomie africaine entre l'Afrique et l'Europe.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Amoureuse des produits de terroir, j'ai à cœur de partager des produits authentiques tels que le poivre de Penja 
                blanc et noir en provenance directe de nos exploitations familiales distribués en gros et en détail ainsi que les 
                créations aux saveurs uniques comme les sirops artisanaux hibiscus ou gingembre pour agrémenter les moments conviviaux.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Terre et Saveurs c'est aussi le partage culinaire à travers des cours de cuisine africaine traditionnelle et afro fusion 
                sur mesure et la conception des coffrets cadeaux afro inspirés pour vos évènements et cadeaux d'affaires.
              </p>
            </div>
            <div>
              <img 
                src="/image-laurence.webp"
                // src="https://images.unsplash.com/photo-1695924274007-82018762e6bc" 
                alt="Laurence"
                className="rounded-lg shadow-xl w-full h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* La Naissance de TERRE & SAVEURS */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">La Naissance de TERRE & SAVEURS</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6 text-gray-700">
              On me demande souvent pourquoi le poivre de Penja est-il si différent des autres poivres ? 
              C'est d'abord un produit rare, même si depuis quelques années, la production a considérablement 
              augmenté, il reste un produit d'exception.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Il a aussi beaucoup de saveurs. Attention quand on l'utilise. Il est très parfumé et a beaucoup 
              de "caractère". Il peut en avoir de trop si on a la main lourde.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Sa situation géographique peut aussi expliquer ses saveurs fortes et incomparables. Penja, au Cameroun, 
              se situe sur les reliefs collinaires du sud du mont Koupé entre la région du Littoral et celle du Sud-Ouest 
              du Cameroun 100 et 500 mètres d'altitude et sur sous-sol basaltique. Une terre volcanique très fertile et 
              un microclimat spécifique caractérisé par une forte humidité sont les spécificités que reconnaît notamment 
              l'IGP pour donner toutes ses lettres de noblesse au poivre de Penja.
            </p>
            <p className="text-lg text-gray-700">
              Donc, c'est avec beaucoup d'adresse que doit se manier cette épice dans votre cuisine, pour relever vos 
              plats et leur apporter cette touche qui fait que le poivre de Penja est différent des autres.
            </p>
          </div>
        </div>
      </section>

      {/* Nos Ingrédients */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">Nos Ingrédients d'Exception</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src="/gingembre.webp"
                    alt="Racines de gingembre frais"
                    className="rounded-lg w-full h-48 object-cover shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Gingembre</h3>
                <p className="text-gray-700 mb-4">
                  Le gingembre est une plante vivace tropicale herbacée d'environ 0,90 m à 1 m de haut issue d'un rhizome.
                </p>
                <p className="text-gray-700 mb-4">
                  Les feuilles persistantes sont lancéolées, bisériées, longues et odorantes. Les fleurs sont blanches et jaunes, 
                  ponctuées de rouge sur les lèvres, les bractées sont vertes et jaunes.
                </p>
                <p className="text-gray-700">
                  Il apprécie une exposition ensoleillée et une atmosphère humide. La croissance est rapide et la multiplication 
                  se fait par division des rhizomes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11"
                    alt="Fleurs d'hibiscus rouge"
                    className="rounded-lg w-full h-48 object-cover shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Hibiscus</h3>
                <p className="text-gray-700 mb-4">
                  L'hibiscus, autrement appelé althéa, rose de chine ou mauve en arbre est un arbuste tropical à port dressé 
                  qui s'identifie facilement par ses magnifiques fleurs de 2 à 6 cm de diamètre aux couleurs vives et décoratives.
                </p>
                <p className="text-gray-700 mb-4">
                  Cet arbuste est très prisé pour sa beauté mais également pour ses vertus thérapeutiques. En effet, 
                  la fleur de l'althéa était très utilisée pour calmer la toux et les angines, autrefois.
                </p>
                <p className="text-gray-700">
                  Aujourd'hui, on l'utilise toujours en phytothérapie en cas de fatigue et de refroidissement, 
                  pour diminuer la tension artérielle ainsi que pour ses vertus diurétiques.
                </p>
              </CardContent>
            </Card>
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
          <h2 className="text-center mb-12 text-white">Engagement Social</h2>
          <div className="text-center mb-12">
            <img 
              src="/engagement-social.png"
              alt="Engagement social et commerce équitable"
              className="rounded-lg shadow-xl mx-auto mb-8 w-full max-w-2xl h-64 object-cover"
            />
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Le bonheur ne peut être vécu seul, il doit se partager.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="pt-6 text-center">
                <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Poivre de Penja IGP</h3>
                <p className="text-gray-200">
                  Partenariat direct avec les producteurs camerounais. Garantie d'une rémunération 
                  équitable et soutien au développement local.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="pt-6 text-center">
                <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Production Artisanale</h3>
                <p className="text-gray-200">
                  Recettes originales épicées, fabriqué en Belgique. Marinades gourmets prêtes à l'emploi, 
                  100% végétales sans additif ni conservateur.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="pt-6 text-center">
                <Leaf className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Épicerie Fine Africaine</h3>
                <p className="text-gray-200">
                  Éveillez vos sens avec les saveurs africaines. Accessoires autour du poivre, 
                  confitures et coffrets cadeaux d'exception.
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
              src="/gingembre.webp" 
              alt="Gingembre frais"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11" 
              alt="Fleurs d'hibiscus"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img 
              src="/engagement-social.png" 
              alt="Commerce équitable"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.unsplash.com/photo-1530388489801-7e31e6d2bd63" 
              alt="Sirops artisanaux"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img 
              src="https://images.pexels.com/photos/6163267/pexels-photo-6163267.jpeg" 
              alt="Cours de cuisine africaine"
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