import { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'

const ToggleComponent = styled.div<{ active: boolean }>`
  position: relative;
  display: flex;
  width: 253px;
  height: 46px;
  border: 2px solid #252525;
  border-radius: 2px;

  .option {
    z-index: 20;
    color: #252525;
    width: 100%;
    font-size: 24px;
    cursor: pointer;
    transition: color 1s;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 420px) {
      font-size: 17px;
    }
  }

  .active {
    color: #000;
  }

  .active-slide {
    position: absolute;
    width: 50%;
    height: 100%;
    background: #c9c9c9;
    left: ${(props) => (!props.active ? '0px' : '50%')};
    transition: left 1s;
  }
`

interface PropsType {
  options: [string, string]
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const Toggle = ({ options, active, setActive }: PropsType) => {
  return (
    <ToggleComponent active={active}>
      <div className="active-slide"></div>
      <div className={`option ${!active && 'active'} font-plexsans-bold`} onClick={() => setActive(false)}>
        <span>{options[0]}</span>
      </div>
      <div className={`option ${active && 'active'} font-plexsans-bold`} onClick={() => setActive(true)}>
        <span>{options[1]}</span>
      </div>
    </ToggleComponent>
  )
}

export default Toggle
