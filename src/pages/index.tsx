import Ending from 'components/ending/ending'
import Navbar from 'components/navbar'
import Quiz from 'components/quiz/quiz'
import Decision from 'components/templates/decision'
import Intro from 'components/templates/intro'
import Welcome from 'components/templates/welcome'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import { ReactElement, useState } from 'react'
import { prefix } from 'utils'
import VideoModal from 'components/shared/modal/video'
import Metadata from 'components/metadata'

const MainComponent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: url('${prefix}/background/bg_white.01.png');
`

function Home() {
  const [expand, setExpand] = useState<string>('center')
  const [openVideoModal, setOpenVideoModal] = useState<boolean>(false)
  // TODO: move expand and set to decision level
  const handleOpenVideoModal = () => {
    setOpenVideoModal(true)
  }

  return (
    <>
      <Metadata imageSrc={`${prefix}/og/og-default.jpg`} />
      <MainComponent>
        <Navbar />
        <Welcome />
        <Intro />
        <Decision openVideoModal={handleOpenVideoModal} expand={expand} setExpand={setExpand}></Decision>
        <VideoModal show={openVideoModal} setShow={setOpenVideoModal} />
      </MainComponent>
    </>
  )
}

export default Home
