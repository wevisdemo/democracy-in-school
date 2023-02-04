import QuizEvent from 'components/quiz/quizEvent'
import QuizReminder from 'components/quiz/quizReminder'
import { quiz_list } from 'data/quiz'
import { useRouter } from 'next/router'

function QuizReminderPage() {
  const router = useRouter()
  const { id } = router.query

  return <QuizReminder quizAmount={8} reminder={quiz_list[0].reminder}></QuizReminder>
}

export default QuizReminderPage
