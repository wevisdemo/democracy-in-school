import Ending from 'components/ending/ending'
import Navbar from 'components/navbar'
import Quiz from 'components/quiz/quiz'
import Decision from 'components/templates/decision'
import Intro from 'components/templates/intro'
import Welcome from 'components/templates/welcome'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import { ReactElement } from 'react'

const MainComponent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: url('background/bg_white.01.png');
  overflow: hidden;
`

function Home() {
  const router = useRouter()

  const onClickPage = () => {
    console.log('cliuck')
    router.push('/second')
  }
  return (
    <MainComponent onClick={onClickPage}>
      <Navbar></Navbar>
      <Welcome></Welcome>
      {/* <Intro></Intro>
      <Decision></Decision>
      <Quiz></Quiz>
      <Ending></Ending> */}
    </MainComponent>
  )
}

export default Home
