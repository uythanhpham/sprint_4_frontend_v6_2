'use client';

import Image from 'next/image';
import './ClothesItem.css';

export interface ClothesItemProps {
  id: number;
  imageUrl: string;
  type: 'Upper' | 'Lower' | 'Full-body';
}

// This is a new interface used only for the UI component
interface ClothesItemComponentProps extends ClothesItemProps {
  isSelected: boolean;
  onSelect: () => void;
}

const ClothesItem: React.FC<ClothesItemComponentProps> = ({
  imageUrl,
  type,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`clothes-item ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <div className="image-wrapper">
        <Image
          src={imageUrl}
          alt={type}
          width={120}
          height={120}
          className="product-image"
        />
      </div>
    </div>
  );
};

export default ClothesItem;
