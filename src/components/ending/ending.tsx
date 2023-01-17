import styled from 'styled-components'
import Reason from './reason/reason'
import { ending as endingData } from 'data/ending'
import Image from 'next/image'
import EndingBoard from './board'
import EndingShare from './share'

const Container = styled.div`
  background-image: url('/background/bg_yellow.01.png');
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 70px;

  .arrow-wrapper {
    position: relative;
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
`

const Ending = () => {
  return (
    <Container>
      <Reason reasons={endingData.reasons}></Reason>
      <div className="arrow-wrapper">
        <Image className="arrow" src="/part_4/arrow.svg" alt="arrow" fill></Image>
      </div>
      <EndingBoard></EndingBoard>
      <EndingShare></EndingShare>
    </Container>
  )
}

export default Ending
