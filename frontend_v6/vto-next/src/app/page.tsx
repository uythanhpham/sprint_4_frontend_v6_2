'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectToHomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/HomePage');
  }, [router]);

  return null; // hoặc <p>Redirecting...</p>
}
