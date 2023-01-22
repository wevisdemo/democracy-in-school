import { IQuiz } from 'types/quiz'

export const quiz_list: IQuiz[] = [
  {
    id: 1,
    is_selected: false,
    thumbnail_src: '/part_3/topic/Topic.01.png',
    title: 'ระเบียบทรงผม',
    question:
      'หลายโรงเรียนยังมีกฎการบังคับตัดผม รวมถึงการลงโทษด้วยการกล้อนหรือตัดผมนักเรียน เมื่อรับรู้สิ่งนี้/คำตอบในใจของคุณคือ',
    choices: [
      {
        label: 'A',
        image_src: '/part_3/frame_choose/illus.01.A.png',
        text: 'การบังคับตัดผมหรือการลงโทษช่วยรักษาระเบียบวินัย',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: '/part_3/frame_choose/illus.01.B.png',
        text: 'ก็แค่ตัดผมเองกำหนดมาแบบไหนก็ทำแบบนั้น',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: '/part_3/frame_choose/illus.01.C.png',
        text: 'ถ้าอยู่ในระเบียบไม่ได้ อนาคตทำงานยิ่งกว่านี้นะ',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: '/part_3/frame_choose/illus.01.D.png',
        text: 'ไม่ควรมีการลงโทษ แต่ยังควรบังคับให้ตัดผม',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: '/part_3/frame_choose/illus.01.E.png',
        text: 'ผมของเรา ความมั่นใจของเรา จะทำทรงอะไรก็ได้',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: '/part_3/frame_choose/illus.F.png',
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับกฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      sub_title:
        'ถึงแม้ระเบียบกระทรวงศึกษาฯ จะให้อิสระในการเลือกไว้ทรงผมมากขึ้นแต่กฎการตัดผมยังคงบังคับใช้อยู่ในโรงเรียนทั่วประเทศโดยมีความเห็นว่า เป็นระเบียบเรียบร้อย และยังต้องปฏิบัติตาม',
      contents: [
        {
          image_url: '/part_3/quiz_01/illus_event.01.01.png',
          text: 'บางโรงเรียนลงโทษนักเรียนด้วยการกล้อนผมนักเรียนชายหรือตัดผมนักเรียนหญิง ซึ่งทำให้เกิดความอับอาย'
        },
        {
          image_url: '/part_3/quiz_01/illus_event.01.02.png',
          text: 'และมีบางกลุ่มเห็นว่าทุกคนมีเสรีภาพในทรงผมของตัวเอง ไม่ควรมีใครถูกบังคับ'
        }
      ],
      question: 'คิดว่านักเรียนควรมีเสรีภาพในทรงผมของตัวหรือไม่?\nในสังคมควรทำอย่างไรต่อไป?'
    },
    reminder: {
      topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      cover_url: '/part_3/quiz_01/bg_q.01.png',
      paragraphs: [
        {
          text: 'ทรงผมเป็นสิทธิในเนื้อตัวร่างกายที่ทุกคนมีตามหลักสิทธิมนุษยชน',
          color: '#FFFFFF'
        },
        {
          text: 'แต่เกิดความเห็นที่แตกต่างว่าควรจะทำอย่างไรระหว่างทางโรงเรียนที่มีความเห็นว่า ควรรักษากฎระเบียบและสร้างความเรียบร้อยผ่านทรงผม ',
          color: '#FFFFFF'
        },
        {
          text: 'ส่วนอีกฝั่งพยายามใช้เสรีภาพในการแสดงออกว่าการมีเสรีภาพในทรงผมมีข้อดีหลายอย่าง ดังนั้นการให้อิสระในทรงผมจึงควรเป็นเรื่องที่เกิดขึ้น',
          color: '#FFEB78'
        },
        {
          text: 'แล้วสังคมควรจะปรับไปในทิศทางใด?',
          color: '#FFEB78'
        }
      ],
      question:
        'ถ้ามีการกำหนดไว้ทรงผมอะไรก็ได้ แต่อยากให้ภาพลักษณ์เรียบร้อยสมวัยคิดว่าจะทำอย่างไรได้บ้าง? (ให้สองสิ่งนี้ไปด้วยกันได้)',
      shared_topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วย การกล้อนหรือตัดผมนักเรียน'
    }
  },
  {
    id: 2,
    is_selected: false,
    thumbnail_src: '/part_3/topic/Topic.02.png',
    title: 'ความคิดเห็นของบุคคลที่อายุต่างกัน',
    question:
      'หลายโรงเรียนยังมีกฎการบังคับตัดผม รวมถึงการลงโทษด้วยการกล้อนหรือตัดผมนักเรียน เมื่อรับรู้สิ่งนี้/คำตอบในใจของคุณคือ',
    choices: [
      {
        label: 'A',
        image_src: '/part_3/frame_choose/illus.01.A.png',
        text: 'การบังคับตัดผมหรือการลงโทษช่วยรักษาระเบียบวินัย',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: '/part_3/frame_choose/illus.01.B.png',
        text: 'ก็แค่ตัดผมเองกำหนดมาแบบไหนก็ทำแบบนั้น',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: '/part_3/frame_choose/illus.01.C.png',
        text: 'ถ้าอยู่ในระเบียบไม่ได้ อนาคตทำงานยิ่งกว่านี้นะ',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: '/part_3/frame_choose/illus.01.D.png',
        text: 'ไม่ควรมีการลงโทษ แต่ยังควรบังคับให้ตัดผม',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: '/part_3/frame_choose/illus.01.E.png',
        text: 'ผมของเรา ความมั่นใจของเรา จะทำทรงอะไรก็ได้',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: '/part_3/frame_choose/illus.F.png',
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับกฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      sub_title:
        'ถึงแม้ระเบียบกระทรวงศึกษาฯ จะให้อิสระในการเลือกไว้ทรงผมมากขึ้นแต่กฎการตัดผมยังคงบังคับใช้อยู่ในโรงเรียนทั่วประเทศโดยมีความเห็นว่า เป็นระเบียบเรียบร้อย และยังต้องปฏิบัติตาม',
      contents: [
        {
          image_url: '/part_3/quiz_01/illus_event.01.01.png',
          text: 'บางโรงเรียนลงโทษนักเรียนด้วยการกล้อนผมนักเรียนชายหรือตัดผมนักเรียนหญิง ซึ่งทำให้เกิดความอับอาย'
        },
        {
          image_url: '/part_3/quiz_01/illus_event.01.02.png',
          text: 'และมีบางกลุ่มเห็นว่าทุกคนมีเสรีภาพในทรงผมของตัวเอง ไม่ควรมีใครถูกบังคับ'
        }
      ],
      question: 'คิดว่านักเรียนควรมีเสรีภาพในทรงผมของตัวหรือไม่?\nในสังคมควรทำอย่างไรต่อไป?'
    },
    reminder: {
      topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      cover_url: '/part_3/quiz_01/bg_q.01.png',
      paragraphs: [
        {
          text: 'ทรงผมเป็นสิทธิในเนื้อตัวร่างกายที่ทุกคนมีตามหลักสิทธิมนุษยชน',
          color: '#FFFFFF'
        },
        {
          text: 'แต่เกิดความเห็นที่แตกต่างว่าควรจะทำอย่างไรระหว่างทางโรงเรียนที่มีความเห็นว่า ควรรักษากฎระเบียบและสร้างความเรียบร้อยผ่านทรงผม ',
          color: '#FFFFFF'
        },
        {
          text: 'ส่วนอีกฝั่งพยายามใช้เสรีภาพในการแสดงออกว่าการมีเสรีภาพในทรงผมมีข้อดีหลายอย่าง ดังนั้นการให้อิสระในทรงผมจึงควรเป็นเรื่องที่เกิดขึ้น',
          color: '#FFEB78'
        },
        {
          text: 'แล้วสังคมควรจะปรับไปในทิศทางใด?',
          color: '#FFEB78'
        }
      ],
      question:
        'ถ้ามีการกำหนดไว้ทรงผมอะไรก็ได้ แต่อยากให้ภาพลักษณ์เรียบร้อยสมวัยคิดว่าจะทำอย่างไรได้บ้าง? (ให้สองสิ่งนี้ไปด้วยกันได้)',
      shared_topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วย การกล้อนหรือตัดผมนักเรียน'
    }
  },
  {
    id: 3,
    is_selected: false,
    thumbnail_src: '/part_3/topic/Topic.03.png',
    title: 'การรวมกลุ่ม',
    question:
      'หลายโรงเรียนยังมีกฎการบังคับตัดผม รวมถึงการลงโทษด้วยการกล้อนหรือตัดผมนักเรียน เมื่อรับรู้สิ่งนี้/คำตอบในใจของคุณคือ',
    choices: [
      {
        label: 'A',
        image_src: '/part_3/frame_choose/illus.01.A.png',
        text: 'การบังคับตัดผมหรือการลงโทษช่วยรักษาระเบียบวินัย',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: '/part_3/frame_choose/illus.01.B.png',
        text: 'ก็แค่ตัดผมเองกำหนดมาแบบไหนก็ทำแบบนั้น',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: '/part_3/frame_choose/illus.01.C.png',
        text: 'ถ้าอยู่ในระเบียบไม่ได้ อนาคตทำงานยิ่งกว่านี้นะ',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: '/part_3/frame_choose/illus.01.D.png',
        text: 'ไม่ควรมีการลงโทษ แต่ยังควรบังคับให้ตัดผม',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: '/part_3/frame_choose/illus.01.E.png',
        text: 'ผมของเรา ความมั่นใจของเรา จะทำทรงอะไรก็ได้',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: '/part_3/frame_choose/illus.F.png',
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับกฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      sub_title:
        'ถึงแม้ระเบียบกระทรวงศึกษาฯ จะให้อิสระในการเลือกไว้ทรงผมมากขึ้นแต่กฎการตัดผมยังคงบังคับใช้อยู่ในโรงเรียนทั่วประเทศโดยมีความเห็นว่า เป็นระเบียบเรียบร้อย และยังต้องปฏิบัติตาม',
      contents: [
        {
          image_url: '/part_3/quiz_01/illus_event.01.01.png',
          text: 'บางโรงเรียนลงโทษนักเรียนด้วยการกล้อนผมนักเรียนชายหรือตัดผมนักเรียนหญิง ซึ่งทำให้เกิดความอับอาย'
        },
        {
          image_url: '/part_3/quiz_01/illus_event.01.02.png',
          text: 'และมีบางกลุ่มเห็นว่าทุกคนมีเสรีภาพในทรงผมของตัวเอง ไม่ควรมีใครถูกบังคับ'
        }
      ],
      question: 'คิดว่านักเรียนควรมีเสรีภาพในทรงผมของตัวหรือไม่?\nในสังคมควรทำอย่างไรต่อไป?'
    },
    reminder: {
      topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      cover_url: '/part_3/quiz_01/bg_q.01.png',
      paragraphs: [
        {
          text: 'ทรงผมเป็นสิทธิในเนื้อตัวร่างกายที่ทุกคนมีตามหลักสิทธิมนุษยชน',
          color: '#FFFFFF'
        },
        {
          text: 'แต่เกิดความเห็นที่แตกต่างว่าควรจะทำอย่างไรระหว่างทางโรงเรียนที่มีความเห็นว่า ควรรักษากฎระเบียบและสร้างความเรียบร้อยผ่านทรงผม ',
          color: '#FFFFFF'
        },
        {
          text: 'ส่วนอีกฝั่งพยายามใช้เสรีภาพในการแสดงออกว่าการมีเสรีภาพในทรงผมมีข้อดีหลายอย่าง ดังนั้นการให้อิสระในทรงผมจึงควรเป็นเรื่องที่เกิดขึ้น',
          color: '#FFEB78'
        },
        {
          text: 'แล้วสังคมควรจะปรับไปในทิศทางใด?',
          color: '#FFEB78'
        }
      ],
      question:
        'ถ้ามีการกำหนดไว้ทรงผมอะไรก็ได้ แต่อยากให้ภาพลักษณ์เรียบร้อยสมวัยคิดว่าจะทำอย่างไรได้บ้าง? (ให้สองสิ่งนี้ไปด้วยกันได้)',
      shared_topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วย การกล้อนหรือตัดผมนักเรียน'
    }
  },
  {
    id: 4,
    is_selected: false,
    thumbnail_src: '/part_3/topic/Topic.04.png',
    title: 'ชุดนักเรียน VS ชุดไปรเวท',
    question:
      'หลายโรงเรียนยังมีกฎการบังคับตัดผม รวมถึงการลงโทษด้วยการกล้อนหรือตัดผมนักเรียน เมื่อรับรู้สิ่งนี้/คำตอบในใจของคุณคือ',
    choices: [
      {
        label: 'A',
        image_src: '/part_3/frame_choose/illus.01.A.png',
        text: 'การบังคับตัดผมหรือการลงโทษช่วยรักษาระเบียบวินัย',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: '/part_3/frame_choose/illus.01.B.png',
        text: 'ก็แค่ตัดผมเองกำหนดมาแบบไหนก็ทำแบบนั้น',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: '/part_3/frame_choose/illus.01.C.png',
        text: 'ถ้าอยู่ในระเบียบไม่ได้ อนาคตทำงานยิ่งกว่านี้นะ',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: '/part_3/frame_choose/illus.01.D.png',
        text: 'ไม่ควรมีการลงโทษ แต่ยังควรบังคับให้ตัดผม',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: '/part_3/frame_choose/illus.01.E.png',
        text: 'ผมของเรา ความมั่นใจของเรา จะทำทรงอะไรก็ได้',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: '/part_3/frame_choose/illus.F.png',
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับกฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      sub_title:
        'ถึงแม้ระเบียบกระทรวงศึกษาฯ จะให้อิสระในการเลือกไว้ทรงผมมากขึ้นแต่กฎการตัดผมยังคงบังคับใช้อยู่ในโรงเรียนทั่วประเทศโดยมีความเห็นว่า เป็นระเบียบเรียบร้อย และยังต้องปฏิบัติตาม',
      contents: [
        {
          image_url: '/part_3/quiz_01/illus_event.01.01.png',
          text: 'บางโรงเรียนลงโทษนักเรียนด้วยการกล้อนผมนักเรียนชายหรือตัดผมนักเรียนหญิง ซึ่งทำให้เกิดความอับอาย'
        },
        {
          image_url: '/part_3/quiz_01/illus_event.01.02.png',
          text: 'และมีบางกลุ่มเห็นว่าทุกคนมีเสรีภาพในทรงผมของตัวเอง ไม่ควรมีใครถูกบังคับ'
        }
      ],
      question: 'คิดว่านักเรียนควรมีเสรีภาพในทรงผมของตัวหรือไม่?\nในสังคมควรทำอย่างไรต่อไป?'
    },
    reminder: {
      topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      cover_url: '/part_3/quiz_01/bg_q.01.png',
      paragraphs: [
        {
          text: 'ทรงผมเป็นสิทธิในเนื้อตัวร่างกายที่ทุกคนมีตามหลักสิทธิมนุษยชน',
          color: '#FFFFFF'
        },
        {
          text: 'แต่เกิดความเห็นที่แตกต่างว่าควรจะทำอย่างไรระหว่างทางโรงเรียนที่มีความเห็นว่า ควรรักษากฎระเบียบและสร้างความเรียบร้อยผ่านทรงผม ',
          color: '#FFFFFF'
        },
        {
          text: 'ส่วนอีกฝั่งพยายามใช้เสรีภาพในการแสดงออกว่าการมีเสรีภาพในทรงผมมีข้อดีหลายอย่าง ดังนั้นการให้อิสระในทรงผมจึงควรเป็นเรื่องที่เกิดขึ้น',
          color: '#FFEB78'
        },
        {
          text: 'แล้วสังคมควรจะปรับไปในทิศทางใด?',
          color: '#FFEB78'
        }
      ],
      question:
        'ถ้ามีการกำหนดไว้ทรงผมอะไรก็ได้ แต่อยากให้ภาพลักษณ์เรียบร้อยสมวัยคิดว่าจะทำอย่างไรได้บ้าง? (ให้สองสิ่งนี้ไปด้วยกันได้)',
      shared_topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วย การกล้อนหรือตัดผมนักเรียน'
    }
  },
  {
    id: 5,
    is_selected: false,
    thumbnail_src: '/part_3/topic/Topic.05.png',
    title: 'ห้องน้ำที่ทุกเพศเข้าได้',
    question:
      'หลายโรงเรียนยังมีกฎการบังคับตัดผม รวมถึงการลงโทษด้วยการกล้อนหรือตัดผมนักเรียน เมื่อรับรู้สิ่งนี้/คำตอบในใจของคุณคือ',
    choices: [
      {
        label: 'A',
        image_src: '/part_3/frame_choose/illus.01.A.png',
        text: 'การบังคับตัดผมหรือการลงโทษช่วยรักษาระเบียบวินัย',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: '/part_3/frame_choose/illus.01.B.png',
        text: 'ก็แค่ตัดผมเองกำหนดมาแบบไหนก็ทำแบบนั้น',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: '/part_3/frame_choose/illus.01.C.png',
        text: 'ถ้าอยู่ในระเบียบไม่ได้ อนาคตทำงานยิ่งกว่านี้นะ',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: '/part_3/frame_choose/illus.01.D.png',
        text: 'ไม่ควรมีการลงโทษ แต่ยังควรบังคับให้ตัดผม',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: '/part_3/frame_choose/illus.01.E.png',
        text: 'ผมของเรา ความมั่นใจของเรา จะทำทรงอะไรก็ได้',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: '/part_3/frame_choose/illus.F.png',
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับกฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      sub_title:
        'ถึงแม้ระเบียบกระทรวงศึกษาฯ จะให้อิสระในการเลือกไว้ทรงผมมากขึ้นแต่กฎการตัดผมยังคงบังคับใช้อยู่ในโรงเรียนทั่วประเทศโดยมีความเห็นว่า เป็นระเบียบเรียบร้อย และยังต้องปฏิบัติตาม',
      contents: [
        {
          image_url: '/part_3/quiz_01/illus_event.01.01.png',
          text: 'บางโรงเรียนลงโทษนักเรียนด้วยการกล้อนผมนักเรียนชายหรือตัดผมนักเรียนหญิง ซึ่งทำให้เกิดความอับอาย'
        },
        {
          image_url: '/part_3/quiz_01/illus_event.01.02.png',
          text: 'และมีบางกลุ่มเห็นว่าทุกคนมีเสรีภาพในทรงผมของตัวเอง ไม่ควรมีใครถูกบังคับ'
        }
      ],
      question: 'คิดว่านักเรียนควรมีเสรีภาพในทรงผมของตัวหรือไม่?\nในสังคมควรทำอย่างไรต่อไป?'
    },
    reminder: {
      topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      cover_url: '/part_3/quiz_01/bg_q.01.png',
      paragraphs: [
        {
          text: 'ทรงผมเป็นสิทธิในเนื้อตัวร่างกายที่ทุกคนมีตามหลักสิทธิมนุษยชน',
          color: '#FFFFFF'
        },
        {
          text: 'แต่เกิดความเห็นที่แตกต่างว่าควรจะทำอย่างไรระหว่างทางโรงเรียนที่มีความเห็นว่า ควรรักษากฎระเบียบและสร้างความเรียบร้อยผ่านทรงผม ',
          color: '#FFFFFF'
        },
        {
          text: 'ส่วนอีกฝั่งพยายามใช้เสรีภาพในการแสดงออกว่าการมีเสรีภาพในทรงผมมีข้อดีหลายอย่าง ดังนั้นการให้อิสระในทรงผมจึงควรเป็นเรื่องที่เกิดขึ้น',
          color: '#FFEB78'
        },
        {
          text: 'แล้วสังคมควรจะปรับไปในทิศทางใด?',
          color: '#FFEB78'
        }
      ],
      question:
        'ถ้ามีการกำหนดไว้ทรงผมอะไรก็ได้ แต่อยากให้ภาพลักษณ์เรียบร้อยสมวัยคิดว่าจะทำอย่างไรได้บ้าง? (ให้สองสิ่งนี้ไปด้วยกันได้)',
      shared_topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วย การกล้อนหรือตัดผมนักเรียน'
    }
  },
  {
    id: 6,
    is_selected: false,
    thumbnail_src: '/part_3/topic/Topic.06.png',
    title: 'ภาพการแต่งตัว',
    question:
      'หลายโรงเรียนยังมีกฎการบังคับตัดผม รวมถึงการลงโทษด้วยการกล้อนหรือตัดผมนักเรียน เมื่อรับรู้สิ่งนี้/คำตอบในใจของคุณคือ',
    choices: [
      {
        label: 'A',
        image_src: '/part_3/frame_choose/illus.01.A.png',
        text: 'การบังคับตัดผมหรือการลงโทษช่วยรักษาระเบียบวินัย',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: '/part_3/frame_choose/illus.01.B.png',
        text: 'ก็แค่ตัดผมเองกำหนดมาแบบไหนก็ทำแบบนั้น',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: '/part_3/frame_choose/illus.01.C.png',
        text: 'ถ้าอยู่ในระเบียบไม่ได้ อนาคตทำงานยิ่งกว่านี้นะ',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: '/part_3/frame_choose/illus.01.D.png',
        text: 'ไม่ควรมีการลงโทษ แต่ยังควรบังคับให้ตัดผม',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: '/part_3/frame_choose/illus.01.E.png',
        text: 'ผมของเรา ความมั่นใจของเรา จะทำทรงอะไรก็ได้',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: '/part_3/frame_choose/illus.F.png',
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับกฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      sub_title:
        'ถึงแม้ระเบียบกระทรวงศึกษาฯ จะให้อิสระในการเลือกไว้ทรงผมมากขึ้นแต่กฎการตัดผมยังคงบังคับใช้อยู่ในโรงเรียนทั่วประเทศโดยมีความเห็นว่า เป็นระเบียบเรียบร้อย และยังต้องปฏิบัติตาม',
      contents: [
        {
          image_url: '/part_3/quiz_01/illus_event.01.01.png',
          text: 'บางโรงเรียนลงโทษนักเรียนด้วยการกล้อนผมนักเรียนชายหรือตัดผมนักเรียนหญิง ซึ่งทำให้เกิดความอับอาย'
        },
        {
          image_url: '/part_3/quiz_01/illus_event.01.02.png',
          text: 'และมีบางกลุ่มเห็นว่าทุกคนมีเสรีภาพในทรงผมของตัวเอง ไม่ควรมีใครถูกบังคับ'
        }
      ],
      question: 'คิดว่านักเรียนควรมีเสรีภาพในทรงผมของตัวหรือไม่?\nในสังคมควรทำอย่างไรต่อไป?'
    },
    reminder: {
      topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      cover_url: '/part_3/quiz_01/bg_q.01.png',
      paragraphs: [
        {
          text: 'ทรงผมเป็นสิทธิในเนื้อตัวร่างกายที่ทุกคนมีตามหลักสิทธิมนุษยชน',
          color: '#FFFFFF'
        },
        {
          text: 'แต่เกิดความเห็นที่แตกต่างว่าควรจะทำอย่างไรระหว่างทางโรงเรียนที่มีความเห็นว่า ควรรักษากฎระเบียบและสร้างความเรียบร้อยผ่านทรงผม ',
          color: '#FFFFFF'
        },
        {
          text: 'ส่วนอีกฝั่งพยายามใช้เสรีภาพในการแสดงออกว่าการมีเสรีภาพในทรงผมมีข้อดีหลายอย่าง ดังนั้นการให้อิสระในทรงผมจึงควรเป็นเรื่องที่เกิดขึ้น',
          color: '#FFEB78'
        },
        {
          text: 'แล้วสังคมควรจะปรับไปในทิศทางใด?',
          color: '#FFEB78'
        }
      ],
      question:
        'ถ้ามีการกำหนดไว้ทรงผมอะไรก็ได้ แต่อยากให้ภาพลักษณ์เรียบร้อยสมวัยคิดว่าจะทำอย่างไรได้บ้าง? (ให้สองสิ่งนี้ไปด้วยกันได้)',
      shared_topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วย การกล้อนหรือตัดผมนักเรียน'
    }
  },
  {
    id: 7,
    is_selected: false,
    thumbnail_src: '/part_3/topic/Topic.07.png',
    title: 'การแสดงออกทางการเมือง',
    question:
      'หลายโรงเรียนยังมีกฎการบังคับตัดผม รวมถึงการลงโทษด้วยการกล้อนหรือตัดผมนักเรียน เมื่อรับรู้สิ่งนี้/คำตอบในใจของคุณคือ',
    choices: [
      {
        label: 'A',
        image_src: '/part_3/frame_choose/illus.01.A.png',
        text: 'การบังคับตัดผมหรือการลงโทษช่วยรักษาระเบียบวินัย',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: '/part_3/frame_choose/illus.01.B.png',
        text: 'ก็แค่ตัดผมเองกำหนดมาแบบไหนก็ทำแบบนั้น',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: '/part_3/frame_choose/illus.01.C.png',
        text: 'ถ้าอยู่ในระเบียบไม่ได้ อนาคตทำงานยิ่งกว่านี้นะ',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: '/part_3/frame_choose/illus.01.D.png',
        text: 'ไม่ควรมีการลงโทษ แต่ยังควรบังคับให้ตัดผม',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: '/part_3/frame_choose/illus.01.E.png',
        text: 'ผมของเรา ความมั่นใจของเรา จะทำทรงอะไรก็ได้',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: '/part_3/frame_choose/illus.F.png',
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับกฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      sub_title:
        'ถึงแม้ระเบียบกระทรวงศึกษาฯ จะให้อิสระในการเลือกไว้ทรงผมมากขึ้นแต่กฎการตัดผมยังคงบังคับใช้อยู่ในโรงเรียนทั่วประเทศโดยมีความเห็นว่า เป็นระเบียบเรียบร้อย และยังต้องปฏิบัติตาม',
      contents: [
        {
          image_url: '/part_3/quiz_01/illus_event.01.01.png',
          text: 'บางโรงเรียนลงโทษนักเรียนด้วยการกล้อนผมนักเรียนชายหรือตัดผมนักเรียนหญิง ซึ่งทำให้เกิดความอับอาย'
        },
        {
          image_url: '/part_3/quiz_01/illus_event.01.02.png',
          text: 'และมีบางกลุ่มเห็นว่าทุกคนมีเสรีภาพในทรงผมของตัวเอง ไม่ควรมีใครถูกบังคับ'
        }
      ],
      question: 'คิดว่านักเรียนควรมีเสรีภาพในทรงผมของตัวหรือไม่?\nในสังคมควรทำอย่างไรต่อไป?'
    },
    reminder: {
      topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      cover_url: '/part_3/quiz_01/bg_q.01.png',
      paragraphs: [
        {
          text: 'ทรงผมเป็นสิทธิในเนื้อตัวร่างกายที่ทุกคนมีตามหลักสิทธิมนุษยชน',
          color: '#FFFFFF'
        },
        {
          text: 'แต่เกิดความเห็นที่แตกต่างว่าควรจะทำอย่างไรระหว่างทางโรงเรียนที่มีความเห็นว่า ควรรักษากฎระเบียบและสร้างความเรียบร้อยผ่านทรงผม ',
          color: '#FFFFFF'
        },
        {
          text: 'ส่วนอีกฝั่งพยายามใช้เสรีภาพในการแสดงออกว่าการมีเสรีภาพในทรงผมมีข้อดีหลายอย่าง ดังนั้นการให้อิสระในทรงผมจึงควรเป็นเรื่องที่เกิดขึ้น',
          color: '#FFEB78'
        },
        {
          text: 'แล้วสังคมควรจะปรับไปในทิศทางใด?',
          color: '#FFEB78'
        }
      ],
      question:
        'ถ้ามีการกำหนดไว้ทรงผมอะไรก็ได้ แต่อยากให้ภาพลักษณ์เรียบร้อยสมวัยคิดว่าจะทำอย่างไรได้บ้าง? (ให้สองสิ่งนี้ไปด้วยกันได้)',
      shared_topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วย การกล้อนหรือตัดผมนักเรียน'
    }
  },
  {
    id: 8,
    is_selected: false,
    thumbnail_src: '/part_3/topic/Topic.08.png',
    title: 'ชุมนุมในโรงเรียน',
    question:
      'หลายโรงเรียนยังมีกฎการบังคับตัดผม รวมถึงการลงโทษด้วยการกล้อนหรือตัดผมนักเรียน เมื่อรับรู้สิ่งนี้/คำตอบในใจของคุณคือ',
    choices: [
      {
        label: 'A',
        image_src: '/part_3/frame_choose/illus.01.A.png',
        text: 'การบังคับตัดผมหรือการลงโทษช่วยรักษาระเบียบวินัย',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: '/part_3/frame_choose/illus.01.B.png',
        text: 'ก็แค่ตัดผมเองกำหนดมาแบบไหนก็ทำแบบนั้น',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: '/part_3/frame_choose/illus.01.C.png',
        text: 'ถ้าอยู่ในระเบียบไม่ได้ อนาคตทำงานยิ่งกว่านี้นะ',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: '/part_3/frame_choose/illus.01.D.png',
        text: 'ไม่ควรมีการลงโทษ แต่ยังควรบังคับให้ตัดผม',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: '/part_3/frame_choose/illus.01.E.png',
        text: 'ผมของเรา ความมั่นใจของเรา จะทำทรงอะไรก็ได้',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: '/part_3/frame_choose/illus.F.png',
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับกฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      sub_title:
        'ถึงแม้ระเบียบกระทรวงศึกษาฯ จะให้อิสระในการเลือกไว้ทรงผมมากขึ้นแต่กฎการตัดผมยังคงบังคับใช้อยู่ในโรงเรียนทั่วประเทศโดยมีความเห็นว่า เป็นระเบียบเรียบร้อย และยังต้องปฏิบัติตาม',
      contents: [
        {
          image_url: '/part_3/quiz_01/illus_event.01.01.png',
          text: 'บางโรงเรียนลงโทษนักเรียนด้วยการกล้อนผมนักเรียนชายหรือตัดผมนักเรียนหญิง ซึ่งทำให้เกิดความอับอาย'
        },
        {
          image_url: '/part_3/quiz_01/illus_event.01.02.png',
          text: 'และมีบางกลุ่มเห็นว่าทุกคนมีเสรีภาพในทรงผมของตัวเอง ไม่ควรมีใครถูกบังคับ'
        }
      ],
      question: 'คิดว่านักเรียนควรมีเสรีภาพในทรงผมของตัวหรือไม่?\nในสังคมควรทำอย่างไรต่อไป?'
    },
    reminder: {
      topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      cover_url: '/part_3/quiz_01/bg_q.01.png',
      paragraphs: [
        {
          text: 'ทรงผมเป็นสิทธิในเนื้อตัวร่างกายที่ทุกคนมีตามหลักสิทธิมนุษยชน',
          color: '#FFFFFF'
        },
        {
          text: 'แต่เกิดความเห็นที่แตกต่างว่าควรจะทำอย่างไรระหว่างทางโรงเรียนที่มีความเห็นว่า ควรรักษากฎระเบียบและสร้างความเรียบร้อยผ่านทรงผม ',
          color: '#FFFFFF'
        },
        {
          text: 'ส่วนอีกฝั่งพยายามใช้เสรีภาพในการแสดงออกว่าการมีเสรีภาพในทรงผมมีข้อดีหลายอย่าง ดังนั้นการให้อิสระในทรงผมจึงควรเป็นเรื่องที่เกิดขึ้น',
          color: '#FFEB78'
        },
        {
          text: 'แล้วสังคมควรจะปรับไปในทิศทางใด?',
          color: '#FFEB78'
        }
      ],
      question:
        'ถ้ามีการกำหนดไว้ทรงผมอะไรก็ได้ แต่อยากให้ภาพลักษณ์เรียบร้อยสมวัยคิดว่าจะทำอย่างไรได้บ้าง? (ให้สองสิ่งนี้ไปด้วยกันได้)',
      shared_topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วย การกล้อนหรือตัดผมนักเรียน'
    }
  },
  {
    id: 9,
    is_selected: false,
    thumbnail_src: '/part_3/topic/Topic.09.png',
    title: 'วิพากษ์วิจารณ์รัฐบาล',
    question:
      'หลายโรงเรียนยังมีกฎการบังคับตัดผม รวมถึงการลงโทษด้วยการกล้อนหรือตัดผมนักเรียน เมื่อรับรู้สิ่งนี้/คำตอบในใจของคุณคือ',
    choices: [
      {
        label: 'A',
        image_src: '/part_3/frame_choose/illus.01.A.png',
        text: 'การบังคับตัดผมหรือการลงโทษช่วยรักษาระเบียบวินัย',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: '/part_3/frame_choose/illus.01.B.png',
        text: 'ก็แค่ตัดผมเองกำหนดมาแบบไหนก็ทำแบบนั้น',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: '/part_3/frame_choose/illus.01.C.png',
        text: 'ถ้าอยู่ในระเบียบไม่ได้ อนาคตทำงานยิ่งกว่านี้นะ',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: '/part_3/frame_choose/illus.01.D.png',
        text: 'ไม่ควรมีการลงโทษ แต่ยังควรบังคับให้ตัดผม',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: '/part_3/frame_choose/illus.01.E.png',
        text: 'ผมของเรา ความมั่นใจของเรา จะทำทรงอะไรก็ได้',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: '/part_3/frame_choose/illus.F.png',
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับกฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      sub_title:
        'ถึงแม้ระเบียบกระทรวงศึกษาฯ จะให้อิสระในการเลือกไว้ทรงผมมากขึ้นแต่กฎการตัดผมยังคงบังคับใช้อยู่ในโรงเรียนทั่วประเทศโดยมีความเห็นว่า เป็นระเบียบเรียบร้อย และยังต้องปฏิบัติตาม',
      contents: [
        {
          image_url: '/part_3/quiz_01/illus_event.01.01.png',
          text: 'บางโรงเรียนลงโทษนักเรียนด้วยการกล้อนผมนักเรียนชายหรือตัดผมนักเรียนหญิง ซึ่งทำให้เกิดความอับอาย'
        },
        {
          image_url: '/part_3/quiz_01/illus_event.01.02.png',
          text: 'และมีบางกลุ่มเห็นว่าทุกคนมีเสรีภาพในทรงผมของตัวเอง ไม่ควรมีใครถูกบังคับ'
        }
      ],
      question: 'คิดว่านักเรียนควรมีเสรีภาพในทรงผมของตัวหรือไม่?\nในสังคมควรทำอย่างไรต่อไป?'
    },
    reminder: {
      topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      cover_url: '/part_3/quiz_01/bg_q.01.png',
      paragraphs: [
        {
          text: 'ทรงผมเป็นสิทธิในเนื้อตัวร่างกายที่ทุกคนมีตามหลักสิทธิมนุษยชน',
          color: '#FFFFFF'
        },
        {
          text: 'แต่เกิดความเห็นที่แตกต่างว่าควรจะทำอย่างไรระหว่างทางโรงเรียนที่มีความเห็นว่า ควรรักษากฎระเบียบและสร้างความเรียบร้อยผ่านทรงผม ',
          color: '#FFFFFF'
        },
        {
          text: 'ส่วนอีกฝั่งพยายามใช้เสรีภาพในการแสดงออกว่าการมีเสรีภาพในทรงผมมีข้อดีหลายอย่าง ดังนั้นการให้อิสระในทรงผมจึงควรเป็นเรื่องที่เกิดขึ้น',
          color: '#FFEB78'
        },
        {
          text: 'แล้วสังคมควรจะปรับไปในทิศทางใด?',
          color: '#FFEB78'
        }
      ],
      question:
        'ถ้ามีการกำหนดไว้ทรงผมอะไรก็ได้ แต่อยากให้ภาพลักษณ์เรียบร้อยสมวัยคิดว่าจะทำอย่างไรได้บ้าง? (ให้สองสิ่งนี้ไปด้วยกันได้)',
      shared_topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วย การกล้อนหรือตัดผมนักเรียน'
    }
  },
  {
    id: 10,
    is_selected: false,
    thumbnail_src: '/part_3/topic/Topic.10.png',
    title: 'พิธีไหว้ครู',
    question:
      'หลายโรงเรียนยังมีกฎการบังคับตัดผม รวมถึงการลงโทษด้วยการกล้อนหรือตัดผมนักเรียน เมื่อรับรู้สิ่งนี้/คำตอบในใจของคุณคือ',
    choices: [
      {
        label: 'A',
        image_src: '/part_3/frame_choose/illus.01.A.png',
        text: 'การบังคับตัดผมหรือการลงโทษช่วยรักษาระเบียบวินัย',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: '/part_3/frame_choose/illus.01.B.png',
        text: 'ก็แค่ตัดผมเองกำหนดมาแบบไหนก็ทำแบบนั้น',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: '/part_3/frame_choose/illus.01.C.png',
        text: 'ถ้าอยู่ในระเบียบไม่ได้ อนาคตทำงานยิ่งกว่านี้นะ',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: '/part_3/frame_choose/illus.01.D.png',
        text: 'ไม่ควรมีการลงโทษ แต่ยังควรบังคับให้ตัดผม',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: '/part_3/frame_choose/illus.01.E.png',
        text: 'ผมของเรา ความมั่นใจของเรา จะทำทรงอะไรก็ได้',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: '/part_3/frame_choose/illus.F.png',
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับกฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      sub_title:
        'ถึงแม้ระเบียบกระทรวงศึกษาฯ จะให้อิสระในการเลือกไว้ทรงผมมากขึ้นแต่กฎการตัดผมยังคงบังคับใช้อยู่ในโรงเรียนทั่วประเทศโดยมีความเห็นว่า เป็นระเบียบเรียบร้อย และยังต้องปฏิบัติตาม',
      contents: [
        {
          image_url: '/part_3/quiz_01/illus_event.01.01.png',
          text: 'บางโรงเรียนลงโทษนักเรียนด้วยการกล้อนผมนักเรียนชายหรือตัดผมนักเรียนหญิง ซึ่งทำให้เกิดความอับอาย'
        },
        {
          image_url: '/part_3/quiz_01/illus_event.01.02.png',
          text: 'และมีบางกลุ่มเห็นว่าทุกคนมีเสรีภาพในทรงผมของตัวเอง ไม่ควรมีใครถูกบังคับ'
        }
      ],
      question: 'คิดว่านักเรียนควรมีเสรีภาพในทรงผมของตัวหรือไม่?\nในสังคมควรทำอย่างไรต่อไป?'
    },
    reminder: {
      topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      cover_url: '/part_3/quiz_01/bg_q.01.png',
      paragraphs: [
        {
          text: 'ทรงผมเป็นสิทธิในเนื้อตัวร่างกายที่ทุกคนมีตามหลักสิทธิมนุษยชน',
          color: '#FFFFFF'
        },
        {
          text: 'แต่เกิดความเห็นที่แตกต่างว่าควรจะทำอย่างไรระหว่างทางโรงเรียนที่มีความเห็นว่า ควรรักษากฎระเบียบและสร้างความเรียบร้อยผ่านทรงผม ',
          color: '#FFFFFF'
        },
        {
          text: 'ส่วนอีกฝั่งพยายามใช้เสรีภาพในการแสดงออกว่าการมีเสรีภาพในทรงผมมีข้อดีหลายอย่าง ดังนั้นการให้อิสระในทรงผมจึงควรเป็นเรื่องที่เกิดขึ้น',
          color: '#FFEB78'
        },
        {
          text: 'แล้วสังคมควรจะปรับไปในทิศทางใด?',
          color: '#FFEB78'
        }
      ],
      question:
        'ถ้ามีการกำหนดไว้ทรงผมอะไรก็ได้ แต่อยากให้ภาพลักษณ์เรียบร้อยสมวัยคิดว่าจะทำอย่างไรได้บ้าง? (ให้สองสิ่งนี้ไปด้วยกันได้)',
      shared_topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วย การกล้อนหรือตัดผมนักเรียน'
    }
  }
]
