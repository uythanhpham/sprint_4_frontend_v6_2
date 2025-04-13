'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import ChooseClothesModal from '../ChooseClothesModal/ChooseClothesModal';
import ChooseClothesButton from '../TryOnButtonFittingPage/TryOnButtonFittingPage';
import './MiddleItems.css';
import type { ClothesItemProps } from '../ClothesItem/ClothesItem';

interface MiddleItemsProps {
  image1Url?: string | null;
  image2Url?: string | null;
}

export default function MiddleItems({ image1Url, image2Url }: MiddleItemsProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [targetSlot, setTargetSlot] = useState<0 | 1>(0);
  const [selectedItems, setSelectedItems] = useState<ClothesItemProps[]>([]);
  const [showItem2, setShowItem2] = useState(false);

  const openPopup = (slot: 0 | 1) => {
    setTargetSlot(slot);
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  const normalizeImageUrl = (url: string) => {
    if (url.startsWith('http') || url.startsWith('/')) return url;
    return '/' + url;
  };

  useEffect(() => {
    const items: ClothesItemProps[] = [];
    if (image1Url) {
      items[0] = {
        id: -1,
        imageUrl: normalizeImageUrl(image1Url),
        type: 'Upper',
      };
    }
    if (image2Url) {
      items[1] = {
        id: -2,
        imageUrl: normalizeImageUrl(image2Url),
        type: 'Lower',
      };
      setShowItem2(true);
    }
    setSelectedItems(items);
  }, [image1Url, image2Url]);

  return (
    <>
      <div className="middle-items">
        {/* 📦 Cột chứa 2 ô Item */}
        <div className="items-column">
          {/* Item 1 + ➕ */}
          <div className="square-wrapper">
            <div className="square" onClick={() => openPopup(0)}>
              <div className={`item-inner ${selectedItems[0] ? 'has-image' : ''}`}>
                {selectedItems[0] ? (
                  <Image
                    src={selectedItems[0].imageUrl}
                    alt="Item 1"
                    fill
                    className="object-contain rounded"
                  />
                ) : (
                  <span>Your item</span>
                )}
              </div>
            </div>

            {!showItem2 && (
              <div
                className="plus-button"
                onClick={() => {
                  setShowItem2(true);
                  openPopup(1);
                }}
              >
                ➕
              </div>
            )}
          </div>

          {/* Item 2 nếu có */}
          <AnimatePresence>
            {showItem2 && (
              <motion.div
                className="square"
                onClick={() => openPopup(1)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <div className={`item-inner ${selectedItems[1] ? 'has-image' : ''}`}>
                  {selectedItems[1] ? (
                    <Image
                      src={selectedItems[1].imageUrl}
                      alt="Item 2"
                      fill
                      className="object-contain rounded"
                    />
                  ) : (
                    <span>Item 2 (Optional)</span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nút TRY ON */}
        <ChooseClothesButton onClick={() => openPopup(0)} />
      </div>

      {/* Popup chọn đồ */}
      <AnimatePresence mode="wait">
        {showPopup && (
          <ChooseClothesModal
            slotIndex={targetSlot}
            onClose={closePopup}
            onConfirmSelect={(item) => {
              setSelectedItems((prev) => {
                const updated = [...prev];
                updated[targetSlot] = item;
                return updated;
              });
              closePopup();
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
