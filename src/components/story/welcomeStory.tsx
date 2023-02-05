import styled from 'styled-components'
import Image from 'next/image'
import WelcomeSelector from 'components/shared/welcomeSelector'
import PointingButton from 'components/shared/pointerButton'
import { prefix } from 'utils'

const WelcomeStoryContainer = styled.div`
  background-image: url(${prefix}/background/bg_blue.01.png);
  background-repeat: repeat;
`

const IntroContainer = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;

  @media (max-width: 1024px) {
    margin-bottom: 56px;
  }

  .img-left {
    width: 284px;
    position: absolute;
    top: 0px;
    left: -5px;
    z-index: 10;

    @media (max-width: 1024px) {
      width: 100px;
      top: 300px;
    }
  }

  .img-right {
    width: 284px;
    position: absolute;
    top: 0px;
    right: -5px;
    z-index: 10;

    @media (max-width: 1024px) {
      width: 100px;
      top: 300px;
    }
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
  z-index: 20;

  @media (max-width: 420px) {
    margin-top: 40px;
    max-width: 240px;
  }

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

  .text-3 {
    @media (max-width: 420px) {
      margin-top: 10px;
    }
  }
`

const Header = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Footer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 184px;
  background: url(${prefix}/background/bg_white.01.png);

  @media (max-width: 420px) {
    margin-top: 60px;
  }

  .footer-content {
    position: absolute;
    background: url(${prefix}/background/bg_white.01.png);
    z-index: 20;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 420px) {
      position: relative;
      margin: auto;
      position: relative;
      transform: none;
      left: unset;
      top: unset;
    }

    .question-mark {
      width: 180px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;

      @media (max-width: 420px) {
        top: 20px;
        width: 84px;
      }
    }

    .text-wrap {
      max-width: 488px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;

      @media (max-width: 420px) {
        margin: auto;
        max-width: 260px;
        position: relative;
        transform: none;
        left: unset;
        top: unset;
      }

      h6 {
        margin-bottom: 20px;
      }
    }
  }

  .half-circle {
    position: relative;
    width: 100%;
    padding-top: 35%;
    overflow: hidden;
    background: url(${prefix}/background/bg_blue.01.png);
    .circle {
      position: absolute;
      background: url(${prefix}/background/bg_white.01.png);
      width: 105%;
      padding-top: 100%;
      border-radius: 100%;
      top: 0;
      left: -2.5%;
      z-index: 10;
    }
  }
`

interface PropsType {
  expand: boolean
}

const WelcomeStory = ({ expand }: PropsType) => {
  const onClickButton = () => {}

  return (
    <WelcomeStoryContainer>
      <WelcomeSelector type="story" />
      {expand && (
        <IntroContainer>
          <Header>
            <img src={`${prefix}/part_2/illus_01.01.png`} alt="illus_01" className="img-left" />
            <img src={`${prefix}/part_2/illus_01.02.png`} alt="illus_02" className="img-right" />
            <IntroTextWrap>
              <h6 className="wv-h6 wv-font-kondolar wv-font-semibold color-yellow sect-1">
                สิทธิมนุษยชน (Human right)
              </h6>
              <p className="wv-b2 font-plexsans">
                ทุกคนเกิดมามีชีวิต ศักดิ์ศรี มีความอิสระ อย่างเท่าเทียมกัน แสดงความคิดได้และไม่เป็นทาสใคร
              </p>
              <p className="wv-h7 font-plexsans-bold text-3">"ซึ่งทุกคนมีสิทธินี้โดยไม่ถูกเลือกปฏิบัติ"</p>
              <div className="pointing-btn">
                <PointingButton onClick={onClickButton} text="วีดีโอที่เกี่ยวข้องกับสิทธิมนุษยชน" fill="#22C0E8" />
              </div>
            </IntroTextWrap>
          </Header>
          <Footer>
            <div className="half-circle">
              <div className="circle"></div>
            </div>
            <div className="footer-content">
              <img src={`${prefix}/part_2/question-mark.svg`} alt="question-mark" className="question-mark" />
              <div className="text-wrap">
                <h6 className="wv-h6 wv-font-kondolar wv-font-semibold color-blue">ทำไมสิทธิมนุษยชนถึงสำคัญ?</h6>
                <p className="wv-b2 font-plexsans">
                  สิทธิมนุษยชน เป็นสิทธิทางธรรมชาติ ติดตัวมนุษย์ทุกคนมาแต่เกิด และได้รับการคุ้มครอง โดยกฎหมายตามหลักสากล
                </p>
              </div>
            </div>
          </Footer>
        </IntroContainer>
      )}
    </WelcomeStoryContainer>
  )
}

export default WelcomeStory
