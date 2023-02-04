import styled from 'styled-components'
import { IQuiz } from 'types/quiz'

const QuizSelectorCardContainer = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 184px;

  @media (max-width: 1024px) {
    width: 76px;
  }

  :hover {
    cursor: pointer;

    .topic-image-container {
      background-color: #ffeb78;
    }

    .topic-image {
      width: 240px;
      height: 240px;
      left: -26px;
      top: -26px;
    }
  }

  .description {
    margin-top: 4px;
    max-width: 224px;
    text-align: center;
    font-size: 28px;

    @media (max-width: 1024px) {
      font-size: 11px;
    }
  }

  .topic-image-container {
    position: relative;
    background-color: white;
    width: 184px;
    height: 184px;
    overflow: hidden;
    background-color: white;
    transition: background 1s;

    @media (max-width: 1024px) {
      width: 76px;
      height: 76px;
    }
  }

  .topic-image {
    position: absolute;
    width: 184px;
    height: 184px;
    opacity: ${(prop) => (prop.selected ? '0.3' : '1')};
    transition: width 1s, height 1s, left 1s, top 1s;
    left: 0px;
    top: 0px;

    @media (max-width: 1024px) {
      width: 76px;
      height: 76px;
    }
  }
`

const QuizSelectorCard = ({ quiz }: { quiz: IQuiz }) => {
  return (
    <QuizSelectorCardContainer selected={quiz.is_selected}>
      <div className="topic-image-container">
        <img className="topic-image" src={quiz.thumbnail_src} alt={`topic-${quiz.id}`} width={184} height={184} />
      </div>
      <p className="font-plexsans-bold description">{quiz.title}</p>
    </QuizSelectorCardContainer>
  )
}

export default QuizSelectorCard
