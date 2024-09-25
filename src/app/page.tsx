'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbarTailwind';

import { useState } from 'react';
import PositiveArticles from '@/components/TrueArticle';
import NegativeArticles from '@/components/FalseArticle';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      title: "L'IA améliore les soins de santé",
      content:
        "Grâce à l'IA, les diagnostics deviennent plus précis et rapides.",
    },
    {
      title: "L'IA aide à la protection de l'environnement",
      content:
        "L'intelligence artificielle permet de surveiller les écosystèmes.",
    },
    {
      title: "L'IA peut menacer les emplois",
      content: "L'IA est en train de remplacer de nombreux métiers humains.",
    },
    {
      title: "Problèmes éthiques liés à l'IA",
      content:
        "Les systèmes d'IA peuvent être biaisés et poser des questions complexes.",
    },
  ];

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <Navbar />
      <main>
        <div>
          <PositiveArticles />
          <NegativeArticles />
        </div>
      </main>
    </div>
  );
}
