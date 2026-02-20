import React from 'react';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import NewsPageClient from './NewsPageClient';
import Footer from '@/components/Footer';
import { getNews } from '@/lib/queries';

export const revalidate = 300; // refresh news every 5 minutes

export default async function NewsPage() {
  const news = await getNews(50);
  return (
    <>
      <Background />
      <Navbar />
      <NewsPageClient news={news} />
      <Footer />
    </>
  );
}
