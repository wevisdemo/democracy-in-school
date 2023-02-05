import EventSubmitModal from 'components/shared/modal/eventSubmit'
import GameStepModal from 'components/shared/modal/gameStepModal'
import PersonalModal from 'components/shared/modal/personal'
import VideoModal from 'components/shared/modal/video'
import { useState } from 'react'
import styled from 'styled-components'
import { guideCard } from 'data/guide'
import TextfieldModal from 'components/shared/modal/textfiled'

const MainComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/background/bg_yellow.01.png');
`

function Example() {
  const [showModal, setShowModal] = useState<boolean>(true)

  return (
    <MainComponent>
      <button onClick={() => setShowModal(true)}>show</button>
      <TextfieldModal submitOtherAnswer={() => {}} show={showModal} setShow={setShowModal}></TextfieldModal>
    </MainComponent>
  )
}

export default Example
