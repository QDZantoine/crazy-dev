'use client';
import { useEffect, useState } from 'react';
import { Bot, Send } from 'lucide-react';
import { useTheme } from 'next-themes';

type Message = {
  sender: string;
  text: string;
};

const DarkChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fakeResponse = [
      "T'as pas l'air con, juste un peu en panne d'intelligence.",
      "T'as déjà essayé de réfléchir, ou ça te donne des migraines ?",
      "Heureusement qu'on te voit plus que ce qu'on t'entend réfléchir.",
      "T'es la preuve vivante qu'on peut exister sans cerveau.",
      "Toi, t'as été livré sans le mode d'emploi.",
      "Avec toi, même le silence est un soulagement.",
      "La prochaine fois que tu veux dire un truc intelligent, contente-toi de penser.",
      "Si on pouvait te cloner, ce serait un crime contre l'intelligence.",
      "Ton QI doit être en grève illimitée.",
      "Arrête de parler, on pourrait croire que t'as une pensée cohérente.",
      "Ton opinion ? Elle est aussi utile qu'un couteau en plastique.",
      "On te voit, on t'écoute, et puis on regrette.",
      "T'es un peu comme une mauvaise blague : plus personne ne rigole.",
      "Le niveau de crédibilité, c'est comme ta capacité à réfléchir... inexistant.",
      "Si l'intelligence était une monnaie, tu serais en faillite totale.",
      "À quoi bon discuter avec toi, on sait tous que ça ne mènera nulle part.",
      "T'es comme un bug informatique : gênant et inutile.",
      "Ça doit être dur d'être toi, sans aucune perspective d'évolution.",
      "Si tu veux qu'on te prenne au sérieux, commence par dire des trucs sensés.",
      "T'as déjà pensé à te recycler... en silence ?"
  ];
  const randomResponse = fakeResponse[Math.floor(Math.random() * fakeResponse.length)];
  console.log(randomResponse);

  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  if (!isDarkMode) return null;
  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        sender: 'bot',
        text: `${randomResponse}`,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="p-4 rounded-lg shadow-lg bg-stone-900 dark:bg-stone-800 w-96">
      <div className="h-64 overflow-y-auto mb-4">
      <Bot size={40} className="text-gray-500 dark:text-gray-400 mr-2" />
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            } mb-2`}
          >
            <div
              className={`p-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-violet-400 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-black'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex ">
        <input
          className="flex-grow p-2 border border-gray-300 rounded-l-lg dark:bg-gray-700 dark:border-gray-600"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="p-2 bg-violet-400 text-white rounded-r-lg"
          onClick={handleSendMessage}
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default DarkChatBot;
