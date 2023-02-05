import QuizGame from 'components/quiz/quizGame'
import QuizReminder from 'components/quiz/quizReminder'
import QuizEvent from 'components/quiz/quizEvent'
import { quiz_list } from 'data/quiz'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import { useEffect, useState } from 'react'
import { IQuiz } from 'types/quiz'
import { GetStaticPaths, GetStaticProps } from 'next'
import GameStepModal from 'components/shared/modal/gameStepModal'
import { guideCard } from 'data/guide'
import TextfieldModal from 'components/shared/modal/textfiled'

interface PropsType {
  id: string
}

function Quiz({ id }: PropsType) {
  const [openClassroomModel, setOpenClassroomModel] = useState<boolean>(false)
  const [openTextfieldModal, setOpenTextfieldModal] = useState<boolean>(false)
  const currentQuiz = quiz_list.find((q) => q.id.toString() === id) || quiz_list[0]
  const onClickClassroomGuide = () => {
    setOpenClassroomModel(true)
  }

  const submitOtherAnswer = (ans: string) => {
    console.log('other => ', ans)
  }

  const gameStep = guideCard[0]

  return (
    <Layout>
      <QuizGame
        openTextFieldModal={() => setOpenTextfieldModal(true)}
        onClickClassroomGuide={onClickClassroomGuide}
        quiz={currentQuiz}
      />
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
