import styled from 'styled-components'
import { IChoiceQuiz, IQuiz } from 'types/quiz'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import QuizChoiceCard from './quizChoiceCard'
import ClassroomGuide from 'components/shared/classroomGuide'
import { useRouter } from 'next/router'
import { prefix } from 'utils'

const Container = styled.div`
  padding: 10px;
  position: relative;

  .classroom-guide-container {
    position: absolute;
    top: -120px;
    right: 0px;
  }
`

const ContinueChip = styled.div`
  position: absolute;
  bottom: 0px;
  background: #000000;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  padding: 12px 32px;

  .text {
    color: #ffffff;
    font-size: 21px;
    margin-left: 10px;
    @media (max-width: 1024px) {
      font-size: 13px;
    }
  }

  :hover {
    cursor: pointer;
  }
`

const TextWrap = styled.div`
  text-align: center;
  h6 {
    max-width: 880px;
    margin-bottom: 10px;

    @media (max-width: 1024px) {
      font-size: 17px;
      margin-bottom: 0px;
    }
  }
`

const ChoiceWrapperContainer = styled.div`
  position: relative;
  margin: 76px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    margin: 15px 0px;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
`

interface PropsType {
  quiz: IQuiz
  onClickClassroomGuide: () => void
  openTextFieldModal: () => void
}

const QuizGame = ({ quiz, onClickClassroomGuide, openTextFieldModal }: PropsType) => {
  const router = useRouter()
  const [revealIndex, setRevealIndex] = useState<number>(-1)

  const onClickContinue = () => {
    router.push(`/quiz/${quiz.id}/event`)
  }

  const onClickChoice = (index: number) => {
    setRevealIndex(index)
    if (index === 5) {
      openTextFieldModal()
    }
  }

  return (
    <Container className="full-page">
      <TextWrap className="flex-center">
        <h6 className="wv-font-kondolar wv-h6">
          {revealIndex === -1 ? quiz.question : 'ผลลัพธ์คุณและคนอื่นๆ คิดอย่างไร?'}
        </h6>
        <p className="wv-b5 font-plexsans">
          {revealIndex === -1 ? '(กดเพื่อเลือกคำตอบ)' : '(หมายเหตุ : 100% คิดจากผู้ที่เข้ามาตอบทั้งหมด)'}
        </p>
      </TextWrap>
      <ChoiceWrapperContainer>
        <div className="classroom-guide-container">
          <ClassroomGuide onClick={onClickClassroomGuide} />
        </div>
        {quiz.choices.map((item, index) => (
          <QuizChoiceCard
            choice={item}
            key={`choice-${index}`}
            revealIndex={revealIndex}
            index={index}
            onClick={() => {
              onClickChoice(index)
            }}
          />
        ))}
      </ChoiceWrapperContainer>
      {revealIndex !== -1 && (
        <ContinueChip onClick={onClickContinue}>
          <img className="arrow" src={`${prefix}/arrow-white.svg`} alt="arrow" />
          <p className="text font-plexsans">
            บางเหตุการณ์ที่เกี่ยวกับ <span className="color-yellow">“{quiz.title}”</span>
          </p>
        </ContinueChip>
      )}
    </Container>
  )
}

export default QuizGame
