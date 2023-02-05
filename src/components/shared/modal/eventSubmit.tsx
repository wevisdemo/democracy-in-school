import styled from 'styled-components'
import { IDropdownOption } from 'types/shared'
import Dropdown from '../dropdown'
import { ending as ending_data } from 'data/ending'
import Toggle from '../toggle'
import { Dispatch, SetStateAction, useState } from 'react'
import { gender, age, province_school, province_general, education } from 'data/dropdown'
import { convertToDDOption } from 'utils'

const EventSubmitModalContainer = styled.div<{ show: boolean }>`
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
    background: #d9d9d9;
    opacity: 0.2;
  }

  .main {
    z-index: 120;
    position: relative;
    top: ${(props) => (props.show ? '0px' : '100vh')};
    opacity: ${(props) => (props.show ? '1' : '0')};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 368px;
    max-height: 80%;
    background: #ffffff;
    padding: 40px 10px;
    transition: all 1s;

    @media (max-width: 420px) {
      max-width: 252px;
    }

    .cross-icon {
      position: absolute;
      margin-top: 10px;
      top: -40px;
      right: 0px;

      :hover {
        cursor: pointer;
      }
    }

    .title {
      margin-top: 10px;
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
}

function EventSubmitModal({ show, setShow }: PropsType) {
  const onCloseModal = (e: any) => {
    e.stopPropagation()
    setShow(false)
  }

  return (
    <>
      <EventSubmitModalContainer show={show}>
        <div className="wrapper" onClick={onCloseModal}></div>
        <div className="main font-plexsans">
          <img className="cross-icon" src="/cross.svg" alt="cross" onClick={onCloseModal} />
          <img src="/part_3/icon_check.svg" alt="icon_check" />
          <h6 className="title wv-h6 wv-font-kondolar wv-font-bold">
            เราได้รับข้อมูล
            <br />
            ของคุณแล้ว
          </h6>
          <p className="tracking-number">(xxxxxxxxxxxxxxxx)</p>
        </div>
      </EventSubmitModalContainer>
    </>
  )
}

export default EventSubmitModal
