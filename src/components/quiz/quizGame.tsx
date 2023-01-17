import styled from 'styled-components'
import { IChoiceQuiz, IQuiz } from 'types/quiz'
import Image from 'next/image'

const Container = styled.div``

const TextWrap = styled.div`
  text-align: center;
  h6 {
    max-width: 880px;
    margin-bottom: 10px;
  }
`

const ChoiceContainer = styled.div<{ choice: IChoiceQuiz }>`
  width: 184px;
  height: 424px;
  position: relative;

  @media (max-width: 1024px) {
    width: 92px;
    height: 212px;
  }

  :hover {
    cursor: pointer;
    outline: 5px solid #000000;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.choice.background_color};
  }
`

const TextWrapper = styled.div`
  padding: 8px 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 0;
  }

  h6 {
    position: relative;
    z-index: 20;
  }

  p {
    position: relative;
    z-index: 20;
    padding: 8px 0px;
    font-size: 18px;

    @media (max-width: 1024px) {
      font-size: 13px;
    }
  }
`

const Choice = ({ choice }: { choice: IChoiceQuiz }) => {
  return (
    <ChoiceContainer choice={choice}>
      <div className="background"></div>
      <Image src={choice.image_src} alt={`choice-${choice.label}`} fill />
      <TextWrapper>
        <h6 className="wv-font-kondolar wv-h6 color-white text-stroke-black ">{choice.label}</h6>
        <p className="font-plexsans-bold color-white text-stroke-black ">{choice.text}</p>
      </TextWrapper>
    </ChoiceContainer>
  )
}

const ChoiceWrapperContainer = styled.div`
  margin: 76px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
`

interface PropsType {
  quiz: IQuiz
}

const QuizGame = ({ quiz }: PropsType) => {
  return (
    <Container className="full-page">
      <TextWrap className="flex-center">
        <h6 className="wv-font-kondolar wv-h6">{quiz.question}</h6>
        <p className="wv-b5 font-plexsans">(กดเพื่อเลือกคำตอบ)</p>
      </TextWrap>
      <ChoiceWrapperContainer>
        {quiz.choices.map((item, index) => (
          <Choice choice={item} key={`choice-${index}`} />
        ))}
      </ChoiceWrapperContainer>
    </Container>
  )
}

export default QuizGame
