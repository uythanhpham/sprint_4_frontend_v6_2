'use client';

import React from 'react';
import './TryOnButtonFittingPage.css'; // ✅ sửa đúng đường dẫn

interface ChooseClothesButtonProps {
  onClick?: () => void;
}

export default function ChooseClothesButton({ onClick }: ChooseClothesButtonProps) {
  return (
    <div className="choose-button-wrapper">
      <button className="choose-clothes-button" onClick={onClick}>
        TRY ON
      </button>
    </div>
  );
}
