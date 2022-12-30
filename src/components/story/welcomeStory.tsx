import styled from 'styled-components'
import Image from 'next/image'

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
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  return (
    <Wrapper>
      <WelcomeComponent>
        <div className="cover">
          <Image src="/part_1/gif_story.gif" alt="gif-story" fill></Image>
          <h4 className="wv-font-kondolar wv-h4 cover-message color-yellow">Know Your Rights</h4>
          <div className="breakline cover-message" />
          <h6 className="wv-font-kondolar wv-h6 cover-message color-white">เกิดมาทั้งที เรามีสิทธิเสรีภาพ แค่ไหน?</h6>
        </div>
      </WelcomeComponent>
      <IntroComponent>
        <IntroTextWrap>
          <h6 className="wv-h6 wv-font-kondolar wv-font-semibold color-yellow sect-1">สิทธิมนุษยชน (Human right)</h6>
          <p className="wv-b2 font-plexsans">
            ทุกคนเกิดมามีชีวิต ศักดิ์ศรี มีความอิสระ อย่างเท่าเทียมกัน แสดงความคิดได้และไม่เป็นทาสใคร
          </p>
          <p className="wv-h7 font-plexsans-bold">"ซึ่งทุกคนมีสิทธินี้โดยไม่ถูกเลือกปฏิบัติ"</p>
          <div className="video-button wv-b4 font-plexsans">
            <span>วีดีโอที่เกี่ยวข้องกับสิทธิมนุษยชน</span>
            <Image src="/pointing-hand.svg" alt="pointing-hand" width={20} height={28} style={{ marginTop: '8px' }} />
          </div>
        </IntroTextWrap>
        <Footer>
          <ImageCustom src="/part_1/ellips.svg" alt="ellips" fill></ImageCustom>
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