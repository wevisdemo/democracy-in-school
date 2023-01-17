import styled from 'styled-components'
import Image from 'next/image'
import WelcomeSelector from 'components/shared/welcomeSelector'
import PointingButton from 'components/shared/pointerButton'

const WelcomeComponent = styled.div`
  .cover {
    position: relative;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
  }

  .cover-message {
    position: relative;
    z-index: 10;
    max-width: 372px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  }

  .breakline {
    width: 164.17px;
    height: 0px;
    border-top: 1px solid #ffffff;
    margin: 10px 0;
  }
`

const Wrapper = styled.div`
  background-image: url(/bg-blue.svg);
  background-size: cover;
`

const IntroComponent = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img-left {
    width: 284px !important;
    height: 778px !important;
    position: absolute;
    top: 0px !important;
    left: 0px !important;
  }

  .img-right {
    width: 284px !important;
    height: 778px !important;
    position: absolute;
    top: 0px !important;
    right: 0px !important;
  }

  .pointing-btn {
    margin-top: 28px;
  }
`

const IntroTextWrap = styled.div`
  position: relative;
  margin-top: 80px;
  max-width: 510px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .sect-1 {
    margin-bottom: 20px;
  }

  .video-button {
    border: 2px solid #000000;
    border-radius: 2px;
    width: fit-content;
    padding: 4px 16px;
    margin-top: 36px;
  }
`

const ImageCustom = styled(Image)`
  position: relative !important;
`

const Footer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 184px;

  .question-mark {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .text-wrap {
    max-width: 488px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;

    h6 {
      margin-bottom: 20px;
    }
  }
`

const WelcomeStory = () => {
  const onClickButton = () => {}

  return (
    <Wrapper>
      <WelcomeSelector type="story" />
      <IntroComponent>
        <img src="/part_2/illus_01.01.png" alt="illus_01" className="img-left" />
        <img src="/part_2/illus_01.02.png" alt="illus_02" className="img-right" />
        <IntroTextWrap>
          <h6 className="wv-h6 wv-font-kondolar wv-font-semibold color-yellow sect-1">สิทธิมนุษยชน (Human right)</h6>
          <p className="wv-b2 font-plexsans">
            ทุกคนเกิดมามีชีวิต ศักดิ์ศรี มีความอิสระ อย่างเท่าเทียมกัน แสดงความคิดได้และไม่เป็นทาสใคร
          </p>
          <p className="wv-h7 font-plexsans-bold">"ซึ่งทุกคนมีสิทธินี้โดยไม่ถูกเลือกปฏิบัติ"</p>
          <div className="pointing-btn">
            <PointingButton onClick={onClickButton} text="วีดีโอที่เกี่ยวข้องกับสิทธิมนุษยชน" fill="#22C0E8" />
          </div>
        </IntroTextWrap>
        <Footer>
          <ImageCustom src="/part_1/ellips.svg" alt="ellips" fill></ImageCustom>
          <Image
            src="/part_2/question-mark.svg"
            alt="question-mark"
            width={180}
            height={272}
            className="question-mark"
          />
          <div className="text-wrap">
            <h6 className="wv-h6 wv-font-kondolar wv-font-semibold color-blue">ทำไมสิทธิมนุษยชนถึงสำคัญ?</h6>
            <p className="wv-b2 font-plexsans">
              สิทธิมนุษยชน เป็นสิทธิทางธรรมชาติ ติดตัวมนุษย์ทุกคนมาแต่เกิด และได้รับการคุ้มครอง โดยกฎหมายตามหลักสากล
            </p>
          </div>
        </Footer>
        {/* <div style={{ width: '100%', height: '100%', position: 'relative' }}> */}
        {/* <ImageCustom src="/part_1/ellips.svg" alt="ellips" fill></ImageCustom> */}
        {/* </div> */}
      </IntroComponent>
    </Wrapper>
  )
}

export default WelcomeStory
