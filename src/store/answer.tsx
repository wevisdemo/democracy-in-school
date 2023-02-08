import { IAnswer } from 'types/quiz'

export enum AnswerActionType {
  PUSH = 'PUSH',
  RESET = 'RESET',
  FETCH = 'FETCH'
}

type AnswerReducerAction =
  | {
      type: AnswerActionType.PUSH
      payload: IAnswer
    }
  | {
      type: AnswerActionType.RESET
    }
  | {
      type: AnswerActionType.FETCH
    }

export const answerReducer = (state: IAnswer[], action: AnswerReducerAction) => {
  switch (action.type) {
    case AnswerActionType.PUSH: {
      const ans = action.payload
      if (!ans) return state
      const newState = state.filter((d) => d.question_id !== ans.question_id)
      return [...newState, ans]
    }
    case AnswerActionType.RESET: {
      for (let i = 1; i <= 10; i++) {
        const key = `quiz-answer-${i}`
        window.localStorage.removeItem(key)
      }
      return []
    }
    case AnswerActionType.FETCH: {
      let list: IAnswer[] = []
      for (let i = 1; i <= 10; i++) {
        const key = `quiz-answer-${i}`
        const ans = window.localStorage.getItem(key)
        if (!ans) continue
        const ansData = JSON.parse(ans)
        list = [...list, ansData]
      }
      return list
    }
    default:
      return state
  }
}
