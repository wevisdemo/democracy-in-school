import Layout from 'components/layout'
import QuizSelector from 'components/quiz/selector/quizSelector'
import VideoModal from 'components/shared/modal/video'
import WelcomeSelector from 'components/shared/welcomeSelector'
import { quiz_list } from 'data/quiz'
import { useState } from 'react'
import Story from 'components/story/story'
import Metadata from 'components/metadata'
import { prefix } from 'utils'

function KnowledgePage() {
  const [openVideoModal, setOpenVideoModal] = useState<boolean>(false)

  return (
    <>
      <Metadata
        title="Know Your Rights"
        description="เกิดมาทั้งที เรามีสิทธิเสรีภาพแค่ไหน?"
        imageSrc={`${prefix}/og/og-default.jpg`}
      />
      <Layout>
        <WelcomeSelector expand action="expand" type="story" />
        <Story openVideoModal={() => setOpenVideoModal(true)} />
        <WelcomeSelector expand action="expand" type="quiz" />
        <QuizSelector quizList={quiz_list} />
        <VideoModal show={openVideoModal} setShow={setOpenVideoModal} />
      </Layout>
    </>
  )
}

export default KnowledgePage
