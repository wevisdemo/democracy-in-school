import QuizGame from 'components/quiz/quizGame'
import QuizReminder from 'components/quiz/quizReminder'
import QuizEvent from 'components/quiz/quizEvent'
import { quiz_list } from 'data/quiz'
import { useRouter } from 'next/router'
import Layout from 'components/layout'

function Quiz() {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <QuizGame quiz={quiz_list[0]} />
      {/* <QuizEvent event={quiz_list[0].event}></QuizEvent>
      <QuizReminder quizAmount={8} reminder={quiz_list[0].reminder}></QuizReminder> */}
    </Layout>
  )
}

export default Quiz
