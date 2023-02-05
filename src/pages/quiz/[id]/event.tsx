import Layout from 'components/layout'
import QuizEvent from 'components/quiz/quizEvent'
import EventSubmitModal from 'components/shared/modal/eventSubmit'
import GameStepModal from 'components/shared/modal/gameStepModal'
import { guideCard } from 'data/guide'
import { quiz_list } from 'data/quiz'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'

interface PropsType {
  id: string
}

const QuizEventPageComponent = styled.div`
  position relative;
`

function QuizEventPage({ id }: PropsType) {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [openClassroomModel, setOpenClassroomModel] = useState<boolean>(false)

  const currentQuiz = quiz_list.find((q) => q.id.toString() === id) || quiz_list[0]

  const handleSendAnswer = (ans: string): void => {
    console.log(ans)
    setShowModal(true)
  }
  const onClickClassroomGuide = () => {
    setOpenClassroomModel(true)
  }

  const gameStep = guideCard[1]

  return (
    <Layout>
      <QuizEvent
        onClickClassroomGuide={onClickClassroomGuide}
        event={currentQuiz.event}
        sendAnswer={handleSendAnswer}
      ></QuizEvent>
      <EventSubmitModal show={showModal} setShow={setShowModal}></EventSubmitModal>
      <GameStepModal show={openClassroomModel} setShow={setOpenClassroomModel} guideCard={gameStep}></GameStepModal>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const idList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  const paths = idList.map((id) => {
    return {
      params: { id }
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<PropsType> = (context) => {
  const id = context.params?.id?.toString() || ''
  return {
    props: {
      id
    }
  }
}

export default QuizEventPage
