import styled from 'styled-components'
import { IQuizEvent, IQuizEventContent } from 'types/quiz'
import Image from 'next/image'

interface PropsType {
  content: IQuizEventContent
  index: number
}

const QuizEventContent = ({ content, index }: PropsType) => {
  const ContentContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%%;

    .text {
      max-width: 352px;
    }

    .arrow {
      position: absolute;
      left: 55%;
      top: 30%;
      transform: rotate(5deg) translate(-50%, -50%);
    }

    .arrow-right {
      position: absolute;
      left: 22%;
      top: 30%;
      transform: scaleX(-1) rotate(5deg) translate(-50%, -50%);
    }
  `

  return (
    <ContentContainer>
      <Image
        src={content.image_url}
        alt={content.image_url}
        width={508}
        height={508}
        style={{ order: index % 2 == 0 ? 1 : 2 }}
      />
      <img src="/curve-arrow.svg" alt="curve-arrow" className={`${index % 2 == 0 ? 'arrow' : 'arrow-right'}`} />
      <p className="wv-b2 font-plexsans color-yellow text" style={{ order: index % 2 == 0 ? 2 : 1 }}>
        {content.text}
      </p>
    </ContentContainer>
  )
}

export default QuizEventContent
