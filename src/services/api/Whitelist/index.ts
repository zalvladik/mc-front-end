import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'

class Whitelist {
  async getUserWhitelist(): Promise<string[]> {
    return api(FetchEndpoint.WHITELIST).json()
  }
}

export default new Whitelist()
