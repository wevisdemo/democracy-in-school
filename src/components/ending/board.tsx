import styled from 'styled-components'

const EndingBoardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .board {
    max-width: fit-content;
    width: 100%;
    position: absolute;
  }

  .text-wrapper {
    width: 38%;
    z-index: 20;
    margin-top: 20%;
    text-align: center;

    @media (max-width: 420px) {
      max-width: 244px;
      width: 100%;
      margin-top: 160px;
    }

    p {
      margin-top: 10px;

      @media (max-width: 420px) {
        font-size: 17px;
      }
    }
  }
`

const EndingBoard = () => {
  return (
    <EndingBoardContainer>
      {/* <img className="board" src="part_4/board_desktop.png" srcSet="part_4/board_mobile.png 420w" alt="board" /> */}
      <div className="text-wrapper">
        <h6 className="wv-h6 wv-font-kondolar color-white">
          สังคมประชาธิปไตยเริ่มต้นที่การเรียนรู้ที่จะเคารพความแตกต่างในสังคม
        </h6>
        <p className="wv-b2 font-plexsans color-white">
          เริ่มด้วยการใช้สิทธิเสรีภาพอย่างมีความรับผิดชอบ รู้สิทธิตนเอง และเคารพสิทธิคนอื่น
        </p>
      </div>
    </EndingBoardContainer>
  )
}

export default EndingBoard
