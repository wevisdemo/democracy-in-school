import Layout from 'components/layout'
import Intro from 'components/templates/intro'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { quiz_list } from 'data/quiz'
import QuizSelector from 'components/quiz/selector/quizSelector'

function QuizListPage() {
  const router = useRouter()

  // const onClickPage = () => {
  //   console.log('clickkk')
  //   router.push('/third')
  // }

  return (
    <Layout>
      <QuizSelector quizList={quiz_list} />
    </Layout>
  )
}

export default QuizListPage
