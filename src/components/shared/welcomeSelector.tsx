import styled from 'styled-components'
import Image from 'next/image'
import ContinueChip from 'components/shared/continueChip'
import { prefix } from 'utils'

interface PropsType {
  type: 'quiz' | 'story'
  expand: boolean
  action: 'expand' | 'shrink' | 'center'
}

const WelcomeSelectorContainer = styled.div<{ action: 'expand' | 'shrink' | 'center' }>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${prefix}/background/bg_blue.01.png);
  background-size: cover;
  transition: all 2s;
  overflow-x: hidden;

  @media (max-width: 420px) {
    min-height: 0px;
    height: ${(props) => (props.action == 'expand' ? '100vh' : props.action == 'center' ? '50vh' : '0vh')};
  }

  .cover-message {
    position: relative;
    z-index: 10;
    width: 372px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));

    @media (max-width: 420px) {
      width: 180px;
    }
  }

  .breakline {
    width: 164.17px;
    height: 0px;
    border-top: 1px solid #ffffff;
    margin: 10px 0;
  }

  .chip {
    position: absolute;
    bottom: 100px;
  }

  .image-bg {
    position: absolute;
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

interface Typography {
  title: string
  description: string
  image_src: string
  image_alt: string
}

interface TypoGraphyMap {
  quiz: Typography
  story: Typography
}

const typographyDict: TypoGraphyMap = {
  quiz: {
    title: 'Quiz',
    description: 'ทดสอบเราเข้าใจและเคารพสิทธิเสรีภาพแบบไหน?',
    image_src: 'part_1/gif_quiz.gif',
    image_alt: 'gif_quiz'
  },
  story: {
    title: 'Know Your Rights',
    description: 'เกิดมาทั้งที เรามีสิทธิเสรีภาพ แค่ไหน?',
    image_src: 'part_1/gif_story.gif',
    image_alt: 'gif_story'
  }
}

const WelcomeSelector = ({ type, expand, action }: PropsType) => {
  const typo = typographyDict[type]
  return (
    <WelcomeSelectorContainer action={action}>
      <img src={typo.image_src} alt={typo.image_alt} className="image-bg" />
      <h4 className="wv-font-kondolar wv-h4 cover-message color-yellow">{typo.title}</h4>
      <div className="breakline cover-message" />
      <h6 className="wv-font-kondolar wv-h6 cover-message color-white">{typo.description}</h6>
      {expand && (
        <div className="chip">
          <ContinueChip light />
        </div>
      )}
    </WelcomeSelectorContainer>
  )
}

export default WelcomeSelector
