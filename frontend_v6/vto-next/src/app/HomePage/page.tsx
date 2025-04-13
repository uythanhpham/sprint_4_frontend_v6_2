'use client';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TryOnButton from '@/components/TryOnButton/TryOnButton';
import SearchBar from '@/components/SearchBar/SearchBar';
import ClothesGrid from '@/components/ClothesGrid/ClothesGrid';
import '@/app/globals.css';

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ padding: '40px 20px' }}>
        <TryOnButton />
        <SearchBar />
        <ClothesGrid
          filter="All"
          selectedItems={[]}
          onItemSelect={() => { }}
        />
      </main>
      <Footer />
    </>
  );
}
