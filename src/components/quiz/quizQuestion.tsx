import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'

interface PropsType {
  text: string
  onChangeText: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextAreaContainer = styled(TextareaAutosize)`
  outline: none;
  width: 100%
  padding: 12px;
  font-size: 18px;
  border-radius: 4px;
  resize: none;

  @media (max-width: 420px) {
    height: 124px;
    padding: 8px;
    font-size: 13px;
  }
`

const QuizQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  margin-top: 10px;

  @media (max-width: 420px) {
    height: 124px;
  }

  label {
    text-align: right;
    color: #b6b6b6;
  }
`

const QuizQuestionTextArea = (props: PropsType) => {
  useEffect(() => {}, [props.text])

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChangeText(e)
  }
  return (
    <QuizQuestionContainer>
      <label htmlFor="event-question">({props.text.length}/1000)</label>
      <TextAreaContainer
        minRows={3}
        name="event-question"
        className="font-plexsans"
        placeholder="พิมพ์ความคิดเห็นของคุณเกี่ยวกับเรื่องนี้..."
        maxLength={1000}
        value={props.text}
        onChange={(e) => onChange(e)}
      />
    </QuizQuestionContainer>
  )
}

export default QuizQuestionTextArea
