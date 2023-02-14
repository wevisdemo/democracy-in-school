export interface IAnswerGetResponse {
  list: IAnswerDB[]
  pageInfo: IResponsePageInfo
}

export interface IAnswerDB {
  Id: number
  choice_id: string
  choice_text: string
  user_info: {
    Id: number | null
    user_agent: string
  }
  question: {
    Id: number
    topic: string
  }
  question_id: number
}

interface IResponsePageInfo {
  totalRows: number
  page: number
  pageSize: number
  isFirstPage: boolean
  isLastPage: boolean
}

export interface IAnswerPostResponse {
  Id: number
  choice_id: string
  choice_text: string
  nc_2j4n___question_id: number
  nc_2j4n__user_info_id: number | null
}

export interface IPostUserInfoResponse {
  Id: number
  gender: string
  age: string
  province: string
  education_level: string
  user_agent: string
}

export interface IPostSchoolInfoResponse {
  Id: number
  name: string
  province: string
  education_level: string
  user_agent: string
}
