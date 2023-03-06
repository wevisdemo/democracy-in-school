import styled from 'styled-components'
import Dropdown from '../dropdown'
import Toggle from '../toggle'
import { Dispatch, SetStateAction, useState } from 'react'
import { gender, age, province, education } from 'data/dropdown'
import { convertToDDOption, prefix } from 'utils'
import { IUserInformation, userInfoDefault } from 'store/userInfo'
import { AutoComplete } from 'components/autoComplete'

const PersonalModalContainer = styled.div<{ canSubmit: boolean; show: boolean }>`
  top: 0px;
  left: 0px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
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
    max-width: 476px;
    max-height: 80%;
    background: #000000;
    opacity: 0.95;
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
        padding: 10px 20px;
        background: #ffffff;
        border-radius: 3px;
        text-align: center;
        justify-content: center;
        align-items: center;

        @media (max-width: 420px) {
          padding: 4px 16px;
        }

        ${(props) =>
          props.canSubmit &&
          `:hover {
          cursor: pointer;
        }`}
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

const PersonalMain = ({ userInfo, setUserInfo }: SubPropsType) => (
  <>
    <div className="topic-wrapper">
      <p className="subtitle font-plexsans-bold color-white">เพศ</p>
      <div className="dropdown-wrapper">
        <Dropdown
          onSelect={(option) => {
            setUserInfo((state) => ({
              ...state,
              person: { ...state.person, gender: option.value }
            }))
          }}
          initValue={{ label: userInfo.person.gender, value: userInfo.person.gender }}
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
          onSelect={(option) => {
            setUserInfo((state) => ({
              ...state,
              person: { ...state.person, age: option.value }
            }))
          }}
          initValue={{ label: userInfo.person.age, value: userInfo.person.age }}
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
        <AutoComplete
          backgroundColor="#000"
          placeholder="พิมพ์ชื่อจังหวัด..."
          options={province.map((d) => convertToDDOption(d))}
          light
          onSelect={(option) => {
            setUserInfo((state) => ({
              ...state,
              person: { ...state.person, province: option.value }
            }))
          }}
          title=""
          initValue={{ label: userInfo.person.province, value: userInfo.person.province }}
        />
      </div>
    </div>
    <div className="topic-wrapper">
      <p className="subtitle font-plexsans-bold color-white">ระดับการศึกษา</p>
      <div className="dropdown-wrapper">
        <Dropdown
          onSelect={(option) => {
            setUserInfo((state) => ({
              ...state,
              person: { ...state.person, education_level: option.value }
            }))
          }}
          initValue={{ label: userInfo.person.education_level, value: userInfo.person.education_level }}
          backgroundColor="#000"
          placeholder="เลือกระดับการศึกษา"
          options={education.map((d) => convertToDDOption(d))}
          light
        />
      </div>
    </div>
  </>
)

interface SubPropsType {
  userInfo: IUserInformation
  setUserInfo: Dispatch<SetStateAction<IUserInformation>>
}

const SchoolMain = ({ userInfo, setUserInfo }: SubPropsType) => (
  <>
    <div className="topic-wrapper">
      <p className="subtitle font-plexsans-bold color-white">จังหวัดที่โรงเรียนอยู่อาศัย</p>
      <div className="dropdown-wrapper">
        <AutoComplete
          backgroundColor="#000"
          placeholder="พิมพ์ชื่อจังหวัด..."
          options={province.map((d) => convertToDDOption(d))}
          light
          onSelect={(option) => {
            setUserInfo((state) => ({
              ...state,
              school: { ...state.school, province: option.value }
            }))
          }}
          title=""
          initValue={{ label: userInfo.school.province, value: userInfo.school.province }}
        />
      </div>
    </div>
    <div className="topic-wrapper">
      <p className="subtitle font-plexsans-bold color-white">ระดับการศึกษา</p>
      <div className="dropdown-wrapper">
        <Dropdown
          onSelect={(option) => {
            setUserInfo((state) => ({
              ...state,
              school: { ...state.school, education_level: option.value }
            }))
          }}
          initValue={{ label: userInfo.school.education_level, value: userInfo.school.education_level }}
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
        <input
          className="input-school font-plexsans"
          type="text"
          value={userInfo.school.name}
          placeholder="กรุณาใส่ชื่อโรงเรียนของคุณ"
          onChange={(e) =>
            setUserInfo((state) => ({
              ...state,
              school: { ...state.school, name: e.target.value }
            }))
          }
        />
      </div>
    </div>
  </>
)

interface PropsType {
  show: boolean
  onClose: () => void
  submitData: (userInfo: IUserInformation) => void
}

function PersonalModal({ show, onClose, submitData }: PropsType) {
  const [toggleActive, setToggleActive] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<IUserInformation>(userInfoDefault)

  const onCloseModal = (e: any) => {
    e.stopPropagation()
    setUserInfo(userInfoDefault)
    onClose()
  }

  const canSubmit = () => {
    if (toggleActive) {
      // school
      const proviceValid = province.includes(userInfo.school.province)

      if (userInfo.school.education_level && userInfo.school.name && userInfo.school.province && proviceValid) {
        return true
      }
      return false
    } else {
      // person
      const proviceValid = province.includes(userInfo.person.province)
      if (
        userInfo.person.education_level &&
        userInfo.person.age &&
        userInfo.person.gender &&
        userInfo.person.province &&
        proviceValid
      ) {
        return true
      }
      return false
    }
  }

  const onSubmitData = () => {
    if (toggleActive) {
      // school
      submitData({
        has_set: true,
        type: 'school',
        person: {
          gender: '',
          age: '',
          province: '',
          education_level: ''
        },
        school: userInfo.school,
        user_agent: ''
      })
    } else {
      submitData({
        has_set: true,
        type: 'person',
        person: userInfo.person,
        school: {
          province: '',
          education_level: '',
          name: ''
        },
        user_agent: ''
      })
    }
    setUserInfo(userInfoDefault)
    onClose()
  }

  return (
    <>
      <PersonalModalContainer canSubmit={canSubmit()} show={show}>
        <div className="wrapper" onClick={onCloseModal}></div>
        <div className="main font-plexsans">
          <img className="cross-icon" src={`${prefix}/cross.svg`} alt="cross" onClick={onCloseModal} />
          <div className="header">
            <p className="wv-h7 font-plexsans-bold color-yellow title">ขอถามเพิ่มอีกนิด</p>
            <p className="color-white subtitle">เพื่อเป็นข้อมูลในการศึกษาและวิเคราะห์ เกี่ยวกับสิทธิเสรีภาพ</p>
            <Toggle options={['บุคคล', 'ชั้นเรียน']} active={toggleActive} setActive={setToggleActive}></Toggle>
          </div>
          <div className="breakline"></div>
          <div className="footer">
            {!toggleActive ? (
              <PersonalMain userInfo={userInfo} setUserInfo={setUserInfo} />
            ) : (
              <SchoolMain userInfo={userInfo} setUserInfo={setUserInfo} />
            )}
            <button disabled={!canSubmit()} className="submit-btn subtitle font-plexsans-bold" onClick={onSubmitData}>
              <span>ส่งข้อมูล</span>
            </button>
          </div>
        </div>
      </PersonalModalContainer>
    </>
  )
}

export default PersonalModal
