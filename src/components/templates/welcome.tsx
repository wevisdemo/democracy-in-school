import styled from 'styled-components'
import WvSharer from '@wevisdemo/ui/react/sharer'
import Lottie from 'lottie-react'
import DesktopCover from 'assets/lotties/desktop_cover.json'
import MobileCover from 'assets/lotties/mobile_cover.json'
import WvCookieConsent from '@wevisdemo/ui/react/cookie-consent'
import ContinueChip from 'components/shared/continueChip'
import { useEffect, useState } from 'react'

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

  .lottie {
    position: relative;
    top: -50px;
    width: 100%;
    height: 100%;
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
    ;(function (c: any, l: any, a: any, r: any, i: any) {
      c[a] =
        c[a] ||
        function () {
          ;(c[a].q = c[a].q || []).push(arguments)
        }
      let t = l.createElement(r)
      t.async = 1
      t.src = 'https://www.clarity.ms/tag/' + i
      let y = l.getElementsByTagName(r)[0]
      y.parentNode.insertBefore(t, y)
    })(window, document, 'clarity', 'script', 'g28mkr4zqc')
  }
}

const Welcome = () => {
  const [innerWidth, setInnerWidth] = useState<number>(0)
  useEffect(() => {
    setInnerWidth(window.innerWidth)
  }, [])

  return (
    <CoverDiv>
      <ShareComponent>
        <WvSharer url={process.env.NEXT_PUBLIC_BASE_URL} />
      </ShareComponent>
      <Lottie
        className="lottie"
        animationData={innerWidth <= 1024 ? MobileCover : DesktopCover}
        autoplay={true}
        loop={true}
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
