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

  .description {
    margin-top: 4px;
    max-width: 224px;
    text-align: center;
    font-size: 28px;

    @media (max-width: 1024px) {
      font-size: 11px;
    }
  }

  .topic-image {
    background-color: white;
    width: 184px;
    height: 184px;
    opacity: ${(prop) => (prop.selected ? '0.3' : '1')};

    @media (max-width: 1024px) {
      width: 76px;
      height: 76px;
    }
  }
`

const QuizSelectorCard = ({ quiz }: { quiz: IQuiz }) => {
  return (
    <QuizSelectorCardContainer selected={quiz.is_selected}>
      <img className="topic-image" src={quiz.thumbnail_src} alt={`topic-${quiz.id}`} width={184} height={184} />
      <p className="font-plexsans-bold description">{quiz.title}</p>
    </QuizSelectorCardContainer>
  )
}

export default QuizSelectorCard
