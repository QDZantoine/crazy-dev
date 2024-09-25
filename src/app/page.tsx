'use client';

import { useState, useEffect } from 'react';

export default function Articles() {
  const [darkMode, setDarkMode] = useState(false);

  // Basculer entre light et dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    // Vérifier si un thème est déjà défini
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    // Stocker le thème sélectionné dans localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen transition duration-500 ease-in-out bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">
          {darkMode ? 'Articles Négatifs sur l\'IA' : 'Articles Positifs sur l\'IA'}
        </h1>
        <button
          onClick={toggleDarkMode}
          className="mb-8 px-4 py-2 bg-blue-500 text-white dark:bg-yellow-500 dark:text-black rounded"
        >
          Basculer vers {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        {darkMode ? (
          <div>
            <article className="mb-6">
              <h2 className="text-2xl font-semibold">L'IA peut menacer les emplois</h2>
              <p>
                L'intelligence artificielle est en train de remplacer de nombreux métiers humains,
                causant des pertes d'emplois massives dans certaines industries.
              </p>
            </article>
            <article className="mb-6">
              <h2 className="text-2xl font-semibold">Problèmes éthiques liés à l'IA</h2>
              <p>
                Les systèmes d'IA peuvent être biaisés et poser des questions complexes en matière
                d'éthique, de vie privée et de sécurité.
              </p>
            </article>
          </div>
        ) : (
          <div>
            <article className="mb-6">
              <h2 className="text-2xl font-semibold">L'IA améliore les soins de santé</h2>
              <p>
                Grâce à l'IA, les diagnostics médicaux deviennent plus précis et rapides, améliorant
                ainsi la vie des patients et des professionnels de santé.
              </p>
            </article>
            <article className="mb-6">
              <h2 className="text-2xl font-semibold">L'IA aide à la protection de l'environnement</h2>
              <p>
                L'intelligence artificielle permet de surveiller et de protéger les écosystèmes, en
                analysant des données climatiques pour anticiper les changements environnementaux.
              </p>
            </article>
          </div>
        )}
      </div>
    </div>
  );
}