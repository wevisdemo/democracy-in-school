import { IDropdownOption } from 'types/shared'

export const convertToDDOption = (s: string): IDropdownOption => ({ label: s, value: s })
