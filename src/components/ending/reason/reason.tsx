import styled from 'styled-components'
import { IReason } from 'types/ending'
import ReasonCard from './card'
import Image from 'next/image'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h6 {
    margin-top: 24px;
  }

  .p-2 {
    margin-top: 20px;
    max-width: 364px;
  }

  @keyframes mymove {
    0% {
      top: 0px;
    }
    50% {
      top: 32px;
    }
    100% {
      top: 0px;
    }
  }
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    overflow: scroll;
    width: 100%;
  }
`

interface PropsType {
  reasons: IReason[]
}

const Reason = ({ reasons }: PropsType) => {
  return (
    <Container>
      <h6 className="wv-h6 wv-font-kondolar">ทำไมการเคารพสิทธิเสรีภาพถึงสำคัญ</h6>
      <CardWrapper>
        {reasons.map((item, index) => {
          return <ReasonCard reason={item} index={index}></ReasonCard>
        })}
      </CardWrapper>
      <p className="p-2 wv-b2 font-plexsans">สังคมประชาธิปไตยเริ่มต้นที่การเรียนรู้ ที่จะเคารพความแตกต่างในสังคม</p>
    </Container>
  )
}

export default Reason
