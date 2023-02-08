import Layout from 'components/layout'
import { quiz_list } from 'data/quiz'
import QuizSelector from 'components/quiz/selector/quizSelector'
import { useContext, useEffect } from 'react'
import { AppContext } from 'store'

function QuizListPage() {
  const appContext = useContext(AppContext)

  useEffect(() => {
    appContext.fetchAnswer()
  }, [])

  return (
    <Layout>
      <QuizSelector quizList={quiz_list} />
    </Layout>
  )
}

export default QuizListPage
