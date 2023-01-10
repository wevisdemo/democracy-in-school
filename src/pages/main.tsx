import Ending from 'components/ending/ending'
import Navbar from 'components/navbar'
import Quiz from 'components/quiz/quiz'
import Decision from 'components/templates/decision'
import Intro from 'components/templates/intro'
import Welcome from 'components/templates/welcome'
import styled from 'styled-components'

const MainComponent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: url('/bg-default.svg');
`

export default function Main() {
  return (
    <MainComponent>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Intro></Intro>
      <Decision></Decision>
      <Quiz></Quiz>
      <Ending></Ending>
    </MainComponent>
  )
}
