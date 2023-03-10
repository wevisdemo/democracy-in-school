import styled from 'styled-components'
import WvSharer from '@wevisdemo/ui/react/sharer'
import ContinueChip from 'components/shared/continueChip'
import { prefix } from 'utils'

const StroyPart4Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('${prefix}/part_2/bg_part2.gif');
    background-size: cover;
    opacity: 0.4;
  }

  .wrapper {
    position: relative;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .sharer {
      margin-top: 44px;
    }
  }

  .text {
    max-width: 700px;
    text-align: center;
    position: relative;
    z-index: 20;
  }

  .text-2 {
    margin-top: 40px;
  }

  .ship {
    position: absolute;
    bottom: 60px;

    @media (max-width: 1024px) {
      bottom: 20px;
    }
  }
`

const StoryPart4 = () => {
  return (
    <StroyPart4Container>
      <div className="background" />
      <div className="wrapper">
        <p className="text text-1 color-blue wv-h6 wv-font-kondolar">
          สิทธิเสรีภาพของทุกคนควรได้รับความเคารพและมีกติการองรับอย่างชัดเจน
        </p>
        <p className="text text-2 color-blue wv-h6 wv-font-kondolar">ไม่ควรที่รัฐหรือบุคคลจะละเมิดสิทธิเสรีภาพคนอื่น</p>
        <p className="text text-2 color-blue wv-h6 wv-font-kondolar">
          แต่ในความเป็นจริงความคิดเห็นที่แตกต่าง ก็ทำให้มีการใช้สิทธิเสรีภาพ ที่ไปละเมิดหรือทำร้ายคนอื่นอยู่
        </p>
        <p className="text text-2 wv-h6 wv-font-kondolar wv-font-bold">
          แล้วเราจะหาจุดร่วมของสิทธิเสรีภาพบนความเห็นต่างได้อย่างไร?
        </p>
        <p className="text text-2 wv-h6 wv-font-kondolar wv-font-bold">มาชวนคิดและทำความเข้าใจ ผ่านแบบทดสอบนี้กัน</p>
        <div className="sharer font-plexsans">
          <WvSharer url={`${process.env.NEXT_PUBLIC_BASE_URL}/knowledge`} />
        </div>
      </div>
      <div className="ship">
        <ContinueChip />
      </div>
    </StroyPart4Container>
  )
}
export default StoryPart4
