import QuizGame from 'components/quiz/quizGame'
import QuizReminder from 'components/quiz/quizReminder'
import QuizEvent from 'components/quiz/quizEvent'
import { quiz_list } from 'data/quiz'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import { useContext, useEffect, useRef, useState } from 'react'
import { IAnswer, IQuiz } from 'types/quiz'
import { GetStaticPaths, GetStaticProps } from 'next'
import GameStepModal from 'components/shared/modal/gameStepModal'
import { guideCard } from 'data/guide'
import TextfieldModal from 'components/shared/modal/textfiled'
import Ending from 'components/ending/ending'
import EventSubmitModal from 'components/shared/modal/eventSubmit'
import { AppContext } from 'store'
import PersonalModal from 'components/shared/modal/personal'
import Metadata from 'components/metadata'

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
  const [showUserInfoModal, setShowUserInfoModal] = useState<boolean>(false)
  const [userInfoFT, setUserInfoFT] = useState<boolean>(true)
  const [revealContent, setRevealContent] = useState<boolean>(false)
  const [quizAns, setQuizAns] = useState<IAnswer>(defaultAns)
  const gameRef = useRef<HTMLDivElement>(null)
  const eventRef = useRef<HTMLDivElement>(null)
  const reminderRef = useRef<HTMLDivElement>(null)
  const endingRef = useRef<HTMLDivElement>(null)
  const appContext = useContext(AppContext)
  const currentQuiz = quiz_list.find((q) => q.id.toString() === id) || quiz_list[0]
  const onClickClassroomGuide = () => {
    setOpenClassroomModel(true)
  }

  useEffect(() => {
    appContext.fetchAnswer()
    const localAns = window.localStorage[`quiz-answer-${currentQuiz.id}`]
    if (!localAns) {
      return
    }
    const ansData = JSON.parse(localAns)
    setQuizAns(ansData)
    setRevealContent(true)
    const handleScroll = () => {
      if (
        eventRef.current &&
        // eventRef.current?.offsetTop < window.scrollY + 10 &&
        eventRef.current?.offsetTop - 10 < window.scrollY &&
        !localStorage['first-time-guide-2']
      ) {
        setOpenClassroomModel1(true)
        localStorage['first-time-guide-2'] = true
      }
      if (
        reminderRef.current &&
        // reminderRef.current?.offsetTop < window.scrollY + 10 &&
        reminderRef.current?.offsetTop - 10 < window.scrollY &&
        !localStorage['first-time-guide-3']
      ) {
        setOpenClassroomModel2(true)
        localStorage['first-time-guide-3'] = true
      }
      if (
        endingRef.current &&
        // endingRef.current?.offsetTop < window.scrollY + 10 &&
        endingRef.current?.offsetTop - 10 < window.scrollY &&
        !localStorage['first-time-userinfo']
      ) {
        console.log(userInfoFT)
        setShowUserInfoModal(true)
        localStorage['first-time-userinfo'] = true
      }
    }
    localStorage.removeItem('first-time-userinfo')
    if (!localStorage['first-time-guide-1']) {
      setOpenClassroomModel(true)
      localStorage['first-time-guide-1'] = true
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const sendFinalAnswer = (ans: IAnswer) => {
    // send ans
    appContext.addAnswer(ans)
    setAnswerLocalStorage(ans)
    setRevealContent(true)
  }

  const setAnswerLocalStorage = (ans: IAnswer) => {
    const payload = JSON.stringify(ans)
    window.localStorage[`quiz-answer-${ans.question_id}`] = payload
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
    <>
      <Metadata title={currentQuiz.title} description={currentQuiz.question} imageSrc={currentQuiz.og_image_src} />
      <Layout>
        <div ref={gameRef}>
          <QuizGame
            isReveal={revealContent}
            openTextFieldModal={() => setOpenTextfieldModal(true)}
            onClickClassroomGuide={onClickClassroomGuide}
            quiz={currentQuiz}
            selectAnswer={selectAnswer}
            answer={quizAns}
          />
        </div>
        {revealContent && (
          <>
            <div ref={eventRef}>
              <QuizEvent
                onClickClassroomGuide={onClickClassroomGuide1}
                event={currentQuiz.event}
                sendAnswer={handleSendEventAnswer}
              />
            </div>
            <div ref={reminderRef}>
              <QuizReminder
                quizId={currentQuiz.id}
                reminder={currentQuiz.reminder}
                onClickClassroomGuide={onClickClassroomGuide2}
              />
            </div>
            <div ref={endingRef}>
              <Ending />
            </div>
          </>
        )}
        <EventSubmitModal show={openEventSubmitModal} setShow={setOpenEventSubmitModal}></EventSubmitModal>
        <GameStepModal
          show={openClassroomModel1}
          setShow={setOpenClassroomModel1}
          guideCard={gameStep1}
        ></GameStepModal>
        <GameStepModal
          show={openClassroomModel2}
          setShow={setOpenClassroomModel2}
          guideCard={gameStep2}
        ></GameStepModal>
        <GameStepModal show={openClassroomModel} setShow={setOpenClassroomModel} guideCard={gameStep} />
        <TextfieldModal
          submitOtherAnswer={submitOtherAnswer}
          show={openTextfieldModal}
          setShow={setOpenTextfieldModal}
        />
        <PersonalModal
          show={showUserInfoModal}
          onClose={() => {
            setUserInfoFT(false)
            setShowUserInfoModal(false)
          }}
        />
      </Layout>
    </>
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
