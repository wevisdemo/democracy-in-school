import Layout from 'components/layout'
import Navbar from 'components/navbar'
import Quiz from 'components/quiz/quiz'
import About from 'components/templates/about'
import styled from 'styled-components'
import WvFooter from '@wevisdemo/ui/react/footer'

const MainComponent = styled.div``

function AboutPage() {
  return (
    <MainComponent>
      <Navbar></Navbar>
      <About />
      <WvFooter dark />
    </MainComponent>
  )
}

export default AboutPage
