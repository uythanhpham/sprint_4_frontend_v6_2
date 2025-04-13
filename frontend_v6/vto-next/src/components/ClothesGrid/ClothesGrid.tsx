'use client';

import ClothesItem, { ClothesItemProps } from '../ClothesItem/ClothesItem';
import './ClothesGrid.css';


interface ClothesGridProps {
  filter?: string;
  selectedItems: ClothesItemProps[];
  onItemSelect: (item: ClothesItemProps) => void;
}

// Remove isSelected and onSelect from this array
const clothesData: ClothesItemProps[] = [
  { id: 1, imageUrl: '/clothes/item1.jpg', type: 'Upper' },
  { id: 2, imageUrl: '/clothes/item2.jpg', type: 'Upper' },
  { id: 3, imageUrl: '/clothes/item3.jpg', type: 'Upper' },
  { id: 4, imageUrl: '/clothes/item4.jpg', type: 'Lower' },
  { id: 5, imageUrl: '/clothes/item5.jpg', type: 'Lower' },
  { id: 6, imageUrl: '/clothes/item6.jpg', type: 'Full-body' },
  { id: 7, imageUrl: '/clothes/item1.jpg', type: 'Upper' },
  { id: 8, imageUrl: '/clothes/item2.jpg', type: 'Upper' },
  { id: 9, imageUrl: '/clothes/item3.jpg', type: 'Upper' },
  { id: 10, imageUrl: '/clothes/item4.jpg', type: 'Lower' },
  { id: 11, imageUrl: '/clothes/item5.jpg', type: 'Lower' },
  { id: 12, imageUrl: '/clothes/item6.jpg', type: 'Full-body' },
  { id: 13, imageUrl: '/clothes/item1.jpg', type: 'Upper' },
  { id: 14, imageUrl: '/clothes/item2.jpg', type: 'Upper' },
  { id: 15, imageUrl: '/clothes/item3.jpg', type: 'Upper' },
];

export default function ClothesGrid({
  filter = 'All',
  selectedItems = [],
  onItemSelect = () => {},
}: ClothesGridProps) {
  const filteredClothes =
    filter === 'All'
      ? clothesData
      : clothesData.filter((item) => item.type === filter);

  return (
    <div className="clothes-grid">
      {filteredClothes.map((item) => (
        <ClothesItem
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          type={item.type}
          isSelected={selectedItems.some((i) => i.id === item.id)}
          onSelect={() => onItemSelect(item)}
        />
      ))}
    </div>
  );
}
