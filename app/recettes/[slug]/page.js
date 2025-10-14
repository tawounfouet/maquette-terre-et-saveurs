'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Users, ChefHat, ArrowLeft } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { getProductBySlug } from '@/lib/utils'
import recipesData from '@/lib/data/recipes.json'
import productsData from '@/lib/data/products.json'
import Link from 'next/link'

export default function RecipeDetailPage() {
  const params = useParams()
  const router = useRouter()
  const recipe = recipesData.find(r => r.slug === params.slug)

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Recette non trouvée</h2>
          <Button onClick={() => router.push('/recettes')}>Retour aux recettes</Button>
        </div>
      </div>
    )
  }

  const relatedProducts = recipe.relatedProducts
    .map(id => productsData.find(p => p.id === id))
    .filter(Boolean)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => router.push('/recettes')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux recettes
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px]">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <Badge className="mb-4 bg-secondary">{recipe.category}</Badge>
            <h1 className="text-white drop-shadow-lg">{recipe.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Préparation</p>
                  <p className="font-semibold">{recipe.prepTime}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <ChefHat className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Cuisson</p>
                  <p className="font-semibold">{recipe.cookTime}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Portions</p>
                  <p className="font-semibold">{recipe.servings} personnes</p>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {recipe.content}
                </p>
              </CardContent>
            </Card>

            {/* Ingredients */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-heading font-semibold mb-4">Ingrédients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Steps */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-heading font-semibold mb-4">Préparation</h2>
                <ol className="space-y-4">
                  {recipe.steps.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-heading font-semibold mb-4">Produits utilisés</h3>
                  <div className="space-y-4">
                    {relatedProducts.map(product => (
                      <Link key={product.id} href={`/boutique/produit/${product.slug}`}>
                        <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border">
                          <img 
                            src={product.images[0]} 
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div>
                            <p className="font-semibold text-sm mb-1">{product.name}</p>
                            <p className="text-primary font-bold">
                              {new Intl.NumberFormat('fr-FR', {
                                style: 'currency',
                                currency: 'EUR'
                              }).format(product.price)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link href="/boutique">
                    <Button className="w-full mt-4 btn-primary">
                      Voir tous les produits
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}

            {/* Tips */}
            <Card className="bg-accent">
              <CardContent className="pt-6">
                <h3 className="text-xl font-heading font-semibold mb-3">💡 Conseil du Chef</h3>
                <p className="text-gray-700 text-sm">
                  Pour une saveur optimale, utilisez toujours des épices fraîchement moulues. 
                  Nos produits Terre & Saveurs sont sélectionnés pour leur qualité exceptionnelle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}