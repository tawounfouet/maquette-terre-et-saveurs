'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-white">Mentions Légales</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card>
          <CardContent className="pt-6 space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Éditeur du site</h2>
              <p className="text-gray-700 mb-2">
                <strong>Raison sociale :</strong> Terre & Saveurs SARL
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Adresse :</strong> 123 Rue de la Gastronomie, 75001 Paris, France
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Téléphone :</strong> +33 1 23 45 67 89
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email :</strong> contact@terreetsaveurs.fr
              </p>
              <p className="text-gray-700 mb-2">
                <strong>SIRET :</strong> 123 456 789 00010
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Numéro de TVA intracommunautaire :</strong> FR 12 123456789
              </p>
              <p className="text-gray-700">
                <strong>Directeur de publication :</strong> Laurence Martin
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Hébergeur du site</h2>
              <p className="text-gray-700 mb-2">
                <strong>Hébergeur :</strong> Emergent Cloud Services
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Adresse :</strong> 456 Avenue du Cloud, 75002 Paris, France
              </p>
              <p className="text-gray-700">
                <strong>Téléphone :</strong> +33 1 98 76 54 32
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Propriété intellectuelle</h2>
              <p className="text-gray-700 mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-gray-700">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Données personnelles</h2>
              <p className="text-gray-700 mb-4">
                Conformément à la loi n°78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers 
                et aux libertés et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un 
                droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-gray-700">
                Pour exercer ce droit, contactez-nous à : contact@terreetsaveurs.fr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Cookies</h2>
              <p className="text-gray-700">
                Ce site utilise des cookies pour améliorer votre expérience de navigation. En continuant à 
                utiliser ce site, vous acceptez notre utilisation des cookies. Pour en savoir plus, consultez 
                notre politique de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">Crédits</h2>
              <p className="text-gray-700 mb-2">
                <strong>Conception et réalisation :</strong> Terre & Saveurs
              </p>
              <p className="text-gray-700">
                <strong>Crédits photos :</strong> Unsplash, Pexels
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}