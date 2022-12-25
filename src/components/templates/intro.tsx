import styled from 'styled-components'
import Lottie from 'lottie-react'
import DesktopBubble from 'assets/lotties/desktop_bubble.json'

const SectionDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
`

const SecondSectionDiv = styled(SectionDiv)`
  background-color: #22c0e8;
`

const FirstSection = styled.p`
  margin: auto;
  max-width: 744px;
  text-align: center;
  z-index: 10;
  text-shadow: -2px 2px 2px #f0efea, 2px 2px 2px #f0efea, 2px -2px 2px #f0efea, 2px 2px 2px #f0efea;
`

const SecondSectionText = styled.div`
  margin: auto;

  max-width: 670px;
  text-align: center;
`

const Intro = () => {
  return (
    <>
      <SectionDiv>
        <Lottie
          animationData={DesktopBubble}
          loop={true}
          style={{ width: '100%', height: '100%', position: 'absolute' }}
        ></Lottie>
        <FirstSection className="wv-h6 wv-font-kondolar">
          เราอาจเห็นหลายประเด็นในสังคมที่มีคนมีความเห็นต่างกัน และบางประเด็นไม่ได้จบลงด้วยการเคารพความคิดเห็นต่อกัน
          ในวิถีประชาธิปไตยแบบที่เรารับรู้มา
        </FirstSection>
      </SectionDiv>
      <SecondSectionDiv>
        <SecondSectionText>
          <p className="wv-h6 wv-font-kondolar" style={{ color: 'white' }}>
            หลายคนถึงกับเคยตั้งคำถามว่า
          </p>
          <h3 className="wv-h3 wv-font-kondolar" style={{ color: '#FFEB78', display: 'flex', flexDirection: 'column' }}>
            <span>ตกลงสังคมเรา</span>
            <span>เป็นประชาธิปไตย</span>
            <span>จริงไหม?</span>
          </h3>
          <p className="wv-h6 wv-font-kondolar" style={{ color: 'white' }}>
            ซึ่งเรื่องความเห็นต่าง คือ สิทธิเสรีภาพ เป็นส่วนหนึ่งของประชาธิปไตย สามารถเริ่มเรียนรู้ได้ตั้งแต่เด็ก
            ดังนั้นเพื่อให้เด็กเติบโตไปสู่สังคมที่เคารพความเห็นต่าง
          </p>
        </SecondSectionText>
      </SecondSectionDiv>
    </>
  )
}

export default Intro
