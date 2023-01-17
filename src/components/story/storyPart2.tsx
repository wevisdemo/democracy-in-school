import styled from 'styled-components'
import Lottie from 'lottie-react'
import Hand1 from 'assets/lotties/illus_hand_1.json'
import Hand2 from 'assets/lotties/illus_hand_2.json'
import Hand3 from 'assets/lotties/illus_hand_3.json'
import { useState } from 'react'

const StoryPart2Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  .lottie {
    position: absolute;
    width: 60%;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .title {
    margin-top: 92px;
  }

  .bubble {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 360px;
    width: 360px;
    height: 360px;
    position: absolute;
    background: #22c0e8;
    z-index: 20;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .text-bubble {
      max-width: 310px;
    }
  }
`

const StoryPart2 = () => {
  const lottieList = [Hand1, Hand2, Hand3]
  const [lottieIndex, setLottieIndex] = useState(0)

  const onClickPage = () => {
    setLottieIndex((curr) => (curr + 1) % lottieList.length)
  }

  return (
    <StoryPart2Container onClick={onClickPage}>
      <h5 className="title wv-h5 wv-font-kondolar">ยกตัวอย่างเช่น</h5>
      <div className="bubble bubble-1">
        <div className="text-bubble">
          <p className=" wv-b2 font-plexsans">ถ้าเรามีความคิดเห็น ต่อการทำงานของรัฐบาล</p>
          <p className="wv-b2 font-plexsans-bold">
            เราอาจโพสต์ หรือ แชร์ข้อความ ไปคุยกับเพื่อนซึ่งนี่คือสิทธิในการแสดงออก
          </p>
        </div>
      </div>
      <div className="bubble bubble-2">
        <div className="text-bubble">
          <p className=" wv-b2 font-plexsans">เมื่อไหร่ก็ตามที่เราถูกห้าม ถูกห้ามไม่ให้แสดงความคิดเห็น</p>
          <p className="wv-b2 font-plexsans-bold">เราจะรับรู้ถึงเสรีภาพ ที่หายไป</p>
        </div>
      </div>
      <div className="bubble bubble-3">
        <div className="text-bubble">
          <p className=" wv-b2 font-plexsans">เปรียบเหมือนอากาศ</p>
          <p className="wv-b2 font-plexsans-bold">เราจะไม่รับรู้ว่าเราไม่มีอากาศ จนกว่าเราจะไม่มีอากาศหายใจ</p>
        </div>
      </div>
      <Lottie animationData={lottieList[lottieIndex]} autoplay={true} loop={true} className="lottie"></Lottie>
    </StoryPart2Container>
  )
}

export default StoryPart2
