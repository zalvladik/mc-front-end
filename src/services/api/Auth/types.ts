import { UserT } from 'src/contexts/UserProvider/types'

export type AuthResponseT = {
  accessToken: string
  refreshToken: string
  user: UserT
}

export type CredentialsT = {
  realname: string
  password: string
}
