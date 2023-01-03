import WelcomeSelector from 'components/shared/welcomeSelector'
import QuizGame from './quizGame'
import QuizSelector from './quizSelector'
import { quiz_list } from 'data/quiz'
import QuizEvent from './quizEvent'

const Quiz = () => {
  return (
    <>
      <WelcomeSelector type="quiz" />
      <QuizSelector />
      <QuizGame quiz={quiz_list[0]} />
      <QuizEvent event={quiz_list[0].event}></QuizEvent>
    </>
  )
}

export default Quiz
