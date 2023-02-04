import QuizEvent from 'components/quiz/quizEvent'
import { quiz_list } from 'data/quiz'
import { useRouter } from 'next/router'

function QuizEventPage() {
  const router = useRouter()
  const { id } = router.query

  return <QuizEvent event={quiz_list[0].event}></QuizEvent>
}

export default QuizEventPage
