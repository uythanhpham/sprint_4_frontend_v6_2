'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FilterMenu from '../FilterMenu/FilterMenu';
import ClothesGrid from '../ClothesGrid/ClothesGrid';
import type { ClothesType } from '../FilterMenu/FilterMenu';
import type { ClothesItemProps } from '../ClothesItem/ClothesItem';
import './ChooseClothesModal.css';

interface ChooseClothesModalProps {
  slotIndex: 0 | 1;
  onClose: () => void;
  onConfirmSelect: (item: ClothesItemProps) => void;
}

export default function ChooseClothesModal({
  onClose,
  onConfirmSelect
}: ChooseClothesModalProps) {
  const [selectedFilter, setSelectedFilter] = useState<ClothesType>('All');
  const [selectedItem, setSelectedItem] = useState<ClothesItemProps | null>(null);

  const handleItemSelect = (item: ClothesItemProps) => {
    setSelectedItem(prev => (prev?.id === item.id ? null : item));
  };

  const confirmSelected = () => {
    if (!selectedItem) return;
    onConfirmSelect(selectedItem);
    onClose();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div
      className="popup-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      <motion.div
        className="modal-background"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          className="popup-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <button
            className="popup-close"
            onClick={onClose}
            aria-label="Close choose clothes modal"
          >
            ✖
          </button>

          <div className="choose-popup-container">
            <div className="choose-popup-header">
              <div className="choose-popup-images">
                {selectedItem ? (
                  <div className="image-box relative w-40 h-40">
                    <Image
                      src={selectedItem.imageUrl}
                      alt={`Selected ${selectedItem.type}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                ) : (
                  <div className="image-box flex items-center justify-center w-40 h-40 border border-dashed border-gray-300 rounded">
                    <span style={{ fontSize: '40px', opacity: 0.3 }}>🖼️➕</span>
                  </div>
                )}
              </div>

              <div className="choose-popup-filter">
                <FilterMenu
                  selected={selectedFilter}
                  onFilterClick={setSelectedFilter}
                  confirmSelected={confirmSelected as unknown as () => { item1?: string; item2?: string }}
                />

              </div>
            </div>

            <ClothesGrid
              filter={selectedFilter}
              selectedItems={selectedItem ? [selectedItem] : []}
              onItemSelect={handleItemSelect}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
