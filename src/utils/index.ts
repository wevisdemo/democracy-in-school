import { IUserInformation } from 'store/userInfo'
import { IPostSchoolInfoBody, IPostUserInfoBody } from 'types/request'
import { IDropdownOption } from 'types/shared'

export const convertToDDOption = (s: string): IDropdownOption => ({ label: s, value: s })
export const prefix = process.env.NEXT_PUBLIC_BASE_URL || ''

export const convertUserInfoToPerson = (userInfo: IUserInformation): IPostUserInfoBody => ({
  age: userInfo.person.age,
  gender: userInfo.person.gender,
  province: userInfo.person.province,
  education_level: userInfo.person.education_level,
  user_agent: userInfo.user_agent
})

export const convertUserInfoToSchool = (userInfo: IUserInformation): IPostSchoolInfoBody => ({
  name: userInfo.school.name,
  province: userInfo.school.province,
  education_level: userInfo.school.education_level,
  user_agent: userInfo.user_agent
})
