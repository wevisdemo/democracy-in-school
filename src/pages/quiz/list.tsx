import Layout from 'components/layout'
import { quiz_list } from 'data/quiz'
import QuizSelector from 'components/quiz/selector/quizSelector'

function QuizListPage() {
  return (
    <Layout>
      <QuizSelector quizList={quiz_list} />
    </Layout>
  )
}

export default QuizListPage
