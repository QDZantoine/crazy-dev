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
import { color } from "framer-motion";

interface ArticleProps {
  title: string;
  content: string;
}

const NegativeArticles = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre l'index actuel

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % negativeArticles.length);
  };
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + negativeArticles.length) % negativeArticles.length);
  };

  const Article = ({ title, content }: ArticleProps) => (
    <div className="p-4 bg-gray-800 text-white shadow-md rounded-md mx-auto" style={{ maxWidth: '750px' }}>
      <h2 style={{ fontWeight: '900', fontSize: "25px", textAlign: "center" }}>{title}</h2>
      <p style={{ textAlign: "center" , overflowY:'auto', height:'60vh'   }} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  if (!isDarkMode) return null; 

  const negativeArticles: ArticleProps[] = [
    {
      title: "L'IA responsable de la perte d'emplois : Automatisation et chômage de masse",
      content: `L'intelligence artificielle (IA) est souvent présentée comme une avancée technologique révolutionnaire, mais elle est également la cause d'une perte massive d'emplois dans de nombreux secteurs. En automatisant des tâches autrefois effectuées par des humains, l'IA menace des millions de postes et accélère le chômage technologique à travers le monde. Cet article explore comment l'IA pousse les employés vers le chômage dans divers domaines.<br><br>
      <strong>1. Automatisation des emplois dans l'industrie et les services</strong><br>
      L'un des impacts les plus directs de l'IA est l'automatisation des tâches répétitives dans l'industrie manufacturière et les services. Des usines automatisées aux centres d'appels, des robots et des algorithmes remplacent des travailleurs humains. Des entreprises comme Amazon utilisent des robots IA dans leurs entrepôts, éliminant ainsi de nombreux emplois autrefois nécessaires pour la gestion des stocks et l'expédition des produits. Dans les services, des chatbots automatisent les interactions avec les clients, réduisant ainsi le besoin d'employés dans les centres d’appels.<br><br>
      <strong>2. IA et chômage dans les professions qualifiées</strong><br>
      Ce ne sont pas seulement les travailleurs peu qualifiés qui souffrent. Les professions intellectuelles, telles que la comptabilité, la gestion ou encore le droit, ne sont pas épargnées. Des algorithmes sophistiqués sont désormais capables d'effectuer des audits financiers, de rédiger des contrats juridiques et même de faire des diagnostics médicaux, remplaçant des employés hautement qualifiés. Les avocats, les médecins et les comptables risquent de voir leurs tâches les plus simples automatisées, menaçant ainsi leur emploi et réduisant la demande pour ces métiers.`
    },
    {
      title: "L'IA dans l'éducation : Menace pour les enseignants et déshumanisation de l'apprentissage",
      content: `L'IA est de plus en plus présente dans le secteur éducatif, mais cette tendance s'accompagne de conséquences inquiétantes pour les enseignants et les étudiants. En automatisant certaines tâches pédagogiques, l'IA pourrait non seulement réduire le besoin de personnel enseignant, mais également diminuer la qualité de l'enseignement, en déshumanisant les interactions entre les élèves et les professeurs. Cet article examine les dangers que représente l’IA dans le domaine de l'éducation.<br><br>
      <strong>1. Remplacement des enseignants par des plateformes éducatives IA</strong><br>
      Les plateformes d'apprentissage en ligne, comme Coursera ou edX, utilisent des technologies basées sur l'IA pour proposer des parcours personnalisés. Bien que cela puisse sembler une avancée, cela conduit également à une réduction de la demande pour des enseignants humains. Des millions d'étudiants à travers le monde suivent des cours sans jamais interagir avec un enseignant en chair et en os, fragilisant ainsi l'emploi dans le secteur éducatif.<br><br>
      <strong>2. Déshumanisation de l'enseignement et perte de connexion humaine</strong><br>
      L’IA, bien que performante pour automatiser des tâches répétitives telles que la correction des devoirs, manque de l’empathie et de la compréhension humaine nécessaire pour offrir un soutien émotionnel et intellectuel aux étudiants. Les enseignants ne sont plus que des facilitateurs, tandis que l’IA prend en charge une grande partie du processus d’apprentissage, ce qui risque de déshumaniser l’éducation et de rendre les étudiants dépendants de machines pour leur développement intellectuel.`
    },
    {
      title: "L'IA et la créativité : Destruction de l'emploi et appauvrissement de l'art",
      content: `Alors que l'intelligence artificielle s’immisce dans le monde artistique, elle n'aide pas seulement à créer, elle supprime également des emplois dans le domaine de la création. L’IA, grâce à ses algorithmes, est désormais capable de produire des œuvres artistiques ou des compositions musicales, menaçant les artistes, musiciens et autres créateurs professionnels. Cet article explore l'impact négatif de l'IA sur l'emploi dans les secteurs créatifs et artistiques.<br><br>
      <strong>1. Perte d'emploi pour les artistes et musiciens</strong><br>
      Des outils comme DALL-E ou AIVA permettent de générer des images et des musiques de manière automatique, sans intervention humaine. Cela met en péril des milliers d'artistes et de musiciens qui se retrouvent en concurrence avec des algorithmes capables de produire des œuvres en quelques secondes. Des agences de publicité, des studios d’animation ou même des maisons de production musicale commencent à utiliser ces technologies pour réduire leurs coûts, supprimant ainsi des emplois créatifs.<br><br>
      <strong>2. Appauvrissement de la diversité artistique et standardisation des œuvres</strong><br>
      Si l’IA peut générer des œuvres d'art et de la musique, elle ne fait que réutiliser et recombiner des éléments existants. Cela conduit à une standardisation de l’art, limitant la diversité et la créativité humaine. En automatisant le processus de création, l'IA remplace des créateurs humains capables d'injecter des émotions, des idées et des innovations uniques dans leurs œuvres. À long terme, cela risque de conduire à un appauvrissement de la culture et à une homogénéisation des produits créatifs.`
    }
  ];
  

  return (
    <div className="bg-background" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <h2 className="text-xl font-bold">Articles Positifs sur l'IA</h2>
      <Carousel style={{ width: "100%", maxWidth: "800px" }}>
        <CarouselContent style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", textAlign: "center", overflowY: "auto" }}>
          <CarouselItem
            style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} // Pour s'assurer que l'article est bien centré
          >
            <Article title={negativeArticles[currentIndex].title} content={negativeArticles[currentIndex].content} />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="bg-primary"  style={{ position: "absolute" }} onClick={handlePrevious} disabled={negativeArticles.length <= 1} />
        <CarouselNext className="bg-primary" onClick={handleNext} disabled={negativeArticles.length <= 1} />
      </Carousel>
    </div>
  );
};

export default NegativeArticles;