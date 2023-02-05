import styled from 'styled-components'
import { IDropdownOption } from 'types/shared'
import Dropdown from '../dropdown'
import { ending as ending_data } from 'data/ending'
import Toggle from '../toggle'
import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react'
import { gender, age, province_school, province_general, education } from 'data/dropdown'
import { convertToDDOption } from 'utils'
import { IGuideCard } from 'types/guide'

const GameStepModalContainer = styled.div<{ show: boolean }>`
  top: 0px;
  left: 0px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};

  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .main {
    z-index: 120;
    position: relative;
    top: ${(props) => (props.show ? '0px' : '100vh')};
    opacity: ${(props) => (props.show ? '1' : '0')};
    display: flex;
    width: 100%;
    max-width: 740px;
    max-height: 80%;
    background: #000000;
    // opacity: 0.9;
    transition: all 1s;
    color: #ffffff;

    @media (max-width: 420px) {
      max-width: 280px;
    }

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      overflow: auto;
      padding: 40px 10px;
      scrollbar-width: none;
    }

    .content::-webkit-scrollbar {
      display: none;
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

    .title {
      font-size: 24px;
      @media (max-width: 420px) {
        font-size: 17px;
      }
    }

    .thumbnail {
      margin: 20px 0;
    }

    .description {
      font-size: 24px;
      max-width: 352px;
      @media (max-width: 420px) {
        font-size: 17px;
        max-width: 196px;
      }
    }

    .tracking-number {
      font-size: 14px;
      margin-top: 4px;
      @media (max-width: 420px) {
        font-size: 10px;
      }
    }
  }
`

interface PropsType {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  guideCard: IGuideCard
}

function GameStepModal({ show, setShow, guideCard }: PropsType) {
  const onCloseModal = (e: any) => {
    e.stopPropagation()
    setShow(false)
  }

  const submitData = () => {
    // TODO: send data to parent
    setShow(false)
  }

  return (
    <>
      <GameStepModalContainer show={show}>
        <div className="wrapper" onClick={onCloseModal}></div>
        <div className="main font-plexsans">
          <img className="cross-icon" src="/cross.svg" alt="cross" onClick={onCloseModal} />
          <div className="content">
            <p className="title font-plexsans-bold color-blue">ขั้นตอนการเล่นในห้องเรียน</p>
            <h3 className="wv-h3 wv-font-kondolar wv-font-bold">Step {guideCard.id}</h3>
            <p className="topic wv-h7 font-plexsans-bold">{guideCard.topic}</p>
            <img className="thumbnail" src={guideCard.thumbnail_src} alt="card-thumbnail" />
            <p className="description font-plexsans">{guideCard.description}</p>
          </div>
        </div>
      </GameStepModalContainer>
    </>
  )
}

export default GameStepModal
