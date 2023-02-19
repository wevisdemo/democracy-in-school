import styled from 'styled-components'
import Image from 'next/image'
import { IReason } from 'types/ending'

const ReasonCardContainer = styled.div`
  background-color: white;
  position: relative;
  padding: 30px 12px;
  max-width: 276px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: IBMPlexSansThai;

  @media (max-width: 600px) {
    width: 216px;
  }

  *:not(:first-child) {
    margin-top: 15px;
  }

  .paragraph {
    font-size: 18px;
    @media (max-width: 420px) {
      font-size: 13px;
    }
  }

  .thumbnail {
    width: fit-content !important;
    height: 152px !important;
    position: relative !important;
  }

  .topic {
    font-size: 24px;

    @media (max-width: 600px) {
      font-size: 17px;
    }
  }
`

interface PropsType {
  index: number
  reason: IReason
}

const ReasonCard = ({ index, reason }: PropsType) => {
  return (
    <ReasonCardContainer>
      <img className="thumbnail" src={reason.image_src} alt={`reason-${index}`} sizes="200px" />
      <p className="font-plexsans-bold color-blue topic">{reason.topic}</p>
      {reason.paragraphs.map((item, index) => {
        return (
          <p className="paragraph" key={`reason-paragraph-${index}`}>
            {item}
          </p>
        )
      })}
    </ReasonCardContainer>
  )
}

export default ReasonCard
