import Layout from 'components/layout'
import QuizEvent from 'components/quiz/quizEvent'
import QuizReminder from 'components/quiz/quizReminder'
import GameStepModal from 'components/shared/modal/gameStepModal'
import { guideCard } from 'data/guide'
import { quiz_list } from 'data/quiz'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface PropsType {
  id: string
}

function QuizReminderPage({ id }: PropsType) {
  const [openClassroomModel, setOpenClassroomModel] = useState<boolean>(false)
  const currentQuiz = quiz_list.find((q) => q.id.toString() === id) || quiz_list[0]

  const onClickClassroomGuide = () => {
    setOpenClassroomModel(true)
  }

  const gameStep = guideCard[2]

  return (
    <Layout>
      <GameStepModal show={openClassroomModel} setShow={setOpenClassroomModel} guideCard={gameStep}></GameStepModal>
      <QuizReminder quizAmount={8} reminder={currentQuiz.reminder} onClickClassroomGuide={onClickClassroomGuide} />
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

export default QuizReminderPage
