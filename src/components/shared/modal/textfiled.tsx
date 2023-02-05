import styled from 'styled-components'
import { IDropdownOption } from 'types/shared'
import Dropdown from '../dropdown'
import { ending as ending_data } from 'data/ending'
import Toggle from '../toggle'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { gender, age, province_school, province_general, education } from 'data/dropdown'
import { convertToDDOption, prefix } from 'utils'
import QuizQuestionTextArea from 'components/quiz/quizQuestion'

const TextfieldModalContainer = styled.div<{ show: boolean }>`
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
    max-width: 624px;
    max-height: 80%;
    background: #c9c9c9;
    border-radius: 5px;
    padding: 20px 10px;
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

    .content {
      .submit-btn {
        margin-top: 20px;
      }
    }
  }
`

interface PropsType {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  submitOtherAnswer: (ans: string) => void
}

// todo: event submit answer

function TextfieldModal({ show, setShow, submitOtherAnswer }: PropsType) {
  const [text, setText] = useState<string>('')
  const [canSubmit, setCanSubmit] = useState<boolean>(false)

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 0) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
    setText(e.target.value)
  }

  const onCloseModal = (e: any) => {
    e.stopPropagation()
    setShow(false)
  }

  const submitData = () => {
    // TODO: send data to parent
    setShow(false)
  }
  const handleSubmitAnswer = () => {
    submitOtherAnswer(text)
    setText('')
    setCanSubmit(false)
    setShow(false)
  }

  return (
    <>
      <TextfieldModalContainer show={show}>
        <div className="wrapper" onClick={onCloseModal}></div>
        <div className="main font-plexsans">
          <img className="cross-icon" src={`${prefix}/cross.svg`} alt="cross" onClick={onCloseModal} />
          <div className="content">
            <QuizQuestionTextArea text={text} onChangeText={onChangeText} />
            <button disabled={!canSubmit} className="wv-b3 font-plexsans-bold submit-btn" onClick={handleSubmitAnswer}>
              ส่งคำตอบ
            </button>
          </div>
        </div>
      </TextfieldModalContainer>
    </>
  )
}

export default TextfieldModal
