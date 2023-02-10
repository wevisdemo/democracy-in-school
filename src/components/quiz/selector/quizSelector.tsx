import styled from 'styled-components'
import Image from 'next/image'
import QuizSelectorCard from './quizSelectorCard'
import { IQuiz } from 'types/quiz'
import { prefix } from 'utils'
import { useContext, useEffect } from 'react'
import { AppContext } from 'store'

const QuizSelectorContainer = styled.div`
  background-image: url(${prefix}/background/bg_blue.02.png);
  background-size: cover;
  background-position: center;
  padding: 52px 0;

  @media (max-width: 1024px) {
    padding: 28px;
  }
`

const TextWrap = styled.div`
  max-width: 524px;
  text-align: center;

  h6 {
    margin-bottom: 8px;
  }

  p {
    max-width: 416px;
    margin: auto;
    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }
`

const QuizWrapperContainer = styled.div`
  position: relative;
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  align-items: flex-start;
  justify-content: center;
  width: min-content;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .reset-answer {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background: #22c0e8;
    border: 2px solid #000000;
    border-radius: 5px;
    padding: 5px 10px;
    top: -80px;
    right: 0px;

    :hover {
      cursor: pointer;
    }

    @media (max-width: 420px) {
      max-width: 66px;
      top: unset;
      right: unset;
      left: 0px;
      bottom: 20px;
      font-size: 10px;
    }

    .icon-retry {
      width: 15px;
      margin-right: 5px;
      @media (max-width: 420px) {
        width: 11px;
      }
    }
  }
`

const QuizWrapper = ({ quizList }: { quizList: IQuiz[] }) => {
  const appContext = useContext(AppContext)
  const isSelected = (quiz: IQuiz): boolean => {
    return appContext.answerList.find((d) => d.question_id == quiz.id) ? true : false
  }
  const handleResetQuestion = () => {
    appContext.resetAnswer()
  }
  return (
    <QuizWrapperContainer>
      <div className="reset-answer" onClick={handleResetQuestion}>
        <img className="icon-retry" src={`${prefix}/icon_retry.svg`} alt="icon-retry" />
        <p className="font-plexsans-bold">Reset คำถาม</p>
      </div>
      {quizList.map((item, index) => {
        return <QuizSelectorCard selected={isSelected(item)} quiz={item} key={`quiz-${item.id}`} />
      })}
    </QuizWrapperContainer>
  )
}

interface PropsType {
  quizList: IQuiz[]
}

const QuizSelector = ({ quizList }: PropsType) => {
  const appContext = useContext(AppContext)

  useEffect(() => {
    appContext.fetchAnswer()
  }, [])

  return (
    <QuizSelectorContainer className="full-page">
      <TextWrap>
        <h6 className="wv-font-kondolar wv-h6">เลือกหัวข้อที่สนใจเพื่อทดสอบความเข้าใจ</h6>
        <p className="font-plexsans wv-b5">
          (หมายเหตุ: แบบทดสอบนี้มีจุดประสงค์เพื่อให้เราได้ทบทวนตัวเอง และแลกเปลี่ยนกับคนรอบตัว เพื่อสร้างความเข้าใจ)
        </p>
      </TextWrap>
      <QuizWrapper quizList={quizList} />
    </QuizSelectorContainer>
  )
}

export default QuizSelector
