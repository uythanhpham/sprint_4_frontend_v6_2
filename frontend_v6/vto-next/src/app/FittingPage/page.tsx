'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BodyUpload from '@/components/BodyUpload/BodyUpload';
import MiddleItems from '@/components/MiddleItems/MiddleItems';
import ResultBox from '@/components/ResultBox/ResultBox';
import './FittingPage.css';
import { useSearchParams } from 'next/navigation';

function FittingPageInner() {
  const searchParams = useSearchParams();
  const [item1, setItem1] = useState<string | null>(null);
  const [item2, setItem2] = useState<string | null>(null);

  useEffect(() => {
    const i1 = searchParams.get('item1');
    const i2 = searchParams.get('item2');
    setItem1(i1);
    setItem2(i2);
  }, [searchParams]);

  return (
    <>
      <Header />
      <main className="container">
        <div className="upload-body-wrapper">
          <BodyUpload />
        </div>

        <div className="items-row-wrapper">
          <MiddleItems image1Url={item1} image2Url={item2} />
        </div>
        <div className="result-box-wrapper">
          <ResultBox />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function FittingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FittingPageInner />
    </Suspense>
  );
}
