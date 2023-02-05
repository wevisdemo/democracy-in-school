import { IGuideCard } from 'types/guide'
import { prefix } from 'utils'

export const guideCard: IGuideCard[] = [
  {
    id: 1,
    topic: 'โหวตข้อที่เห็นด้วย',
    thumbnail_src: `${prefix}/part_3/illus_step.01.png`,
    description: 'สามารถใช้ post-it สี ให้นักเรียนตอบหรือ สามารถต่อแถวตามช้อยส์ได้'
  },
  {
    id: 2,
    topic: 'เขียนความคิดเห็น',
    thumbnail_src: `${prefix}/part_3/illus_step.02.png`,
    description: 'เขียนใส่กระดาษส่งอาจารย์แบบไม่ใส่ชื่อ หรือใส่ชื่อแบบแฝง (คล้ายตอนเล่นเกม)'
  },
  {
    id: 3,
    topic: 'พูดคุยแลกเปลี่ยน',
    thumbnail_src: `${prefix}/part_3/illus_step.03.png`,
    description: 'หยิบคำถามชวนคิดไปคุยกันต่อในห้องเรียน เพื่อเสริมสร้างการแสดงความคิดเห็นภายในห้อง'
  }
]
