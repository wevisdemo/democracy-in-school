import Layout from 'components/layout'
import QuizSelector from 'components/quiz/selector/quizSelector'
import WelcomeSelector from 'components/shared/welcomeSelector'
import { quiz_list } from 'data/quiz'
import Story from 'components/story/story'
import Metadata from 'components/metadata'
import { prefix } from 'utils'

function KnowledgePage() {
  return (
    <>
      <Metadata imageSrc={`${prefix}/og/og-default.png`} />
      <Layout>
        <WelcomeSelector expand action="expand" type="story" />
        <Story />
        <WelcomeSelector expand action="expand" type="quiz" />
        <QuizSelector quizList={quiz_list} />
      </Layout>
    </>
  )
}

export default KnowledgePage
