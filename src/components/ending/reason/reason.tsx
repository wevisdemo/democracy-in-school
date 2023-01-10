import styled from 'styled-components'
import { IReason } from 'types/ending'
import ReasonCard from './card'
import Image from 'next/image'

const Container = styled.div`
  width: 100%;
  height: 100vh;
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

  .arrow-wrapper {
    postion: relative;
    margin-top: 28px;
    height: 68px;
  }

  .arrow {
    position: relative !important;
    width: 27px !important;
    height: 27px !important;
    animation: mymove 3s !important;
    animation-iteration-count: infinite !important;
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
      <div className="arrow-wrapper">
        <Image className="arrow" src="/part_4/arrow.svg" alt="arrow" fill></Image>
      </div>
    </Container>
  )
}

export default Reason
