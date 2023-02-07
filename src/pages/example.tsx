import EventSubmitModal from 'components/shared/modal/eventSubmit'
import GameStepModal from 'components/shared/modal/gameStepModal'
import PersonalModal from 'components/shared/modal/personal'
import VideoModal from 'components/shared/modal/video'
import { useState } from 'react'
import styled from 'styled-components'
import { guideCard } from 'data/guide'
import TextfieldModal from 'components/shared/modal/textfiled'
import { prefix } from 'utils'
import StoryPart2 from 'components/story/storyPart2'

const MainComponent = styled.div`
  width: 100vw;
  // height: 100vh;
  background-image: url('${prefix}/background/bg_white.01.png');
`

function Example() {
  const [showModal, setShowModal] = useState<boolean>(true)

  return (
    <MainComponent>
      <div style={{ height: '100vh' }}></div>
      {/* <div style={{ position: 'sticky', height: '20vh', backgroundColor: 'blue', top: 0 }}></div> */}
      {/* <div style={{ position: 'sticky', top: 0 }}> */}
      <StoryPart2 />
      {/* </div> */}
      <div style={{ position: 'sticky', top: 0 }}>
        <div style={{ height: '100vh', backgroundColor: 'yellow' }}></div>
      </div>
    </MainComponent>
  )
}

export default Example
