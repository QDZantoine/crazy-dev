import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  result?: string;
  error?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Le prompt est manquant.' });
    }

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', // Assure-toi que le modèle est bien supporté
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Utilise la clé API OpenAI
          },
        }
      );

      // Envoie la réponse de l'API OpenAI
      res.status(200).json({ result: response.data.choices[0].message.content });
    } catch (error: any) {
      console.error('Erreur lors de l\'appel à OpenAI:', error.response?.data || error.message);
      res.status(500).json({ error: 'Erreur lors de l\'appel à OpenAI' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}