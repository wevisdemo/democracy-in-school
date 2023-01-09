import styled from 'styled-components'
import { IQuizReminder } from 'types/quiz'
import WvSharer from '@wevisdemo/ui/react/sharer'
import Link from 'next/link'

const Container = styled.div`
  width: 100%;
  position: relative;
  background-image: url('/background/bg_black.01.png');
  background-repeat: repeat;
`

const ContentContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  .bg-image {
    width: 100%;
    height: 100vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    opacity: 0.5;
  }
`

const TextContentContainer = styled.div`
  text-align: center;
  padding: 52px 80px;
  margin: auto 10px;
  max-width: 1042px;
  background: #000000cc;
  border-radius: 2px;
  position: relative;

  .topic {
    margin-top: 20px;
  }

  .paragraph-item {
    margin-top: 30px;
  }
`

const Footer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: IBMPlexSansThai;

  .back-to-quiz {
    padding: 8px 18px;
    border: 1px solid white;
    background: transparent;

    :hover {
      cursor: pointer;
      background: white;
      color: black;
    }
  }

  ul {
    margin-top: 20px;
    list-style-position: outside;
  }

  li {
    text-align: left;
    max-width: 740px;
  }

  .back-to-story {
    margin-top: 24px;
  }
`

const ShareContainer = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background: #00000080;
  max-width: 910px;
  padding: 32px 20px;

  .share-topic {
    margin-bottom: 24px;
  }
`

interface PropsType {
  reminder: IQuizReminder
  quizAmount: number
}

const QuizReminder = ({ reminder, quizAmount }: PropsType) => {
  return (
    <Container>
      <ContentContainer>
        <div className="bg-image" style={{ backgroundImage: `url(${reminder.cover_url})`, width: '100%' }}></div>
        <TextContentContainer>
          <h6 className="wv-h6 wv-font-kondolar color-yellow">เหตุการณ์นี้…บอกอะไร?</h6>
          <p className="wv-b2 font-plexsans-bold color-white topic">{reminder.topic}</p>
          {reminder.paragraphs.map((item, index) => {
            return (
              <p
                className="wv-b2 font-plexsans paragraph-item"
                style={{ color: item.color }}
                key={`paragraph-${index}`}
              >
                {item.text}
              </p>
            )
          })}
        </TextContentContainer>
      </ContentContainer>
      <Footer>
        <h6 className="wv-h6 wv-font-kondolar color-white">คำถามชวนคิดต่อ</h6>
        <ul>
          <li className="wv-b2 color-white">{reminder.question}</li>
        </ul>
        <ShareContainer className="wv-b2">
          <p>แชร์เพื่อชวนคุย</p>
          <p className="share-topic">
            เรื่อง <span className="color-yellow">“{reminder.shared_topic}”</span>
          </p>
          <WvSharer url="https://wevis.info" light />
        </ShareContainer>
        <div className="wv-h5 wv-font-kondolar wv-font-bold color-white back-to-quiz">
          กลับไป Quiz{' '}
          <span className="wv-b2" style={{ fontWeight: 'normal' }}>
            (เหลือ {quizAmount || 0}/10 ข้อ)
          </span>
        </div>
        <Link href="/" className="font-plex-sans wv-h7 back-to-story">
          เข้าใจเรื่องสิทธิ
        </Link>
      </Footer>
    </Container>
  )
}

export default QuizReminder
