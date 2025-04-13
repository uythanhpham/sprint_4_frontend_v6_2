'use client';

import { useState } from 'react';
import Image from 'next/image';
import FilterMenu from '@/components/FilterMenu/FilterMenu';
import type { ClothesType } from '@/components/FilterMenu/FilterMenu';
import '@/app/globals.css';

interface ClothingItem {
  id: number;
  url: string;
  type: ClothesType;
}

interface ChooseClothesPopupProps {
  items: ClothingItem[];
}

export default function ChooseClothesPopup({ items }: ChooseClothesPopupProps) {
  const [selectedItems, setSelectedItems] = useState<(string | null)[]>([null, null]);
  const [filter, setFilter] = useState<ClothesType>('All');

  const toggleSelect = (url: string) => {
    const index = selectedItems.indexOf(url);
    if (index !== -1) {
      const newSelected = [...selectedItems];
      newSelected[index] = null;
      setSelectedItems(newSelected);
    } else {
      const emptyIndex = selectedItems.findIndex((item) => item === null);
      if (emptyIndex !== -1) {
        const newSelected = [...selectedItems];
        newSelected[emptyIndex] = url;
        setSelectedItems(newSelected);
      }
    }
  };

  const confirmSelected = () => {
    return {
      item1: selectedItems[0] ?? undefined,
      item2: selectedItems[1] ?? undefined,
    };
  };

  const filteredItems =
    filter === 'All' ? items : items.filter((item) => item.type === filter);

  return (
    <div className="popup-container">
      <FilterMenu
        selected={filter}
        onFilterClick={setFilter}
        confirmSelected={confirmSelected}
      />
      <div className="selected-items">
        {selectedItems.map((url, index) =>
          url ? (
            <div
              key={index}
              className="selected-item"
              onClick={() => toggleSelect(url)}
            >
              <Image src={url} alt={`Selected ${index + 1}`} width={100} height={100} />
            </div>
          ) : (
            <div key={index} className="selected-placeholder">
              + Select
            </div>
          )
        )}
      </div>
      <div className="clothing-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`clothing-item ${
              selectedItems.includes(item.url) ? 'selected' : ''
            }`}
            onClick={() => toggleSelect(item.url)}
          >
            <Image src={item.url} alt={`Item ${item.id}`} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
