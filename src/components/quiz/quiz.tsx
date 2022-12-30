import WelcomeSelector from 'components/shared/welcomeSelector'
import QuizSelector from './quizSelector'

const Quiz = () => {
  return (
    <>
      <WelcomeSelector type="quiz" />
      <QuizSelector/>
    </>
  )
}

export default Quiz
