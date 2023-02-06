import Layout from 'components/layout'
import QuizSelector from 'components/quiz/selector/quizSelector'
import VideoModal from 'components/shared/modal/video'
import WelcomeSelector from 'components/shared/welcomeSelector'
import StoryPart2 from 'components/story/storyPart2'
import StoryPart3 from 'components/story/storyPart3'
import StoryPart4 from 'components/story/storyPart4'
import WelcomeStory from 'components/story/storyPart1'
import { quiz_list } from 'data/quiz'
import { useState } from 'react'
import Story from 'components/story/story'

function StoryPage() {
  const [openVideoModal, setOpenVideoModal] = useState<boolean>(false)

  return (
    <Layout>
      <WelcomeSelector expand action="expand" type="story" />
      <Story openVideoModal={() => setOpenVideoModal(true)} />
      <WelcomeSelector expand action="expand" type="quiz" />
      <QuizSelector quizList={quiz_list} />
      <VideoModal show={openVideoModal} setShow={setOpenVideoModal} />
    </Layout>
  )
}

export default StoryPage
