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
        text: 'Hello! How can I help you today?',
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
