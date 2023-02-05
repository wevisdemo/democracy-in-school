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
  id: number
  topic: string
  og_image_src: string
  share_url: string
}
