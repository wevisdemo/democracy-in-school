import styled from 'styled-components'
import { Dispatch, SetStateAction, useState } from 'react'
import { prefix } from 'utils'

const VideoModalContainer = styled.div<{ show: boolean }>`
  top: 0px;
  left: 0px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};

  .wrapper {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }

  .main {
    position: relative;
    top: ${(props) => (props.show ? '0px' : '100vh')};
    opacity: ${(props) => (props.show ? '1' : '0')};
    z-index: 120;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 540px;
    max-height: 80%;
    background: #000000;
    padding: 40px 10px;
    overflow: scroll;
    transition: all 1s;

    @media (max-width: 420px) {
      max-width: 300px;
    }

    .cross-icon {
      position: absolute;
      top: 0px;
      right: 0px;
      margin-right: 10px;
      margin-top: 10px;

      :hover {
        cursor: pointer;
      }
    }

    .content {
      position: relative;
      overflow: auto;
      margin-top: 20px;
      .video-wrapper {
        .thumbnail {
          max-width: 392px;
          @media (max-width: 420px) {
            max-width: 250px;
          }
        }
      }
      .video-wrapper:not(:first-child) {
        margin-top: 10px;
      }
    }
  }
`

interface PropsType {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

function VideoModal({ show, setShow }: PropsType) {
  const onCloseModal = (e: any) => {
    e.stopPropagation()
    setShow(false)
  }
  return (
    <>
      {/* {show && ( */}
      <VideoModalContainer show={show}>
        <div className="wrapper" onClick={onCloseModal}></div>
        <div className="main font-plexsans">
          <img className="cross-icon" src={`${prefix}/cross.svg`} alt="cross" onClick={onCloseModal} />
          <div className="content">
            <p className="title font-plexsans-bold wv-b2 color-yellow">??????????????????????????????????????????????????????????????????????????????????????????????????????</p>
            <div className="video-wrapper">
              <p className="color-white wv-b4">??????????????????????????? StartDee</p>
              <a href="https://www.youtube.com/watch?v=n2EyaWdfyng" target="_blank">
                <img className="thumbnail" src={`${prefix}/part_1/thumbnail.01.png`} alt="thumbnail.01" />
              </a>
            </div>
            <div className="video-wrapper">
              <p className="color-white wv-b4">??????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
              <a
                href="https://www.nhrc.or.th/Human-Rights-Knowledge/Multimedia/Human-rights-videos.aspx"
                target="_blank"
              >
                <img className="thumbnail" src={`${prefix}/part_1/thumbnail.02.png`} alt="thumbnail.02" />
              </a>
            </div>
          </div>
        </div>
      </VideoModalContainer>
      {/* )} */}
    </>
  )
}

export default VideoModal
