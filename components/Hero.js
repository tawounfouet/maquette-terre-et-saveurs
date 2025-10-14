'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero({ 
  title, 
  subtitle, 
  image, 
  ctaPrimary, 
  ctaSecondary,
  height = 'h-[600px]'
}) {
  return (
    <div className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image})`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-white mb-6 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-xl md:text-2xl mb-8 font-body drop-shadow-md">
            {subtitle}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {ctaPrimary && (
            <Link href={ctaPrimary.href}>
              <Button size="lg" className="btn-secondary text-lg px-8 py-6">
                {ctaPrimary.text}
              </Button>
            </Link>
          )}
          {ctaSecondary && (
            <Link href={ctaSecondary.href}>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/90 hover:bg-white">
                {ctaSecondary.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}