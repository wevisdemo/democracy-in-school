import Image from 'next/image'
import styled from 'styled-components'
import WvSharer from '@wevisdemo/ui/react/sharer'
import Lottie from 'lottie-react'
import DesktopCover from 'assets/lotties/desktop_cover.json'
import WvCookieConsent from '@wevisdemo/ui/react/cookie-consent'
import ContinueChip from 'components/shared/continueChip'

const CoverDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .text {
    color: #b182b8;
  }

  .text-wrapper {
    position: absolute;
    text-align: center;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, 0);

    .text-2 {
      margin-top: 8px;
    }
  }
`

const ShareComponent = styled.div`
  position: absolute;
  right: 32px;
  top: 20px;
  z-index: 20;
`

const cookieOptions = ['Functionality', 'Performance', 'Advertising']

function onCookieAccept(option: any) {
  if (option['Performance']) {
    // Initialize or enable analytics
  }
}

;<WvCookieConsent policyUrl="https://punchup.world" cookieOptions={cookieOptions} onAccept={onCookieAccept} />
const Welcome = () => {
  return (
    <CoverDiv>
      <ShareComponent>
        <WvSharer url="https://wevis.info" />
      </ShareComponent>
      <Lottie
        className="lottie"
        animationData={DesktopCover}
        autoplay={true}
        loop={true}
        style={{ width: '100%', height: '100%' }}
      />
      <div className="text-wrapper">
        <h5 className="text wv-h5 wv-font-kondolar text-stroke-white">แตกต่างได้ไหม?</h5>
        <h5 className="text wv-h5 wv-font-kondolar text-stroke-white">เพราะประชาธิปไตยคือการเคารพกัน</h5>
        <p className="wv-b4 font-plexsans text-2">ทดสอบความเป็นประชาธิปไตยเราเคารพสิทธิเสรีภาพแบบไหน</p>
        <ContinueChip />
      </div>
      <WvCookieConsent policyUrl="https://punchup.world" cookieOptions={cookieOptions} onAccept={onCookieAccept} />
    </CoverDiv>
  )
}

export default Welcome
