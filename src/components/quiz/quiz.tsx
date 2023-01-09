import WelcomeSelector from 'components/shared/welcomeSelector'
import QuizGame from './quizGame'
import QuizSelector from './quizSelector'
import { quiz_list } from 'data/quiz'
import QuizEvent from './quizEvent'
import QuizReminder from './quizReminder'

const Quiz = () => {
  return (
    <>
      <WelcomeSelector type="quiz" />
      <QuizSelector />
      <QuizGame quiz={quiz_list[0]} />
      <QuizEvent event={quiz_list[0].event}></QuizEvent>
      <QuizReminder quizAmount={8} reminder={quiz_list[0].reminder}></QuizReminder>
    </>
  )
}

export default Quiz
