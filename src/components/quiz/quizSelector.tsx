import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextWrap = styled.div`
  margin-top: 56px;
  max-width: 524px;
  text-align: center;

  h6 {
    margin-bottom: 8px;
  }

  p {
    max-width: 416px;
    margin: auto;
  }
`

interface ITopic {
  image_src: string
  title: string
}

const topicList: ITopic[] = [
  {
    image_src: '/part_3/topic/Topic.01.png',
    title: 'ระเบียบทรงผม'
  },
  {
    image_src: '/part_3/topic/Topic.02.png',
    title: 'ความคิดเห็นของบุคคลที่อายุต่างกัน'
  },
  {
    image_src: '/part_3/topic/Topic.03.png',
    title: 'การรวมกลุ่ม'
  },
  {
    image_src: '/part_3/topic/Topic.04.png',
    title: 'ชุดนักเรียน VS ชุดไปรเวท'
  },
  {
    image_src: '/part_3/topic/Topic.05.png',
    title: 'ห้องน้ำที่ทุกเพศเข้าได้'
  },
  {
    image_src: '/part_3/topic/Topic.06.png',
    title: 'ภาพการแต่งตัว'
  },
  {
    image_src: '/part_3/topic/Topic.07.png',
    title: 'การแสดงออกทางการเมือง'
  },
  {
    image_src: '/part_3/topic/Topic.08.png',
    title: 'ชุมนุมในโรงเรียน'
  },
  {
    image_src: '/part_3/topic/Topic.09.png',
    title: 'วิพากษ์วิจารณ์รัฐบาล'
  },
  {
    image_src: '/part_3/topic/Topic.10.png',
    title: 'พิธีไหว้ครู'
  }
]

const TopicWapper = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
`

const TopicComponent = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  .description {
    margin-top: 4px;
    max-width: 224px;
    text-align: center;
  }
`

const TopicList = ({ topicList }: { topicList: ITopic[] }) => {
  return (
    <TopicWapper>
      {topicList.map((item, index) => {
        return <Topic topic={item} key={`topic-${index}`}></Topic>
      })}
    </TopicWapper>
  )
}

const Topic = ({ topic }: { topic: ITopic }) => {
  return (
    <TopicComponent>
      <Image src={topic.image_src} alt={`topic-${topic.title}`} width={184} height={184} />
      <p className="wv-h7 font-plexsans description">{topic.title}</p>
    </TopicComponent>
  )
}

const QuizSelector = () => {
  return (
    <Wrapper>
      <TextWrap>
        <h6 className="wv-font-kondolar wv-h6">เลือกหัวข้อที่สนใจเพื่อทดสอบความเข้าใจ</h6>
        <p className="font-plexsans wv-b5">
          (หมายเหตุ: แบบทดสอบนี้มีจุดประสงค์เพื่อให้เราได้ทบทวนตัวเอง และแลกเปลี่ยนกับคนรอบตัว เพื่อสร้างความเข้าใจ)
        </p>
      </TextWrap>
      <TopicList topicList={topicList}></TopicList>
    </Wrapper>
  )
}

export default QuizSelector
