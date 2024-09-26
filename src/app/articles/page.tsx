'use client';
import Navbar from '@/components/ui/navbarTailwind';
import PositiveArticles from '@/components/TrueArticle';
import NegativeArticles from '@/components/FalseArticle';

export default function Articles() {
  return (
    <>
      <div>
        <main>
          <PositiveArticles />
          <NegativeArticles />
        </main>
      </div>
    </>
  );
}
