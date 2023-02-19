import { MutableRefObject, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { IDropdownOption } from 'types/shared'
import { prefix } from 'utils'

interface IComponentProps {
  light?: boolean
  backgroundColor?: string
  selected: boolean
}

const DropdownContainer = styled.div<IComponentProps>`
  position: relative;
  width: 100%;
  max-width: 324px;
  background: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  text-align: left;
  margin: auto;
  @media (max-width: 420px) {
    max-width: 280px;
  }

  .label {
    padding: 4px 20px;
    display: flex;
    justify-content: space-between;
    border: 3px solid;
    border-color: ${(props) => (props.light ? '#FFF' : '#000')};
    border-radius: 2px;
    cursor: pointer;

    .label-text {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: ${(props) => (props.light ? (props.selected ? '#fff' : '#ffffff66') : '#000')};
    }

    .dropdown-arrow {
      ${(props) =>
        props.light &&
        `filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(194deg) brightness(117%) contrast(100%);`}
    }
  }

  .option-wrapper {
    width: 100%;
    max-width: 324px;
    position: absolute;
    padding: 0px 20px;
    border-left: 3px solid;
    border-bottom: 3px solid;
    border-right: 3px solid;
    color: ${(props) => (props.light ? '#FFF' : '#000')};
    border-color: ${(props) => (props.light ? '#FFF' : '#000')};
    border-radius: 2px;
    background: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
    overflow: scroll;
    max-height: 200px;
    z-index: 200;

    @media (max-width: 420px) {
      overflow: scroll;
      max-height: 200px;
      max-width: 280px;
    }

    .option {
      padding: 4px 0px;
      cursor: pointer;
    }

    *:not(:first-child) {
      border-top: 1px solid;
      border-color: ${(props) => (props.light ? '#F0EFEA' : '#0000004d')};
    }
  }
`

interface PropsType {
  placeholder: string
  options: IDropdownOption[]
  onSelect: (option: IDropdownOption) => void
  light?: boolean
  initValue?: IDropdownOption
  backgroundColor?: string
}

const Dropdown = ({ placeholder, options, light, backgroundColor, initValue, onSelect }: PropsType) => {
  const ddRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(false)
  const [currentOption, setCurrentOption] = useState<IDropdownOption>(
    initValue?.label ? initValue : { label: placeholder, value: '' }
  )

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
    onSelect(option)
  }

  return (
    <DropdownContainer
      className="wv-b3 font-plexsans"
      ref={ddRef}
      selected={currentOption.label !== placeholder}
      light={light}
      backgroundColor={backgroundColor}
    >
      <div className="label" onClick={() => setShow(!show)}>
        <span className="label-text">{currentOption.label}</span>
        <img
          className="dropdown-arrow"
          src={`${prefix}/dropdown-arrow.svg`}
          alt="dropdown-arrow"
          style={{ transform: `${show ? 'rotate(180deg)' : 'none'}` }}
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
