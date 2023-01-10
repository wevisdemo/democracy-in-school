export interface IEnding {
  reasons: IReason[]
  shares: IEndingShare[]
}

export interface IReason {
  image_src: string
  topic: string
  paragraphs: string[]
}

export interface IEndingShare {
  topic: string
  og_image_src: string
}
