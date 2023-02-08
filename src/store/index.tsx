import { userInfo } from 'os'
import { createContext, Provider, ReactNode, useReducer } from 'react'
import { IAnswer } from 'types/quiz'
import { AnswerActionType, answerReducer } from './answer'
import {
  defaultUserInfoContext,
  initUserInfoContext,
  IUserInfoContext,
  userInfoDefault,
  userInfoReducer
} from './userInfo'

interface IAppContextValue {
  addAnswer: (ans: IAnswer) => void
  resetAnswer: () => void
  fetchAnswer: () => void
  answerList: IAnswer[]
  userInfo: IUserInfoContext
}

const dafaultContextValue: IAppContextValue = {
  addAnswer: (ans: IAnswer) => {},
  resetAnswer: () => {},
  fetchAnswer: () => {},
  answerList: [],
  userInfo: defaultUserInfoContext
}

export const AppContext = createContext(dafaultContextValue)

export const contextValue = {}

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [answerState, answerDispatch] = useReducer(answerReducer, [])
  const [userInfoState, userInfoDispatch] = useReducer(userInfoReducer, userInfoDefault)

  const value = {
    addAnswer: (ans: IAnswer) => {
      answerDispatch({ type: AnswerActionType.PUSH, payload: ans })
    },
    resetAnswer: () => {
      answerDispatch({ type: AnswerActionType.RESET })
    },
    fetchAnswer: () => {
      answerDispatch({ type: AnswerActionType.FETCH })
    },
    answerList: answerState,
    userInfo: initUserInfoContext({ userInfoState, userInfoDispatch })
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
