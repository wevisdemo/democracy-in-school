import { ReactNode } from 'react'
import styled from 'styled-components'
import { prefix } from 'utils'

const MainComponent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: url('${prefix}/background/bg_white.01.png');
`

interface PropsType {
  children: ReactNode
  onClick?: () => void
  modalOpen?: boolean
}

export default function Layout({ children, onClick }: PropsType) {
  return (
    <MainComponent className="main-component" onClick={onClick}>
      {children}
    </MainComponent>
  )
}
