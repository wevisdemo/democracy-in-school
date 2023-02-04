import PersonalModal from 'components/shared/modal/personal'
import VideoModal from 'components/shared/modal/video'
import { useState } from 'react'
import styled from 'styled-components'

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
      <VideoModal show={showModal} setShow={setShowModal}></VideoModal>
    </MainComponent>
  )
}

export default Example
