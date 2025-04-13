'use client';

import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './FilterMenu.css';

export type ClothesType = 'All' | 'Upper' | 'Lower' | 'Full-body';

export interface FilterMenuProps {
  selected: ClothesType;
  onFilterClick: (filter: ClothesType) => void;
  confirmSelected?: () => { item1?: string; item2?: string }; // optional
}

export default function FilterMenu({
  selected,
  onFilterClick,
  confirmSelected,
}: FilterMenuProps) {
  const filters: ClothesType[] = ['Upper', 'Lower', 'Full-body', 'All'];
  const router = useRouter();

  const handleClick = useCallback(
    (label: string) => {
      if (label === 'Try On') {
        const result = confirmSelected?.(); // safe call
        if (!result) return;

        const { item1, item2 } = result;
        if (!item1 && !item2) return;

        const query = new URLSearchParams();
        if (item1) query.set('item1', item1);
        if (item2) query.set('item2', item2);
        router.push(`/FittingPage?${query.toString()}`);
      } else {
        onFilterClick(label as ClothesType);
      }
    },
    [onFilterClick, confirmSelected, router]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'x') {
        handleClick('Try On');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClick]);

  return (
    <div className="filter-menu" role="group" aria-label="Clothing filter menu">
      {filters.map((label) => {
        const isActive = selected === label;
        const btnClass = `filter-button ${isActive ? 'active' : ''}`;
        const ariaLabel = `Filter by ${label}`;

        return (
          <button
            key={label}
            onClick={() => handleClick(label)}
            className={btnClass}
            aria-label={ariaLabel}
          >
            {label}
          </button>
        );
      })}

      <button
        onClick={() => handleClick('Try On')}
        className="filter-button tryon-button"
        aria-label="Try on selected clothes"
      >
        ✅ Confirm
      </button>
    </div>
  );
}
