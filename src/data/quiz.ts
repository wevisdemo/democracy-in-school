import { IQuiz } from 'types/quiz'
import { prefix } from 'utils'
export const quiz_list: IQuiz[] = [
  {
    id: 1,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.01.png`,
    title: 'ระเบียบทรงผม',
    question:
      'หลายโรงเรียนยังมีกฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน เมื่อรับรู้สิ่งนี้คำตอบในใจของคุณคือ',
    choices: [
      {
        id: 1,
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.01.A.png`,
        text: 'การบังคับตัดผมหรือการลงโทษ เป็นวิธีช่วยรักษาระเบียบวินัย',
        background_color: '#5abde4'
      },
      {
        id: 2,
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.01.B.png`,
        text: 'ก็แค่ตัดผมเอง คิดมากทำไม กำหนดมาแบบไหนก็ทำแบบนั้น',
        background_color: '#aa85b5'
      },
      {
        id: 3,
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.01.C.png`,
        text: 'ถ้าไม่อยู่ในระเบียบตั้งแต่ตอนนี้ ในอนาคตไปทำงานยิ่งกว่านี้นะ',
        background_color: '#d0da81'
      },
      {
        id: 4,
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.01.D.png`,
        text: 'ไม่ควรมีการลงโทษ แต่ยังควรบังคับให้ตัดผม',
        background_color: '#fceb88'
      },
      {
        id: 5,
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.01.E.png`,
        text: 'ผมของเรา เพื่อเพิ่มความมั่นใจ จะทำทรงอะไรก็ได้',
        background_color: '#f2a25c'
      },
      {
        id: 6,
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'ยังไม่ใช่คำตอบที่ใช่คุณคิดว่า...',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับกฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      sub_title:
        'ถึงแม้ระเบียบกระทรวงศึกษาธิการ จะให้อิสระในการเลือกไว้ทรงผมมากขึ้นแต่กฎการตัดผมยังคงถูกบังคับใช้อยู่บางโรงเรียนโดยมีความเห็นว่า เป็นระเบียบเรียบร้อย และยังต้องปฏิบัติตาม',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_01/illus_event.01.01.png`,
          text: 'บางโรงเรียนลงโทษนักเรียนด้วยการกล้อนผมนักเรียนชายหรือตัดผมนักเรียนหญิง ซึ่งทำให้เกิดความอับอาย'
        },
        {
          image_url: `${prefix}/part_3/quiz_01/illus_event.01.02.png`,
          text: 'และมีบางกลุ่มเห็นว่าทุกคนมีเสรีภาพในทรงผมของตัวเอง ไม่ควรมีใครถูกบังคับ'
        }
      ],
      question: 'คิดว่านักเรียนควรมีเสรีภาพในทรงผมของตัวเองหรือไม่? ในสังคมควรทำอย่างไรต่อไป?'
    },
    reminder: {
      topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วยการกล้อนหรือตัดผมนักเรียน',
      cover_url: `${prefix}/part_3/quiz_01/bg_q.01.png`,
      paragraphs: [
        {
          text: 'ทรงผมเป็นสิทธิในเนื้อตัวร่างกายที่ทุกคนมีตามหลักสิทธิมนุษยชน',
          color: '#FFFFFF'
        },
        {
          text: 'แต่เกิดความเห็นที่แตกต่างว่าควรจะทำอย่างไรระหว่างทางโรงเรียนที่มีความเห็นว่า ควรรักษากฎระเบียบและสร้างความเรียบร้อยผ่านทรงผม',
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
      question: [
        'ถ้ามีการกำหนดว่าไว้ทรงผมอะไรก็ได้ แต่อยากให้ภาพลักษณ์เรียบร้อย สมวัย คิดว่าจะทำอย่างไรได้บ้างให้สองสิ่งนี้ไปด้วยกันได้ ?'
      ],
      shared_topic: 'ระเบียบทรงผม'
    },
    og_image_src: `${prefix}/og/og-6.png`
  },
  {
    id: 2,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.02.png`,
    title: 'ความคิดเห็นของบุคคลที่อายุต่างกัน',
    question:
      'ถ้าคุณได้มีโอกาสได้ยินหรืออยู่ในวงสนทนาของคนที่อายุมากกว่าคุณมากๆและพูดเรื่องที่คุณไม่เห็นด้วย คุณจะตัดสินใจแบบไหน?',
    choices: [
      {
        id: 1,
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.02.A.png`,
        text: 'อดทนฟัง แต่ไม่แสดงออกว่าไม่เห็นด้วย เพราะเขาเป็นผู้ใหญ่',
        background_color: '#5abde4'
      },
      {
        id: 2,
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.02.B.png`,
        text: 'อดทนฟัง เพราะเขาเป็นผู้ใหญ่ แต่เก็บไปเม้าท์กับเพื่อนต่อ',
        background_color: '#aa85b5'
      },
      {
        id: 3,
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.02.C.png`,
        text: 'ลุกหนี เพื่อเลี่ยงที่ต้องได้ยินในสิ่งที่ไม่เห็นด้วย',
        background_color: '#d0da81'
      },
      {
        id: 4,
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.02.D.png`,
        text: 'ตั้งคำถามกับบางประเด็นที่เห็นต่าง แล้วลองเสนอมุมมองที่แตกต่างอย่างสุภาพ',
        background_color: '#fceb88'
      },
      {
        id: 5,
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.02.E.png`,
        text: 'โต้เถียงอย่างเข้มข้น',
        background_color: '#f2a25c'
      },
      {
        id: 6,
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'ยังไม่ใช่คำตอบที่ใช่คุณคิดว่า...',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเมื่ออยู่ในวงสนทนาของคนที่อายุมากกว่าคุณมากๆและพูดเรื่องที่คุณไม่เห็นด้วย',
      sub_title: '',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_02/illus_event.02.01.png`,
          text: 'หลายครั้งบทสนทนาระหว่างบุคคลที่มีอายุต่างกัน เช่น เด็กกับผู้ใหญ่อาจมีความเห็นที่ไม่ตรงกัน <span class="color-yellow">ผู้ใหญ่หรือพ่อแม่หลายคน อาจจะมีความเข้าใจว่าความคิด ความเชื่อของตนเองเป็นสิ่งที่ถูกต้องและมีประสบการณ์มามากกว่า</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_02/illus_event.02.02.png`,
          text: 'ส่วนเด็กหรือคนที่อายุน้อยกว่า อาจจะเชื่อในสิ่งที่รับรู้ เห็นหรือหาข้อมูลด้วยตัวเอง<br/><br/><span class="color-yellow">เช่น ในเรื่องการเรียน อาชีพ ก่อให้เกิดความคิดเห็นที่ไม่ตรงกัน และต่างฝ่ายต่างมีเหตุผลของตนเอง</span>'
        }
      ],
      question: 'คิดว่าควรทำอย่างไรกับเรื่องการสนทนากับคนต่างช่วงวัย?'
    },
    reminder: {
      topic: 'อยู่ในวงสนทนาของคนที่อายุมากกว่าคุณมากๆและพูดเรื่องที่คุณไม่เห็นด้วย',
      cover_url: `${prefix}/part_3/quiz_02/bg_q.02.png`,
      paragraphs: [
        {
          text: 'ในสังคมย่อมมีความแตกต่างหลากหลายทั้งเพศ การศึกษา และช่วงวัย ซึ่งอาจทำให้มีประสบการณ์หรือเจอเหตุการณ์ต่างกัน ส่งผลให้ความคิดเห็นอาจไม่ตรงกัน และบางครั้งก็เกิดความขัดแย้งขึ้นได้ โดยเฉพาะในครอบครัว',
          color: '#FFFFFF'
        },
        {
          text: 'แต่ตามหลักสิทธิมนุษยชนแล้ว การแสดงความคิดเห็น เป็นหนึ่งในเสรีภาพการแสดงออกที่สามารถทำได้อย่างอิสระ บนพื้นฐานของการเคารพซึ่งกันและกัน รวมทั้งเปิดใจเรียนรู้ความคิดเห็นที่แตกต่างของคนอื่นๆ',
          color: '#FFEB78'
        }
      ],
      question: ['การแสดงออกใดบ้าง ที่มักจะกลายเป็นต้นเหตุของความขัดแย้งของคนอายุต่างกันได้ และจะรับมืออย่างไร?'],
      shared_topic: 'ความคิดเห็นของบุคคลที่อายุต่างกัน'
    },
    og_image_src: `${prefix}/og/og-5.png`
  },
  {
    id: 3,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.03.png`,
    title: 'การรวมกลุ่ม',
    question:
      'คุณคิดอย่างไรกับการที่องค์กรภาคประชาชน (NGO) ออกมาประณามรัฐเรื่องสิทธิมนุษยชน เกี่ยวกับการใช้ความรุนแรงสลายการชุมนุม',
    choices: [
      {
        id: 1,
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.03.A.png`,
        text: 'รัฐควรเข้ามาควบคุมเป็นสิ่งที่ถูกต้องแล้ว',
        background_color: '#5abde4'
      },
      {
        id: 2,
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.03.B.png`,
        text: 'การสนับสนุนการชุมนุมอาจเพิ่มความขัดแย้งให้รุนแรงขึ้น',
        background_color: '#aa85b5'
      },
      {
        id: 3,
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.03.C.png`,
        text: 'รวมกลุ่มประณามเรื่องสิทธิมนุษยชนได้ แต่ไม่ควรทำให้เป็นเรื่องการเมือง',
        background_color: '#d0da81'
      },
      {
        id: 4,
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.03.D.png`,
        text: 'รวมกลุ่มประณามรัฐได้ถึงแม้จะเป็นเรื่องการเมือง',
        background_color: '#fceb88'
      },
      {
        id: 5,
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.03.E.png`,
        text: 'ประณามรัฐได้ เพราะเป็นการปกป้องสิทธิขั้นพื้นฐานของผู้ชุมนุม',
        background_color: '#f2a25c'
      },
      {
        id: 6,
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'ยังไม่ใช่คำตอบที่ใช่คุณคิดว่า...',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title:
        'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับการรวมกลุ่มองค์กรภาคประชาชน (NGO) เปรียบเสมือนตัวกลางระหว่างประชาชนกับรัฐได้ออกมาประณามรัฐเรื่องสิทธิมนุษยชนและสนับสนุนการชุมนุมทางการเมืองต่างๆ',
      sub_title:
        'ในไทยมีการรวมกลุ่มตั้งเป็นองค์กรภาคประชาชนหรือ NGO เพื่อต่อรองผลประโยชน์เนื่องจากกลุ่มมีอำนาจมากกว่าคนเพียงคนเดียว ด้วยการผลักดันและเสนอนโยบายต่อรัฐ',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_03/illus_event.03.01.png`,
          text: 'แต่มีกรณีที่การรวมกลุ่มบางกลุ่มที่ออกมาสนับสนุนการชุมนุมและประณามรัฐบาลเรื่องสิทธิมนุษยชนในการใช้ความรุนแรงสลายการชุมนุม</br></br>ซึ่งองค์กรภาคประชาชนกลับถูกกล่าวหาว่า "รับเงินต่างชาติ"<span class="color-yellow">จึงทำให้รัฐออกร่างกฎหมายเข้ามาควบคุมการรวมกลุ่มมากขึ้น</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_03/illus_event.03.02.png`,
          text: 'คณะรัฐมนตรีอนุมัติหลักการร่างกฎหมายเกี่ยวกับการตั้งองค์กรภาคประชาชน (NGO)ในการกำกับดูแลการจดทะเบียนและชี้แจงรายได้มากขึ้น'
        }
      ],
      question: 'คิดว่ากฎหมายควรเข้ามาจัดการกับการรวมกลุ่มอย่างไร เพื่อไม่ให้จำกัดสิทธิเสรีภาพในการรวมกลุ่มมากไป?'
    },
    reminder: {
      topic:
        'การรวมกลุ่มองค์กรภาคประชาชน (NGO) เปรียบเสมือนตัวกลางระหว่างประชาชนกับรัฐได้ออกมาประณามรัฐเรื่องสิทธิมนุษยชนและสนับสนุนการชุมนุมทางการเมืองต่างๆ',
      cover_url: `${prefix}/part_3/quiz_03/bg_q.03.png`,
      paragraphs: [
        {
          text: 'การรวมกลุ่มไม่ว่าจะเป็นองค์กรหรือไม่ ถือเป็นเสรีภาพในการรวมกลุ่มที่ทุกคนสามารถรวมกลุ่มกันได้ เพื่อปกป้องผลประโยชน์ของตนเอง เสนอนโยบายของตนต่อรัฐ',
          color: '#FFFFFF'
        },
        {
          text: 'การรวมกลุ่มนี้เป็นการต่อรองหรือผลักดันให้รัฐแก้ปัญหาประเด็นทางสังคม ดังเช่น สหภาพแรงงานที่รวมกลุ่มเพื่อต่อรองผลประโยชน์กับนายทุนกลุ่มเกษตรกรที่รวมกลุ่มต่อรองราคาผลผลิตหรือกลุ่มเรียกร้องสิทธิมนุษยชนให้เกิดขึ้น',
          color: '#FFFFFF'
        },
        {
          text: 'องค์กรภาคประชาชนยังเป็นตัวกลางที่สำคัญคอยส่งเสียงและผลักดันเรื่องที่รัฐยังเข้าไม่ถึง เช่น สิทธิมนุษยชน ซึ่งเป็นหลักสากลที่ต่างชาติเองสนใจ และอยู่ในคำสัญญาตามหลักการสากลที่ประเทศไทยได้ให้คำมั่นไว้',
          color: '#FFFFFF'
        },
        {
          text: 'ที่สำคัญ ถ้ามีองค์กรภาคประชาชนเพิ่มขึ้น ยังเป็นกลไกที่ช่วยรัฐในการขับเคลื่อนประเด็นที่รัฐเองอาจจะดูแลไม่ถึงได้ด้วย',
          color: '#FFFFFF'
        },
        {
          text: 'จึงเป็นที่น่าสนใจว่า การออกกฎหมายการรวมกลุ่ม จะเข้ามาควบคุมการดำเนินการอย่างไร? จะกระทบเสรีภาพการรวมกลุ่มมากน้อยเพียงใด? หรือการที่องค์กรภาคประชาชนรับเงินต่างชาติจะส่งผลร้ายต่อประเทศจริงหรือไม่?',
          color: '#FFEB78'
        }
      ],
      question: [
        'ถ้าไม่เกิดการรวมกลุ่มขึ้น คิดว่าจะแก้ปัญหาเรื่องต่างๆ เช่น สิ่งแวดล้อม การละเมิดสิทธิมนุษยชน ได้จากอะไรบ้าง?'
      ],
      shared_topic: 'การรวมกลุ่ม'
    },
    og_image_src: `${prefix}/og/og-8.png`
  },
  {
    id: 4,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.04.png`,
    title: 'ชุดไปรเวทหรือชุดนักเรียน',
    question: 'โรงเรียนควรกำหนดการแต่งกายของนักเรียนอย่างไรระหว่าง “ชุดไปรเวทหรือชุดนักเรียน” ',
    choices: [
      {
        id: 1,
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.04.A.png`,
        text: 'มองว่าแต่งชุดนักเรียน สุภาพ น่ารัก เรียบร้อยดีนะ',
        background_color: '#5abde4'
      },
      {
        id: 2,
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.04.B.png`,
        text: 'แต่งชุดนักเรียนเหมือนกัน จะได้ไม่ถูกมองว่าแตกต่างเหมือนชุดไปรเวท',
        background_color: '#aa85b5'
      },
      {
        id: 3,
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.04.C.png`,
        text: 'การแต่งชุดไปรเวท ก็ไม่ได้ส่งผลต่อการเรียน แต่ควรแต่งให้เรียบร้อย',
        background_color: '#d0da81'
      },
      {
        id: 4,
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.04.D.png`,
        text: 'มองว่าแต่งชุดไปรเวท ฝึกการแต่งตัวและเสริมความมั่นใจได้',
        background_color: '#fceb88'
      },
      {
        id: 5,
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.04.E.png`,
        text: 'แต่งชุดไปรเวท  เพราะช่วยสร้างความสุขจากการเลือกชุดใส่เอง',
        background_color: '#f2a25c'
      },
      {
        id: 6,
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'ยังไม่ใช่คำตอบที่ใช่คุณคิดว่า...',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับการแต่งกายชุดไปรเวทหรือชุดนักเรียน',
      sub_title: 'มีหลายความคิดเห็น ที่มองการแต่งกายชุดไปรเวทและชุดนักเรียนแตกต่างกัน',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_04/illus_event.04.01.png`,
          text: '<span class="color-yellow">บางคนอาจเห็นว่าควรแต่งกายชุดนักเรียน เป็นการแสดงออกในสถานะความเป็นนักเรียนมองว่าการใส่ชุดไปรเวทเรื่องแฟชั่นซึ่งจะสร้างความแตกต่างเหลื่อมล้ำได้ง่าย</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_04/illus_event.04.02.png`,
          text: '<span class="color-yellow">บางคนอาจเห็นว่าควรแต่งชุดไปรเวทเป็นการฝึกการแต่งตัวและเสริมสร้างความมั่นใจของเด็กเพิ่มความสุขและช่วยสร้างสังคมที่เคารพความแตกต่างได้<br/><br/>แต่บางกรณีการแต่งชุดไปรเวทกลับถูกเลือกปฏิบัติ เช่น การเรียกไปคุยเพื่อเปลี่ยนชุด หรือถูกจดรายชื่อ เป็นต้น</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_04/illus_event.04.03.png`,
          text: '<span class="color-yellow">และบางคนอาจเห็นเพิ่มเติมว่า การจะได้ใส่ชุดไปรเวทในวันหยุดเสาร์-อาทิตย์ก็เพียงพอแล้ว หรือใน 1 สัปดาห์ มีหลายชุดให้ใส่เช่น ชุดพละ ชุดเนตรนารี ก็มีความหลากหลายเพียงพอแล้วเช่นกัน</span>'
        }
      ],
      question: 'คิดว่าควรแต่งกายชุดไปรเวทหรือชุดนักเรียน? แล้วในสังคมควรทำต่อกันอย่างไร?'
    },
    reminder: {
      topic: 'การแต่งกายชุดไปรเวทหรือชุดนักเรียน',
      cover_url: `${prefix}/part_3/quiz_04/bg_q.04.png`,
      paragraphs: [
        {
          text: 'การแต่งกายเป็นหนึ่งในเสรีภาพในการแสดงออก ไม่ว่าจะเป็นการแต่งชุดไปรเวทหรือชุดนักเรียน เพียงแต่ชุดไปรเวทอาจเป็นการแสดงออก ซึ่งเป็นการตั้งคำถามต่อสังคมรูปแบบเดิม',
          color: '#FFFFFF'
        },
        {
          text: 'เป็นที่น่าสนใจว่า แล้วการแต่งกายด้วยชุดนักเรียนแบบเดิมยังคงจำเป็นอยู่ไหม? หรือสังคมควรปรับเรื่องการแต่งกายนี้ไปใน ทิศทางใด?',
          color: '#FFEB78'
        }
      ],
      question: ['คิดเห็นอย่างไร? กับการแสดงออกทางความคิดเห็นที่แตกต่างกัน จนเกิดการตั้งถามการปฏิบัติเดิมที่มีมานาน'],
      shared_topic: 'การแต่งกายชุดไปรเวทหรือชุดนักเรียน'
    },
    og_image_src: `${prefix}/og/og-4.png`
  },
  {
    id: 5,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.05.png`,
    title: 'ห้องน้ำที่ทุกเพศเข้าได้',
    question: '“ห้องน้ำของทุกคน ทุกเพศเข้าได้” ถ้าเห็นการโพสต์ข้อความนี้ คำตอบแทนใจของคุณคือ',
    choices: [
      {
        id: 1,
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.05.A.png`,
        text: 'ไม่เห็นด้วย อันตรายขึ้นกว่าเดิม รู้สึกไม่ปลอดภัยมากๆ',
        background_color: '#5abde4'
      },
      {
        id: 2,
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.05.B.png`,
        text: 'ไม่เห็นด้วย แยกแบบเดิมชัดเจนดีแล้ว',
        background_color: '#aa85b5'
      },
      {
        id: 3,
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.05.C.png`,
        text: 'ไม่เห็นด้วย แต่ละเพศใช้เวลาเข้าห้องน้ำไม่เท่ากัน ไม่ควรปนกัน',
        background_color: '#d0da81'
      },
      {
        id: 4,
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.05.D.png`,
        text: 'ไม่เห็นด้วย คิดว่าทำห้องน้ำเพศหลากหลายแยกออกมาชัดเจนเลยดีกว่านะ ',
        background_color: '#fceb88'
      },
      {
        id: 5,
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.05.E.png`,
        text: 'เห็นด้วย ทุกเพศเท่าเทียมกัน ควรใช้ร่วมกันได้',
        background_color: '#f2a25c'
      },
      {
        id: 6,
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'ยังไม่ใช่คำตอบที่ใช่คุณคิดว่า...',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับห้องน้ำของทุกคน ทุกเพศเข้าได้',
      sub_title:
        'ห้องน้ำกลายเป็นประเด็นที่สะท้อน เรื่องความจำกัดของเพศหลากหลาย เพราะตามรูปแบบเดิมจะแบ่งห้องน้ำเป็น 2 กลุ่ม คือ ชายและหญิงเท่านั้น ',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_05/illus_event.05.01.png`,
          text: 'ทำให้เพศหลากหลายไม่สามารถใช้ห้องน้ำเหมาะสมกับเพศของตน อีกทั้งเวลาที่ใช้ห้องน้ำ <span class="color-yellow">ทำให้เกิดความไม่สบายใจกันทั้งสองฝ่าย</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_05/illus_event.05.02.png`,
          text: 'ดังนั้น บางคนจึงอาจมองว่า<span class="color-yellow">ควรสร้างห้องน้ำแบบไม่แบ่งแยกเพศโดยทุกคนสามารถเข้าได้</span></br>ขณะที่บางคนอาจเห็นต่างว่า <span class="color-yellow">การไม่แบ่งแยกเพศเลยจะสร้างความไม่ปลอดภัยเกิดขึ้นได้</span>'
        }
      ],
      question: 'คิดว่าต้องจัดการเรื่องนี้อย่างไร? ที่เราเคารพเพศหลากหลายในสังคมและมีความปลอดภัยขึ้นไปพร้อมกันได้'
    },
    reminder: {
      topic: 'ห้องน้ำของทุกคน ทุกเพศเข้าได้',
      cover_url: `${prefix}/part_3/quiz_05/bg_q.05.png`,
      paragraphs: [
        {
          text: 'ผู้มีความแตกต่างหลากหลายทางเพศในสังคมย่อมมีสิทธิเสรีภาพเสมอเหมือนกันกับคนอื่นๆในการตั้งคำถามและเรียกร้องเกี่ยวกับเรื่องห้องน้ำเพื่อต้องการเปลี่ยนแปลงให้รองรับความหลากหลายที่มีอยู่แต่อาจส่งผลกระทบต่อความคิดและการกระทำเดิมในสังคม',
          color: '#FFFFFF'
        }
      ],
      question: [
        'ถ้าให้สร้างห้องน้ำเฉพาะสำหรับเพศหลากหลาย แล้วเพศหลากหลายที่มีเพศสภาวะต่างกัน จะเข้าห้องน้ำเดียวกันได้หรือไม่?'
      ],
      shared_topic: 'ห้องน้ำของทุกคน ทุกเพศเข้าได้'
    },
    og_image_src: `${prefix}/og/og-3.png`
  },
  {
    id: 6,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.06.png`,
    title: 'การแต่งตัว',
    question:
      'ถ้าคุณแต่งตัวออกจากบ้านมาด้วยความมั่นใจ แล้วเจอคำพูด แต่งตัวไม่ปรึกษาใครเลยเหรอ? ทำไมกล้าแต่งแบบนี้? คุณจะทำอย่างไร?',
    choices: [
      {
        id: 1,
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.06.A.png`,
        text: 'ด่ากลับ !!',
        background_color: '#5abde4'
      },
      {
        id: 2,
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.06.B.png`,
        text: 'ตอบกลับด้วยการอธิบายให้เข้าใจถึงสิทธิของเรา',
        background_color: '#aa85b5'
      },
      {
        id: 3,
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.06.C.png`,
        text: 'โกรธ แต่ไม่ตอบโต้ เพราะไม่อยากเสียเวลาทะเลาะ',
        background_color: '#d0da81'
      },
      {
        id: 4,
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.06.D.png`,
        text: 'เข้าใจว่าเขามีสิทธิวิจารณ์ แต่จะใส่ต่อไปอย่างมั่นใจ',
        background_color: '#fceb88'
      },
      {
        id: 5,
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.06.E.png`,
        text: 'เก็บไปคิด แล้วทบทวนวิธีแต่งตัวใหม่',
        background_color: '#f2a25c'
      },
      {
        id: 6,
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'ยังไม่ใช่คำตอบที่ใช่คุณคิดว่า...',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับการแต่งตัว',
      sub_title: '',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_06/illus_event.06.01.png`,
          text: 'บ่อยครั้งที่หลายคนก่อนออกจากบ้านลุกขึ้นมาอาบน้ำ เลือกชุดตัวโปรด มาแต่งตัว แต่งหน้า ส่องกระจกด้วยความมั่นใจ <span class="color-yellow">จนกระทั่งเจอคำทักทาย เช่น "วันนี้แต่งตัว แต่งหน้าเต็มเชียว" , "ทำไมกล้าแต่งตัวแบบนี้มา"</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_06/illus_event.06.02.png`,
          text: '<span class="color-yellow">ทำให้ความมั่นใจที่สะสมมาพังทลายลง ความรู้สึกที่สดใสถูกแทนที่ด้วยความกังวล แถมอดไม่ได้ที่จะเช็คตัวเองในกระจกตลอดทั้งวัน ซึ่งหลายคนเคยเจอเหตุการณ์เหล่านี้มา</span>'
        }
      ],
      question: 'คิดว่าปัญหาของเรื่องนี้คืออะไร? และควรจะถูกปรับไปในทิศทางใด?'
    },
    reminder: {
      topic: 'การแต่งตัว',
      cover_url: `${prefix}/part_3/quiz_06/bg_q.06.png`,
      paragraphs: [
        {
          text: 'เมื่อเราแต่งตัวด้วยความมั่นใจแต่กลับถูกทักทายด้วยคำพูดที่ทำลายความมั่นใจลง',
          color: '#FFFFFF'
        },
        {
          text: 'ความจริงแล้วไม่ว่าจะแต่งตัวแบบใดก็ตามล้วนเป็นเสรีภาพในการแสดงออก (Freedom of Expression)ที่พยายามแสดงความเป็นตัวตน ความชอบผ่านการแต่งกายออกมา',
          color: '#FFFFFF'
        },
        {
          text: 'ซึ่งการแสดงความคิดเห็น ที่มาวิจารณ์การแต่งตัวเป็นหนึ่งในการใช้เสรีภาพในการแสดงออกทางความคิดเห็นอย่างหนึ่งเช่นกัน',
          color: '#FFEB78'
        },
        {
          text: 'เราจะสร้างสมดุลระหว่างการเคารพสิทธิของผู้อื่นกับสิทธิและความมั่นใจของเราอย่างไร',
          color: '#FFEB78'
        }
      ],
      question: [
        'ลองจินตนาการว่าคนที่ได้รับคำทักทายหล่านี้มาตลอด จะรู้สึกอย่างไรบ้าง?',
        'ถ้าเราเลือกการไม่พูด ไม่ตอบโต้ เท่ากับการยอมรับหรือไม่ คิดเห็นอย่างไร?'
      ],
      shared_topic: 'การแต่งตัว'
    },
    og_image_src: `${prefix}/og/og-2.png`
  },
  {
    id: 7,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.07.png`,
    title: 'การแสดงออกทางการเมือง',
    question: 'เมื่อเห็นนักเรียนนำริบบิ้นขาว/โบขาวมาติดแสดงออกสัญลักษณ์ทางการเมือง คุณคิดเห็นอย่างไร?',
    choices: [
      {
        id: 1,
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.07.A.png`,
        text: 'ไม่ควรทำ เพราะอาจยังไม่มีวุฒิภาวะเพียงพอ',
        background_color: '#5abde4'
      },
      {
        id: 2,
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.07.B.png`,
        text: 'ไม่ควรทำ เพราะ พ่อแม่ส่งให้มาเรียนเท่านั้น',
        background_color: '#aa85b5'
      },
      {
        id: 3,
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.07.C.png`,
        text: 'ทำได้ แต่ควรคำนึงถึงการไปสมัครงานในอนาคต',
        background_color: '#d0da81'
      },
      {
        id: 4,
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.07.D.png`,
        text: 'ทำได้ แต่ต้องได้รับความยินยอมจากสถาบันการศึกษาก่อน',
        background_color: '#fceb88'
      },
      {
        id: 5,
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.07.E.png`,
        text: 'ทำได้ โดยไม่ต้องขอความยินยอมจากสถาบันการศึกษา',
        background_color: '#f2a25c'
      },
      {
        id: 6,
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'ยังไม่ใช่คำตอบที่ใช่คุณคิดว่า...',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกี่ยวกับนักเรียนแสดงออกทางการเมือง',
      sub_title:
        'มีเหตุการณ์นักเรียนหลายโรงเรียนในหลายจังหวัด แสดงออกหรือนัดทำกิจกรรม เพื่อแสดงออกทางการเมือง เช่น โพสต์แสดงความคิดเห็น ร้องเพลง ชูสามนิ้ว และผูกโบขาว',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_07/illus_event.07.01.png`,
          text: '<span class="color-yellow">แต่มีหลายกรณีที่การแสดงออกไม่สามารถทำได้อิสระ โดยบางคนถูกดึงโบขาวออกจากกระเป๋าไปผูกคอ หรือบางคนถูกเรียกเข้าห้องปกครองไปตักเตือน</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_07/illus_event.07.02.png`,
          text: 'ในมุมมองของผู้ปกครองหรือครู <span class="color-yellow">หลายคนห้ามปรามตักเตือนด้วยความเป็นห่วง</span> ว่าอาจจะกระทบต่อการเรียนหรือการใช้ชีวิตในอนาคต รวมทั้งอาจเกิดความรุนแรงขึ้นได้'
        }
      ],
      question: 'คิดว่านักเรียนสามารถแสดงออกทางการเมืองได้หรือไม่? และควรทำอย่างไร?'
    },
    reminder: {
      topic: 'ริบบิ้นขาว โบขาว นำมาติดแสดงออกสัญลักษณ์ทางการเมือง',
      cover_url: `${prefix}/part_3/quiz_07/bg_q.07.png`,
      paragraphs: [
        {
          text: 'เป็นเสรีภาพในการแสดงออกรูปแบบหนึ่ง ในที่นี้ โบขาวจึงเป็นการแสดงออกทางการเมืองว่าต้องการต่อต้านระบอบเผด็จการและส่งเสริมประชาธิปไตยส่วนการที่ครูหรือผู้ปกครองแสดงออกถึงความห่วงใยก็เป็นการแสดงออกทางความคิดในอีกแง่มุมหนึ่งเช่นกัน',
          color: '#FFFFFF'
        },
        {
          text: 'แต่เป็นที่น่าตั้งคำถามว่า ในสังคมประชาธิปไตยนี้ จะปฏิบัติอย่างไรกับการแสดงออกทางความคิดเห็นทางการเมืองที่แตกต่างกัน',
          color: '#FFEB78'
        }
      ],
      question: ['คิดอย่างไรกับคำว่า การเมืองเป็นเรื่องของทุกคน?'],
      shared_topic: 'การแสดงออกทางการเมือง'
    },
    og_image_src: `${prefix}/og/og-7.png`
  },
  {
    id: 8,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.08.png`,
    title: 'พื้นที่ชุมนุมในโรงเรียน',
    question: 'คุณคิดอย่างไรกับข้อเสนอที่ว่านักเรียนสามารถใช้พื้นที่จัดการชุมนุมภายในโรงเรียน?',
    choices: [
      {
        id: 1,
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.08.A.png`,
        text: 'ไม่ควรมี เพราะโรงเรียนไม่ควรเลือกข้างทางการเมือง',
        background_color: '#5abde4'
      },
      {
        id: 2,
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.08.B.png`,
        text: 'ให้พื้นที่ชุมนุมได้ แต่ไม่จำเป็นต้องเข้าไปดูแล',
        background_color: '#aa85b5'
      },
      {
        id: 3,
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.08.C.png`,
        text: 'ไม่ควรให้คนภายนอกเข้ามาชุมนุมในโรงเรียนด้วย',
        background_color: '#d0da81'
      },
      {
        id: 4,
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.08.D.png`,
        text: 'จัดพื้นที่ชุมนุมได้เลย ไม่จำเป็นต้องขอ',
        background_color: '#fceb88'
      },
      {
        id: 5,
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.08.E.png`,
        text: 'โรงเรียนควรจัดสรรพื้นที่รองรับไว้เลย',
        background_color: '#f2a25c'
      },
      {
        id: 6,
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'ยังไม่ใช่คำตอบที่ใช่คุณคิดว่า...',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับใช้พื้นที่จัดการชุมนุมภายในโรงเรียน',
      sub_title:
        'ช่วงหลังจากมีคำวินิจฉัยยุบพรรคอนาคตใหม่ ทำให้นักศึกษาและนักเรียนออกมาชุมนุมเคลื่อนไหวทางการเมือง (flash mob) เกิดขึ้นและใช้พื้นที่สถานศึกษาเป็นพื้นที่ชุมนุม',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_08/illus_event.08.01.png`,
          text: 'เช่น การยืนนิ่ง จัดกิจกรรมร้องเพลง เขียนข้อความ แม้แต่ปราศรัยและ <span class="color-yellow">เชิญชวนใช้พื้นที่สถานศึกษาจัดการชุมนุมแสดงออก</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_08/illus_event.08.02.png`,
          text: 'ซึ่งบางสถานศึกษามองว่า <span class="color-yellow">"สถานศึกษาควรเป็นพื้นที่ที่เป็นกลางทางการเมือง ไม่ควรเลือกข้างสร้างความขัดแย้งหรือก่อให้เกิดความไม่สงบ"</span><br/><br/>เลยออกประกาศไม่ให้จัดการชุมนุมในโรงเรียน นักเรียนต้องชุมนุมนอกรั้วหรือบางกรณีให้ตำรวจเข้ามาควบคุมดูแลในพื้นที่ชุมนุมแต่ไม่ให้ศิษย์เก่าหรือคนนอกเข้ามาชุมนุม'
        }
      ],
      question: 'คิดว่าโรงเรียนหรือสถานศึกษา สามารถเป็นพื้นที่จัดการชุมนุมได้หรือไม่ และควรทำอย่างไร?'
    },
    reminder: {
      topic: 'ใช้พื้นที่จัดการชุมนุมภายในโรงเรียน',
      cover_url: `${prefix}/part_3/quiz_08/bg_q.08.png`,
      paragraphs: [
        {
          text: 'การที่นักเรียนนักศึกษาจัดกิจกรรมต่างๆ ภายในสถานศึกษา นับเป็นเสรีภาพในการแสดงออกทางความคิดอย่างหนึ่ง และการชุมนุมเป็นเสรีภาพที่ทุกคนสามารถทำได้อย่างสงบ การใช้กฎหมายห้ามการชุมนุมต้องทำเท่าที่จำเป็น และเกี่ยวกับความปลอดภัย ความสงบเรียบร้อยเท่านั้น',
          color: '#FFFFFF'
        },
        {
          text: 'จึงเป็นที่น่าตั้งคำถามว่า หากนักเรียนนักศึกษาต้องการชุมนุม สถานศึกษาจะเป็นพื้นที่ชุมนุมได้หรือไม่?',
          color: '#FFFFFF'
        }
      ],
      question: [
        'นักเรียนนักศึกษาสามารถชุมนุมได้อย่างอิสระเสรีหรือไม่?',
        'บทบาทครูกับการชุมนุมภายในโรงเรียนควรเป็นอย่างไร?'
      ],
      shared_topic: 'ใช้พื้นที่จัดการชุมนุมภายในโรงเรียน'
    },
    og_image_src: `${prefix}/og/og-10png`
  },
  {
    id: 9,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.09.png`,
    pre_question: 'สถานการณ์บ้านเมืองวิกฤตมาก เพื่อนของคุณโพสต์ด่ารัฐบาลอย่างหนักว่า',
    title: 'วิพากษ์วิจารณ์รัฐบาล',
    question: '“รัฐบาลเฮง___ คนจะตายห่_กันอยู่แล้ว ทำเหี้_อะไรสักอย่างสิ ถ้าทำไม่ได้ก็ออกไปเลย”',
    choices: [
      {
        id: 1,
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.09.A.png`,
        text: 'ไม่ควรด่ารัฐบาลนะ',
        background_color: '#5abde4'
      },
      {
        id: 2,
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.09.B.png`,
        text: 'กดไลก์กดหัวใจให้อย่างเดียว',
        background_color: '#aa85b5'
      },
      {
        id: 3,
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.09.C.png`,
        text: 'กดไลก์กดหัวใจและแชร์ต่อเลย เรื่องนี้โดนใจต้องขยาย',
        background_color: '#d0da81'
      },
      {
        id: 4,
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.09.D.png`,
        text: 'ด่าได้ แค่ไม่ใช่คำหยาบ คำเหยียด',
        background_color: '#fceb88'
      },
      {
        id: 5,
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.09.E.png`,
        text: 'ด่าเลย ประเทศเราขับเคลื่อนได้ด้วยการด่า',
        background_color: '#f2a25c'
      },
      {
        id: 6,
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'ยังไม่ใช่คำตอบที่ใช่คุณคิดว่า...',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเมื่อคุณวิพากษ์วิจารณ์การทำงานของรัฐบาล',
      sub_title:
        'เคยมีคนจากรัฐบาลดำเนินการตรวจสอบ ดำเนินคดีกับคนที่โพสต์วิพากษ์วิจารณ์การทำงานของรัฐบาล โดยเฉพาะดารา นักแสดง ที่ออกมาแสดงออกทางการเมือง (Call out)',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_09/illus_event.09.01.png`,
          text: 'และยังมีประชาชนอีกหลายคนโพสต์วิพากษ์วิจารณ์ที่รัฐบาล สุดท้ายถูกโดนเรียกไปฟังข้อกล่าวหาที่สถานีตำรวจและเสียค่าปรับ'
        },
        {
          image_url: `${prefix}/part_3/quiz_09/illus_event.09.02.png`,
          text: 'แต่บางคนมองว่า รัฐบาลทำงานเต็มที่แล้วและไม่ควรแสดงความคิดเห็นที่รุนแรง'
        }
      ],
      question: 'คิดว่าเราสามารถวิพากษ์วิจารณ์รัฐบาลได้ไหม? ควรทำอย่างไร?'
    },
    reminder: {
      topic: 'เมื่อคุณวิพากษ์วิจารณ์การทำงานของรัฐบาล',
      cover_url: `${prefix}/part_3/quiz_09/bg_q.09.png`,
      paragraphs: [
        {
          text: 'การวิพากษ์วิจารณ์ เป็นหนึ่งในเสรีภาพในการแสดงออกทางความคิดเห็น ผ่านข้อความ จะเผยแพร่ทางสื่อโซเซียลมีเดีย หรือช่องทางไหนเป็นหนึ่งในเสรีภาพที่ทำได้ในการแสดงออกว่าคิดเห็นอย่างไร?',
          color: '#FFFFFF'
        },
        {
          text: 'แต่เป็นเรื่องที่ต้องตั้งคำถามต่อมาว่าการวิพากษ์วิจารณ์และการแสดงความคิดเห็นทางการเมืองควรมีขอบเขตแค่ไหน? และอย่างไร?',
          color: '#FFEB78'
        }
      ],
      question: [
        'ถ้าไม่เกิดการวิพากษ์วิจารณ์เลย ถือว่าเราละเลยการตรวจสอบหรือการมีส่วนร่วมทางการเมืองหรือไม่ อย่างไร?',
        'ถ้าการวิพากษ์วิจารณ์นั้นมาไม่ได้มาจากข้อเท็จจริง (Fake News) ทำให้เสื่อมเสียชื่อเสียง ถือว่าเป็นการหมิ่นประมาทหรือไม่ อย่างไร?'
      ],
      shared_topic: 'เมื่อคุณวิพากษ์วิจารณ์การทำงานของรัฐบาล'
    },
    og_image_src: `${prefix}/og/og-9.png`
  },
  {
    id: 10,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.10.png`,
    title: 'พิธีไหว้ครู',
    question: 'เมื่อพูดถึงการทำพาน และจัดกิจกรรมไหว้ครูที่ต้องจัดขึ้นทุกๆ ปี คำตอบไหนแทนใจคุณ?',
    choices: [
      {
        id: 1,
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.10.A.png`,
        text: 'กลับไปใช้วัสดุทำพานแบบเดิมมากขึ้น เช่น หญ้าแพรก ดอกเข็ม',
        background_color: '#5abde4'
      },
      {
        id: 2,
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.10.B.png`,
        text: 'ต้องเปิดโอกาสให้ทำพานตามไอเดียของนักเรียนได้โดยไม่บังคับ',
        background_color: '#aa85b5'
      },
      {
        id: 3,
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.10.C.png`,
        text: 'รักษาไว้กับการหมอบคลานนำพานไปไหว้ครู',
        background_color: '#d0da81'
      },
      {
        id: 4,
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.10.D.png`,
        text: 'ควรยกเลิกการหมอบคลานนำพานไปไหว้ครู',
        background_color: '#fceb88'
      },
      {
        id: 5,
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.10.E.png`,
        text: 'เปลี่ยนเป็นมอบดอกไม้ให้ครูคนใดก็ได้ตามใจนักเรียน',
        background_color: '#f2a25c'
      },
      {
        id: 6,
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'ยังไม่ใช่คำตอบที่ใช่คุณคิดว่า...',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับการทำพาน และจัดกิจกรรมไหว้ครูที่ต้องจัดขึ้นทุกๆปี',
      sub_title:
        'กิจกรรมไหว้ครูเป็นกิจกรรมให้โรงเรียนจัดขึ้นทุกวันช่วงวันพฤหัสบดีในสัปดาห์ที่ 2 ของเดือนมิถุนายนของทุกปี',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_10/illus_event.10.01.png`,
          text: 'เป็นกิจกรรมที่มีอย่างยาวนาน โดยมีให้ทำพานไหว้ครู เพื่อมอบให้ครูแต่ก็มีประเด็นตั้งคำถามกันว่า บางโรงเรียนให้เด็กยื่นตากแดด นั่งเป็นเวลานานเกินไป หรือยังมีวัฒนธรรมที่ต้องหมอบคลานให้นำพานไปไหว้ครู'
        },
        {
          image_url: `${prefix}/part_3/quiz_10/illus_event.10.02.png`,
          text: 'จนนักเรียนบางคนก็ไม่เห็นด้วย ออกมาแสดงความคิดเห็น หรือแม้แต่โพสต์ข้อความ บางคนถึงกับไม่เข้าร่วมกิจกรรมนี้'
        }
      ],
      question: 'คิดเห็นอย่างไรเกี่ยวกับการจัดกิจกรรมวันไหว้ครู?'
    },
    reminder: {
      topic: 'การทำพาน และจัดกิจกรรมไหว้ครูที่ต้องจัดขึ้นทุกๆปี',
      cover_url: `${prefix}/part_3/quiz_10/bg_q.10.png`,
      paragraphs: [
        {
          text: 'การแสดงความคิดเห็นหรือตั้งคำถามกับวัฒนธรรมที่มีอย่างยาวนาน อย่างเช่น กิจกรรมไหว้ครู เป็นหนึ่งในเสรีภาพการแสดงออกทางความคิดเห็น ซึ่งมีทั้งคนที่เห็นด้วยกับวัฒนธรรมนี้ หรือบางคนก็อาจตั้งคำถามว่าสิ่งที่ปฏิบัติสืบต่อกันมา อาจเป็นอะไรที่ล้าสมัยไปแล้ว หรือเห็นด้วยกับการให้ยกเลิกบางกิจกรรมไป',
          color: '#FFFFFF'
        },
        {
          text: 'เป็นเรื่องที่น่าสนใจว่า เสรีภาพการแสดงออกทางความคิดเห็นที่ท้าทายกับวัฒนธรรมที่มีอยู่เดิม จะส่งผลกับสังคมต่อไปในรูปแบบไหน',
          color: '#FFEB78'
        }
      ],
      question: ['ยังมีวัฒนธรรมหรือประเพณีอะไรอีกบ้าง ที่ยังคงปฏิบัติต่อเนื่อง และควรได้รับการปรับปรุง?'],
      shared_topic: 'พิธีไหว้ครู'
    },
    og_image_src: `${prefix}/og/og-1.png`
  }
]
