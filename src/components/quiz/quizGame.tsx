import styled from 'styled-components'
import { IAnswer, IChoiceQuiz, IQuiz } from 'types/quiz'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import QuizChoiceCard from './quizChoiceCard'
import ClassroomGuide from 'components/shared/classroomGuide'
import { useRouter } from 'next/router'
import { prefix } from 'utils'
import { IAnswerDB } from 'types/response'

const Container = styled.div`
  padding: 10px;
  position: relative;
  overflow: hidden;

  .classroom-guide-container {
    position: absolute;
    top: -120px;
    right: 0px;
    @media (max-width: 1024px) {
      right: -40px;
      top: -100px;
    }
    @media (max-width: 420px) {
      top: -30px;
    }
  }
`

const ContinueChip = styled.div<{ isReveal: boolean }>`
  position: absolute;
  bottom: ${(props) => (props.isReveal ? '0px' : '-70px')};
  background: #000000;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  padding: 12px 32px;
  transition: all 1s;
  visibility: ${(props) => (props.isReveal ? 'visible' : 'hidden')};

  .text {
    color: #ffffff;
    font-size: 21px;
    margin-left: 10px;
    text-align: center;
    @media (max-width: 420px) {
      font-size: 13px;
    }
  }

  .sub-text {
    display: inline-flex;
  }
`

const TextWrap = styled.div`
  text-align: center;
  .title {
    max-width: 880px;
    margin-bottom: 10px;

    @media (max-width: 420px) {
      font-size: 17px;
      margin-bottom: 0px;
    }
  }

  .pre-title {
    font-size: 24px;

    @media (max-width: 420px) {
      font-size: 15px;
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
    gap: 16px;
  }
`

interface PropsType {
  quiz: IQuiz
  onClickClassroomGuide: () => void
  openTextFieldModal: () => void
  selectAnswer: (ans: IAnswer) => void
  isReveal: boolean
  answer: IAnswer
  answerDBList: IAnswerDB[]
}

const QuizGame = ({
  quiz,
  onClickClassroomGuide,
  openTextFieldModal,
  selectAnswer,
  isReveal,
  answer,
  answerDBList
}: PropsType) => {
  const defaultChoice: IChoiceQuiz = {
    id: -1,
    label: '',
    image_src: '',
    text: '',
    background_color: ''
  }

  const [selectedChoice, setSelectedChoice] = useState<IChoiceQuiz>(defaultChoice)

  useEffect(() => {
    const ansChoice = quiz.choices.find((c) => c.id === answer.answer_id)
    if (!ansChoice) return
    setSelectedChoice(ansChoice)
  }, [answer])

  const onClickChoice = (choice: IChoiceQuiz) => {
    setSelectedChoice(choice)
    if (choice.id === 6) {
      openTextFieldModal()
    }
    const ans: IAnswer = {
      question_id: quiz.id,
      answer_id: choice.id,
      answer_text: choice.text
    }
    selectAnswer(ans)
  }

  const getPercent = (id: number) => {
    if (answerDBList.length === 0) {
      return 0
    }
    const choiceAnswers = answerDBList.filter((d) => d.choice_id === id.toString())
    return Math.ceil((choiceAnswers.length / answerDBList.length) * 100)
  }

  return (
    <Container className="full-page">
      <TextWrap className="flex-center">
        {quiz.pre_question && <p className="wv-font-kondolar pre-title">{quiz.pre_question}</p>}
        <h6 className="wv-font-kondolar wv-h6 title">
          {!isReveal ? quiz.question : 'ผลลัพธ์คุณและคนอื่นๆ คิดอย่างไร?'}
        </h6>
        <p className="wv-b5 font-plexsans">
          {!isReveal ? '(กดเพื่อเลือกคำตอบ)' : '(หมายเหตุ : 100% คิดจากผู้ที่เข้ามาตอบทั้งหมด)'}
        </p>
        {quiz.id === 9 && (
          <p className="wv-b5 font-plexsans">*การกดเลือกคำตอบ จะเป็นการยืนยันการแสดงความคิดเห็นของคุณ</p>
        )}
      </TextWrap>
      <ChoiceWrapperContainer>
        <div className="classroom-guide-container">
          <ClassroomGuide onClick={onClickClassroomGuide} />
        </div>
        {quiz.choices.map((item, index) => (
          <QuizChoiceCard
            choice={item}
            selectedChoice={selectedChoice}
            isReveal={isReveal}
            key={`choice-${index}`}
            onClick={() => {
              onClickChoice(item)
            }}
            percent={getPercent(item.id)}
          />
        ))}
      </ChoiceWrapperContainer>
      <ContinueChip isReveal={isReveal}>
        <img className="arrow" src={`${prefix}/arrow-white.svg`} alt="arrow" />
        <p className="text font-plexsans">
          บางเหตุการณ์ที่เกี่ยวกับ <span className="sub-text color-yellow">“{quiz.title}”</span>
        </p>
      </ContinueChip>
    </Container>
  )
}

export default QuizGame
