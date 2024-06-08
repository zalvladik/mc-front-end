import type { UserT } from 'src/contexts/UserProvider/types'

export type UserResponseT = UserT

export type SkinTexturesT = {
  SKIN: {
    url: string
  }
  CAPE: {
    url: string
  }
}

export type UserSkinResponseT = {
  timestamp: number
  profileId: string
  profileName: string
  signatureRequired: boolean
  textures: SkinTexturesT
}
