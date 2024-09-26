'use client';
import { useEffect, useState } from 'react';
import { Bot, Send } from 'lucide-react';
import { useTheme } from 'next-themes';
import OpenAI from 'openai';

type Message = {
  sender: string;
  text: string;
};

const LightChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [responseAI, setResponseAI] = useState<string | undefined | null>('');
  const [loader, setLoader] = useState<boolean>(false);
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  async function main() {
    setLoader(true);
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `${inputValue} Je veux ma réponse en français et au maximum de 400 caractères`,
        },
      ],
      model: 'gpt-4o',
    });

    setResponseAI(completion.choices[0].message.content);
    console.log(completion.choices[0]);
  }

  return (
    <div className="p-4 rounded-lg shadow-lg bg-white w-96">
      <div className="h-64 overflow-y-auto mb-4">
        <Bot size={40} className="text-gray-500 dark:text-gray-400 mr-2" />
        {!responseAI && loader ? (
          <div style={{ width: 50, height: 50, backgroundColor: 'blue' }}></div>
        ) : (
          <p>{responseAI}</p>
        )}
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="p-2 bg-violet-400 text-white rounded-r-lg"
          onClick={main}
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default LightChatBot;
