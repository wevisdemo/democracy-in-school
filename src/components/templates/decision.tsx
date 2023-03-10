import styled from 'styled-components'
const Story = React.lazy(() => import('components/story/story'))
import { Suspense, useState } from 'react'
import Quiz from 'components/quiz/quiz'
import { prefix } from 'utils'
import WelcomeSelector from 'components/shared/welcomeSelector'
import QuizSelector from 'components/quiz/selector/quizSelector'
import { quiz_list } from 'data/quiz'
import React from 'react'

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
  min-height: 100vh;
  flex-direction: column;

  .choice-wrapper {
    display: flex;
    @media (max-width: 420px) {
      flex-direction: column;
    }
  }
`

const LeftDecisionWrapper = styled.div<{ expand: string }>`
  width: ${(props) => (props.expand == 'left' ? '100%' : props.expand == 'center' ? '50%' : '0%')};
  opacity: ${(props) => (props.expand == 'right' ? 0 : 1)};
  transition: all 2s;
  overflow: hidden;
  cursor: ${(props) => (props.expand == 'center' ? 'pointer' : 'unset')};

  @media (max-width: 420px) {
    width: 100%;
    height: ${(props) => (props.expand == 'left' ? '100%' : props.expand == 'center' ? '50%' : '0%')};
  }
`

const RightDecisionWrapper = styled.div<{ expand: string }>`
  width: ${(props) => (props.expand == 'right' ? '100%' : props.expand == 'center' ? '50%' : '0%')};
  opacity: ${(props) => (props.expand == 'left' ? 0 : 1)};
  transition: all 2s;
  overflow: hidden;
  cursor: ${(props) => (props.expand == 'center' ? 'pointer' : 'unset')};

  @media (max-width: 420px) {
    width: 100%;
    height: ${(props) => (props.expand == 'right' ? '100%' : props.expand == 'center' ? '50%' : '0%')};
  }
`

const Decision = () => {
  const [expand, setExpand] = useState<string>('center')

  return (
    <DecisionComponent>
      <Header>
        <p className="wv-h7">ชวนมาเรียนรู้และทดสอบความเข้าใจไปพร้อมๆกัน</p>
        <img
          src={`${prefix}/pointing-hand.svg`}
          alt="pointing-hand"
          width={32}
          height={48}
          style={{ marginTop: '8px' }}
        />
      </Header>
      <Body>
        <div className="choice-wrapper">
          <LeftDecisionWrapper
            expand={expand}
            onClick={() => {
              setExpand('left')
            }}
          >
            <WelcomeSelector
              type="story"
              action={expand === 'left' ? 'expand' : expand === 'right' ? 'shrink' : 'center'}
              expand={expand == 'left'}
            ></WelcomeSelector>
          </LeftDecisionWrapper>
          <RightDecisionWrapper
            expand={expand}
            onClick={() => {
              setExpand('right')
            }}
          >
            <WelcomeSelector
              type="quiz"
              action={expand === 'right' ? 'expand' : expand === 'left' ? 'shrink' : 'center'}
              expand={expand == 'right'}
            ></WelcomeSelector>
          </RightDecisionWrapper>
        </div>
        {expand === 'left' && (
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <Story />
              <Quiz expand={true} action={'expand'} />
            </Suspense>
          </>
        )}
        {expand === 'right' && <QuizSelector quizList={quiz_list} />}
      </Body>
    </DecisionComponent>
  )
}

export default Decision
