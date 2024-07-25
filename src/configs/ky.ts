import ky from 'ky'
import { FETCH_URL } from 'src/constants'

export const api = ky.create({
  prefixUrl: FETCH_URL,
  credentials: 'include',
  hooks: {
    afterResponse: [
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
