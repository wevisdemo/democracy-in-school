import styled from 'styled-components'
import WvButtonGroup from '@wevisdemo/ui/react/button-group'
import WvButton from '@wevisdemo/ui/react/button'
import { prefix } from 'utils'
import WvSharer from '@wevisdemo/ui/react/sharer'

const AboutCoontainer = styled.div`
  margin: auto;
  max-width: 800px;

  @media (max-width: 420px) {
    padding: 20px;
  }
`

const Header = styled.div`
  margin-top: 42px;
  text-align: center;

  @media (max-width: 420px) {
    margin-top: 20px;
  }

  .topic {
    line-height: 140%;
  }
  .title {
    margin-top: 50px;
  }
`

const Body = styled.div`
  text-align: left;

  .wrapper {
    margin-top: 100px;

    @media (max-width: 420px) {
      margin-top: 50px;
    }

    p {
      margin-top: 30px;

      @media (max-width: 420px) {
        margin-top: 15px;
      }
    }

    .sub-wrapper {
      margin-top: 30px;

      @media (max-width: 420px) {
        margin-top: 15px;
      }

      ul {
        margin-top: 10px;
        list-style-position: inside;
        li {
          margin-left: 12px;
        }
      }
    }
  }

  .button-group {
    margin-top: 80px;
    padding: 48px;
    display: flex;
    justify-content: center;

    @media (max-width: 420px) {
      padding: 15px;
    }
  }
`

const ShareComponent = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px;

  @media (max-width: 420px) {
    padding: 60px;
  }
`

const About = () => {
  const handleClickDownload = () => {
    window.open(
      'https://docs.google.com/spreadsheets/d/1T018Tmed1aoKzJh1U9sjRhz95yDMIuu7o1ya1wiGzOM/edit?usp=sharing',
      '__blank'
    )
  }

  const handleClickFeedback = () => {
    window.open('https://airtable.com/shryu4errnlj1LWsM', '__blank')
  }

  return (
    <AboutCoontainer>
      <Header>
        <h5 className="topic wv-h5 font-plexsans-bold">
          Democracy in School
          <br />
          คิดต่างได้ไหม?
          <br />
          เรียนรู้ประชาธิปไตยแบบเคารพกัน
        </h5>
        <p className="wv-h7 font-plexsans">เข้าใจสิทธิเสรีภาพที่เรามีและทดลองหาจุดร่วมบนความเห็นต่าง</p>
        <h4 className="title wv-h4 wv-font-kondolar wv-font-black">เกี่ยวกับโครงการ</h4>
      </Header>
      <Body>
        <div className="wrapper">
          <h5 className="wv-h5 wv-font-kondolar wv-font-black">เกี่ยวกับโปรเจกต์นี้</h5>
          <p className="wv-b4 wv-font-baijamjuri">
            เราอาจเห็นหลายประเด็นในสังคมที่คนมีความเห็นต่างกันและบางประเด็นไม่ได้จบลงด้วยการเคารพความคิดเห็นต่อกันในวิถีประชาธิปไตยแบบที่เรารับรู้มา
            จนหลายครั้งเกิดเป็นคำถามว่า ตกลงเราเป็นประชาธิปไตยจริงไหม?
            <br />
            <br /> โดยเรื่องการแสดงความเห็นต่าง ถือเป็นหนึ่งในสิทธิเสรีภาพ
            และถูกกำหนดเป็นกติการะหว่างประเทศว่าด้วยสิทธิพลเมืองและสิทธิทางการเมือง (ICCPR) ซึ่งเรื่องสิทธิเสรีภาพนี้
            สามารถเริ่มเรียนรู้ได้ตั้งแต่เด็ก โดยเฉพาะเด็กนักเรียน เพื่อให้เติบโตไปสู่สังคมที่เคารพความต่าง
            <br />
            <br /> ดังนั้นทางทีม WeVis ร่วมกับ มูลนิธิฟรีดริช เนามัน (Friedrich Naumann) , Saturday School Foundation
            และ InsKru ได้ทำโปรเจกต์ Democracy in School ขึ้น เพื่อส่งเสริมความเป็นประชาธิปไตย ผ่านการเคารพสิทธิเสรีภาพ
            โดยมีเป้าหมายเป็นเด็กนักเรียน และคำว่า School
            คือความตั้งใจจะสื่อสารว่าในวัยเรียนที่ต่อไปจะเติบโตไปสู่สังคมอื่นๆในอนาคต
            โรงเรียนควรจะปรับการสอนการเรียนรู้ประชาธิปไตยเกี่ยวกับสิทธิเสรีภาพจากรูปแบบเดิมๆ
            และหันมาทดลองหาจุดร่วมบนความเห็นต่างด้วยกัน
            <br />
            <br />
            ซึ่งอยากชวนมาเรียนรู้และทดสอบความเข้าใจในเรื่องสิทธิเสรีภาพพร้อมๆกัน ว่าเราเข้าและเคารพสิทธิเสรีภาพแบบไหน?
            <br />
          </p>
        </div>
        <div className="wrapper">
          <h5 className="wv-h5 wv-font-kondolar wv-font-black">ที่มาของข้อมูล & ข้อจำกัด</h5>
          <p className="wv-b4 wv-font-baijamjuri">
            ข้อมูลจากกติการะหว่างประเทศว่าด้วยสิทธิพลเมืองและสิทธิทางการเมือง ICCPR
            และแหล่งข่าวเกี่ยวกับเหตุการณ์ที่เกิดขึ้น
            <br />
            <br />
            https://deepsouthwatch.org/sites/default
            <br className="mobile-only" />
            /files/archives/docs/iccpr_th.pdf
            <br />
          </p>
        </div>
        <div className="wrapper">
          <h5 className="wv-h5 wv-font-kondolar wv-font-black">นโยบายการนำข้อมูลไปใช้ต่อ</h5>
          <p className="wv-b4 wv-font-baijamjuri">
            ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข
            Creative Commons Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้ โดยต้องระบุที่มา
            แต่ห้ามนำไปใช้เพื่อการค้า และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน
            <br />
            <br />
            หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
            หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team [at] punchup.world
            <br />
          </p>
        </div>
        <div className="wrapper">
          <h5 className="wv-h5 wv-font-kondolar wv-font-black">อาสาสมัครร่วมพัฒนา</h5>
          <div className="sub-wrapper">
            <p className="wv-b4 wv-font-baijamjuri wv-font-black">เขียนโปรแกรม</p>
            <p className="wv-b4 wv-font-baijamjuri">ทรงพล นิลวงษ์</p>
          </div>
          <div className="sub-wrapper">
            <p className="wv-b4 wv-font-baijamjuri wv-font-black">ออกแบบ</p>
            <p className="wv-b4 wv-font-baijamjuri">นัฐพล ไก่แก้ว</p>
          </div>
          <div className="sub-wrapper">
            <p className="wv-b4 wv-font-baijamjuri wv-font-black">สืบค้นและรวบรวมข้อมู</p>
            <p className="wv-b4 wv-font-baijamjuri">ศุภิสรา อิศรานุกูล</p>
          </div>
          <div className="sub-wrapper">
            <p className="wv-b4 wv-font-baijamjuri wv-font-black">บรรณาธิการ</p>
            <p className="wv-b4 wv-font-baijamjuri">ธนิสรา เรืองเดช</p>
          </div>
          <div className="sub-wrapper">
            <p className="wv-b4 wv-font-baijamjuri wv-font-black">ประสานงานและจัดการอื่นๆ</p>
            <p className="wv-b4 wv-font-baijamjuri">
              Punch Up และ WeVis Democracy in School คิดต่างได้ไหม? เรียนรู้ประชาธิปไตยแบบเคารพกัน
              ยังได้รับการสนับสนุนทุนในการดำเนินงานจากมูลนิธิฟรีดริช เนามัน Friedrich Naumann
              ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์ ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup
              เพื่อดำเนินโครงการ
            </p>
          </div>
          <div className="sub-wrapper">
            <p className="wv-b4 wv-font-baijamjuri wv-font-black">พาร์ทเนอร์</p>
            <ul>
              <li className="wv-b4 wv-font-baijamjuri">มูลนิธิฟรีดริช เนามัน Friedrich Naumann </li>
              <li className="wv-b4 wv-font-baijamjuri">Saturday School Foundation </li>
              <li className="wv-b4 wv-font-baijamjuri">InsKru </li>
            </ul>
          </div>
          <div className="sub-wrapper">
            <p className="wv-b4 wv-font-baijamjuri wv-font-black">ขอขอบคุณผู้ให้ข้อมูล</p>
            <p className="wv-b4 wv-font-baijamjuri">คุณแบม จากนักเรียนเลว</p>
          </div>
        </div>
        <div className="button-group">
          <WvButtonGroup>
            <WvButton onClick={handleClickDownload}>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_314_173)">
                  <path
                    d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <line x1="10.667" y1="0.5" x2="10.667" y2="13" stroke="currentColor" stroke-width="2" />
                </g>
                <defs>
                  <clipPath id="clip0_314_173">
                    <rect width="20.8333" height="20" fill="white" transform="translate(0.0834961 0.5)" />
                  </clipPath>
                </defs>
              </svg>

              <span>ดาวน์โหลดข้อมูล</span>
            </WvButton>
            <WvButton onClick={handleClickFeedback}>
              <img src={`${prefix}/envelope.svg`} alt="envelope" />
              <span>Feedback</span>
            </WvButton>
          </WvButtonGroup>
        </div>
        <ShareComponent>
          <WvSharer allowCopyLink url={process.env.NEXT_PUBLIC_BASE_URL || 'https://wevis.info'} outline />
        </ShareComponent>
      </Body>
    </AboutCoontainer>
  )
}

export default About
