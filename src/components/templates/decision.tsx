import styled from 'styled-components'
import Image from 'next/image'
import Story from 'components/story/story'
import { useState } from 'react'
import Quiz from 'components/quiz/quiz'

const DecisionComponent = styled.div``

const Header = styled.div`
  padding: 40px 0px;
  text-align: center;

  @media (max-width: 420px) {
    max-width: 214px;
    padding: 20px 0px;
    margin: auto;
  }

  p {
    font-family: IBMPlexSansThai;
  }
`

const Body = styled.div`
  display: flex;
`

const Decision = () => {
  const [expand, setExpand] = useState<string>('center')

  return (
    <DecisionComponent>
      <Header>
        <p className="wv-h7">ชวนมาเรียนรู้และทดสอบความเข้าใจไปพร้อมๆกัน</p>
        <img src="pointing-hand.svg" alt="pointing-hand" width={32} height={48} style={{ marginTop: '8px' }} />
      </Header>
      <Body>
        <div
          style={{
            width: expand == 'left' ? '100%' : expand == 'center' ? '50%' : '0%',
            opacity: expand == 'right' ? '0' : '1',
            transition: 'width 2s, opacity 2s',
            overflow: 'hidden'
          }}
          onClick={() => {
            setExpand('left')
          }}
        >
          <Story expand={expand == 'left'}></Story>
        </div>
        <div
          style={{
            width: expand == 'right' ? '100%' : expand == 'center' ? '50%' : '0%',
            opacity: expand == 'left' ? '0' : '1',
            transition: 'width 2s, opacity 2s',
            overflow: 'hidden'
          }}
          onClick={() => {
            setExpand('right')
          }}
        >
          <Quiz expand={expand == 'right'}></Quiz>
        </div>
      </Body>
    </DecisionComponent>
  )
}

export default Decision
