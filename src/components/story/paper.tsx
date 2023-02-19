import styled from 'styled-components'
import { IStoryPaper } from 'types/story'
import { prefix } from 'utils'

const PaperContainer = styled.div`
  padding: 24px 100px;
  width: 100%;
  max-width: 1000px;
  background: url('${prefix}/part_2/paper.svg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 16px;
    padding-bottom: 62px;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;

    .thumbnail {
      width: 288px;
      @media (max-width: 420px) {
        width: 146px;
      }
    }

    .text-wrapper {
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // max-width: 422px;
      margin-left: 56px;

      p:not(:first-child) {
        margin-top: 16px;
      }

      @media (max-width: 1024px) {
        padding: 16px;
        margin: auto auto 4px auto;
      }
    }

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  .footer {
    margin: auto;
    margin-top: 4px;
    max-width: 800px;
    text-align: left;
    padding: 32px 36px;
    background: linear-gradient(180deg, #a5ebd7 37.5%, rgba(165, 235, 215, 0) 100%);
    border-radius: 2px;

    @media (max-width: 1024px) {
      padding: 12px 12px 36px 12px;
    }

    @media (max-width: 420px) {
      max-width: 100%;
    }

    .todo-wrapper {
      display: flex;

      .todo-right-wrapper {
        padding-right: 34px;

        @media (max-width: 1024px) {
          padding-bottom: 20px;
        }
      }

      .todo-wrong-wrapper {
        border-left: 1px dashed #00000030;
        padding-left: 34px;

        @media (max-width: 1024px) {
          border-top: 3px dashed #00000030;
          border-left: none;
          padding-top: 8px;
          padding-left: 0;
          flex-direction: column;
        }
      }

      @media (max-width: 1024px) {
        flex-direction: column;
      }
    }
  }
`

interface PropsType {
  storyPaper: IStoryPaper
}

const TodoItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin-top: 20px;

  @media (max-width: 1024px) {
    margin-top: 12px;
  }

  img {
    width: 44px;
  }

  p {
    margin-left: 16px;
  }
`

interface TodoItemPropsType {
  type: 'right' | 'wrong'
  text: string
}

const TodoItem = ({ type, text }: TodoItemPropsType) => {
  return (
    <TodoItemContainer className="todo-item">
      <img src={type === 'right' ? 'part_2/icon_do.png' : 'part_2/icon_don_t.png'} alt="icon-right-wrong" />
      <p className="wv-b3 font-plexsans">{text}</p>
    </TodoItemContainer>
  )
}

const Paper = ({ storyPaper }: PropsType) => {
  return (
    <PaperContainer>
      <div className="header">
        <img className="thumbnail" src={storyPaper.thumbnail_url} alt="thumbnail" />
        <div className="text-wrapper">
          <h6 className="wv-h6 wv-font-kondolar color-blue">{storyPaper.topic}</h6>
          {storyPaper.descriptions.map((item, index) => {
            return (
              <p className="wv-b2 wv-font-kondolar" key={`description-${index}`}>
                {item}
              </p>
            )
          })}
        </div>
      </div>
      <div className="footer">
        <h6 className="wv-h6 wv-font-kondolar">สิทธิที่เรามีและทำได้ / การกระทำแบบนี้คือการละเมิด</h6>
        <div className="todo-wrapper">
          <div className="todo-right-wrapper">
            {storyPaper.right_list.map((item, index) => {
              return <TodoItem type="right" text={item} key={`todo-item-${index}`} />
            })}
          </div>
          <div className="todo-wrong-wrapper">
            {storyPaper.wrong_list.map((item, index) => {
              return <TodoItem type="wrong" text={item} key={`todo-item-${index}`} />
            })}
          </div>
        </div>
      </div>
    </PaperContainer>
  )
}

export default Paper
