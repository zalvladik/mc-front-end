import ky from 'ky'
import { FETCH_URL, LocalStorageKey } from 'src/constants'
import { getFromLocalStorage } from 'src/helpers'
import Auth from 'src/services/api/Auth'

export const api = ky.create({
  prefixUrl: FETCH_URL,
  credentials: 'include',
  hooks: {
    beforeRequest: [
      request =>
        request.headers.set(
          'Authorization',
          `Bearer ${getFromLocalStorage<string>(LocalStorageKey.ACCESS_TOKEN)}`,
        ),
    ],
    afterResponse: [
      async (req, _opts, res) => {
        if (res.status === 401) {
          try {
            const data = await Auth.refreshToken()

            localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, data.accessToken)
            req.headers.set('Authorization', `Bearer ${data.accessToken}`)

            const newRes = await ky(req)

            return new Response(newRes.body, { status: newRes.status })
          } catch (e) {
            // console.error(e)
          }
        }

        return res
      },
      async (_req, _opts, res) => {
        if (res.status >= 300 && res.status <= 500) {
          const body = await res.json()
          const message = body.message || 'Unknown error'
          throw new Error(message)
        }

        return new Response(res.body, { status: res.status })
      },
    ],
  },
})
