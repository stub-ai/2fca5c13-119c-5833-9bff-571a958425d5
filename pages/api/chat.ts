import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  reply: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { message } = req.body;
  res.status(200).json({ reply: `You said: ${message}` });
}