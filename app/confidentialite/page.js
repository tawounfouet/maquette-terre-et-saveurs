'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-white">Politique de Confidentialité</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card>
          <CardContent className="pt-6 space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">1. Introduction</h2>
              <p className="text-gray-700">
                Terre & Saveurs accorde une grande importance à la protection de vos données personnelles. 
                Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons, 
                protégeons et partageons vos données.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">2. Données collectées</h2>
              <p className="text-gray-700 mb-4">Nous collectons les données suivantes :</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Informations d'identité : nom, prénom, adresse email</li>
                <li>Informations de livraison : adresse postale, numéro de téléphone</li>
                <li>Informations de paiement : numéro de carte bancaire (crypté par Stripe)</li>
                <li>Historique de commandes</li>
                <li>Données de navigation : cookies, adresse IP, pages visitées</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">3. Utilisation des données</h2>
              <p className="text-gray-700 mb-4">Vos données sont utilisées pour :</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Traiter et livrer vos commandes</li>
                <li>Gérer votre compte client</li>
                <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                <li>Améliorer notre site et nos services</li>
                <li>Prévenir la fraude et assurer la sécurité</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">4. Partage des données</h2>
              <p className="text-gray-700 mb-4">
                Nous ne vendons jamais vos données personnelles. Nous pouvons les partager avec :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Nos prestataires de services (livraison, paiement, hébergement)</li>
                <li>Les autorités compétentes en cas d'obligation légale</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">5. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Notre site utilise des cookies pour améliorer votre expérience. Les cookies sont de petits 
                fichiers textes stockés sur votre appareil.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Types de cookies utilisés :</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site (panier, authentification)</li>
                <li><strong>Cookies analytiques :</strong> Nous aident à comprendre comment vous utilisez notre site</li>
                <li><strong>Cookies marketing :</strong> Permettent de personnaliser les publicités</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Vous pouvez gérer vos préférences de cookies via notre bandeau de consentement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">6. Sécurité</h2>
              <p className="text-gray-700">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                vos données contre la perte, le vol, l'accès non autorisé, la divulgation ou la modification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">7. Vos droits</h2>
              <p className="text-gray-700 mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> Supprimer vos données</li>
                <li><strong>Droit à la limitation :</strong> Restreindre le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pour exercer ces droits, contactez-nous à : contact@terreetsaveurs.fr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">8. Conservation des données</h2>
              <p className="text-gray-700">
                Nous conservons vos données personnelles pendant la durée nécessaire aux finalités pour 
                lesquelles elles ont été collectées, conformément aux obligations légales applicables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">9. Modifications</h2>
              <p className="text-gray-700">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">10. Contact</h2>
              <p className="text-gray-700">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, 
                contactez-nous :
              </p>
              <ul className="list-none text-gray-700 space-y-2 mt-4">
                <li><strong>Email :</strong> contact@terreetsaveurs.fr</li>
                <li><strong>Adresse :</strong> 123 Rue de la Gastronomie, 75001 Paris, France</li>
                <li><strong>Téléphone :</strong> +33 1 23 45 67 89</li>
              </ul>
            </section>

            <section>
              <p className="text-sm text-gray-600 mt-8">
                Dernière mise à jour : 15 janvier 2025
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}