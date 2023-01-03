import styled from 'styled-components'
import { IQuizEvent, IQuizEventContent } from 'types/quiz'
import QuizEventContent from './quizEventContent'

interface PropsType {
  event: IQuizEvent
}

const QuizEvent = ({ event }: PropsType) => {
  const QuizEventContainer = styled.div`
    background-image: url('/bg-blue.svg');
    background-size: cover;
  `

  const Header = styled.div`
    margin-top: 56px;
    max-width: 676px;
    text-align: center;

    .title {
      margin-bottom: 10px;
    }
  `

  const ContentWrapper = styled.div`
    width: 80%;
    max-width: 976px;
    margin: 88px auto;
  `

  return (
    <QuizEventContainer className="flex-center">
      <Header>
        <p className="wv-h7 font-plexsans-bold color-yellow title">{event.title}</p>
        <p className="wv-b2 font-plexsans color-white">{event.sub_title}</p>
      </Header>
      <ContentWrapper>
        {event.contents.map((content, index) => (
          <QuizEventContent content={content} index={index} />
        ))}
      </ContentWrapper>
    </QuizEventContainer>
  )
}

export default QuizEvent
