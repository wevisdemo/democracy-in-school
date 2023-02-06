import styled from 'styled-components'
import React from 'react'
import PointingHand from './pointingHand'

interface styleProps {
  fill?: string
}

const PointingButtonContainer = styled.div<styleProps>`
  background-color: ${(props) => props.fill || 'none'};
  width: fit-content;
  position: relative;
  display: flex;

  .text-box {
    padding: 4px 16px;
    border: 2px solid #000;

    @media (max-width: 1024px) {
      font-size: 13px;
    }
  }

  .pointer {
    position: absolute;
    z-index: 20;
    bottom: -34px;
    left: 50%;
  }

  :hover {
    cursor: pointer;
  }
`

interface PropsType {
  text: string
  onClickButton: () => void
  fill?: string
}

const PointingButton = ({ text, onClickButton, fill }: PropsType) => {
  return (
    <PointingButtonContainer onClick={onClickButton} className="wv-b3 font-plexsans" fill={fill}>
      <div className="text-box">{text}</div>
      <div className="pointer">
        <PointingHand fill={fill} />
      </div>
    </PointingButtonContainer>
  )
}

export default PointingButton
