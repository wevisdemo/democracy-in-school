// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosRequestConfig } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { IPostOpinionResponse } from 'types/response'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const headers = {
    'xc-token': process.env.NOCO_AUTH_TOKEN || ''
  }

  switch (req.method) {
    case 'POST': {
      const reqOptions: AxiosRequestConfig = {
        method: 'POST',
        url: `${process.env.NOCO_API_BASE_URL || ''}/opinion_answer/views/opinion_question`,
        data: req.body,
        headers
      }
      try {
        const response = await axios<IPostOpinionResponse>(reqOptions)
        return res.status(response.status).json(response.data)
      } catch (err: any) {
        console.error(err)
        return res.status(422).json({ message: 'something wrong' })
      }
    }
  }
  return res.status(422)
}
