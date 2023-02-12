import EventSubmitModal from 'components/shared/modal/eventSubmit'
import GameStepModal from 'components/shared/modal/gameStepModal'
import PersonalModal from 'components/shared/modal/personal'
import VideoModal from 'components/shared/modal/video'
import { useState } from 'react'
import styled from 'styled-components'
import { guideCard } from 'data/guide'
import TextfieldModal from 'components/shared/modal/textfiled'
import { prefix } from 'utils'
import StoryPart2 from 'components/story/storyPart2'
import { province } from 'data/dropdown'
import { IDropdownOption } from 'types/shared'
import { AutoComplete } from 'components/autoComplete'

const MainComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('${prefix}/background/bg_white.01.png');

  .wrapper {
    width: 200px;
  }
`

function Example() {
  const [showModal, setShowModal] = useState<boolean>(true)
  const options: IDropdownOption[] = province.map((p) => ({ label: p, value: p }))

  return (
    <MainComponent>
      <div className="wrapper">
        <AutoComplete placeholder="พิมพ์ชื่อจังหวัด..." title="" options={options} onSelect={(i) => {}}></AutoComplete>
      </div>
    </MainComponent>
  )
}

export default Example
