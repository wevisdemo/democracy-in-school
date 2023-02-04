import styled from 'styled-components'
import Image from 'next/image'

const ContinueChipContianer = styled.div`
  position: relative;
  height: 68px;

  .arrow {
    position: relative;
    width: 27px;
    height: 27px;
    animation: mymove 3s;
    animation-iteration-count: infinite;
    fill: #000;
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

  .arrow path {
    fill: #000 !important;
  }

  .light path {
    fill: white !important;
  }
`

interface Propstype {
  light?: boolean
}

const ContinueChip = ({ light }: Propstype) => {
  return (
    <ContinueChipContianer className="arrow-wrapper">
      <img className="arrow" src={light ? '/arrow-white.svg' : '/part_4/arrow.svg'} alt="arrow" />
    </ContinueChipContianer>
  )
}

export default ContinueChip
