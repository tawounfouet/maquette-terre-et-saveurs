import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Format price in EUR
export function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}

// Get product by slug
export function getProductBySlug(products, slug) {
  return products.find(p => p.slug === slug)
}

// Get products by category
export function getProductsByCategory(products, category) {
  if (!category || category === 'all') return products
  return products.filter(p => p.categories.includes(category))
}

// Search products
export function searchProducts(products, query) {
  if (!query) return products
  const lowerQuery = query.toLowerCase()
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description?.toLowerCase().includes(lowerQuery) ||
    p.short_description?.toLowerCase().includes(lowerQuery)
  )
}

// Sort products
export function sortProducts(products, sortBy) {
  const sorted = [...products]
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name))
    default:
      return sorted
  }
}