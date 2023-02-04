import WelcomeSelector from 'components/shared/welcomeSelector'
import QuizGame from './quizGame'
import QuizSelector from './selector/quizSelector'
import { quiz_list } from 'data/quiz'
import QuizEvent from './quizEvent'
import QuizReminder from './quizReminder'

interface PropsType {
  expand: boolean
}

const Quiz = ({ expand }: PropsType) => {
  return (
    <>
      <WelcomeSelector type="quiz" />
    </>
  )
}

export default Quiz
