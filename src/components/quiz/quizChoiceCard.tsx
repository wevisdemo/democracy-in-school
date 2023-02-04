import styled from 'styled-components'
import { IChoiceQuiz, IQuiz } from 'types/quiz'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const ChoiceContainer = styled.div<{ choice: IChoiceQuiz; reveal: boolean; percent: number; isAns: boolean }>`
  width: 184px;
  height: 424px;
  position: relative;
  outline: ${(props) => {
    if (props.reveal) {
      return props.isAns ? '5px solid #000' : '5px solid #fff'
    }
    return 'none'
  }};
  ${(props) =>
    props.reveal &&
    props.isAns &&
    `animation: outline-animation 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: alternate;`}

  @media (max-width: 1024px) {
    width: 92px;
    height: 212px;
  }

  ${(props) =>
    !props.reveal
      ? `:hover {
    cursor: pointer;
    outline: 5px solid #000000;
  }`
      : ''}

  .color-percent {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${(props) => props.percent}%;
    background: ${(props) => props.choice.background_color};
  }

  .choice-img {
    position: absolute;
    width: 100%;
    z-index: 20;
    opacity: ${(props) => (props.reveal ? '0.2' : '1')};
    transition: opacity 2s;
  }

  .background {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: ${(props) => (props.reveal ? props.percent : '100')}%;
    // background-color: ${(props) => (props.reveal ? 'transparent' : props.choice.background_color)};
    background-color: ${(props) => props.choice.background_color};
    transition: height 2s;
  }

  @keyframes outline-animation {
    0% {
      outline-color: #000;
    }
    50% {
      outline-color: #fff;
    }
    100% {
      outline-color: #000;
    }
  }
`

const TextWrapper = styled.div`
  padding: 8px 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  z-index: 20;

  @media (max-width: 1024px) {
    padding: 2px;
  }

  h6 {
    position: relative;
    z-index: 20;
  }

  .answer {
    position: relative;
    z-index: 20;
    padding-bottom: 8px;
    font-size: 18px;

    @media (max-width: 1024px) {
      font-size: 13px;
    }
  }

  .percent {
    z-index: 20;
  }
`

const QuizChoiceCard = ({
  choice,
  revealIndex,
  index,
  onClick
}: {
  choice: IChoiceQuiz
  revealIndex: number
  index: number
  onClick: () => void
}) => {
  const handleOnClick = () => {
    if (revealIndex === -1) {
      onClick()
    }
  }

  const [isAns, setIsAns] = useState<boolean>(false)

  useEffect(() => {
    setIsAns(index === revealIndex)
  }, [revealIndex])

  return (
    <ChoiceContainer choice={choice} reveal={revealIndex != -1} isAns={isAns} percent={50} onClick={handleOnClick}>
      <div className="background"></div>
      <img className="choice-img" src={choice.image_src} alt={`choice-${choice.label}`} />
      {/* <div className="color-percent"></div> */}
      <TextWrapper>
        <h6 className="wv-font-kondolar wv-h6 color-white text-stroke-black ">{choice.label}</h6>

        <div>
          <h6 className="wv-font-kondolar wv-h6 color-white text-stroke-black percent">xx%</h6>
          <p className="font-plexsans-bold color-white text-stroke-black answer">{choice.text}</p>
        </div>
      </TextWrapper>
    </ChoiceContainer>
  )
}

export default QuizChoiceCard
