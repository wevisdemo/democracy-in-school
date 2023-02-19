import { Dispatch } from 'react'

export interface IUserInformation {
  id?: number
  has_set: boolean
  type: 'person' | 'school'
  person: IPersonInformation
  school: ISchoolInformation
  user_agent: string
}

interface IPersonInformation {
  gender: string
  age: string
  province: string
  education_level: string
}

interface ISchoolInformation {
  province: string
  education_level: string
  name: string
}

export enum UserInfoActionType {
  SET = '',
  SET_PERSON = 'SET_PERSON',
  SET_SCHOOL = 'SET_SCHOOL',
  FETCH = 'FETCH'
}

export const userInfoDefault: IUserInformation = {
  has_set: false,
  type: 'person',
  person: {
    gender: '',
    age: '',
    province: '',
    education_level: ''
  },
  school: {
    province: '',
    education_level: '',
    name: ''
  },
  user_agent: ''
}

type UserReducerAction =
  | {
      type: UserInfoActionType.SET_PERSON
      payload: IPersonInformation
    }
  | {
      type: UserInfoActionType.SET_SCHOOL
      payload: ISchoolInformation
    }
  | {
      type: UserInfoActionType.SET
      payload: IUserInformation
    }
  | {
      type: UserInfoActionType.FETCH
    }

export const userInfoReducer = (state: IUserInformation, action: UserReducerAction): IUserInformation => {
  switch (action.type) {
    case UserInfoActionType.SET: {
      return { ...action.payload, has_set: true }
    }
    case UserInfoActionType.SET_PERSON: {
      return { ...state, person: action.payload, has_set: true, type: 'person' }
    }
    case UserInfoActionType.SET_SCHOOL: {
      return { ...state, school: action.payload, has_set: true, type: 'school' }
    }
    case UserInfoActionType.FETCH: {
      // TODO: if user doesn't have id, request post to api then embed id
      const userInfo = window.localStorage.getItem('user-info')
      if (!userInfo) {
        return state
      }
      const userInfoData = JSON.parse(userInfo)
      return userInfoData
    }
    default:
      return state
  }
}

export const initUserInfoContext = ({
  userInfoState,
  userInfoDispatch
}: {
  userInfoState: IUserInformation
  userInfoDispatch: Dispatch<UserReducerAction>
}): IUserInfoContext => {
  return {
    state: userInfoState,
    set: (info: IUserInformation) => {
      userInfoDispatch({ type: UserInfoActionType.SET, payload: info })
    },
    setPerson: (info: IPersonInformation) => {
      userInfoDispatch({ type: UserInfoActionType.SET_PERSON, payload: info })
    },
    setSchool: (info: ISchoolInformation) => {
      userInfoDispatch({ type: UserInfoActionType.SET_SCHOOL, payload: info })
    },
    fetch: () => {
      userInfoDispatch({ type: UserInfoActionType.FETCH })
    }
  }
}

export interface IUserInfoContext {
  state: IUserInformation
  set: (info: IUserInformation) => void
  setPerson: (info: IPersonInformation) => void
  setSchool: (info: ISchoolInformation) => void
  fetch: () => void
}

export const defaultUserInfoContext: IUserInfoContext = {
  state: userInfoDefault,
  set: (info: IUserInformation) => {},
  setPerson: (info: IPersonInformation) => {},
  setSchool: (info: ISchoolInformation) => {},
  fetch: () => {}
}
