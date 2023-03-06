import styled from 'styled-components'
import Reason from './reason/reason'
import { ending as endingData } from 'data/ending'
import EndingBoard from './board'
import EndingShare from './share'
import ContinueChip from 'components/shared/continueChip'
import { prefix } from 'utils'

const EndingContainer = styled.div`
  background-image: url('${prefix}/background/bg_yellow.01.png');
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .chip {
    position: relative;
    margin-top: 28px;
    height: 68px;
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

      @media (max-width: 1024px) {
        width: unset;
      }
    }
  }
`

const Ending = () => {
  return (
    <EndingContainer>
      <Reason reasons={endingData.reasons}></Reason>
      <div className="chip">
        <ContinueChip />
      </div>
      <div className="board-wrap">
        <img
          className="board"
          src={`${prefix}/part_4/board_mobile.png`}
          srcSet={`${prefix}/part_4/board_mobile.png 420w, ${prefix}/part_4/board_desktop.png`}
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
