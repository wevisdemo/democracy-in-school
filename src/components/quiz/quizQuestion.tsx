import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

interface PropsType {
  text: string
  onChangeText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextAreaContainer = styled.textarea`
  outline: none;
  width: 576px;
  height: 124px;
  padding: 12px;
  font-size: 18px;
  border-radius: 4px;
  resize: none;

  @media (max-width: 1024px) {
    width: 278px;
    height: 124px;
    padding: 8px;
    font-size: 13px;
  }
`

const QuizQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 576px;
  height: 124px;
  margin: auto;
  margin-top: 10px;

  @media (max-width: 1024px) {
    width: 278px;
    height: 124px;
  }

  label {
    text-align: right;
    color: #b6b6b6;
  }
`

const QuizQuestionTextArea = (props: PropsType) => {
  return (
    <QuizQuestionContainer>
      <label htmlFor="event-question">({props.text.length}/1000)</label>
      <TextAreaContainer
        name="event-question"
        className="font-plexsans"
        placeholder="พิมพ์ความคิดเห็นของคุณเกี่ยวกับเรื่องนี้..."
        maxLength={1000}
        value={props.text}
        onChange={props.onChangeText}
      />
    </QuizQuestionContainer>
  )
}

export default QuizQuestionTextArea
