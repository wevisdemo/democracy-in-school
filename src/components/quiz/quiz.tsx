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
      {expand && (
        <>
          <QuizSelector quizList={quiz_list} />
          <QuizGame quiz={quiz_list[0]} />
          <QuizEvent event={quiz_list[0].event}></QuizEvent>
          <QuizReminder quizAmount={8} reminder={quiz_list[0].reminder}></QuizReminder>
        </>
      )}
    </>
  )
}

export default Quiz
