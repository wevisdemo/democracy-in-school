import WelcomeSelector from 'components/shared/welcomeSelector'
import QuizSelector from './selector/quizSelector'
import { quiz_list } from 'data/quiz'

interface PropsType {
  expand: boolean
  action: 'expand' | 'shrink' | 'center'
}

const Quiz = ({ expand, action }: PropsType) => {
  return (
    <>
      <WelcomeSelector action={action} expand={expand} type="quiz" />
      {expand && <QuizSelector quizList={quiz_list} />}
    </>
  )
}

export default Quiz
