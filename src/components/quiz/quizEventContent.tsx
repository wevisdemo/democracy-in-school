import styled from 'styled-components'
import { IQuizEvent, IQuizEventContent } from 'types/quiz'
import Image from 'next/image'

interface PropsType {
  content: IQuizEventContent
  index: number
}

const ContentContainer = styled.div<{ index: number }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .text {
    max-width: 352px;
    @media (max-width: 1024px) {
      order: 2;
      max-width: unset;
      margin-top: 16px;
    }
  }

  .curve-arrow {
    width: 30%;
    max-width: 212px;
    position: absolute;
    // left: ${(props) => (props.index % 2 == 0 ? '500px' : '200px')};
    left: ${(props) => (props.index % 2 == 0 ? '55%' : 'unset')};
    right: ${(props) => (props.index % 2 == 0 ? 'unset' : '55%')};
    top: 30%;
    transform: ${(props) =>
      props.index % 2 == 0 ? 'rotate(5deg) translate(-50%, -50%)' : 'scaleX(-1) rotate(5deg) translate(-50%, -50%)'};

    @media (max-width: 1024px) {
      min-width: 116px;
      left: ${(props) => (props.index % 2 == 0 ? '30%' : 'unset')};
      right: ${(props) => (props.index % 2 == 0 ? 'unset' : '30%')};
      transform: ${(props) =>
        props.index % 2 == 0
          ? 'scaleX(-1) rotate(330deg) translate(-50%, -50%)'
          : ' rotate(330deg) translate(-50%, -50%)'};
    }
  }

  .img-wrapper {
    width: 90%;
    display: flex;
    order: ${(props) => (props.index % 2 == 0 ? 1 : 2)};
    justify-content: ${(props) => (props.index % 2 == 0 ? 'flex-start' : 'flex-end')};

    @media (max-width: 1024px) {
      order: 1;
    }

    .content-img {
      width: 100%;
      max-width: 508px;
      max-height: 508px;
      // order: ${(props) => (props.index % 2 == 0 ? 1 : 2)};

      @media (max-width: 1024px) {
        width: 50%;
        min-width: 152px;
        min-height: 152px;
        order: 1;
      }
    }
  }
`

const QuizEventContent = ({ content, index }: PropsType) => {
  return (
    <ContentContainer index={index}>
      <div className="img-wrapper">
        <img className="content-img" src={content.image_url} alt={content.image_url} />
      </div>
      <img src="/curve-arrow.svg" alt="curve-arrow" className="curve-arrow" />
      <p className="wv-b2 font-plexsans color-yellow text" style={{ order: index % 2 == 0 ? 2 : 1 }}>
        {content.text}
      </p>
    </ContentContainer>
  )
}

export default QuizEventContent
