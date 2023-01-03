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
  contents: {
    image_url: string
    text: string
  }[]

  question: string
}

export interface IQuizReminder {
  topic: string
  paragraph: {
    text: string
    color: string
  }[]
}
