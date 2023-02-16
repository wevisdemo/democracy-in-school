// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { METHODS } from 'http'
import { Http2ServerRequest } from 'http2'
import type { NextApiRequest, NextApiResponse } from 'next'
import { IAnswerGetResponse, IAnswerPostResponse } from 'types/response'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const headers = {
    'xc-token': process.env.NEXT_PUBLIC_NOCO_AUTH_TOKEN || ''
  }
  const url = req.url?.replace('/api/answer', '')

  switch (req.method) {
    case 'GET': {
      const reqOptions: AxiosRequestConfig = {
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_NOCO_API_BASE_URL || ''}${url}`,
        headers
      }
      try {
        const response = await axios<IAnswerGetResponse>(reqOptions)
        return res.status(response.status).json(response.data)
      } catch (err: any) {
        console.error(err)
        return res.status(422).json({ message: 'something wrong' })
      }
    }
    case 'POST': {
      const reqOptions: AxiosRequestConfig = {
        method: 'POST',
        url: `${process.env.NEXT_PUBLIC_NOCO_API_BASE_URL || ''}${url}`,
        data: req.body,
        headers
      }
      try {
        const response = await axios<IAnswerPostResponse>(reqOptions)
        return res.status(response.status).json(response.data)
      } catch (err: any) {
        console.error(err)
        return res.status(422).json({ message: 'something wrong' })
      }
    }
  }
  return res.status(422)
}
