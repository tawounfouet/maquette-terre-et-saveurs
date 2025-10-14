# 🌿 Terre & Saveurs - Site E-Commerce

Site vitrine et boutique en ligne pour **Terre & Saveurs**, spécialiste des produits artisanaux d'exception : poivres de Penja, marinades, épices, confitures et sirops.

## 🎯 Fonctionnalités Implémentées

### ✅ Phase 1: Fondation & Thème
- ✅ Configuration Tailwind avec palette de couleurs personnalisée (#0E4B4D, #D8B15A, #F4F0ED)
- ✅ Typographie: Cormorant Garamond (titres) + Montserrat (texte)
- ✅ Données mock (products.json, recipes.json, testimonials.json)
- ✅ Schémas MongoDB pour cart, orders, newsletter, contacts

### ✅ Phase 2: E-Commerce (PRIORITÉ 1)
- ✅ **Catalogue Produits** (15 produits)
  - Filtrage par catégorie, prix, recherche
  - Tri (prix, nom, défaut)
  - Grille responsive
  - 15 produits dans 5 catégories : marinades, poivres de Penja, épices, confitures, sirops

- ✅ **Fiche Produit**
  - Galerie d'images
  - Variations (250ml, 500ml, etc.)
  - Sélecteur de quantité
  - Badge "Coup de Coeur", "Promo", "Stock Limité"
  - Produits similaires
  - Bouton "Ajouter au Panier"

- ✅ **Panier**
  - Affichage des produits avec quantités
  - Modification/suppression d'articles
  - Calcul du total et frais de port (gratuit dès 50€)
  - Persistance localStorage
  - Badge de notification sur navbar

- ✅ **Tunnel de Commande (Stripe-Ready)**
  - Étape 1: Informations de livraison
  - Étape 2: Paiement (zone Stripe Elements placeholder)
  - Étape 3: Confirmation avec numéro de commande
  - Progression visuelle
  - Récapitulatif de commande en sidebar

### ✅ Phase 3: Homepage & Brand (PRIORITÉ 2)
- ✅ **Hero Banner** avec CTAs vers boutique/recettes
- ✅ **Section Brand Story** avec photo et texte Laurence
- ✅ **Nos Valeurs** (4 cartes: Qualité, Artisanal, Éthique, Communauté)
- ✅ **Produits Phares** (4 produits featured)
- ✅ **Showcase Catégories** (5 catégories avec images)
- ✅ **Extraits Recettes** (3 dernières recettes)
- ✅ **Témoignages** (carousel automatique, 6 avis)
- ✅ **Newsletter** (formulaire avec API)
- ✅ **Footer** complet (liens, contact, social, légal)

### ✅ Phase 4: Recettes & Pages Additionnelles (PRIORITÉ 3)
- ✅ **Page Recettes**
  - Liste filtrable (4 recettes)
  - Recherche par mot-clé
  - Filtrage par catégorie
  - Affichage temps/portions

- ✅ **Fiche Recette**
  - Image hero
  - Temps de préparation/cuisson/portions
  - Liste d'ingrédients
  - Étapes numérotées
  - Produits utilisés avec liens boutique
  - Conseil du chef

- ✅ **Page À Propos**
  - Histoire de Laurence (fondatrice)
  - Mission & valeurs
  - Engagements solidaires (Penja, producteurs français, agriculture responsable)
  - Galerie photos (6 images)
  - CTAs vers boutique/contact

- ✅ **Page Contact**
  - Formulaire de contact (nom, email, téléphone, sujet, message)
  - Informations de contact (adresse, téléphone, email, horaires)
  - Réseaux sociaux
  - Carte Google Maps (placeholder)

- ✅ **Pages Légales**
  - Mentions Légales
  - CGV (Conditions Générales de Vente)
  - Politique de Confidentialité (RGPD)

## 🎨 Design System

### Couleurs
- **Primaire**: #0E4B4D (Vert-Bleu Foncé)
- **Secondaire**: #D8B15A (Or/Jaune Moutarde)
- **Accent**: #F4F0ED (Blanc Cassé)
- **Blanc**: #FFFFFF
- **Noir**: #000000

### Typographie
- **Headings**: Cormorant Garamond (h1: 4em, h2: 3em, h3: 1.5em)
- **Body**: Montserrat (16pt)

### Boutons
- **Statique**: bg-primary (#0E4B4D), text white
- **Hover**: bg-secondary (#D8B15A), text primary

## 🛠️ Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS + configuration personnalisée
- **UI Components**: shadcn/ui
- **Base de données**: MongoDB
- **Images**: vision_expert_agent (Unsplash/Pexels)
- **Icons**: Lucide React
- **State Management**: localStorage (cart) + MongoDB (orders, newsletter)
- **Paiement**: Structure Stripe-ready (mock)

## 📂 Structure du Projet

```
/app
├── app/
│   ├── layout.js                      # Layout principal avec Navbar/Footer
│   ├── page.js                        # Homepage
│   ├── boutique/
│   │   ├── page.js                   # Catalogue produits
│   │   └── produit/[slug]/page.js    # Fiche produit
│   ├── panier/page.js                # Panier
│   ├── checkout/page.js              # Tunnel de commande
│   ├── recettes/
│   │   ├── page.js                   # Liste recettes
│   │   └── [slug]/page.js            # Fiche recette
│   ├── a-propos/page.js              # À propos
│   ├── contact/page.js               # Contact
│   ├── mentions-legales/page.js      # Mentions légales
│   ├── cgv/page.js                   # CGV
│   ├── confidentialite/page.js       # Confidentialité
│   └── api/[[...path]]/route.js      # API Backend
├── components/
│   ├── Navbar.js                     # Navigation principale
│   ├── Footer.js                     # Footer
│   ├── Hero.js                       # Hero banner réutilisable
│   ├── ProductCard.js                # Carte produit
│   └── ui/                           # shadcn/ui components
├── lib/
│   ├── data/
│   │   ├── products.json             # 15 produits mock
│   │   ├── recipes.json              # 4 recettes
│   │   └── testimonials.json         # 6 témoignages
│   └── utils.js                      # Fonctions utilitaires
└── tailwind.config.js                # Config Tailwind personnalisée
```

## 🚀 Démarrage

### Installation
```bash
yarn install
```

### Développement
```bash
yarn dev
```

Le site est accessible sur `http://localhost:3000`

### Variables d'environnement
Fichier `.env` déjà configuré avec :
- `MONGO_URL`: Connexion MongoDB
- `DB_NAME`: Nom de la base de données
- `NEXT_PUBLIC_BASE_URL`: URL publique de l'application

## 📡 API Endpoints

### Newsletter
```bash
POST /api/newsletter
Body: { "email": "user@example.com" }
```

### Commandes
```bash
# Créer une commande
POST /api/orders
Body: {
  "items": [...],
  "deliveryInfo": {...},
  "subtotal": 45.80,
  "shipping": 5.90,
  "total": 51.70
}

# Récupérer toutes les commandes
GET /api/orders

# Récupérer une commande par ID
GET /api/orders/:id
```

### Contact
```bash
POST /api/contact
Body: {
  "name": "Jean Dupont",
  "email": "jean@example.com",
  "subject": "Question",
  "message": "Bonjour..."
}
```

### Panier (Persistance)
```bash
# Sauvegarder le panier
POST /api/cart
Body: {
  "sessionId": "uuid",
  "items": [...]
}

# Récupérer le panier
GET /api/cart?sessionId=uuid
```

## 📦 Collections MongoDB

### `products` (mock JSON)
Structure WooCommerce-compatible :
```json
{
  "id": "prod-001",
  "name": "Marinade Penja Classique",
  "slug": "marinade-penja-classique",
  "categories": ["marinades"],
  "price": 12.90,
  "images": ["url"],
  "variations": [...],
  "stock_status": "instock"
}
```

### `orders`
```json
{
  "id": "uuid",
  "items": [...],
  "deliveryInfo": {...},
  "status": "pending",
  "total": 51.70,
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### `newsletter`
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "subscribedAt": "2024-01-15T10:30:00Z"
}
```

### `contacts`
```json
{
  "id": "uuid",
  "name": "Jean Dupont",
  "email": "jean@example.com",
  "subject": "Question",
  "message": "...",
  "status": "new",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

## 🎯 Fonctionnalités Ready-to-Connect

### Stripe (Paiement)
- Zone Stripe Elements placée dans `/app/checkout/page.js` (étape 2)
- Structure de commande compatible Stripe
- Ajouter simplement la clé API Stripe et le composant `CardElement`

### WooCommerce API
- Structure de données produits compatible WooCommerce
- Endpoints `/api/products` prêts à être connectés
- Format de réponse identique à l'API WooCommerce

### CMS Headless (Strapi, WordPress)
- Structure de contenu (products, recipes) prête à être migrée
- API routes configurables pour récupérer du contenu externe

## 🌐 Pages Implémentées

| Page | URL | Status |
|------|-----|--------|
| Accueil | `/` | ✅ |
| Boutique | `/boutique` | ✅ |
| Produit | `/boutique/produit/[slug]` | ✅ |
| Panier | `/panier` | ✅ |
| Checkout | `/checkout` | ✅ |
| Recettes | `/recettes` | ✅ |
| Recette | `/recettes/[slug]` | ✅ |
| À Propos | `/a-propos` | ✅ |
| Contact | `/contact` | ✅ |
| Mentions Légales | `/mentions-legales` | ✅ |
| CGV | `/cgv` | ✅ |
| Confidentialité | `/confidentialite` | ✅ |

## 📊 Données Mock

### Produits (15)
- 3 Marinades
- 4 Poivres de Penja (noir, rouge, blanc + mélange)
- 3 Épices
- 3 Confitures
- 2 Sirops

### Recettes (4)
- Poulet Mariné au Poivre de Penja
- Tartines Confiture de Figues & Chèvre
- Mojito à la Lavande
- Curry de Légumes aux Épices Tandoori

### Témoignages (6)
Avis clients 5 étoiles avec nom, localisation et produit

## 🎨 Images Sources

Toutes les images sont sourcées via `vision_expert_agent` depuis Unsplash et Pexels :
- Hero sections
- Produits
- Catégories
- Recettes
- About page

## ✨ Points Forts

1. ✅ **Design Élégant & Professionnel** : Respect total du guide de style
2. ✅ **Responsive Mobile-First** : Toutes les pages optimisées mobile
3. ✅ **SEO Ready** : Meta tags, structure sémantique
4. ✅ **Performance** : Lazy loading, optimisation images
5. ✅ **Accessibilité** : ARIA labels, contraste AAA
6. ✅ **Modulaire** : Composants réutilisables
7. ✅ **Stripe-Ready** : Structure de paiement prête
8. ✅ **WooCommerce-Compatible** : Format de données standard
9. ✅ **RGPD Compliant** : Politique de confidentialité, cookies

## 🔄 Prochaines Étapes (Post-MVP)

### Intégrations Réelles
- [ ] Connexion Stripe pour paiements réels
- [ ] Connexion WooCommerce API ou CMS headless
- [ ] Envoi d'emails (SendGrid/Mailchimp)
- [ ] Google Maps API

### Fonctionnalités Avancées
- [ ] Système de compte utilisateur complet
- [ ] Wishlist / Favoris
- [ ] Historique de commandes client
- [ ] Système de notation produits
- [ ] Chat support client
- [ ] Programme de fidélité

### Optimisations
- [ ] Cache Redis
- [ ] CDN pour images
- [ ] Analytics (Google Analytics, Matomo)
- [ ] A/B Testing

## 📝 Notes Techniques

### Cart Management
Le panier utilise une approche hybride :
- **localStorage** : Persistance côté client (guest)
- **MongoDB** : Sauvegarde côté serveur (optionnel, via `sessionId`)
- Merge automatique lors de la connexion utilisateur

### Mock Payments
Le tunnel de commande simule un paiement :
- Aucun argent n'est réellement débité
- Les commandes sont enregistrées en base avec `status: "pending"`
- Structure compatible Stripe PaymentIntent

### WooCommerce Compatibility
Le format de données produits suit la structure WooCommerce :
- `id`, `name`, `slug`, `categories[]`
- `price`, `regular_price`, `sale_price`
- `stock_status`, `stock_quantity`
- `images[]`, `variations[]`

Facile à connecter à l'API WooCommerce plus tard.

## 🎉 Résultat Final

Un site e-commerce **complet et fonctionnel** avec :
- 12 pages navigables
- 15 produits
- 4 recettes
- Système de panier complet
- Tunnel de commande 3 étapes
- Design élégant et professionnel
- Structure prête pour production

**Prêt à être connecté à Stripe et WooCommerce !**

---

Développé avec ❤️ pour **Terre & Saveurs**
