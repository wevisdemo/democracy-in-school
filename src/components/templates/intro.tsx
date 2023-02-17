import styled from 'styled-components'
import Lottie from 'lottie-react'
import DesktopBubble from 'assets/lotties/desktop_bubble.json'
import ContinueChip from 'components/shared/continueChip'
import { prefix } from 'utils'

const SectionDiv = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: relative;
  display: flex;
  overflow-x: hidden;

  .lottie {
    opacity: 0.2;
    position: absolute;
    width: 300%;
    height: 100%;
    left: -100%;
  }

  .chip {
    position: absolute;
    left: 50%;
    bottom: 200px;
    transform: translate(-50%, 0);

    @media (max-width: 420px) {
      bottom: 40px;
    }
  }
`

const SecondSectionDiv = styled(SectionDiv)`
  background: url('${prefix}/part_1/gif_01.gif');
  background-size: cover;
`

const FirstSection = styled.p`
  margin: auto;
  max-width: 744px;
  text-align: center;
  z-index: 10;
  text-shadow: -2px 2px 2px #f0efea, 2px 2px 2px #f0efea, 2px -2px 2px #f0efea, 2px 2px 2px #f0efea;

  @media (max-width: 420px) {
    max-width: 240px;
  }
`

const SecondSectionText = styled.div`
  margin: auto;
  max-width: 670px;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justidy-content: center;

  @media (max-width: 420px) {
    max-width: 306px;
  }

  .text-1 {
    @media (max-width: 420px) {
      max-width: 176px;
    }
  }
`

const Intro = () => {
  return (
    <>
      <SectionDiv>
        <Lottie className="lottie" animationData={DesktopBubble} autoplay={true} loop={true}></Lottie>
        <FirstSection className="wv-h6 wv-font-kondolar">
          เราอาจเห็นหลายประเด็นในสังคมที่มีคนมีความเห็นต่างกัน และบางประเด็นไม่ได้จบลงด้วยการเคารพความคิดเห็นต่อกัน
          ในวิถีประชาธิปไตยแบบที่เรารับรู้มา
        </FirstSection>
        <div className="chip">
          <ContinueChip />
        </div>
      </SectionDiv>
      <SecondSectionDiv>
        <SecondSectionText>
          <p className="wv-h6 wv-font-kondolar text-1" style={{ color: 'white' }}>
            หลายคนถึงกับเคยตั้งคำถามว่า
          </p>
          <h3 className="wv-h3 wv-font-kondolar" style={{ color: '#FFEB78', display: 'flex', flexDirection: 'column' }}>
            <span>ตกลงสังคมเรา</span>
            <span>เป็นประชาธิปไตย</span>
            <span>จริงไหม?</span>
          </h3>
          <p className="wv-h6 wv-font-kondolar" style={{ color: 'white' }}>
            ความเห็นต่างเป็นหนึ่งใน "สิทธิเสรีภาพ" ซึ่งเป็น ส่วนหนึ่งของประชาธิปไตย ที่สามารถเรียนรู้ได้ตั้งแต่เด็ก
            เพื่อเติบโตไปสู่การสร้างสังคมที่เคารพความเห็นต่างร่วมกัน
          </p>
        </SecondSectionText>
      </SecondSectionDiv>
    </>
  )
}

export default Intro
