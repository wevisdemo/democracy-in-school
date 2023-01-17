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
    border: 1px solid #000;
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
  onClick: Function
  fill?: string
}

const PointingButton = (props: PropsType) => {
  return (
    <PointingButtonContainer className="wv-b3 font-plexsans" fill={props.fill}>
      <div className="text-box">{props.text}</div>
      <div className="pointer">
        <PointingHand fill={props.fill} />
      </div>
    </PointingButtonContainer>
  )
}

export default PointingButton
