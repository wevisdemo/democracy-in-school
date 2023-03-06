import { useRouter } from 'next/router'
import styled from 'styled-components'
import { IQuiz } from 'types/quiz'

const QuizSelectorCardContainer = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 184px;

  @media (max-width: 420px) {
    width: 76px;
  }

  ${(props) =>
    !props.selected &&
    `:hover {
    cursor: pointer;

    @media (min-width: 421px) {
      .topic-image-container {
        background-color: #ffeb78;

        .topic-image {
          max-width: 240px;
          max-height: 240px;
          width: 240px;
          height: 240px;
          left: -26px;
          top: -26px;
        }
      }

    }
  }`}

  .description {
    margin-top: 4px;
    max-width: 224px;
    text-align: center;
    font-size: 28px;

    @media (max-width: 420px) {
      font-size: 11px;
    }
  }

  .topic-image-container {
    position: relative;
    background-color: white;
    max-width: 184px;
    max-height: 184px;
    overflow: hidden;
    background-color: white;
    transition: background 1s;

    @media (max-width: 420px) {
      width: 76px;
      height: 76px;
    }

    .topic-image {
      position: relative;
      width: 184px;
      height: 184px;
      opacity: ${(prop) => (prop.selected ? '0.3' : '1')};
      transition: all 1s;
      left: 0px;
      top: 0px;

      @media (max-width: 420px) {
        width: 76px;
        height: 76px;
      }
    }
  }
`

interface PropsType {
  quiz: IQuiz
  selected: boolean
}

const QuizSelectorCard = ({ quiz, selected }: PropsType) => {
  const router = useRouter()

  const handleOnClick = () => {
    if (!selected) {
      router.push(`/quiz/${quiz.id}`)
    }
  }

  return (
    <QuizSelectorCardContainer onClick={handleOnClick} selected={selected}>
      <div className="topic-image-container">
        <img className="topic-image" src={quiz.thumbnail_src} alt={`topic-${quiz.id}`} />
      </div>
      <p className="font-plexsans-bold description">{quiz.title}</p>
    </QuizSelectorCardContainer>
  )
}

export default QuizSelectorCard
