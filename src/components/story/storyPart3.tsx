import styled from 'styled-components'
import Lottie from 'lottie-react'
import Illus from 'assets/lotties/illus_iccpr.json'
import PointingButton from 'components/shared/pointerButton'
import { story_list } from 'data/story'
import Paper from './paper'
import { prefix } from 'utils'
import { useRouter } from 'next/router'

const StroyPart3Container = styled.div`
  padding: 132px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 48px 10px;
  }

  .text-wrapper-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 766px;
    text-align: center;
    *:not(:first-child) {
      margin-top: 12px;
    }
  }

  .pointing-button {
    margin-top: 16px;
  }

  .text-3 {
    max-width: 676px;
  }

  .text-4 {
    margin-top: 36px;
    max-width: 676px;
  }

  .flex-arrow {
    margin-top: 80px;

    @media (max-width: 1024px) {
      margin-top: 32px;
    }
  }
`

const PaperWrapper = styled.div<{ index: number }>`
  max-width: 100%;
  padding: 10px;
  margin: 40px auto;
  transform: rotate(${(props) => (props.index % 2 == 0 ? '1deg' : '-1deg')});
  @media (max-width: 1024px) {
    margin: 24px auto;
    transform: unset;
  }
`

const StoryPart3 = () => {
  const router = useRouter()
  const onClickButton = () => {
    window.open('https://wevis.info/iccpr/', '_blank')
  }
  return (
    <StroyPart3Container>
      <div className="text-wrapper-1">
        <p className="wv-b2 font-plexsans">
          สิทธิและเสรีภาพเป็นของเราโดยธรรมชาติ ทุกคนมีสิ่งนี้ติดตัวมาตั้งแต่เกิด ถือเป็นเรื่องสำคัญในสังคม
        </p>
        <p className="wv-h6 wv-font-kondolar">
          สิทธิเสรีภาพเหล่านี้มีมาตรฐานสากลตามกติการะหว่างประเทศว่าด้วยสิทธิพลเมืองและสิทธิทางการเมือง
          (ICCPR)เป็นเหมือนข้อตกลงของโลก หรือหลักการที่ยอมรับร่วมกันทั่วโลก
        </p>
        <Lottie animationData={Illus} autoplay={true} loop={true} className="lottie"></Lottie>
        <p className="wv-font-kondolar wv-h6 text-3">
          ซึ่งไทยเป็นหนึ่งในรัฐภาคี ที่รับรองว่า จะเคารพกติกาเรื่องสิทธิเสรีภาพของทุกคน และไม่เลือกปฏิบัติ
        </p>
      </div>
      <div className="pointing-button">
        <PointingButton onClickButton={onClickButton} text="อ่านหลักการของ ICCPR" fill="white"></PointingButton>
      </div>
      <h6 className="wv-h6 wv-font-kondolar color-blue text-4">
        "นี่คือสิทธิเบื้องต้นที่เราทุกคนมีและได้รับ การคุ้มครองโดย ICCPR"
      </h6>
      <img className="flex-arrow" src={`${prefix}/flex-arrow.svg`} alt="flex-arrow" />
      {story_list.map((item, index) => {
        return (
          <PaperWrapper index={index} key={`paper-${index}`}>
            <Paper storyPaper={item}></Paper>
          </PaperWrapper>
        )
      })}
    </StroyPart3Container>
  )
}

export default StoryPart3
