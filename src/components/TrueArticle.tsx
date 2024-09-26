"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Définir une interface pour les articles
interface ArticleProps {
  title: string;
  content: string;
}

const PositiveArticles = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre l'index actuel

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  if (isDarkMode) return null; // Ne rien afficher en mode sombre

  // Les articles sont maintenant typés correctement
  const positiveArticles: ArticleProps[] = [
    {
      title: "L'IA au service de l'efficacité opérationnelle : Réduction des coûts et augmentation de la productivité",
      content: `L'intelligence artificielle (IA) transforme profondément la manière dont les entreprises fonctionnent. En automatisant des processus complexes et en optimisant l’utilisation des ressources, l’IA a un impact direct sur l'efficacité opérationnelle, la réduction des coûts et l'amélioration de la productivité. Dans cet article, nous explorerons comment l'IA permet aux entreprises d'atteindre ces objectifs à travers des exemples concrets et des bénéfices mesurables.<br><br>
      <strong>1. Automatisation des tâches répétitives et à faible valeur ajoutée</strong><br>
      L'un des principaux avantages de l'IA réside dans sa capacité à automatiser des tâches répétitives, qui autrefois nécessitaient une intervention humaine. Que ce soit pour la gestion de la comptabilité, le traitement des factures ou le support client, des systèmes intelligents permettent d'exécuter ces actions de manière autonome, réduisant ainsi la charge de travail des employés.<br>
      Par exemple, dans le secteur des ressources humaines, l'IA peut automatiser le tri et l'analyse des CVs, réduisant considérablement le temps de recrutement. De même, dans les départements de finance, des algorithmes analysent les transactions pour détecter les erreurs ou les fraudes en temps réel, évitant ainsi des pertes coûteuses et améliorant la fiabilité des opérations.<br><br>
      
      <strong>2. Amélioration des processus logistiques et de la gestion des stocks</strong><br>
      Dans les secteurs industriels, l'IA révolutionne la chaîne logistique et la gestion des stocks. Grâce à des systèmes intelligents, les entreprises peuvent prévoir la demande avec précision, optimiser les niveaux de stock et améliorer la distribution. Les algorithmes d'apprentissage automatique analysent d'énormes quantités de données pour identifier des modèles de consommation et adapter les flux d'approvisionnement en conséquence.<br>
      Par exemple, Amazon utilise des robots équipés d'IA dans ses entrepôts pour organiser les produits de manière optimale et minimiser les délais d'expédition. Cela réduit les coûts logistiques, accélère les livraisons et améliore l'efficacité opérationnelle.<br><br>
      
      <strong>3. Optimisation des décisions stratégiques grâce à l'analyse des données</strong><br>
      L'IA ne se limite pas à l'automatisation des tâches. Elle joue également un rôle clé dans la prise de décisions stratégiques. En analysant des données à grande échelle, les systèmes d'IA peuvent fournir des recommandations basées sur des faits et des tendances qu’un humain pourrait manquer. Ces analyses prédictives aident les entreprises à identifier de nouvelles opportunités de marché, à ajuster leurs stratégies commerciales et à prendre des décisions informées.<br>
      Par exemple, dans le secteur du marketing, des outils d'IA comme Google Analytics et IBM Watson Marketing analysent les comportements des consommateurs en ligne pour affiner les campagnes publicitaires.`
    },    
    {
      title: "L'IA dans l'éducation : Personnalisation de l'apprentissage et accès à l'éducation pour tous",
      content: `L'intelligence artificielle (IA) a un impact croissant dans divers secteurs, et l'éducation n'échappe pas à cette transformation. En facilitant la personnalisation de l'apprentissage et en rendant l'éducation plus accessible, l'IA offre des opportunités uniques pour améliorer les résultats scolaires et démocratiser l'accès au savoir. Cet article explore quatre aspects clés de l'IA dans l'éducation : personnalisation, accessibilité, efficacité pour les enseignants, et réduction des inégalités.<br><br>
        <strong>1. Personnalisation de l'apprentissage</strong><br>
        L'un des plus grands avantages de l'IA dans l'éducation est sa capacité à personnaliser l'apprentissage en fonction des besoins individuels des étudiants. Grâce aux algorithmes d'apprentissage machine, les systèmes éducatifs peuvent analyser les données des étudiants pour identifier leurs forces et leurs faiblesses. Cela permet aux plateformes d'enseignement d'adapter le contenu, le rythme et les méthodes d'apprentissage en fonction du profil unique de chaque apprenant.<br>
        Par exemple, des applications comme DreamBox et Knewton utilisent l'IA pour suivre les progrès des étudiants en temps réel, en ajustant les leçons et les exercices pour offrir des défis adaptés à leur niveau. Cette approche renforce l'engagement et permet aux élèves de progresser à leur propre rythme, tout en recevant un soutien ciblé lorsqu'ils rencontrent des difficultés.<br><br>
        <strong>2. Accès à l'éducation pour tous</strong><br>
        L'IA joue également un rôle essentiel dans l'amélioration de l'accessibilité à l'éducation, en particulier pour les populations défavorisées ou marginalisées. Les plateformes d'apprentissage en ligne, propulsées par l'IA, permettent à des millions de personnes dans le monde d'accéder à des cours de qualité, souvent gratuitement ou à faible coût. Cela démocratise l'accès au savoir et réduit les barrières géographiques, économiques ou culturelles.<br>
        Par exemple, des plateformes comme Coursera et edX utilisent l'IA pour offrir des parcours d'apprentissage personnalisés à des étudiants partout dans le monde. L'IA permet également de traduire automatiquement les contenus dans plusieurs langues, rendant les cours accessibles à des apprenants de diverses origines linguistiques. Ainsi, l'éducation devient un droit universel, plutôt qu'un privilège réservé à quelques-uns.<br><br>
        <strong>3. Assistance aux enseignants et automatisation des tâches</strong><br>
        L'IA ne profite pas seulement aux étudiants, elle aide également les enseignants à mieux gérer leur charge de travail. En automatisant certaines tâches administratives, telles que la correction des devoirs ou la gestion des notes, l'IA libère du temps pour que les enseignants se concentrent davantage sur l'enseignement et l'interaction directe avec leurs élèves.<br>
        Des outils comme Gradescope utilisent l'IA pour corriger les copies d'examens, en identifiant les erreurs et en attribuant des notes automatiquement. Par ailleurs, l'IA peut fournir des recommandations aux enseignants sur les stratégies pédagogiques à adopter pour améliorer l'apprentissage de leurs élèves. Grâce à ces outils, les enseignants peuvent mieux adapter leur enseignement aux besoins spécifiques de chaque étudiant et passer plus de temps à les accompagner dans leur progression.<br><br>`
    },
    {
      title: "L'IA et la créativité : Aide à la création artistique et musicale",
      content: `L'intelligence artificielle (IA) joue un rôle de plus en plus important dans le domaine de la créativité, en offrant des outils et des technologies qui assistent les artistes et les musiciens dans leur processus de création. Cet article explore deux aspects clés de l'IA dans la création artistique et musicale : l'augmentation de la créativité humaine et la démocratisation de l'accès à l'art.<br><br>
      <strong>1. Augmentation de la créativité humaine</strong><br>
      L'IA permet aux artistes d'explorer de nouvelles formes d'expression et d'expérimenter des idées qui n'auraient peut-être pas été envisagées autrement. En utilisant des algorithmes génératifs, les artistes peuvent créer des œuvres d'art uniques en collaboration avec des systèmes d'IA. Par exemple, des outils comme DALL-E et Artbreeder permettent de générer des images à partir de descriptions textuelles ou de mélanger différents styles artistiques, offrant ainsi de nouvelles perspectives et inspirations. Ces plateformes tirent parti de la puissance des réseaux de neurones pour analyser des millions d'images et dégager des motifs, permettant aux artistes de créer des œuvres qui fusionnent leurs visions personnelles avec des éléments générés par l'IA.<br>
      De plus, dans le domaine de la musique, des logiciels tels qu'AIVA (Artificial Intelligence Virtual Artist) peuvent composer des morceaux originaux en s'inspirant de différents genres et styles. En analysant les caractéristiques musicales de centaines de compositions, AIVA peut générer des morceaux qui respectent des structures musicales classiques tout en intégrant des éléments novateurs. Ces outils ne remplacent pas la créativité humaine, mais l'amplifient, permettant aux artistes de se concentrer sur des aspects plus conceptuels et émotionnels de leur travail, tout en laissant les tâches techniques à l'IA. En effet, des artistes tels que Taryn Southern ont déjà utilisé l'IA pour produire des albums, démontrant que la collaboration entre l'homme et la machine peut donner lieu à des résultats artistiques extraordinaires.<br><br>
      <strong>2. Démocratisation de l'accès à l'art</strong><br>
      L'IA contribue également à la démocratisation de l'accès à l'art et à la musique, rendant ces domaines plus accessibles à un public plus large. Grâce à des plateformes basées sur l'IA, même ceux qui n'ont pas de formation artistique peuvent créer des œuvres visuelles ou musicales. Par exemple, des applications comme Runway ML permettent à quiconque de manipuler des vidéos et des images avec des outils d'IA, facilitant la création de contenus originaux. Ces technologies offrent aux utilisateurs la possibilité de travailler avec des effets spéciaux, d'analyser des vidéos et d'appliquer des filtres, tout cela sans nécessiter de compétences techniques avancées.<br>
      Dans le domaine musical, des services comme Amper Music et Jukedeck offrent la possibilité de composer des morceaux en quelques clics, permettant à des utilisateurs sans compétences musicales de créer des bandes sonores pour leurs projets. Ces plateformes utilisent des algorithmes d'apprentissage automatique pour générer des compositions qui peuvent être adaptées à différents styles et ambiances. En outre, des outils comme Google’s Magenta travaillent sur la création de musiques et d'art génératif, élargissant encore davantage les possibilités de création. Cette accessibilité à la création artistique ouvre la porte à une diversité de voix et d'expressions, enrichissant le paysage culturel mondial.<br><br>
      En conclusion, l'IA agit comme un catalyseur dans le monde de la créativité, aidant les artistes à explorer de nouvelles possibilités et rendant l'art et la musique accessibles à tous. En combinant la puissance de l'IA avec la vision humaine, nous assistons à une ère passionnante de collaboration artistique. L'IA, loin de remplacer les artistes, les aide à repousser les limites de leur créativité, créant ainsi un avenir prometteur pour la création artistique et musicale.`
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % positiveArticles.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + positiveArticles.length) % positiveArticles.length);
  };

  const Article = ({ title, content }: ArticleProps) => (
    <div className="p-4 bg-white shadow-md rounded-md mx-auto" style={{ maxWidth: '750px' }}>
      <h2 style={{ fontWeight: '900', fontSize: "25px", textAlign: "center" }}>{title}</h2>
      <p style={{ textAlign: "center" , overflowY:'auto', height:'60vh'   }} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <h2 className="text-xl font-bold">Articles Positifs sur l'IA</h2>
      <Carousel style={{ width: "100%", maxWidth: "800px" }}>
        <CarouselContent style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", textAlign: "center", overflowY: "auto" }}>
          <CarouselItem 
            style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} // Pour s'assurer que l'article est bien centré
          >
            <Article title={positiveArticles[currentIndex].title} content={positiveArticles[currentIndex].content} />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious  style={{ position: "absolute" }} onClick={handlePrevious} disabled={positiveArticles.length <= 1} />
        <CarouselNext onClick={handleNext} disabled={positiveArticles.length <= 1} />
      </Carousel>
    </div>
  );
};

export default PositiveArticles;