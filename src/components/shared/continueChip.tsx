import styled from 'styled-components'
import Image from 'next/image'

const ContinueChipContianer = styled.div`
  position: relative;
  height: 68px;

  .arrow {
    position: relative !important;
    width: 27px !important;
    height: 27px !important;
    animation: mymove 3s !important;
    animation-iteration-count: infinite !important;
    fill: #000 !important;
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
      <img className="arrow" src={light ? '/arrow-white.svg' : 'part_4/arrow.svg'} alt="arrow" />
      {/* <img className={`arrow ${light ? 'light' : ''}`} src="part_4/arrow.svg" alt="arrow" fill></Image> */}
    </ContinueChipContianer>
  )
}

export default ContinueChip
