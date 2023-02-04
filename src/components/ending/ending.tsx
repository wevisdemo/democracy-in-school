import styled from 'styled-components'
import Reason from './reason/reason'
import { ending as endingData } from 'data/ending'
import Image from 'next/image'
import EndingBoard from './board'
import EndingShare from './share'

const EndingContainer = styled.div`
  background-image: url('background/bg_yellow.01.png');
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .arrow-wrapper {
    position: relative;
    margin-top: 28px;
    height: 68px;
  }

  .arrow {
    position: relative;
    width: 27px;
    height: 27px;
    animation: mymove 3s;
    animation-iteration-count: infinite;
  }

  .board-wrap {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .board {
      max-width: fit-content;
      width: 100%;
      position: absolute;

      @media (max-width: 420px) {
        width: unset;
      }
    }
  }
`

const Ending = () => {
  return (
    <EndingContainer>
      <Reason reasons={endingData.reasons}></Reason>
      <div className="arrow-wrapper">
        <img className="arrow" src="part_4/arrow.svg" alt="arrow" />
      </div>
      <div className="board-wrap">
        <img
          className="board"
          src="part_4/board_mobile.png"
          srcSet="part_4/board_mobile.png 420w, part_4/board_desktop.png"
          sizes="(max-width: 420px) 420px, 1280px"
          alt="board"
        />
        <EndingBoard></EndingBoard>
        <EndingShare></EndingShare>
      </div>
    </EndingContainer>
  )
}

export default Ending
