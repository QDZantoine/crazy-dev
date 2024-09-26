'use client';
import { useState, useEffect } from 'react';
import DarkChatBot from '@/components/DarkChatBot';
import LightChatBot from '@/components/LightChatBot';
import { useTheme } from 'next-themes';

export default function ChatBotPage() {
  const { theme } = useTheme();


  return (
    <>
      <div>
        <main>
          <div>
            <h1 className="text-center text-3xl mb-6">Welcome ChatBot AI</h1>
            <div className="flex justify-center">
              {theme === 'dark' ? <DarkChatBot /> : <LightChatBot />}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
