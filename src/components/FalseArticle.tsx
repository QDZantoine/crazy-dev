"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const NegativeArticles = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  if (!isDarkMode) return null; 

  const negativeArticles = [
    { title: "L'IA cause des pertes d'emplois", content: "De nombreux métiers sont automatisés par l'IA, ce qui pose des inquiétudes." },
    { title: "Problèmes éthiques de l'IA", content: "Les systèmes d'IA sont parfois biaisés, entraînant des résultats injustes." },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold">Articles Négatifs sur l'IA</h2>
      {negativeArticles.map((article, index) => (
        <div key={index} className="p-4 bg-gray-800 text-white shadow-md rounded-md my-2">
          <h3 className="font-semibold">{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NegativeArticles;