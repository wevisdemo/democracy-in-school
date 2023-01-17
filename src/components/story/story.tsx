import StoryPart2 from './storyPart2'
import StoryPart3 from './storyPart3'
import StoryPart4 from './storyPart4'
import WelcomeStory from './welcomeStory'

const Story = () => {
  return (
    <>
      <WelcomeStory></WelcomeStory>
      <StoryPart2 />
      <StoryPart3 />
      <StoryPart4 />
    </>
  )
}

export default Story
