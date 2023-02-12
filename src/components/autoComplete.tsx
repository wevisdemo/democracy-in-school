import { Fragment, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { IDropdownOption } from 'types/shared'
import { prefix } from 'utils'

interface PropsType {
  title: string
  options: IDropdownOption[]
  placeholder: string
  onSelect: (i: IDropdownOption) => void
  light?: boolean
  backgroundColor?: string
  initValue?: IDropdownOption
}

const OptionListComponent = (props: {
  onSelect: (i: IDropdownOption) => void
  options: IDropdownOption[]
  isShow: boolean
  setIsShow: (v: boolean) => void
}) => {
  return (
    <Fragment>
      {props.isShow && (
        <div className="option-wrapper">
          {props.options.length <= 0 && <p className="font-body text-left text-[12pt]">ไม่พบข้อมูล</p>}
          {props.options.map((option, index) => {
            return (
              <div
                id={`options-${index}`}
                key={`dd-option-${index}`}
                className="option"
                onClick={() => props.onSelect(option)}
              >
                {option.label}
              </div>
            )
          })}
        </div>
      )}
    </Fragment>
  )
}

interface IComponentProps {
  light?: boolean
  backgroundColor?: string
  selected: boolean
}

const AutoCompleteContainer = styled.div<IComponentProps>`
  position: relative;

  .label {
    padding: 4px 20px;
    display: flex;
    justify-content: space-between;
    border: 3px solid;
    border-color: ${(props) => (props.light ? '#FFF' : '#000')};
    border-radius: 2px;
    cursor: pointer;

    .label-text {
      outline: none;
      border: none;
      background: transparent;
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
    text-align: left;
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

export function AutoComplete(props: PropsType) {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [value, setValue] = useState<string>(props.initValue ? props.initValue.label : '')
  const [showList, setShowList] = useState<boolean>(true)
  const [displayOptions, setDisplayOptions] = useState<IDropdownOption[]>(props.options)

  useEffect(() => {
    const concernedElement = document.querySelector('#search-bar')
    const handleMouseDown = (event: MouseEvent) => {
      if (concernedElement?.contains((event.target as Node) || null)) {
      } else {
        setIsShow(false)
        setShowList(true)
      }
    }

    document.addEventListener('mousedown', handleMouseDown, true)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown, true)
    }
  }, [])

  useEffect(() => {
    if (!showList) {
      const regex = new RegExp(value.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'), 'igm')
      const options = props.options.filter((option) => option.value.match(regex))
      setDisplayOptions(options)
    } else {
      setDisplayOptions(props.options)
    }
  }, [value, props.options, showList])

  const onClickDD = () => {
    if (!isShow) {
      setIsShow(true)
      setShowList(true)
    }
  }

  const onClickArrow = () => {
    if (isShow) {
      setIsShow(false)
      setShowList(true)
    }
  }

  return (
    <AutoCompleteContainer
      className="wv-b3 font-plexsans"
      light={props.light}
      backgroundColor={props.backgroundColor}
      selected={true}
      id="search-bar"
    >
      <div className="label" onClick={() => onClickDD()}>
        <input
          placeholder={props.placeholder}
          type="text"
          className="label-text font-plexsans wv-b3"
          value={value}
          onChange={(e) => {
            setShowList(false)
            setValue(e.target.value)
          }}
        />
        <img
          className="dropdown-arrow"
          src={`${prefix}/dropdown-arrow.svg`}
          alt="dropdown-arrow"
          style={{ transform: `${isShow ? 'rotate(180deg)' : ''}` }}
          onClick={() => onClickArrow()}
        />
      </div>
      <OptionListComponent
        onSelect={(i) => {
          setValue(i.value)
          setIsShow(false)
          props.onSelect(i)
        }}
        options={displayOptions}
        isShow={isShow}
        setIsShow={setIsShow}
      />
    </AutoCompleteContainer>
  )
}
