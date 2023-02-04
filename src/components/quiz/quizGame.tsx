import styled from 'styled-components'
import { IChoiceQuiz, IQuiz } from 'types/quiz'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import QuizChoiceCard from './quizChoiceCard'

const Container = styled.div`
  padding: 10px;
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
}

const QuizGame = ({ quiz }: PropsType) => {
  const [revealIndex, setRevealIndex] = useState<number>(-1)

  return (
    <Container className="full-page">
      <TextWrap className="flex-center">
        <h6 className="wv-font-kondolar wv-h6">{quiz.question}</h6>
        <p className="wv-b5 font-plexsans">(กดเพื่อเลือกคำตอบ)</p>
      </TextWrap>
      <ChoiceWrapperContainer>
        {quiz.choices.map((item, index) => (
          <QuizChoiceCard
            choice={item}
            key={`choice-${index}`}
            revealIndex={revealIndex}
            index={index}
            onClick={() => {
              setRevealIndex(index)
            }}
          />
        ))}
      </ChoiceWrapperContainer>
    </Container>
  )
}

export default QuizGame
