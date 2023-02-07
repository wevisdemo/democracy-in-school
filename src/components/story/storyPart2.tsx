import styled from 'styled-components'
import Lottie from 'lottie-react'
import Hand1 from 'assets/lotties/illus_hand_1.json'
import Hand2 from 'assets/lotties/illus_hand_2.json'
import Hand3 from 'assets/lotties/illus_hand_3.json'
import { useEffect, useRef, useState } from 'react'
import { prefix } from 'utils'

const StoryPart2Container = styled.div`
  position: relative;
  width: 100%;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aligm-items: center;
  text-align: center;
  // overflow: hidden;

  .fixed-content {
    width: 100%;
    height: 100vh;
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url('${prefix}/background/bg_white.01.png');
    overflow: hidden;

    .lottie {
      // position: absolute;
      min-height: 100vh;
      width: 60%;
      // bottom: 10px;
      // left: 50%;
      // transform: translate(-50%, 0);
      @media (max-width: 420px) {
        width: 150%;
      }
    }
  }

  .title {
    margin-top: 92px;
  }

  .content {
    overflow: auto;

    .blank {
      height: 100vh;
    }
  }

  .event-screen {
    width: 100%;
    height: 100vh;
  }

  .bubble-wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    // top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: #ffffff4d;

    .bubble {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-radius: 360px;
      width: 360px;
      height: 360px;
      background: #22c0e8;
      z-index: 20;

      .text-bubble {
        max-width: 310px;
      }
    }
  }
`

// todo: clean css this

const StoryPart2 = () => {
  const lottieList = [Hand1, Hand2, Hand3]
  const [lottieIndex, setLottieIndex] = useState(0)
  const myRef = useRef<HTMLDivElement>(null)
  const eventRef1 = useRef<HTMLDivElement>(null)
  const eventRef2 = useRef<HTMLDivElement>(null)
  const eventRef3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('set cceee')
  }, [myRef.current?.offsetTop])

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY, myRef.current?.offsetTop, eventRef1.current?.offsetTop, eventRef2.current?.offsetTop)
      if (
        myRef.current &&
        eventRef1.current &&
        myRef.current?.offsetTop > 0 &&
        myRef.current?.offsetTop < eventRef1.current?.offsetTop
      ) {
        setLottieIndex(0)
      } else if (
        myRef.current &&
        eventRef1.current &&
        eventRef2.current &&
        myRef.current?.offsetTop > eventRef1.current?.offsetTop &&
        myRef.current?.offsetTop < eventRef2.current?.offsetTop
      ) {
        setLottieIndex(1)
      } else if (myRef.current && eventRef2.current && myRef.current?.offsetTop >= eventRef2.current?.offsetTop) {
        setLottieIndex(2)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const onClickPage = () => {
    setLottieIndex((curr) => (curr + 1) % lottieList.length)
  }

  return (
    <StoryPart2Container onClick={onClickPage}>
      <div className="fixed-content" ref={myRef}>
        <h5 className="title wv-h5 wv-font-kondolar">ยกตัวอย่างเช่น</h5>
        <Lottie className="lottie" animationData={lottieList[lottieIndex]} autoplay={true} loop={true} />
      </div>
      <div
        className="bubble-wrapper"
        onScroll={() => {
          console.log('scroll')
        }}
      >
        <div className="bubble bubble-1">
          <div className="text-bubble">
            <p className=" wv-b2 font-plexsans">ถ้าเรามีความคิดเห็น ต่อการทำงานของรัฐบาล</p>
            <p className="wv-b2 font-plexsans-bold">
              เราอาจโพสต์ หรือ แชร์ข้อความ ไปคุยกับเพื่อนซึ่งนี่คือสิทธิในการแสดงออก
            </p>
          </div>
        </div>
      </div>
      <div className="event-screen" ref={eventRef1} />
      <div className="bubble-wrapper">
        <div className="bubble bubble-2">
          <div className="text-bubble">
            <p className=" wv-b2 font-plexsans">เมื่อไหร่ก็ตามที่เราถูกห้าม ถูกห้ามไม่ให้แสดงความคิดเห็น</p>
            <p className="wv-b2 font-plexsans-bold">เราจะรับรู้ถึงเสรีภาพ ที่หายไป</p>
          </div>
        </div>
      </div>
      <div className="event-screen" ref={eventRef2} />
      <div className="bubble-wrapper">
        <div className="bubble bubble-3">
          <div className="text-bubble">
            <p className=" wv-b2 font-plexsans">เปรียบเหมือนอากาศ</p>
            <p className="wv-b2 font-plexsans-bold">เราจะไม่รับรู้ว่าเราไม่มีอากาศ จนกว่าเราจะไม่มีอากาศหายใจ</p>
          </div>
        </div>
      </div>
    </StoryPart2Container>
  )
}

export default StoryPart2
