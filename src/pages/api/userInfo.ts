// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { IPostUserInfoResponse } from 'types/response'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const headers = {
    'xc-auth': process.env.NOCO_AUTH_TOKEN || ''
  }

  switch (req.method) {
    case 'POST': {
      const reqOptions: AxiosRequestConfig = {
        method: 'POST',
        url: `${process.env.NOCO_API_BASE_URL || ''}/user_info/views/user-info`,
        data: req.body,
        headers
      }
      try {
        const response = await axios<IPostUserInfoResponse>(reqOptions)
        return res.status(response.status).json(response.data)
      } catch (err: any) {
        console.error(err)
        return res.status(422).json({ message: 'something wrong' })
      }
    }
  }
  return res.status(422)
}
