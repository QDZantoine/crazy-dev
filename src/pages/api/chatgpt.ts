import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Add your API key to .env file
});
console.log(process.env.OPENAI_API_KEY)
const openai = new OpenAIApi(configuration); 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = req.body;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: message,
      max_tokens: 150,
    });

    res.status(200).json({ response: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: 'Error connecting to ChatGPT' });
  }
}