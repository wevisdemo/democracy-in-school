import Layout from 'components/layout'
import Intro from 'components/templates/intro'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { quiz_list } from 'data/quiz'
import QuizSelector from 'components/quiz/selector/quizSelector'
import WelcomeSelector from 'components/shared/welcomeSelector'

function QuizWelcomePage() {
  const router = useRouter()

  const onClickPage = () => {
    router.push('/quiz/list')
  }

  return (
    <Layout onClick={onClickPage}>
      <WelcomeSelector type="quiz" />
    </Layout>
  )
}

export default QuizWelcomePage