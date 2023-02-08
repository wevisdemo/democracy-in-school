import Ending from 'components/ending/ending'
import Layout from 'components/layout'
import QuizEvent from 'components/quiz/quizEvent'
import QuizReminder from 'components/quiz/quizReminder'
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

function QuizEventPage({ id }: PropsType) {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [openClassroomModel1, setOpenClassroomModel1] = useState<boolean>(false)
  const [openClassroomModel2, setOpenClassroomModel2] = useState<boolean>(false)

  const currentQuiz = quiz_list.find((q) => q.id.toString() === id) || quiz_list[0]

  const handleSendAnswer = (ans: string): void => {
    setShowModal(true)
  }
  const onClickClassroomGuide1 = () => {
    setOpenClassroomModel1(true)
  }
  const onClickClassroomGuide2 = () => {
    setOpenClassroomModel2(true)
  }

  const gameStep1 = guideCard[1]
  const gameStep2 = guideCard[2]

  return (
    <Layout>
      <QuizEvent
        onClickClassroomGuide={onClickClassroomGuide1}
        event={currentQuiz.event}
        sendAnswer={handleSendAnswer}
      />
      <QuizReminder
        quizId={currentQuiz.id}
        reminder={currentQuiz.reminder}
        onClickClassroomGuide={onClickClassroomGuide2}
      />
      <Ending />
      <EventSubmitModal show={showModal} setShow={setShowModal}></EventSubmitModal>
      <GameStepModal show={openClassroomModel1} setShow={setOpenClassroomModel1} guideCard={gameStep1}></GameStepModal>
      <GameStepModal show={openClassroomModel2} setShow={setOpenClassroomModel2} guideCard={gameStep2}></GameStepModal>
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
