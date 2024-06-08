import { useEffect, useRef } from 'react'
import * as skinview3d from 'skinview3d'
import { Role, RoleUA } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useGetUserSkin } from 'src/hooks/useGetUserSkin'

export const useSkinComponent = () => {
  const { user } = useUser()
  const toast = useToast()

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const { data, isLoading } = useGetUserSkin()

  const showRoleInfo = () => {
    toast.info({
      message: ['Ролі вказують на статус гравця'],
      fontSize: 20,
      width: 90,
      autoHideDuration: 3,
    })
  }

  useEffect(() => {
    if (canvasRef.current && data) {
      const viewer = new skinview3d.SkinViewer({
        canvas: canvasRef.current,
        width: 350,
        height: 500,
        skin: data?.textures.SKIN.url,
        enableControls: true,
        animation: new skinview3d.IdleAnimation(),
      })

      return () => {
        viewer.dispose()
      }
    }

    return undefined
  }, [data])

  const role = (): string => {
    const { role } = user

    if (Array.isArray(role)) {
      if (role.find(item => item === Role.ADMIN)) return Role.ADMIN

      if (role.find(item => item === Role.MODERATOR)) return Role.MODERATOR

      if (role.find(item => item === Role.HELPER)) return Role.HELPER

      if (role.find(item => item === Role.POLICE)) return Role.POLICE

      if (role.find(item => item === Role.USER)) return Role.USER
    }

    return Role.USER
  }

  const roleToUa = (): string => {
    switch (role()) {
      case Role.ADMIN:
        return RoleUA.ADMIN
      case Role.MODERATOR:
        return RoleUA.MODERATOR
      case Role.HELPER:
        return RoleUA.HELPER
      case Role.POLICE:
        return RoleUA.POLICE
      default:
        return RoleUA.USER
    }
  }

  return {
    showRoleInfo,
    isLoading,
    canvasRef,
    role: role(),
    roleUa: roleToUa(),
  }
}
