import styled from 'styled-components'
import Image from 'next/image'

interface PropsType {
  type: 'quiz' | 'story'
}

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
    image_src: '/part_1/gif_quiz.gif',
    image_alt: 'gif_quiz'
  },
  story: {
    title: 'Know Your Rights',
    description: 'เกิดมาทั้งที เรามีสิทธิเสรีภาพ แค่ไหน?',
    image_src: '/part_1/gif_story.gif',
    image_alt: 'gif_story'
  }
}

const WelcomeSelector = ({ type }: PropsType) => {
  const typo = typographyDict[type]
  return (
    <WelcomeComponent>
      <div className="cover">
        <Image src={typo.image_src} alt={typo.image_alt} fill></Image>
        <h4 className="wv-font-kondolar wv-h4 cover-message color-yellow">{typo.title}</h4>
        <div className="breakline cover-message" />
        <h6 className="wv-font-kondolar wv-h6 cover-message color-white">{typo.description}</h6>
      </div>
    </WelcomeComponent>
  )
}

export default WelcomeSelector
