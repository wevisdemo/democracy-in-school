export interface IChoiceQuiz {
  label: string
  image_src: string
  text: string
  background_color: string
}

export interface IQuiz {
  question: string
  choices: IChoiceQuiz[]
  event: IQuizEvent
  reminder: IQuizReminder
}

export interface IQuizEvent {
  title: string
  sub_title: string
  contents: IQuizEventContent[]
  question: string
}

export interface IQuizReminder {
  topic: string
  cover_url: string
  paragraphs: {
    text: string
    color: string
  }[]
  question: string
  shared_topic: string
}

export interface IQuizEventContent {
  image_url: string
  text: string
}
