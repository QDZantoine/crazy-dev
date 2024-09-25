"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const PositiveArticles = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  if (isDarkMode) return null; // Ne rien afficher si c'est le mode sombre

  const positiveArticles = [
    { title: "L'IA améliore les soins de santé", content: "Grâce à l'IA, les diagnostics deviennent plus précis et rapides." },
    { title: "L'IA aide à la protection de l'environnement", content: "L'intelligence artificielle aide à surveiller les écosystèmes." },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold">Articles Positifs sur l'IA</h2>
      {positiveArticles.map((article, index) => (
        <div key={index} className="p-4 bg-white shadow-md rounded-md my-2">
          <h3 className="font-semibold">{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PositiveArticles;