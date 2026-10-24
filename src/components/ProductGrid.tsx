import React from 'react';
import { ProductFamily } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: ProductFamily[];
  onNavigate: (path: string) => void;
}

export function ProductGrid({ products, onNavigate }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          product={product}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}
