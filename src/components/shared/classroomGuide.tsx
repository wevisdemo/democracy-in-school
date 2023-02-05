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
  return (
    <ClassroomGuideContainer>
      <p className={`text font-plexsans ${light && 'color-white'}`}>
        ขั้นตอนการเล่น
        <br />
        ในห้องเรียน
      </p>
      <img className="icon" src={`${prefix}/part_3/icon_info.svg`} alt="icon_info" onClick={onClick} />
    </ClassroomGuideContainer>
  )
}

export default ClassroomGuide
