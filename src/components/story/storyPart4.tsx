import styled from 'styled-components'
import WvSharer from '@wevisdemo/ui/react/sharer'
import ContinueChip from 'components/shared/continueChip'

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
    background: url('/part_2/bg_part2.gif');
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
    bottom: 160px;

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
        <p className="text text-1 wv-h6 wv-font-kondolar">
          สิทธิเสรีภาพของทุกคนควรได้รับความเคารพ และมีกติการองรับอย่างชัดเจน และไม่ควรที่รัฐหรือบุคคล
          จะละเมิดสิทธิเสรีภาพคนอื่น{' '}
          <span className="color-blue wv-h6 wv-font-kondolar wv-font-bold">
            แต่ในความเป็นจริง ความเห็นที่แตกต่าง ก็ทำให้มีการใช้สิทธิเสรีภาพ ที่ไปละเมิดหรือทำร้ายคนอื่นอยู่
          </span>
        </p>
        <p className="text text-2 color-blue wv-h6 wv-font-kondolar wv-font-bold">
          มาชวนคิดและทำความเข้าใจ ผ่านแบบทดสอบนี้กัน
        </p>
        <div className="sharer font-plexsans">
          <WvSharer url="https://wevis.info" />
        </div>
      </div>
      <div className="ship">
        <ContinueChip />
      </div>
    </StroyPart4Container>
  )
}
export default StoryPart4
