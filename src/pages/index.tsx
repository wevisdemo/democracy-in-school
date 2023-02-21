import Navbar from 'components/navbar'
import Decision from 'components/templates/decision'
import Intro from 'components/templates/intro'
import Welcome from 'components/templates/welcome'
import styled from 'styled-components'
import { prefix } from 'utils'
import Metadata from 'components/metadata'

const MainComponent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: url('${prefix}/background/bg_white.01.png');
`

function Home() {
  const ogDescription =
    'แตกต่างได้ไหม? เพราะประชาธิปไตยควรเคารพกัน ชวนมาเรียนรู้และทดสอบความเข้าใจเกี่ยวกับสิทธิเสรีภาพกัน #DemocracyinSchool'

  return (
    <>
      <Metadata imageSrc={`${prefix}/og/og-default.png`} description={ogDescription} />
      <MainComponent>
        <Navbar />
        <Welcome />
        <Intro />
        <Decision />
      </MainComponent>
    </>
  )
}

export default Home
