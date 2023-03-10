import QuizGame from 'components/quiz/quizGame'
import QuizReminder from 'components/quiz/quizReminder'
import QuizEvent from 'components/quiz/quizEvent'
import { quiz_list } from 'data/quiz'
import Layout from 'components/layout'
import { useContext, useEffect, useRef, useState } from 'react'
import { IAnswer } from 'types/quiz'
import { GetStaticPaths, GetStaticProps } from 'next'
import GameStepModal from 'components/shared/modal/gameStepModal'
import { guideCard } from 'data/guide'
import TextfieldModal from 'components/shared/modal/textfiled'
import Ending from 'components/ending/ending'
import EventSubmitModal from 'components/shared/modal/eventSubmit'
import { AppContext } from 'store'
import PersonalModal from 'components/shared/modal/personal'
import Metadata from 'components/metadata'
import { IUserInformation } from 'store/userInfo'
import { IAnswerDB, IAnswerPostResponse } from 'types/response'
import { IPostAnswerBody, IPostOpinionBody } from 'types/request'
import { convertUserInfoToPerson, convertUserInfoToSchool } from 'utils'
import {
  getQuizAnswerApi,
  postOpinionAnswerApi,
  postQuizAnswerApi,
  postSchoolInfoApi,
  postUserInfoApi
} from 'utils/request'

interface PropsType {
  id: string
  // answerDBList: IAnswerDB[]
}

function Quiz({ id }: PropsType) {
  const defaultAns: IAnswer = {
    answer_text: '',
    question_id: -1,
    answer_id: -1
  }
  const [answerDBList, setAnswerDBList] = useState<IAnswerDB[]>([])
  const [openClassroomModel, setOpenClassroomModel] = useState<boolean>(false)
  const [openTextfieldModal, setOpenTextfieldModal] = useState<boolean>(false)
  const [openEventSubmitModal, setOpenEventSubmitModal] = useState<boolean>(false)
  const [openClassroomModel1, setOpenClassroomModel1] = useState<boolean>(false)
  const [openClassroomModel2, setOpenClassroomModel2] = useState<boolean>(false)
  const [showUserInfoModal, setShowUserInfoModal] = useState<boolean>(false)
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
    fetchAnswerDBLists(id)
    appContext.fetchAnswer()
    localStorage.removeItem('first-time-userinfo')
    appContext.userInfo.fetch()
    const userInfo = appContext.userInfo.state
    if (!userInfo.id && userInfo.has_set) {
      handleSubmitUserInfo(userInfo)
    }
    const localAns = window.localStorage[`quiz-answer-${currentQuiz.id}`]
    if (localAns) {
      const ansData = JSON.parse(localAns)
      setQuizAns(ansData)
      setRevealContent(true)
    }
    const handleScroll = () => {
      if (
        eventRef.current &&
        eventRef.current?.offsetTop - 10 < window.scrollY &&
        !localStorage['first-time-guide-2']
      ) {
        setOpenClassroomModel1(true)
        localStorage['first-time-guide-2'] = true
      }
      if (
        reminderRef.current &&
        reminderRef.current?.offsetTop - 10 < window.scrollY &&
        !localStorage['first-time-guide-3']
      ) {
        setOpenClassroomModel2(true)
        localStorage['first-time-guide-3'] = true
      }
      if (
        endingRef.current &&
        endingRef.current?.offsetTop - 10 < window.scrollY &&
        !localStorage.getItem('first-time-userinfo') &&
        !appContext.userInfo.state.has_set
      ) {
        setShowUserInfoModal(true)
        localStorage['first-time-userinfo'] = true
      }
    }
    if (!localStorage['first-time-guide-1']) {
      setOpenClassroomModel(true)
      localStorage['first-time-guide-1'] = true
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const fetchAnswerDBLists = async (id: string) => {
    const response = await getQuizAnswerApi(id)
    if (response) {
      setAnswerDBList(response.data.list)
    }
  }

  const sendFinalAnswer = async (ans: IAnswer) => {
    // send ans

    appContext.addAnswer(ans)
    setAnswerLocalStorage(ans)
    setRevealContent(true)
    if (!appContext.userInfo.state.has_set) {
      setShowUserInfoModal(true)
    }

    const userInfo = appContext.userInfo.state

    const payload: IPostAnswerBody = {
      choice_id: ans.answer_id.toString(),
      choice_text: ans.answer_text,
      nc_2j4n___question_id: ans.question_id
    }
    if (userInfo.type === 'person' && userInfo.id) {
      payload.nc_2j4n__user_info_id = userInfo.id
    } else if (userInfo.type === 'school' && userInfo.id) {
      payload.nc_2j4n___school_info_id = userInfo.id
    }
    const response = await postQuizAnswerApi(payload)
    if (response) {
      const ansDB = convertToAnswerDB(response.data)
      setAnswerDBList((curr) => [...curr, ansDB])
    }
  }

  const convertToAnswerDB = (ans: IAnswerPostResponse): IAnswerDB => {
    return {
      Id: ans.Id,
      choice_id: ans.choice_id,
      choice_text: ans.choice_text,
      user_info: {
        Id: ans['nc_2j4n__user_info_id'] || null,
        user_agent: ''
      },
      question: {
        Id: ans.nc_2j4n___question_id,
        topic: ''
      },
      question_id: ans.nc_2j4n___question_id
    }
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
    const finalAns: IAnswer = { ...quizAns, answer_text: ans }
    sendFinalAnswer(finalAns)
  }

  const onClickClassroomGuide1 = () => {
    setOpenClassroomModel1(true)
  }
  const onClickClassroomGuide2 = () => {
    setOpenClassroomModel2(true)
  }

  const handleSendEventAnswer = async (ans: string) => {
    const userInfo = appContext.userInfo.state
    const payload: IPostOpinionBody = {
      answer: ans,
      nc_2j4n___question_id: parseInt(id)
    }
    if (userInfo.type === 'person' && userInfo.id) {
      payload.nc_2j4n__user_info_id = userInfo.id
    } else if (userInfo.type === 'school' && userInfo.id) {
      payload.nc_2j4n___school_info_id = userInfo.id
    }
    await postOpinionAnswerApi(payload)
    setOpenEventSubmitModal(true)
  }

  const handleOncloseEventModal = () => {
    setOpenEventSubmitModal(false)
    if (!appContext.userInfo.state.has_set) {
      setShowUserInfoModal(true)
    }
  }

  const handlerApiUserInfo = async (userInfo: IUserInformation): Promise<IUserInformation> => {
    if (userInfo.type === 'person') {
      const payload = convertUserInfoToPerson(userInfo)
      const response = await postUserInfoApi(payload)
      if (response) {
        userInfo = { ...userInfo, id: response.data.Id }
      }
    } else {
      const payload = convertUserInfoToSchool(userInfo)
      const response = await postSchoolInfoApi(payload)
      if (response) {
        userInfo = { ...userInfo, id: response.data.Id }
      }
    }
    return userInfo
  }

  const handleSubmitUserInfo = async (userInfo: IUserInformation) => {
    let userInfoData = userInfo
    userInfo.user_agent = navigator.userAgent

    userInfoData = await handlerApiUserInfo(userInfo)

    appContext.userInfo.set(userInfoData)
    localStorage['user-info'] = JSON.stringify(userInfoData)
  }

  const gameStep = guideCard[0]
  const gameStep1 = guideCard[1]
  const gameStep2 = guideCard[2]

  const ogDescription = `????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? "${currentQuiz.title}" `

  return (
    <>
      <Metadata title="Democracy in School" description={ogDescription} imageSrc={currentQuiz.og_image_src} />
      <Layout>
        <div ref={gameRef}>
          <QuizGame
            answerDBList={answerDBList}
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
        <EventSubmitModal show={openEventSubmitModal} onClose={handleOncloseEventModal}></EventSubmitModal>
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
            setShowUserInfoModal(false)
          }}
          submitData={handleSubmitUserInfo}
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
