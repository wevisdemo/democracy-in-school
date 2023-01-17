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

  *:not(:first-child) {
    margin-top: 15px;
  }

  .paragraph {
    font-size: 18px;
    @media (max-width: 1024px) {
      font-size: 13px;
    }
  }

  .thumbnail {
    width: fit-content !important;
    height: 152px !important;
    position: relative !important;
  }
`

interface PropsType {
  index: number
  reason: IReason
}

const ReasonCard = ({ index, reason }: PropsType) => {
  return (
    <ReasonCardContainer>
      <Image className="thumbnail" src={reason.image_src} alt={`reason-${index}`} fill sizes="200px"></Image>
      <p className="wv-b2 font-plexsans-bold color-blue">{reason.topic}</p>
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
