import { IQuiz } from 'types/quiz'
import { prefix } from 'utils'
export const quiz_list: IQuiz[] = [
  {
    id: 1,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.01.png`,
    title: 'ระเบียบทรงผม',
    question:
      'หลายโรงเรียนยังมีกฎการบังคับตัดผม รวมถึงการลงโทษด้วยการกล้อนหรือตัดผมนักเรียน เมื่อรับรู้สิ่งนี้/คำตอบในใจของคุณคือ',
    choices: [
      {
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.01.A.png`,
        text: 'การบังคับตัดผมหรือการลงโทษช่วยรักษาระเบียบวินัย',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.01.B.png`,
        text: 'ก็แค่ตัดผมเองกำหนดมาแบบไหนก็ทำแบบนั้น',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.01.C.png`,
        text: 'ถ้าอยู่ในระเบียบไม่ได้ อนาคตทำงานยิ่งกว่านี้นะ',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.01.D.png`,
        text: 'ไม่ควรมีการลงโทษ แต่ยังควรบังคับให้ตัดผม',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.01.E.png`,
        text: 'ผมของเรา ความมั่นใจของเรา จะทำทรงอะไรก็ได้',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
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
          image_url: `${prefix}/part_3/quiz_01/illus_event.01.01.png`,
          text: '<span class="color-yellow">บางโรงเรียนลงโทษนักเรียนด้วยการกล้อนผมนักเรียนชายหรือตัดผมนักเรียนหญิง ซึ่งทำให้เกิดความอับอาย</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_01/illus_event.01.02.png`,
          text: '<span class="color-yellow">และมีบางกลุ่มเห็นว่าทุกคนมีเสรีภาพในทรงผมของตัวเอง ไม่ควรมีใครถูกบังคับ</span>'
        }
      ],
      question: 'คิดว่านักเรียนควรมีเสรีภาพในทรงผมของตัวหรือไม่?\nในสังคมควรทำอย่างไรต่อไป?'
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
      question: [
        'ถ้ามีการกำหนดไว้ทรงผมอะไรก็ได้ แต่อยากให้ภาพลักษณ์เรียบร้อยสมวัยคิดว่าจะทำอย่างไรได้บ้าง? (ให้สองสิ่งนี้ไปด้วยกันได้)'
      ],
      shared_topic: 'กฎการบังคับตัดผม รวมถึงการลงโทษนักเรียนด้วย การกล้อนหรือตัดผมนักเรียน'
    }
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
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.02.A.png`,
        text: 'อดทนฟังแต่ไม่แสดงออกว่าไม่เห็นด้วย',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.02.B.png`,
        text: 'เพราะเขาเป็นผู้ใหญ่เหมือนข้อ A แต่เก็บไปเม้าท์กับเพื่อนต่อ',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.02.C.png`,
        text: 'ลุกหนี เพื่อเลี่ยงที่ต้องได้ยินในสิ่งที่ไม่เห็นด้วย',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.02.D.png`,
        text: 'ตั้งคำถามกับบางประเด็นที่เห็นต่าง แล้วเสนอมุมมองที่แตกต่าง (ชวนคิด)',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.02.E.png`,
        text: 'โต้เถียงอย่างเข้มข้น',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเมื่ออยู่ในวงสนทนาของคนที่อายุมากกว่าคุณมากๆและพูดเรื่องที่คุณไม่เห็นด้วย',
      sub_title: '',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_02/illus_event.02.01.png`,
          text: 'หลายครั้งบทสนทนาระหว่างบุคคลที่มีอายุต่างกัน ( เช่น เด็ก กับ ผู้ใหญ่) อาจมีความคิดเห็นที่ไม่ตรงกัน <span class="color-yellow">ผู้ใหญ่หรือพ่อแม่หลายคน อาจจะมีความเข้าใจว่าความคิด ความเชื่อของตนเองเป็นสิ่งที่ถูกต้องและมีประสบการณ์มามากกว่า</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_02/illus_event.02.02.png`,
          text: '<span class="color-yellow"></span>ส่วนเด็กหรือคนที่อายุน้อยกว่า อาจจะเชื่อในสิ่งที่รับรู้ เห็นหรือหาข้อมูลด้วยตัวเอง</span>\n\nเช่น ในเรื่องการเรียน อาชีพ ก่อให้เกิดความคิดเห็นที่ไม่ตรงกัน และต่างฝ่ายต่างมีเหตุผลของตนเอง'
        }
      ],
      question: 'คิดว่าควรทำอย่างไรกับเรื่อง\nของการการสนทนากับคนต่างช่วงวัย ?'
    },
    reminder: {
      topic: 'อยู่ในวงสนทนาของคนที่อายุมากกว่าคุณมากๆและพูดเรื่องที่คุณไม่เห็นด้วย',
      cover_url: `${prefix}/part_3/quiz_02/bg_q.02.png`,
      paragraphs: [
        {
          text: 'ในสังคมย่อมมีความแตกต่างหลากหลายทั้งเพศ การศึกษา และช่วงวัยเมื่อช่วงวัยที่ห่างกันเรื่อยๆ ทำให้ได้เรียนรู้ประสบการณ์ เจอเหตุการณ์ต่างกัน',
          color: '#FFFFFF'
        },
        {
          text: 'ทำให้ความคิดเห็นไม่ตรงกัน จนบางครั้งเกิดความขัดแย้งขึ้นโดยเฉพาะใรครอบครัว',
          color: '#FFFFFF'
        },
        {
          text: 'ซึ่งในเรื่องของความคิดเห็น เป็นหนึ่งในเสรีภาพการแสดงออกที่สามารถแสดงออกทางความคิดได้อย่างอิสระ',
          color: '#FFFFFF'
        },
        {
          text: 'ทุกฝ่ายสามารถใช้เสรีภาพในการแสดงออกได้ โดยต่างเคารพซึ่งกันและกันได้ยอมเปิดใจที่จะเรียนรู้การแสดงออก และความต้องการของคนอีกกลุ่ม',
          color: '#FFEB78'
        }
      ],
      question: ['การแสดงออกใดบ้าง ที่มักจะกลายเป็นต้นเหตุของความขัดแย้งของคนอายุต่างกันได้ และจะรับมืออย่างไร?'],
      shared_topic: 'ตั้งคำถามกับความคิดเห็นบุคคลที่อายุต่างกัน'
    }
  },
  {
    id: 3,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.03.png`,
    title: 'การรวมกลุ่ม',
    question:
      'คุณคิดอย่างไรกับกลุ่มเคลื่อนไหว เช่น องค์กรภาคประชาชน (NGO)ได้ออกมาประณามรัฐเรื่องสิทธิมนุษยชน เกี่ยวกับการใช้ความรุนแรงสลายการชุมนุม',
    choices: [
      {
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.03.A.png`,
        text: 'รัฐควรเข้ามาควบคุม',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.03.B.png`,
        text: 'การสนับสนุนการชุมนุมอาจเพิ่มความขัดแย้งให้รุนแรงขึ้น',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.03.C.png`,
        text: 'การรวมกลุ่มประณาม เรื่องสิทธิมนุษยชนได้แต่ห้ามเป็นการเมือง',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.03.D.png`,
        text: 'จะสนับสนุนการชุมนุมทางการเมืองด้วยได้ แต่ควรรับเงินจากรัฐตนเอง',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.03.E.png`,
        text: 'องค์กรเรื่องสิทธิมนุษยชน ประณามรัฐได้ เพราะตรงกับเป้าหมายองค์กร',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'อื่นๆ',
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
          text: 'แต่มีกรณีที่การรวมกลุ่มของบางกลุ่มที่ออกมาสนับสนุนการชุมนุมม็อบและประณามรัฐบาลเรื่องสิทธิมนุษยชนมักถูกกล่าวอ้างว่า “รับเงินต่างชาติ”<span class="color-yellow">ทำให้รัฐพิจารณาต่อไปให้มีร่างกฎหมายจะมาควบคุมกำกับดูแล การรวมกลุ่มมากขึ้น</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_03/illus_event.03.02.png`,
          text: 'และคณะรัฐมนตรีเองอนุมัติหลักการ<span class="color-yellow">ร่างกฎหมายเกี่ยวกับการตั้งองค์กร NGO มากำกับดูแลการจดทะเบียนหรือการเข้ามาจัดการเรื่องการรวมกลุ่ม</span>เพิ่มขึ้นอีกด้วย โดยเฉพาะการชี้แจงรายได้ '
        }
      ],
      question: 'คิดว่ากฎหมายควรเข้ามาจัดการกับการรวมกลุ่มอย่างไร \nเพื่อไม่ให้จำกัดสิทธิเสรีภาพของการรวมกลุ่มมากไป ?'
    },
    reminder: {
      topic: '',
      cover_url: `${prefix}/part_3/quiz_03/bg_q.03.png`,
      paragraphs: [
        {
          text: 'การรวมกลุ่มไม่ว่าจะเป็นองค์กรหรือไม่ ถือเป็นเสรีภาพในการรวมกลุ่มที่ทุกคนสามารถรวมกลุ่มกันได้ เพื่อปกป้องผลประโยชน์ของตนเอง เสนอนโยบายของตนต่อรัฐ',
          color: '#FFFFFF'
        },
        {
          text: 'เป็นการต่อรองหรือผลักดันให้รัฐแก้ปัญหาประเด็นทางสังคม ดังเช่น สหภาพแรงงานที่รวมกลุ่มเพื่อต่อรองผลประโยชน์กับนายทุนกลุ่มเกษตรกรที่รวมกลุ่มต่อรองราคาผลผลิตหรือกลุ่มเรียกร้องสิทธิมนุษยชนให้เกิดขึ้น อีกทั้งองค์กรภาคประชาชนยังเป็นตัวกลางที่สำคัญคอยส่งเสียและผลักดันเรื่องที่รัฐยังเข้าไม่ถึง หรือแม้กระทั่งนโยบายบางอย่างที่กระทบกับคนบางกลุ่ม',
          color: '#FFFFFF'
        },
        {
          text: 'ในหลายประเด็น เช่น สิทธิมนุษยชน เป็นหลักสากลที่ต่างชาติเองสนใจ ทำให้องค์กรต่างประเทศให้ทุนสนับสนุน ซึ่งความจริงประเทศไทยเอง ควรให้ความสนใจเช่นกันตามที่เราให้คำสัญญาตามหลักการสากลและที่สำคัญถ้าองค์กรภาคประชาชนเพิ่มขึ้น จะเป็นกลไกที่ช่วยรัฐมากในการขับเคลื่อนประเด็นที่รัฐเองอาจจะดูแลไม่ถึง',
          color: '#FFFFFF'
        },
        {
          text: 'ซึ่งเป็นที่น่าสนใจว่า การที่องค์กรภาคประชาชนรับเงินต่างชาติจะส่งผลร้ายต่อประเทศจริงหรือไม่? และการออกกฎหมายการรวมกลุ่ม จะเข้ามาควบคุมการดำเนินการอย่างไร? และจะกระทบเสรีภาพการรวมกลุ่มมากน้อยเพียงใด?',
          color: '#FFEB78'
        }
      ],
      question: [
        'ถ้าไม่เกิดการรวมกลุ่มขึ้น คิดว่าจะแก้ปัญหาเรื่องต่างๆ เช่น สิ่งแวดล้อม การละเมิดสิทธิมนุษยชน ได้จากอะไรบ้าง?'
      ],
      shared_topic: '“การรวมตัวกันเป็นกลุ่มเพื่อเรียกร้องหรือยื่นข้อเรียกร้องให้กับกลุ่มของตัวเอง”'
    }
  },
  {
    id: 4,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.04.png`,
    title: 'ชุดนักเรียน VS ชุดไปรเวท',
    question: 'โรงเรียนควรกำหนดการแต่งกายของนักเรียนอย่างไรระหว่าง “ชุดไปรเวทหรือชุดนักเรียน”',
    choices: [
      {
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.04.A.png`,
        text: 'มองว่าแต่งชุดนักเรียน สุภาพ น่ารัก เรียบร้อยดีนะ',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.04.B.png`,
        text: 'แต่งชุดนักเรียนเหมือนกัน จะได้ไม่ถูกมองว่าแตกต่าง',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.04.C.png`,
        text: 'การแต่งชุดไปรเวททำได้ แต่ควรแต่งให้เรียบร้อย',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.04.D.png`,
        text: 'มองว่าแต่งชุดไปรเวท ฝึกการแต่งตัวและเสริมความมั่นใจได้',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.04.E.png`,
        text: 'แต่งชุดไปรเวทเพราะช่วยสร้างความสุขจากการเลือกชุดใส่เอง',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับการแต่งกายชุดไปรเวท VS ชุดนักเรียน',
      sub_title: 'มีหลายความคิดเห็น ที่มองการแต่งกายชุดไปรเวทและชุดนักเรียนแตกต่างกัน',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_04/illus_event.04.01.png`,
          text: '<span class="color-yellow">ฝั่งที่เห็นว่าควรแต่งกายชุดนักเรียนเป็นการแสดงออกในสถานะความเป็นนักเรียน</span> มองการใส่ชุดไปรเวทเป็นเรื่องแฟชั่นซึ่งจะสร้างความแตกต่างเหลื่อมล้ำได้ง่าย'
        },
        {
          image_url: `${prefix}/part_3/quiz_04/illus_event.04.02.png`,
          text: '<span class="color-yellow">ฝั่งที่เห็นว่าควรแต่งชุดไปรเวทเป็นการฝึกการแต่งตัวและเสริมสร้างความมั่นใจของเด็ก</span>เพิ่มความสุขและช่วยสร้างสังคมที่เคารพความแตกต่างได้\n\nแต่บางกรณีการแต่งชุดไปรเวทกลับถูกเลือกปฏิบัติ เช่น การเรียกไปคุยเพื่อให้เปลี่ยนชุด หรือถูกจดชื่อ เป็นต้น'
        },
        {
          image_url: `${prefix}/part_3/quiz_04/illus_event.04.03.png`,
          text: '<span class="color-yellow">และมีอีกหลายฝั่งที่มีความเห็นเพิ่มเติมอีก เช่น นานๆ ทีได้ใส่ชุดไปรเวทในวันหยุด เสาร์-อาทิตย์ ก็เพียงพอแล้ว</span> หรือใน 1 อาทิตย์ก็มีหลายชุดให้ใส่ เช่น ชุดพละ ชุดเนตรนารี ก็มีความหลากหลายเพียงพอแล้วเช่นกัน'
        }
      ],
      question: 'คิดว่าควรแต่งกายชุดไปรเวทหรือชุดนักเรียน?\nแล้วในสังคมควรทำต่อกันอย่างไร?'
    },
    reminder: {
      topic: 'การแต่งกายชุดไปรเวท VS ชุดนักเรียน',
      cover_url: `${prefix}/part_3/quiz_04/bg_q.04.png`,
      paragraphs: [
        {
          text: 'เป็นการแสดงออกเสรีภาพทางความคิดเห็นและการแต่งกาย ผ่านการแต่งชุดนักเรียน และชุดไปรเวท ล้วนแต่เป็นการแสดงออกทั้งสิ้นเพียงแต่ชุดไปรเวทอาจเป็นการแสดงออก ซึ่งเป็นการตั้งคำถามต่อสังคมรูปแบบเดิม',
          color: '#FFFFFF'
        },
        {
          text: 'เป็นที่น่าสนใจว่า แล้วการแต่งกายด้วยชุดนักเรียนแบบเดิมยังคงจำเป็นอยู่ไหม?หรือสังคมควรปรับเรื่องการแต่งกายนี้ไปใน ทิศทางใด?',
          color: '#FFEB78'
        }
      ],
      question: [
        'คิดเห็นอย่างไร? กับการแสดงออกทางความคิดเห็นที่แตกต่างกันจนเกิดการตั้งคำถามต่อวิถีปฏิบัติเดิมที่มีมานาน'
      ],
      shared_topic: '“การแต่งกายชุดไปรเวท VS ชุดนักเรียน”'
    }
  },
  {
    id: 5,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.05.png`,
    title: 'ห้องน้ำที่ทุกเพศเข้าได้',
    question: '“ห้องน้ำของทุกคน ที่ทุกเพศเข้าได้”ถ้าเห็นการโพสต์ข้อความนี้ คำตอบแทนใจของคุณคือ',
    choices: [
      {
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.05.A.png`,
        text: 'ไม่เห็นด้วย อันตรายขึ้นกว่าเดิม รู้สึกไม่ปลอดภัยมากๆ ',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.05.B.png`,
        text: 'ไม่เห็นด้วย แยกแบบเดิมชัดเจนดีแล้ว',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.05.C.png`,
        text: 'ไม่เห็นด้วย แต่ละเพศใช้เวลาเข้าห้องน้ำไม่เท่ากัน ไม่ควรปนกัน',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.05.D.png`,
        text: 'ไม่เห็นด้วย คิดว่าทำห้องน้ำเพศหลากหลายแยกออกมาชัดเจนเลยดีกว่านะ',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.05.E.png`,
        text: 'เห็นด้วย ทุกเพศเท่าเทียมกัน ควรใช้ร่วมกันได้',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับห้องน้ำของทุกคน ทุกเพศเข้าได้',
      sub_title:
        'ห้องน้ำกลายเป็นประเด็นที่สะท้อน เรื่องความจำกัดของเพศหลากหลายเพราะตามรูปแบบเดิมจะแบ่งห้องน้ำเป็น 2 กลุ่ม  คือ ชายและหญิงเท่านั้น',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_05/illus_event.05.01.png`,
          text: 'ทำให้เพศหลากหลายไม่สามารถใช้ห้องน้ำเหมาะสมกับเพศของตนอีกทั้งเวลาที่ใช้ห้องน้ำ <span class="color-yellow">ทำให้เกิดความไม่สบายใจกันทั้งสองฝ่าย</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_05/illus_event.05.02.png`,
          text: 'ดังนั้น<span class="color-yellow">ทำให้ฝ่ายนึงเห็นว่าควรสร้างห้องน้ำแบบไม่แบ่งแยกเพศ</span>โดยทุกคนสามารถเข้าได้\n\n<span class="color-yellow">แต่อีกฝ่ายมองว่าการไม่แบ่งแยกเพศเลยจะสร้างความไม่ปลอดภัยเกิดขึ้นได้</span>'
        }
      ],
      question: 'คิดว่าต้องจัดการเรื่องนี้อย่างไร? ที่เราเคารพเพศทางเลือกในสังคม\nและมีความปลอดภัยขึ้นไปพร้อมกันได้'
    },
    reminder: {
      topic: '“ห้องน้ำของทุกคน ที่ทุกเพศเข้าได้”',
      cover_url: `${prefix}/part_3/quiz_05/bg_q.05.png`,
      paragraphs: [
        {
          text: 'ผู้มีความแตกต่างหลากหลายทางเพศในสังคม ย่อมมีสิทธิเสรีภาพเสมอเหมือนกันกับคนอื่นๆ ในการตั้งคำถามและเรียกร้องเกี่ยวกับเรื่องห้องน้ำ เพื่อต้องการเปลี่ยนแปลงให้รอบรับความหลากหลายที่มีอยู่ แต่อาจส่งผลกระทบต่อความคิดและการกระทำเดิมในสังคม',
          color: '#FFFFFF'
        }
      ],
      question: [
        'ถ้าให้สร้างห้องน้ำเฉพาะสำหรับเพศทางเลือก แล้วเพศทางเลือกที่มีเพศสภาวะต่างกัน จะเข้าห้องน้ำเดียวกันได้หรือไม่? จะมีผลต่อความปลอดภัยอีกรึเปล่า?'
      ],
      shared_topic: '“ห้องน้ำของทุกคน ทุกเพศเข้าได้”'
    }
  },
  {
    id: 6,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.06.png`,
    title: 'ภาพการแต่งตัว',
    question:
      'ถ้าคุณแต่งตัวออกจากบ้านมาด้วยความมั่นใจ แล้วเจอคำพูดว่าแต่งตัวไม่ปรึกษาใครเลยเหรอ? ทำไมกล้าแต่งแบบนี้? คุณจะทำอย่างไร?',
    choices: [
      {
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.06.A.png`,
        text: 'ด่ากลับ !!',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.06.B.png`,
        text: 'ตอบกลับด้วยการอธิบายให้เข้าใจถึงสิทธิของเรา',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.06.C.png`,
        text: 'โกรธ แต่ไม่ตอบโต้ เพราะไม่อยากเสียเวลาทะเลาะ',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.06.D.png`,
        text: 'เข้าใจว่าเค้ามีสิทธิวิจารณ์แต่จะใส่ต่อไปอย่างมั่นใจ',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.06.E.png`,
        text: 'เก็บไปคิด แล้วทบทวนวิธีแต่งตัวใหม่',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับการแต่งตัวอย่างอิสระ',
      sub_title: '',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_06/illus_event.06.01.png`,
          text: 'บ่อยครั้งที่หลายคนก่อนออกจากบ้าน ลุกขึ้นมาอาบน้ำ เลือกชุดตัวโปรด มาแต่งตัว แต่งหน้า ส่องกระจกด้วยความมั่นใจ <span class="color-yellow">จนกระทั่งเจอคำทักทาย เช่น “วันนี้แต่งตัว แต่งหน้าเต็มเชียว” ,“ทำไมกล้าแต่งตัวแบบนี้มา”</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_06/illus_event.06.02.png`,
          text: '<span class="color-yellow">ทำให้ความมั่นใจที่สะสมมาพังทลายลง ความรู้สึกที่สดใสถูกแทนที่ด้วยความกังวล</span> แถมอดไม่ได้ที่จะเช็คตัวเองในกระจกตลอดทั้งวัน ซึ่งหลายคนเคยเจอเหตุการณ์เหล่านี้มา'
        }
      ],
      question: 'คิดว่าเรื่องนี้ปัญหาคืออะไร?\nและควรจะถูกปรับไปในทิศทางใด?'
    },
    reminder: {
      topic: '',
      cover_url: `${prefix}/part_3/quiz_06/bg_q.06.png`,
      paragraphs: [
        {
          text: 'เมื่อเราแต่งตัวด้วยความมั่นใจ แต่กลับถูกทักทายด้วยคำพูดที่ทำลายความมั่นใจลง',
          color: '#FFFFFF'
        },
        {
          text: 'ความจริงแล้วไม่ว่าจะแต่งตัวแบบใดก็ตาม ล้วนเป็นเสรีภาพในการแสดงออก (Freedom of expreesion) ที่พยายามแสดงความเป็นตัวตน ความชอบผ่านการแต่งกายออกมา',
          color: '#FFFFFF'
        },
        {
          text: 'ซึ่งการแสดงความคิดเห็น ที่มาวิจารณ์การแต่งตัว เป็นหนึ่งในการใช้เสรีภาพในการแสดงออกทางความคิดเห็นอย่างหนึ่งเช่นกัน',
          color: '#FFEB78'
        },
        {
          text: 'เราจะสร้างสมดุลระหว่างการเคารพสิทธิของผู้อื่น กับสิทธิและความมั่นใจของเราอย่างไร',
          color: '#FFEB78'
        }
      ],
      question: [
        'ลองจินตนาการว่าคนที่ได้รับคำทักทายหล่านี้มาตลอด จะรู้สึกอย่างไรบ้าง?',
        'ถ้าเราเลือกการไม่พูด ไม่ตอบโต้ เท่ากับการยอมรับหรือไม่ คิดเห็นอย่างไร?'
      ],
      shared_topic: '“การแต่งตัวอย่างอิสระ”'
    }
  },
  {
    id: 7,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.07.png`,
    title: 'การแสดงออกทางการเมือง',
    question: 'เห็นนักเรียนริบบิ้นขาว โบขาว นำมาติดแสดงออกสัญลักษณ์ทางการเมืองเมื่อเห็นสิ่งเหล่านี้ คุณคิดเห็นอย่างไร?',
    choices: [
      {
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.07.A.png`,
        text: 'ไม่ควรทำ เพราะอาจยังไม่มีวุฒิภาวะเพียงพอ',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.07.B.png`,
        text: 'ไม่ควรทำ เพราะ พ่อแม่ส่งให้มาเรียนเท่านั้น',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.07.C.png`,
        text: 'ทำได้ แต่ควรคำนึงถึงการไปสมัครงานในอนาคต',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.07.D.png`,
        text: 'ทำได้ แต่ต้องได้รับความยินยอมจากสถาบันการศึกษาก่อน',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.07.E.png`,
        text: 'ทำได้ โดยไม่ต้องขอความยินยอมจากสถาบันการศึกษา',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับเราเห็นนักเรียนแสดงออกทางการเมือง',
      sub_title:
        'ช่วงหลังจากมีคำวินิจฉัยยุบพรรคอนาคตใหม่ ทำให้นักศึกษา-นักเรียนออกมาชุมนุมเคลื่อนไหวทางการเมือง (flash mob) เกิดขึ้นและใช้พื้นที่สถานศึกษาเป็นพื้นที่ชุมนุม',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_07/illus_event.07.01.png`,
          text: 'แต่มีกรณีที่การแสดงออกไม่สามารถทำได้อิสระ <span class="color-yellow">โดยบางคนถูกดึงโบขาวออกจากกระเป๋าไปผูกคอ บางคนถูกเรียกเข้าห้องปกครองกับการแสดงออก</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_07/illus_event.07.02.png`,
          text: '<span class="color-yellow">ซึ่งในบางมุมมองของผู้ปกครองหรือครูบางกรณียังเป็นห่วงกับ การแสดงออกของนักเรียนในวัยเรียน</span> ที่อาจจะกระทบต่อการเรียนและในอนาคต หรืออาจเกิดความรุนแรงขึ้นได้ทำให้แสดงออกผ่านการห้ามปราม ตักเตือน'
        }
      ],
      question: 'คิดว่านักเรียนสามารถแสดงออกทางการเมืองได้หรือไม่?\nและควรทำอย่างไร?'
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
      question: ['คิดอย่างไรกับคำว่า “การเมืองเป็นเรื่องของทุกคน”'],
      shared_topic: '“การแสดงออกทางการเมือง”'
    }
  },
  {
    id: 8,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.08.png`,
    title: 'ชุมนุมในโรงเรียน',
    question: 'นักเรียนสามารถใช้พื้นที่จัดการชุมนุมภายในโรงเรียนคำตอบแทนใจของคุณคือ?',
    choices: [
      {
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.08.A.png`,
        text: 'โรงเรียนไม่ควรเลือกข้างทางการเมือง',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.08.B.png`,
        text: 'ให้พื้นที่ชุมนุมได้ แต่ไม่จำเป็นต้องเข้าไปดูแล',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.08.C.png`,
        text: 'ไม่ควรให้คนภายนอกเข้ามาชุมนุมในโรงเรียนด้วย',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.08.D.png`,
        text: 'จัดพื้นที่ชุมนุมได้เลย ไม่จำเป็นต้องขอ',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.08.E.png`,
        text: 'โรงเรียนควรจัดสรรพื้นที่รองรับไว้เลย',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับใช้พื้นที่จัดการชุมนุมภายในโรงเรียน',
      sub_title: '',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_01/illus_event.01.01.png`,
          text: 'เช่น การยืนนิ่ง จัดกิจกรรมร้องเพลง เขียนข้อความ แม้แต่ปราศรัยและ<span class="color-yellow">เชิญชวนใช้พื้นที่สถานศึกษาจัดการชุมนุมแสดงออก</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_01/illus_event.01.02.png`,
          text: 'ซึ่งบางสถานศึกษามองว่า <span class="color-yellow">“สถานศึกษาควรเป็นพื้นที่ที่เป็นกลางทางการเมือง ไม่ควรเลือกข้างสร้างความขัดแย้งหรือก่อให้เกิดความไม่สงบ”</span>\n\nเลยออกประกาศไม่ให้จัดการชุมนุมในโรงเรียน นักเรียนต้องชุมนุมนอกรั้วหรือบางกรณีให้ตำรวจเข้ามาควบคุมดูแลในพื้นที่ชุมนุมแต่ไม่ให้ศิษย์เก่าหรือคนนอกเข้ามาชุมนุม'
        }
      ],
      question: 'คิดว่าโรงเรียนหรือสถานศึกษา สามารถเป็นพื้นที่\nจัดการชุมนุมได้หรือไม่ และควรทำอย่างไร?'
    },
    reminder: {
      topic: 'ใช้พื้นที่จัดการชุมนุมภายในโรงเรียน',
      cover_url: `${prefix}/part_3/quiz_08/bg_q.08.png`,
      paragraphs: [
        {
          text: 'นักเรียนนักศึกษาจัดกิจกรรมต่างๆ ภายในสถานศึกษาเป็นเสรีภาพในการแสดงออกทางความคิดอย่างหนึ่ง',
          color: '#FFFFFF'
        },
        {
          text: 'ในทางการเมืองผ่านการเขียนข้อความ แสดงออกด้วยท่าทาง',
          color: '#FFFFFF'
        },
        {
          text: 'และการชุมนุมเป็นเสรีภาพที่ทุกคนสามารถทำได้อย่างสงบ การใช้กฎหมายห้ามการชุมนุมต้องทำเท่าที่จำเป็น และเกี่ยวกับความปลอดภัย ความสงบเรียบร้อยเท่านั้น',
          color: '#FFEB78'
        },
        {
          text: 'ซึ่งเป็นที่น่าตั้งคำถามว่า หากนักเรียน-นักศึกษา ต้องการชุมนุมสถานศึกษาจะเป็นพื้นที่ชุมนุมได้หรือไม่?',
          color: '#FFEB78'
        }
      ],
      question: [
        'นักเรียนนักศึกษาสามารถชุมนุมได้อย่างอิสระเสรีหรือไม่?',
        'บทบาทครูกับการชุมนุมภายในโรงเรียนควรเป็นอย่างไร?'
      ],
      shared_topic: '“ใช้พื้นที่จัดการชุมนุมภายในโรงเรียน”'
    }
  },
  {
    id: 9,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.09.png`,
    pre_question: 'สถานการณ์บ้านเมืองวิกฤตมากเพื่อนของคุณโพสต์ด่ารัฐบาลอย่างหนักว่า',
    title: 'วิพากษ์วิจารณ์รัฐบาล',
    question: '“รัฐบาลเฮง___ คนจะตายห่_กันอยู่แล้วทำเหี้_อะไรสักอย่างสิถ้าทำไม่ได้ก็ออกไปเลย”',
    choices: [
      {
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.09.A.png`,
        text: 'ไม่ควรด่ารัฐบาลนะ',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.09.B.png`,
        text: 'กดไลค์กดหัวใจให้อย่างเดียว',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.09.C.png`,
        text: 'กดไลค์กดหัวใจและแชร์ต่อเลย เรื่องนี้โดนใจต้องขยาย',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.09.D.png`,
        text: 'ด่าได้แค่ไม่ใช่คำหยาบ คำเหยียด',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.09.E.png`,
        text: 'ด่าเลย ประเทศเราขับเคลื่อนได้ด้วยการด่า',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับเมื่อคุณวิพากษ์วิจารณ์การทำงานของรัฐบาล',
      sub_title:
        'เคยมีคนจากรัฐบาลดำเนินการตรวจสอบ ดำเนินคดีกับคนที่โพสต์วิพากษ์วิจารณ์การทำงานของรัฐบาล โดยเฉพาะดารา นักแสดง ที่ออกมา Call out ทางการเมือง',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_01/illus_event.01.01.png`,
          text: 'และยังมีประชาชนอีกหลายคนโพสต์วิพากษ์วิจารณ์ที่รัฐบาล สุดท้ายถูกโดนเรียกไปฟังข้อกล่าวหาที่สถานีตำรวจและเสียค่าปรับ'
        },
        {
          image_url: `${prefix}/part_3/quiz_01/illus_event.01.02.png`,
          text: 'แต่บางคนมองว่า รัฐบาลทำงานเต็มที่แล้วและไม่ควรแสดงความคิดเห็นที่รุนแรง'
        }
      ],
      question: 'คิดว่าเรามีสามารถวิพากษ์วิจารณ์รัฐบาลได้ไหม?\nควรทำอย่างไร?'
    },
    reminder: {
      topic: 'เมื่อคุณวิพากษ์วิจารณ์การทำงานของรัฐบาล',
      cover_url: `${prefix}/part_3/quiz_09/bg_q.09.png`,
      paragraphs: [
        {
          text: 'การวิพากษ์วิจารณ์ เป็นหนึ่งในเสรีภาพในการแสดงออกทางความคิดเห็นผ่านข้อความ จะเผยแพร่ทางสื่อโซเซียลมีเดีย หรือช่องทางไหนเป็นหนึ่งในเสรีภาพที่ทำได้ในการแสดงออกว่าคิดเห็นอย่างไร',
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
      shared_topic: '“เมื่อคุณวิพากษ์วิจารณ์การทำงานของรัฐบาล”'
    }
  },
  {
    id: 10,
    is_selected: false,
    thumbnail_src: `${prefix}/part_3/topic/Topic.10.png`,
    title: 'พิธีไหว้ครู',
    question: 'การทำพาน และจัดกิจกรรมไหว้ครูที่ต้องจัดขึ้นทุกๆ ปี คำตอบไหนแทนใจคุณ?',
    choices: [
      {
        label: 'A',
        image_src: `${prefix}/part_3/frame_choose/illus.10.A.png`,
        text: 'กลับไปใช้วัสดุทำพานแบบเดิมมากขึ้น เช่น หญ้าแพรก ดอกเข็ม',
        background_color: '#5abde4'
      },
      {
        label: 'B',
        image_src: `${prefix}/part_3/frame_choose/illus.10.B.png`,
        text: 'ต้องเปิดโอกาสให้ทำพานตามไอเดียของนักเรียนได้โดยไม่บังคับ',
        background_color: '#aa85b5'
      },
      {
        label: 'C',
        image_src: `${prefix}/part_3/frame_choose/illus.10.C.png`,
        text: 'รักษาไว้กับการมอบคลานนำพานไปไหว้ครู',
        background_color: '#d0da81'
      },
      {
        label: 'D',
        image_src: `${prefix}/part_3/frame_choose/illus.10.D.png`,
        text: 'ควรยกเลิกการมอบคลานนำพานไปไหว้ครู',
        background_color: '#fceb88'
      },
      {
        label: 'E',
        image_src: `${prefix}/part_3/frame_choose/illus.10.E.png`,
        text: 'เปลี่ยนเป็นมอบดอกไม้ให้ครูคนใดก็ได้ตามใจนักเรียน ',
        background_color: '#f2a25c'
      },
      {
        label: 'F',
        image_src: `${prefix}/part_3/frame_choose/illus.F.png`,
        text: 'อื่นๆ',
        background_color: '#dd5a95'
      }
    ],
    event: {
      title: 'นี่คือเหตุการณ์ที่เกิดขึ้นเกี่ยวกับการทำพาน และจัดกิจกรรมไหว้ครูที่ต้องจัดขึ้นทุกๆปี',
      sub_title:
        'กิจกรรมไหว้ครูเป็นกิจกรรมให้โรงเรียนจัดขึ้นทุกวันช่วงวันพฤหัสบดีในสัปดาห์ที่ 2 ของเดือนมิถุนายนของทุกปี',
      contents: [
        {
          image_url: `${prefix}/part_3/quiz_01/illus_event.01.01.png`,
          text: 'เป็นกิจกรรมที่มีอย่างยาวนาน โดยมีให้ทำพานไหว้ครู เพื่อมอบให้ครูแต่ก็มีประเด็นตั้งคำถามกันว่า <span class="color-yellow">บางโรงเรียนให้เด็กยืนตากแดดนั่งเป็นเวลานานเกินไป หรือยังมีวัฒนธรรมที่ต้องมอบคลานให้นำพานไปไหว้ครู</span>'
        },
        {
          image_url: `${prefix}/part_3/quiz_01/illus_event.01.02.png`,
          text: 'จนนักเรียนบางคนก็ไม่เห็นด้วย <span class="color-yellow">ออกมาแสดงความคิดเห็น หรือแม้แต่โพสต์ข้อความบางคนถึงกับไม่เข้าร่วมกิจกรรมนี้</span>'
        }
      ],
      question: 'คิดเห็นอย่างไรเกี่ยวกับการจัดกิจกรรมวันไหว้ครู?'
    },
    reminder: {
      topic: '',
      cover_url: `${prefix}/part_3/quiz_10/bg_q.10.png`,
      paragraphs: [
        {
          text: 'การทำพาน และจัดกิจกรรมไหว้ครูที่ต้องจัดขึ้นทุกๆปี',
          color: '#FFFFFF'
        },
        {
          text: 'การแสดงความคิดเห็นหรือตั้งคำถามกับวัฒนธรรมที่มีอย่างยาวนาน อย่างเช่น กิจกรรมไหว้ครู เป็นหนึ่งในเสรีภาพการแสดงออกทางความคิดเห็น',
          color: '#FFFFFF'
        },
        {
          text: 'มีทั้งคนที่เห็นด้วยกับวัฒนธรรมนี้ หรือบางคนตั้งคำถามอะไรที่ล้าสมัยไปแล้ว หรือกิจกรรมใดควรยกเลิกไป',
          color: '#FFEB78'
        },
        {
          text: 'เป็นเรื่องที่น่าสนใจที่ยังคงเป็นความท้าทายกับวัฒนธรรมที่มีอยู่เดิม',
          color: '#FFFFFF'
        }
      ],
      question: ['ยังมีวัฒนธรรมหรือประเพณีอะไรอีกบ้าง ที่ยังคงปฏิบัติต่อเนื่อง และควรได้รับการปรับปรุง?'],
      shared_topic: '“พิธีไหว้ครู”'
    }
  }
]
