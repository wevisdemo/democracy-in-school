import styled from 'styled-components'
import { IDropdownOption } from 'types/shared'
import Dropdown from '../dropdown'
import { ending as ending_data } from 'data/ending'
import Toggle from '../toggle'
import { Dispatch, SetStateAction, useState } from 'react'
import { gender, age, province_school, province_general, education } from 'data/dropdown'
import { convertToDDOption, prefix } from 'utils'

const PersonalModalContainer = styled.div`
  top: 0px;
  left: 0px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 476px;
    max-height: 80%;
    background: #000000;
    opacity: 0.95;
    padding: 40px 10px;
    overflow: scroll;

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

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .breakline {
      width: 90%;
      border-top: 3px solid #252525;
      margin: 12px 0;
    }

    .footer {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .topic-wrapper {
        width: 100%;
        margin: auto;

        .dropdown-wrapper {
          width: 100%;
          margin: auto;
          max-width: 286px;
          margin-top: 10px;

          @media (max-width: 420px) {
            max-width: 260px;
          }

          .input-school {
            width: 100%;
            padding: 11px 20px 29px;
            max-width: 312px;
            height: 72px;
            background: #f0efea;
            border: 3px solid #ffffff;
            border-radius: 2px;
            font-size: 21px;
            @media (max-width: 420px) {
              font-size: 15px;
            }
          }
        }
      }

      .topic-wrapper:not(:first-child) {
        margin-top: 10px;
      }

      .submit-btn {
        margin-top: 20px;
        display: flex;
        max-width: 148px;
        padding: 10px 30px;
        background: #ffffff;
        border-radius: 3px;
        text-align: center;
        justify-content: center;
        align-items: center;

        @media (max-width: 420px) {
          padding: 4px 16px;
        }

        :hover {
          cursor: pointer;
        }
      }
    }

    .subtitle {
      font-size: 24px;
      @media (max-width: 420px) {
        font-size: 17px;
      }
    }
  }
`
// TODO: create modal component and spare slot to embed main component
// TODO: import cross icon

const PersonalMain = () => (
  <>
    <div className="topic-wrapper">
      <p className="subtitle font-plexsans-bold color-white">เพศ</p>
      <div className="dropdown-wrapper">
        <Dropdown
          onSelect={() => {}}
          backgroundColor="#000"
          placeholder="เลือกเพศ"
          options={gender.map((d) => convertToDDOption(d))}
          light
        />
      </div>
    </div>
    <div className="topic-wrapper">
      <p className="subtitle font-plexsans-bold color-white">อายุ</p>
      <div className="dropdown-wrapper">
        <Dropdown
          onSelect={() => {}}
          backgroundColor="#000"
          placeholder="เลือกอายุ"
          options={age.map((d) => convertToDDOption(d))}
          light
        />
      </div>
    </div>
    <div className="topic-wrapper">
      <p className="subtitle font-plexsans-bold color-white">จังหวัดที่คุณอาศัยอยู่</p>
      <div className="dropdown-wrapper">
        <Dropdown
          onSelect={() => {}}
          backgroundColor="#000"
          placeholder="พิมพ์ชื่อจังหวัด..."
          options={province_general.map((d) => convertToDDOption(d))}
          light
        />
      </div>
    </div>
    <div className="topic-wrapper">
      <p className="subtitle font-plexsans-bold color-white">ระดับการศึกษา</p>
      <div className="dropdown-wrapper">
        <Dropdown
          onSelect={() => {}}
          backgroundColor="#000"
          placeholder="เลือกระดับการศึกษา"
          options={education.map((d) => convertToDDOption(d))}
          light
        />
      </div>
    </div>
  </>
)

const SchoolMain = () => (
  <>
    <div className="topic-wrapper">
      <p className="subtitle font-plexsans-bold color-white">จังหวัดที่โรงเรียนอยู่อาศัย</p>
      <div className="dropdown-wrapper">
        <Dropdown
          onSelect={() => {}}
          backgroundColor="#000"
          placeholder="พิมพ์ชื่อจังหวัด..."
          options={province_school.map((d) => convertToDDOption(d))}
          light
        />
      </div>
    </div>
    <div className="topic-wrapper">
      <p className="subtitle font-plexsans-bold color-white">ระดับการศึกษา</p>
      <div className="dropdown-wrapper">
        <Dropdown
          onSelect={() => {}}
          backgroundColor="#000"
          placeholder="เลือกระดับการศึกษา"
          options={education.map((d) => convertToDDOption(d))}
          light
        />
      </div>
    </div>
    <div className="topic-wrapper">
      <p className="subtitle font-plexsans-bold color-white">ชื่อโรงเรียน</p>
      <div className="dropdown-wrapper">
        <input className="input-school font-plexsans" type="text" placeholder="กรุณาใส่ชื่อโรงเรียนของคุณ" />
      </div>
    </div>
  </>
)

interface PropsType {
  show: boolean
  onClose: () => void
}

function PersonalModal({ show, onClose }: PropsType) {
  const [toggleActive, setToggleActive] = useState<boolean>(false)

  const onCloseModal = (e: any) => {
    e.stopPropagation()
    onClose()
  }

  const submitData = () => {
    onClose()
    // TODO: send data to parent
  }

  // TODO: handle state and validate

  return (
    <>
      {show && (
        <PersonalModalContainer>
          <div className="wrapper" onClick={onCloseModal}></div>
          <div className="main font-plexsans">
            <img className="cross-icon" src={`${prefix}/cross.svg`} alt="cross" onClick={onCloseModal} />
            <div className="header">
              <p className="wv-h7 font-plexsans-bold color-yellow title">ก่อนไปส่วนสุดท้าย.. ขอถามเพิ่มอีกนิด</p>
              <p className="color-white subtitle">เพื่อเป็นข้อมูลในการศึกษาและวิเคราะห์ เกี่ยวกับสิทธิและเสรีภาพ</p>
              <Toggle options={['บุคคล', 'ชั้นเรียน']} active={toggleActive} setActive={setToggleActive}></Toggle>
            </div>
            <div className="breakline"></div>
            <div className="footer">
              {!toggleActive ? <PersonalMain /> : <SchoolMain />}
              <div className="submit-btn subtitle font-plexsans-bold" onClick={submitData}>
                <span>ส่งข้อมูล</span>
              </div>
            </div>
          </div>
        </PersonalModalContainer>
      )}
    </>
  )
}

export default PersonalModal
