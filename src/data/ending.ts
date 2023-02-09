import { IEnding } from 'types/ending'
import { prefix } from 'utils'

export const ending: IEnding = {
  reasons: [
    {
      image_src: `${prefix}/part_4/illus.01.png`,
      topic: '1.ในสังคมมีความแตกต่างหลากหลายของกลุ่มคน',
      paragraphs: [
        'สังคมมีความหลากหลายทั้งเชื้อชาติ เพศ อายุ ศาสนา ความคิด ความเชื่อ ความชอบ ความต้องการ',
        'เราจึงต้องเคารพในทุกเสียงของความหลากหลายนี้'
      ]
    },
    {
      image_src: `${prefix}/part_4/illus.02.png`,
      topic: '2.เราต้องเคารพซึ่งกันและกัน',
      paragraphs: [
        'สิทธิมนุษยชนเป็นสิทธิทางธรรมชาติที่ติดตัวทุกคนมาตั้งแต่เกิด เราต้องรู้สิทธิตัวเอง และไม่ละเมิดสิทธิของคนอื่น'
      ]
    },
    {
      image_src: `${prefix}/part_4/illus.03.png`,
      topic: '3.กฎกติกาสังคมควรรองรับคนทุกกลุ่มคนทุกกลุ่มในสังคมควรได้รับความคุ้มครองตามกฎหมาย',
      paragraphs: [
        'เพราะกติกาในสังคม คือ เรื่องที่เสียงส่วนใหญ่ตกลงร่วมกันและกำหนดขึ้นจึงอาจไม่ครอบคลุมเสียงส่วนน้อย',
        'ประกอบกับการตีความตัวบทกฎหมาย ซึ่งอาจกระทบต่อสิทธิเสรีภาพได้ง่าย'
      ]
    }
  ],
  shares: [
    {
      id: 1,
      topic: '(หัวข้องาน.....)',
      og_image_src: `${prefix}/og/og-default.jpg`,
      share_url: '/'
    },
    {
      id: 2,
      topic: 'พิธีไว้ครู',
      og_image_src: `${prefix}/og/og-1.jpg`,
      share_url: '/quiz/10'
    },
    {
      id: 3,
      topic: 'การแต่งตัว',
      og_image_src: `${prefix}/og/og-2.jpg`,
      share_url: '/quiz/6'
    },
    {
      id: 4,
      topic: 'ห้องน้ำที่ทุกเพศเข้าได้',
      og_image_src: `${prefix}/og/og-3.jpg`,
      share_url: '/quiz/5'
    },
    {
      id: 5,
      topic: 'ชุดนักเรียน VS ชุดไปรเวท',
      og_image_src: `${prefix}/og/og-4.jpg`,
      share_url: '/quiz/4'
    },
    {
      id: 6,
      topic: 'ตั้งคำถามกับความคิดเห็นบุคคลที่อายุต่างกัน',
      og_image_src: `${prefix}/og/og-5.jpg`,
      share_url: '/quiz/2'
    },
    {
      id: 7,
      topic: 'ระเบียบทรงผม',
      og_image_src: `${prefix}/og/og-6.jpg`,
      share_url: '/quiz/1'
    },
    {
      id: 8,
      topic: 'การแสดงออกทางการเมือง',
      og_image_src: `${prefix}/og/og-7.jpg`,
      share_url: '/quiz/6'
    },
    {
      id: 9,
      topic: 'การรวมกลุ่ม',
      og_image_src: `${prefix}/og/og-8.jpg`,
      share_url: '/quiz/3'
    },
    {
      id: 10,
      topic: 'วิพากษ์วิจารณ์การทำงานของรัฐบาล',
      og_image_src: `${prefix}/og/og-9.jpg`,
      share_url: '/quiz/9'
    },
    {
      id: 11,
      topic: 'ชุมนุมในโรงเรียน',
      og_image_src: `${prefix}/og/og-10.jpg`,
      share_url: '/quiz/8'
    }
  ]
}
