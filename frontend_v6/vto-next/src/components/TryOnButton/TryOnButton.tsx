'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './TryOnButton.css'; // ✅ Import CSS riêng

export default function TryOnButton() {
  const router = useRouter();

  // 👉 Prefetch trang FittingPage ngay khi component được load
  useEffect(() => {
    router.prefetch('/FittingPage');
  }, [router]);

  const handleClick = () => {
    router.push('/FittingPage'); // 👉 Điều hướng đến trang FittingPage
  };

  return (
    <div className="tryon-wrapper">
      <button
        className="tryon-button"
        onClick={handleClick}
        aria-label="Try on clothes"
      >
        👑 Try on Clothes
      </button>
    </div>
  );
}
