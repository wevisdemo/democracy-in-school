import QuizSelector from 'components/quiz/selector/quizSelector'
import { quiz_list } from 'data/quiz'
import Quiz from 'pages/quiz'
import StoryPart2 from './storyPart2'
import StoryPart3 from './storyPart3'
import StoryPart4 from './storyPart4'
import StoryPart1 from './storyPart1'

interface PropsType {
  openVideoModal: () => void
}

const Story = ({ openVideoModal }: PropsType) => {
  return (
    <>
      <StoryPart1 openVideoModal={openVideoModal} />
      <StoryPart2 />
      <StoryPart3 />
      <StoryPart4 />
    </>
  )
}

export default Story
