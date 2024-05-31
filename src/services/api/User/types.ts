export type UserResponseT = {
  id: number
  realname: string
  lastlogin: string
  userInventory: number
  advancements: number
}

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
