import { MutableRefObject, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { IDropdownOption } from 'types/shared'
import { transform } from 'typescript'

const DropdownContainer = styled.div`
  position: relative
  display: flex;
  flex-direction: column;
  width: 324px;
  background: #FFEB78;


  .label {
    padding: 4px 20px;
    display: flex;
    justify-content: space-between;
    border: 3px solid #000000;
    border-radius: 2px;
    cursor: pointer;
  }

  .option-wrapper{
    width: 324px;
    position: absolute;
    padding: 0px 20px;
    border-left: 3px solid #000000;
    border-bottom: 3px solid #000000;
    border-right: 3px solid #000000;
    border-radius: 2px;
    background: #FFEB78;

    .option {
      padding: 4px 0px;
      cursor: pointer;
    }
    *:not(:first-child) {
      border-top: 1px solid #0000004D;

    }
  }
`

interface PropsType {
  options: IDropdownOption[]
}

const defaultOption: IDropdownOption = {
  label: 'เลือกหัวข้อ',
  value: ''
}

const Dropdown = ({ options }: PropsType) => {
  const ddRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(false)
  const [currentOption, setCurrentOption] = useState<IDropdownOption>(defaultOption)

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ddRef.current && !ddRef.current.contains(event.target as Node)) {
        setShow(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ddRef])

  const onChangeOption = (option: IDropdownOption) => {
    setCurrentOption(option)
    setShow(false)
  }

  return (
    <DropdownContainer className="wv-b3 font-plexsans" ref={ddRef}>
      <div className="label" onClick={() => setShow(!show)}>
        <span className="label-text">{currentOption.label}</span>
        <img
          className="label-dropdown"
          src="/dropdown-arrow.svg"
          alt="dropdown-arrow"
          style={{ transform: `${show ? 'rotate(180deg)' : ''}` }}
        />
      </div>
      {show && (
        <div className="option-wrapper">
          {options.map((item, index) => {
            return (
              <div className="option" key={`option-${index}`} onClick={(e) => onChangeOption(item)}>
                {item.label}
              </div>
            )
          })}
        </div>
      )}
    </DropdownContainer>
  )
}

export default Dropdown
