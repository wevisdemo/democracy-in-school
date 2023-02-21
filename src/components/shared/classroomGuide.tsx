import { useState } from 'react'
import styled from 'styled-components'
import { prefix } from 'utils'

const ClassroomGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .text {
    font-size: 16px;
    text-align: center;
    @media (max-width: 420px) {
      display: none;
    }
  }

  .icon {
    width: 40px;
    border: 1px solid #c9c9c9;
    border-radius: 100%;

    @media (max-width: 420px) {
      width: 20px;
    }

    :hover {
      cursor: pointer;
    }
  }
`

interface PropsType {
  light?: boolean
  onClick: () => void
}

const ClassroomGuide = ({ onClick, light }: PropsType) => {
  const [onHover, setOnHover] = useState(false)
  return (
    <ClassroomGuideContainer>
      <p
        className={`text font-plexsans ${light && 'color-white'}`}
        style={{ visibility: onHover ? 'unset' : 'hidden' }}
      >
        ขั้นตอนการเล่น
        <br />
        ในห้องเรียน
      </p>
      <img
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        className="icon"
        src={`${prefix}/part_3/icon_info.svg`}
        alt="icon_info"
        onClick={onClick}
      />
    </ClassroomGuideContainer>
  )
}

export default ClassroomGuide
