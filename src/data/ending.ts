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
      topic: '2.สิทธิมนุษยชนเป็นสิทธิที่ติดตัวทุกคนมาตั้งแต่เกิด',
      paragraphs: ['เราต้องรู้สิทธิตัวเอง และไม่ละเมิดสิทธิของคนอื่น']
    },
    {
      image_src: `${prefix}/part_4/illus.03.png`,
      topic: '3.คนทุกกลุ่มในสังคมควรได้รับความคุ้มครองตามกฎหมาย',
      paragraphs: [
        'กติกาในสังคม อาจมาจากการที่เสียงส่วนใหญ่ตกลงร่วมกัน หลายครั้งจึงอาจไม่ครอบคลุมเสียงส่วนน้อย',
        'เราจึงควรออกแบบกติการ่วมกันให้รองรับคนทุกกลุ่มในสังคม'
      ]
    }
  ],
  shares: [
    {
      id: 1,
      topic: 'หัวข้อหลักของงาน',
      og_image_src: `${prefix}/og/og-default.png`,
      share_url: '/'
    },
    {
      id: 2,
      topic: 'การแต่งตัว',
      og_image_src: `${prefix}/og/og-2.png`,
      share_url: '/quiz/6'
    },
    {
      id: 3,
      topic: 'การรวมกลุ่ม',
      og_image_src: `${prefix}/og/og-8.png`,
      share_url: '/quiz/3'
    },
    {
      id: 4,
      topic: 'การแสดงออกทางความคิดเห็นทางการเมือง',
      og_image_src: `${prefix}/og/og-7.png`,
      share_url: '/quiz/7'
    },
    {
      id: 5,
      topic: 'ความคิดเห็นของบุคคลที่อายุต่างกัน',
      og_image_src: `${prefix}/og/og-5.png`,
      share_url: '/quiz/2'
    },
    {
      id: 6,
      topic: 'ชุดไปรเวทหรือชุดนักเรียน',
      og_image_src: `${prefix}/og/og-4.png`,
      share_url: '/quiz/4'
    },
    {
      id: 7,
      topic: 'พิธีไหว้ครู',
      og_image_src: `${prefix}/og/og-1.png`,
      share_url: '/quiz/10'
    },
    {
      id: 8,
      topic: 'พื้นที่ชุมนุมในโรงเรียน',
      og_image_src: `${prefix}/og/og-10.png`,
      share_url: '/quiz/8'
    },
    {
      id: 9,
      topic: 'ระเบียบทรงผม',
      og_image_src: `${prefix}/og/og-6.png`,
      share_url: '/quiz/1'
    },
    {
      id: 10,
      topic: 'วิพากษ์วิจารณ์รัฐบาล',
      og_image_src: `${prefix}/og/og-9.png`,
      share_url: '/quiz/9'
    },
    {
      id: 11,
      topic: 'ห้องน้ำที่ทุกเพศเข้าได้',
      og_image_src: `${prefix}/og/og-3.png`,
      share_url: '/quiz/5'
    }
  ]
}
