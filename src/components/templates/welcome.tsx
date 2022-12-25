import Image from 'next/image'
import styled from 'styled-components'
import WvSharer from '@wevisdemo/ui/react/sharer'
import Lottie from 'lottie-react'
import DesktopCover from 'assets/lotties/desktop_cover.json'

const CoverDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

const CoverImage = styled(Image)`
  padding: 36px 0px;
`

const ShareComponent = styled.div`
  position: absolute;
  right: 32px;
  top: 20px;
  z-index: 20;
`

const LottieComponent = styled.div`
  width: 100%;
  height" 100%;
`

const Welcome = () => {
  return (
    <CoverDiv>
      <ShareComponent>
        <WvSharer url="https://wevis.info" />
      </ShareComponent>
      {/* <LottieComponent> */}
      <Lottie animationData={DesktopCover} loop={true} style={{ width: '100%', height: '100%' }}></Lottie>
      {/* </LottieComponent> */}
      {/* <CoverImage src="/cover/cover_desktop.png" alt="cover_desktop" layout="fill" objectFit="contain"></CoverImage> */}
    </CoverDiv>
  )
}

export default Welcome
