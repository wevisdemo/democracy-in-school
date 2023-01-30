import StoryPart2 from './storyPart2'
import StoryPart3 from './storyPart3'
import StoryPart4 from './storyPart4'
import WelcomeStory from './welcomeStory'

interface PropsType {
  expand: boolean
}

const Story = ({ expand }: PropsType) => {
  return (
    <>
      <WelcomeStory expand={expand}></WelcomeStory>
      {expand && (
        <div>
          <StoryPart2 />
          <StoryPart3 />
          <StoryPart4 />
        </div>
      )}
    </>
  )
}

export default Story
