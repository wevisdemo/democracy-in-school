import Layout from 'components/layout'
import Intro from 'components/templates/intro'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { quiz_list } from 'data/quiz'
import QuizSelector from 'components/quiz/selector/quizSelector'
import WelcomeSelector from 'components/shared/welcomeSelector'
import Quiz from 'components/quiz/quiz'

function QuizWelcomePage() {
  return (
    <Layout>
      <Quiz expand />
    </Layout>
  )
}

export default QuizWelcomePage
