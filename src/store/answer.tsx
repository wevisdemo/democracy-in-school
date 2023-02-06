import { IAnswer } from 'types/quiz'

export enum AnswerActionType {
  PUSH = 'PUSH',
  RESET = 'RESET'
}

type AnswerReducerAction =
  | {
      type: AnswerActionType.PUSH
      payload: IAnswer
    }
  | {
      type: AnswerActionType.RESET
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
      return []
    }
    default:
      return state
  }
}
