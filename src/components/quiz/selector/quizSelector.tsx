import styled from 'styled-components'
import Image from 'next/image'
import QuizSelectorCard from './quizSelectorCard'
import { IQuiz } from 'types/quiz'
import { prefix } from 'utils'

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
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  align-items: flex-start;
  justify-content: center;
  width: min-content;

  @media (max-width: 1024px) {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`

const QuizWrapper = ({ quizList }: { quizList: IQuiz[] }) => {
  return (
    <QuizWrapperContainer>
      {quizList.map((item, index) => {
        return <QuizSelectorCard quiz={item} key={`quiz-${item.id}`} />
      })}
    </QuizWrapperContainer>
  )
}

interface PropsType {
  quizList: IQuiz[]
}

const QuizSelector = ({ quizList }: PropsType) => {
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
