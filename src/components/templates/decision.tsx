import styled from 'styled-components'
import Image from 'next/image'
import Story from 'components/story/story'

const DecisionComponent = styled.div``

const Header = styled.div`
  padding: 40px 0px;
  text-align: center;
  p {
    font-family: IBMPlexSansThai;
  }
`

const Body = styled.div``

const Decision = () => {
  return (
    <DecisionComponent>
      <Header>
        <p className="wv-h7">ชวนมาเรียนรู้และทดสอบความเข้าใจไปพร้อมๆกัน</p>
        <Image src="/pointing-hand.svg" alt="pointing-hand" width={32} height={48} style={{ marginTop: '8px' }} />
      </Header>
      <Body>
        <Story></Story>
      </Body>
    </DecisionComponent>
  )
}

export default Decision
