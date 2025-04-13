'use client';

import Image from 'next/image';
import './ProductCard.css';

interface ProductCardProps {
  id: number;
  imageUrl: string;
  alt?: string;
  isSelected?: boolean;
  onSelect: () => void;
}

export default function ProductCard({
  imageUrl,
  alt = 'Clothing',
  isSelected = false,
  onSelect,
}: ProductCardProps) {
  return (
    <div
      className={`product-card relative cursor-pointer rounded overflow-hidden ${
        isSelected ? 'border-4 border-blue-500' : ''
      }`}
      onClick={onSelect}
    >
      <Image src={imageUrl} alt={alt} fill className="object-cover" />
    </div>
  );
}
