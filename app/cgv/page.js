'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-white">Conditions Générales de Vente</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card>
          <CardContent className="pt-6 space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">1. Objet</h2>
              <p className="text-gray-700">
                Les présentes conditions générales de vente s'appliquent à toutes les commandes passées sur 
                le site terreetsaveurs.fr. Elles régissent les relations contractuelles entre Terre & Saveurs 
                et ses clients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">2. Prix</h2>
              <p className="text-gray-700 mb-4">
                Les prix de nos produits sont indiqués en euros toutes taxes comprises (TTC). Ils sont valables 
                au moment de la commande et peuvent être modifiés à tout moment.
              </p>
              <p className="text-gray-700">
                Les frais de livraison sont indiqués avant la validation définitive de la commande. 
                Livraison gratuite dès 50€ d'achat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">3. Commande</h2>
              <p className="text-gray-700 mb-4">
                Pour passer commande, vous devez :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Ajouter les produits de votre choix dans votre panier</li>
                <li>Valider votre panier</li>
                <li>Renseigner vos informations de livraison</li>
                <li>Choisir votre mode de paiement</li>
                <li>Valider définitivement votre commande</li>
              </ul>
              <p className="text-gray-700">
                Toute commande validée est ferme et définitive. Vous recevrez un email de confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">4. Paiement</h2>
              <p className="text-gray-700 mb-4">
                Les paiements sont sécurisés par Stripe. Nous acceptons les cartes bancaires suivantes :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Carte Bleue</li>
                <li>Visa</li>
                <li>Mastercard</li>
                <li>American Express</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">5. Livraison</h2>
              <p className="text-gray-700 mb-4">
                <strong>Délais de livraison :</strong> Les commandes sont expédiées sous 2 à 3 jours ouvrés. 
                La livraison intervient sous 5 à 7 jours ouvrés en France métropolitaine.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Frais de livraison :</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Gratuit dès 50€ d'achat</li>
                <li>5,90€ pour les commandes inférieures à 50€</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">6. Droit de rétractation</h2>
              <p className="text-gray-700 mb-4">
                Conformément au Code de la consommation, vous disposez d'un délai de 14 jours à compter de 
                la réception de votre commande pour exercer votre droit de rétractation.
              </p>
              <p className="text-gray-700">
                Pour retourner un produit, contactez-nous à contact@terreetsaveurs.fr. Les produits doivent 
                être retournés dans leur emballage d'origine, non ouverts et non consommés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">7. Garanties</h2>
              <p className="text-gray-700">
                Tous nos produits bénéficient de la garantie légale de conformité et de la garantie contre les 
                vices cachés, conformément aux articles L.217-4 et suivants du Code de la consommation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">8. Protection des données</h2>
              <p className="text-gray-700">
                Vos données personnelles sont traitées conformément au RGPD. Pour plus d'informations, 
                consultez notre politique de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">9. Service client</h2>
              <p className="text-gray-700">
                Pour toute question ou réclamation, contactez notre service client :
              </p>
              <ul className="list-none text-gray-700 space-y-2 mt-4">
                <li><strong>Email :</strong> contact@terreetsaveurs.fr</li>
                <li><strong>Téléphone :</strong> +33 1 23 45 67 89</li>
                <li><strong>Horaires :</strong> Lundi - Vendredi, 9h - 18h</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-primary">10. Droit applicable</h2>
              <p className="text-gray-700">
                Les présentes CGV sont soumises au droit français. Tout litige relatif à leur interprétation 
                ou à leur exécution relève de la compétence exclusive des tribunaux français.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}