import ClassroomGuide from 'components/shared/classroomGuide'
import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import QuizQuestionTextArea from './quizQuestion'

const QuizEventQuestionContainer = styled.div<{ canSubmit: boolean }>`
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

  .classroom-guide-container {
    position: absolute;
    right: 0px;
    top: -50px;
  }

  .text-wrapper {
    margin: 60px auto;
    position: relative;
    max-width: 900px;

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
      cursor: ${(props) => (props.canSubmit ? 'pointer' : 'unset')};
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
  sendAnswer: (ans: string) => void
  onClickClassroomGuide: () => void
}

const QuizEventQuestion = ({ question, sendAnswer, onClickClassroomGuide }: PropsType) => {
  const [canSubmit, setCanSubmit] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 0) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
    setText(e.target.value)
  }
  const handleSubmitAnswer = () => {
    sendAnswer(text)
    setText('')
    setCanSubmit(false)
  }
  return (
    <QuizEventQuestionContainer canSubmit={canSubmit} onClick={(e) => e.stopPropagation()}>
      <div className="question-highlight"></div>
      <div className="text-wrapper">
        <h3 className="wv-h3 color-yellow wv-font-kondolar">คำถาม?</h3>
        <p className="wv-b1 color-white wv-font-kondolar">{question}</p>
        <QuizQuestionTextArea text={text} onChangeText={onChangeText}></QuizQuestionTextArea>
        <button disabled={!canSubmit} className="wv-b3 font-plexsans-bold" onClick={handleSubmitAnswer}>
          ส่งคำตอบ
        </button>
        <div className="classroom-guide-container">
          <ClassroomGuide light onClick={onClickClassroomGuide} />
        </div>
      </div>
    </QuizEventQuestionContainer>
  )
}

export default QuizEventQuestion
