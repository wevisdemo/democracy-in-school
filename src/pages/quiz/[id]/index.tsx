import QuizGame from 'components/quiz/quizGame'
import QuizReminder from 'components/quiz/quizReminder'
import QuizEvent from 'components/quiz/quizEvent'
import { quiz_list } from 'data/quiz'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import { useEffect, useState } from 'react'
import { IAnswer, IQuiz } from 'types/quiz'
import { GetStaticPaths, GetStaticProps } from 'next'
import GameStepModal from 'components/shared/modal/gameStepModal'
import { guideCard } from 'data/guide'
import TextfieldModal from 'components/shared/modal/textfiled'
import Ending from 'components/ending/ending'
import EventSubmitModal from 'components/shared/modal/eventSubmit'

interface PropsType {
  id: string
}

function Quiz({ id }: PropsType) {
  const defaultAns: IAnswer = {
    question_id: -1,
    answer_id: -1
  }

  const [openClassroomModel, setOpenClassroomModel] = useState<boolean>(false)
  const [openTextfieldModal, setOpenTextfieldModal] = useState<boolean>(false)
  const [openEventSubmitModal, setOpenEventSubmitModal] = useState<boolean>(false)
  const [openClassroomModel1, setOpenClassroomModel1] = useState<boolean>(false)
  const [openClassroomModel2, setOpenClassroomModel2] = useState<boolean>(false)
  const [revealContent, setRevealContent] = useState<boolean>(false)
  const [quizAns, setQuizAns] = useState<IAnswer>(defaultAns)
  const currentQuiz = quiz_list.find((q) => q.id.toString() === id) || quiz_list[0]
  const onClickClassroomGuide = () => {
    setOpenClassroomModel(true)
  }

  const sendFinalAnswer = (ans: IAnswer) => {
    // send ans
    setRevealContent(true)
  }

  const selectAnswer = (ans: IAnswer) => {
    if (ans.answer_id !== 6) {
      sendFinalAnswer(ans)
    }
    setQuizAns(ans)
  }

  const submitOtherAnswer = (ans: string) => {
    const finalAns: IAnswer = { ...quizAns, optional_answer: ans }
    sendFinalAnswer(finalAns)
  }

  const onClickClassroomGuide1 = () => {
    setOpenClassroomModel1(true)
  }
  const onClickClassroomGuide2 = () => {
    setOpenClassroomModel2(true)
  }

  const handleSendEventAnswer = (ans: string): void => {
    console.log(ans)
    setOpenEventSubmitModal(true)
  }

  // TODO: close all modal

  const gameStep = guideCard[0]
  const gameStep1 = guideCard[1]
  const gameStep2 = guideCard[2]

  return (
    <Layout>
      <QuizGame
        openTextFieldModal={() => setOpenTextfieldModal(true)}
        onClickClassroomGuide={onClickClassroomGuide}
        quiz={currentQuiz}
        selectAnswer={selectAnswer}
      />
      {revealContent && (
        <>
          <QuizEvent
            onClickClassroomGuide={onClickClassroomGuide1}
            event={currentQuiz.event}
            sendAnswer={handleSendEventAnswer}
          />
          <QuizReminder quizAmount={8} reminder={currentQuiz.reminder} onClickClassroomGuide={onClickClassroomGuide2} />
          <Ending />
        </>
      )}
      <EventSubmitModal show={openEventSubmitModal} setShow={setOpenEventSubmitModal}></EventSubmitModal>
      <GameStepModal show={openClassroomModel1} setShow={setOpenClassroomModel1} guideCard={gameStep1}></GameStepModal>
      <GameStepModal show={openClassroomModel2} setShow={setOpenClassroomModel2} guideCard={gameStep2}></GameStepModal>

      <GameStepModal show={openClassroomModel} setShow={setOpenClassroomModel} guideCard={gameStep} />
      <TextfieldModal
        submitOtherAnswer={submitOtherAnswer}
        show={openTextfieldModal}
        setShow={setOpenTextfieldModal}
      ></TextfieldModal>
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

export default Quiz
