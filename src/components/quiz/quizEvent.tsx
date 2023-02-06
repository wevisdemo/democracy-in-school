import ClassroomGuide from 'components/shared/classroomGuide'
import ContinueChip from 'components/shared/continueChip'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { IQuizEvent, IQuizEventContent } from 'types/quiz'
import { prefix } from 'utils'
import QuizEventContent from './quizEventContent'
import QuizEventQuestion from './quizEventQuestion'
import QuizQuestionTextArea from './quizQuestion'
import QuizQuestion from './quizQuestion'

interface PropsType {
  event: IQuizEvent
  sendAnswer: (ans: string) => void
  onClickClassroomGuide: () => void
}

const QuizEventContainer = styled.div`
  background-image: url('${prefix}/background/bg_black.01.png');
  background-repeat: repeat;
  padding-bottom: 40px;
  padding: 40px 10px;
`

const Header = styled.div`
  margin-top: 16px;
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

  .content-wrapper:not(:first-child) {
    margin-top: 30px;
  }

  @media (max-width: 1024px) {
    margin: 40px auto;
  }
`

const QuestionContainer = styled.div`
  position: relative;
  max-width: 652px;
  text-align: center;
  border-radius: 5px;

  .question-highlight {
    position: absolute;
    width: 100%;
    height: 554px;
    background: radial-gradient(50% 50% at 50% 50%, #ffffff 82.29%, rgba(255, 255, 255, 0) 100%);
    mix-blend-mode: overlay;
    opacity: 0.4;
  }

  textarea {
    padding: 12px;
    font-size: 18px;
    border-radius: 4px;
    resize: none;
  }

  button {
    margin-top: 20px;
    padding: 0px 10px;
  }

  @media (max-width: 1024px) {
    textarea {
      padding: 8px;
      font-size: 13px;
    }

    button {
      padding: 0px 5px;
    }
  }
`

const QuizEvent = ({ event, sendAnswer, onClickClassroomGuide }: PropsType) => {
  const [text, setText] = useState<string>('')

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  return (
    <QuizEventContainer className="flex-center">
      <Header>
        <p className="wv-h7 font-plexsans-bold color-yellow title">{event.title}</p>
        <p className="wv-b2 font-plexsans color-white">{event.sub_title}</p>
      </Header>
      <ContentWrapper>
        {event.contents.map((content, index) => (
          <div className="content-wrapper">
            <QuizEventContent content={content} index={index} key={`quiz-event-content-${index}`} />
          </div>
        ))}
      </ContentWrapper>
      <QuizEventQuestion
        onClickClassroomGuide={onClickClassroomGuide}
        question={event.question}
        sendAnswer={sendAnswer}
      />
      <ContinueChip light />
    </QuizEventContainer>
  )
}

export default QuizEvent
