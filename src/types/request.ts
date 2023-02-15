export interface IPostAnswerBody {
  choice_id: string
  choice_text: string
  nc_2j4n___question_id: number | null
  nc_2j4n__user_info_id?: number | null
  nc_2j4n___school_info_id?: number | null
}

export interface IPostUserInfoBody {
  gender: string
  age: string
  province: string
  education_level: string
  user_agent: string
}

export interface IPostSchoolInfoBody {
  name: string
  province: string
  education_level: string
  user_agent: string
}

export interface IPostOpinionBody {
  answer: string
  nc_2j4n___question_id: number
  nc_2j4n__user_info_id?: number | null
  nc_2j4n___school_info_id?: number | null
}
