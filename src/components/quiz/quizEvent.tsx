import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { IQuizEvent, IQuizEventContent } from 'types/quiz'
import QuizEventContent from './quizEventContent'
import QuizQuestionTextArea from './quizQuestion'
import QuizQuestion from './quizQuestion'

interface PropsType {
  event: IQuizEvent
}

const QuizEventContainer = styled.div`
  background-image: url('/background/bg_black.01.png');
  background-repeat: repeat;
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

const QuestionContainer = styled.div`
  max-width: 652px;
  text-align: center;
  border-radius: 5px;

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

  @media (max-width: 768px) {
    textarea {
      padding: 8px;
      font-size: 13px;
    }

    button {
      padding: 0px 5px;
    }
  }
`

const QuizEvent = ({ event }: PropsType) => {
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
          <QuizEventContent content={content} index={index} />
        ))}
      </ContentWrapper>
      <QuestionContainer>
        <h3 className="wv-h3 color-yellow wv-font-kondolar">คำถาม?</h3>
        <p className="wv-b1 color-white wv-font-kondolar">{event.question}</p>
        <QuizQuestionTextArea text={text} onChangeText={onChangeText}></QuizQuestionTextArea>
        <button className="wv-b3 font-plexsans-bold ">ส่งคำตอบ</button>
      </QuestionContainer>
    </QuizEventContainer>
  )
}

export default QuizEvent
