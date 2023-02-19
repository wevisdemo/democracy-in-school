import axios, { AxiosRequestConfig } from 'axios'
import { IPostAnswerBody, IPostOpinionBody, IPostSchoolInfoBody, IPostUserInfoBody } from 'types/request'
import {
  IAnswerGetResponse,
  IAnswerPostResponse,
  IPostOpinionResponse,
  IPostSchoolInfoResponse,
  IPostUserInfoResponse
} from 'types/response'

const headers = {
  'xc-token': process.env.NEXT_PUBLIC_NOCO_AUTH_TOKEN || ''
}

export const postUserInfoApi = async (body: IPostUserInfoBody) => {
  const reqOptions: AxiosRequestConfig = {
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_NOCO_API_BASE_URL || ''}/user_info/views/user-info`,
    data: body,
    headers
  }
  try {
    const response = await axios<IPostUserInfoResponse>(reqOptions)
    return response
  } catch (err: any) {
    console.error(err.response.status, err.response.data)
    return null
  }
}

export const postSchoolInfoApi = async (body: IPostSchoolInfoBody) => {
  const reqOptions: AxiosRequestConfig = {
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_NOCO_API_BASE_URL || ''}/school_info/views/school_info`,
    data: body,
    headers
  }
  try {
    const response = await axios<IPostSchoolInfoResponse>(reqOptions)
    return response
  } catch (err: any) {
    console.error(err.response.status, err.response.data)
    return null
  }
}

export const postOpinionAnswerApi = async (body: IPostOpinionBody) => {
  const reqOptions: AxiosRequestConfig = {
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_NOCO_API_BASE_URL || ''}/opinion_answer/views/opinion_question`,
    data: body,
    headers
  }
  try {
    const response = await axios<IPostOpinionResponse>(reqOptions)
    return response
  } catch (err: any) {
    console.error(err.response.status, err.response.data)
    return null
  }
}

export const postQuizAnswerApi = async (body: IPostAnswerBody) => {
  const reqOptions: AxiosRequestConfig = {
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_NOCO_API_BASE_URL || ''}/answer/views/answer`,
    data: body,
    headers
  }
  try {
    const response = await axios<IAnswerPostResponse>(reqOptions)
    return response
  } catch (err: any) {
    console.error(err.response.status, err.response.data)
    return null
  }
}

export const getQuizAnswerApi = async (id: string) => {
  const reqOptions: AxiosRequestConfig = {
    url: `${process.env.NEXT_PUBLIC_NOCO_API_BASE_URL || ''}/answer/views/answer?where=(question_id,eq,${id})`,
    headers
  }
  try {
    const response = await axios<IAnswerGetResponse>(reqOptions)
    return response
  } catch (err: any) {
    console.error(err.response.status, err.response.data)
    return null
  }
}
