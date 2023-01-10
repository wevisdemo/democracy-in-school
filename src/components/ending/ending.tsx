import styled from 'styled-components'
import Reason from './reason/reason'
import { ending as endingData } from 'data/ending'

const Container = styled.div`
  background-image: url('/background/bg_yellow.01.png');
  background-repeat: repeat;
`

const Ending = () => {
  return (
    <Container>
      <Reason reasons={endingData.reasons}></Reason>
    </Container>
  )
}

export default Ending
