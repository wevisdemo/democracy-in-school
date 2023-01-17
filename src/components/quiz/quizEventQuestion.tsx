import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import QuizQuestionTextArea from './quizQuestion'

const QuizEventQuestionContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 1124px;
  width: 100%;
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

  .text-wrapper {
    margin: 60px auto;
    position: relative;
    max-width: 652px;

    textarea {
      padding: 12px;
      font-size: 18px;
      border-radius: 4px;
      resize: none;
      z-index: 20;
    }

    button {
      margin-top: 20px;
      padding: 0px 10px;
      cursor: pointer;
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
  }
`

interface PropsType {
  question: string
}

const QuizEventQuestion = ({ question }: PropsType) => {
  const [text, setText] = useState<string>('')
  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }
  return (
    <QuizEventQuestionContainer>
      <div className="question-highlight"></div>
      <div className="text-wrapper">
        <h3 className="wv-h3 color-yellow wv-font-kondolar">คำถาม?</h3>
        <p className="wv-b1 color-white wv-font-kondolar">{question}</p>
        <QuizQuestionTextArea text={text} onChangeText={onChangeText}></QuizQuestionTextArea>
        <button className="wv-b3 font-plexsans-bold ">ส่งคำตอบ</button>
      </div>
    </QuizEventQuestionContainer>
  )
}

export default QuizEventQuestion
