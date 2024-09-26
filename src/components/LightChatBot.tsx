'use client';
import { useEffect, useState } from 'react';
import { Bot, Send } from 'lucide-react';
import { useTheme } from 'next-themes';

type Message = {
  sender: string;
  text: string;
};

const LightChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  if (isDarkMode) return null;

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);
    setInput('');

    try {
      const response = await fetch('/api/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching ChatGPT response:', error);
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-lg bg-white w-96">
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
                  : 'bg-gray-200 text-black'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-grow p-2 border border-gray-300 rounded-l-lg"
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

export default LightChatBot;