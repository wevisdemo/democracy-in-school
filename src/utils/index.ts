import { IDropdownOption } from 'types/shared'

export const convertToDDOption = (s: string): IDropdownOption => ({ label: s, value: s })
export const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
